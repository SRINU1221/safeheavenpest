'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Reply {
  id: string;
  message: string;
  sentBy: string;
  createdAt: string;
}

interface ReplyThreadProps {
  leadId: string;
  leadEmail: string | null;
  initialReplies: Reply[];
}

export default function ReplyThread({ leadId, leadEmail, initialReplies }: ReplyThreadProps) {
  const router = useRouter();
  const [replies, setReplies] = useState<Reply[]>(initialReplies);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setSending(true);
    setFeedback(null);

    try {
      const res = await fetch(`/api/admin/leads/${leadId}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message.trim() }),
      });

      const data = await res.json();

      if (data.success) {
        setReplies((prev) => [
          ...prev,
          { id: data.reply.id, message: message.trim(), sentBy: 'admin', createdAt: new Date().toISOString() },
        ]);
        setMessage('');
        setFeedback({
          type: 'success',
          text: data.emailSent
            ? `✅ Reply sent and email delivered to ${leadEmail}`
            : leadEmail
            ? '✅ Reply saved. Email delivery skipped (SMTP not configured).'
            : '✅ Reply saved. No email address on file for this client.',
        });
        router.refresh();
      } else {
        setFeedback({ type: 'error', text: '❌ Failed to send reply. Please try again.' });
      }
    } catch {
      setFeedback({ type: 'error', text: '❌ Network error. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="reply-thread">
      <h3 className="reply-thread__title">Conversation Thread</h3>

      {replies.length === 0 ? (
        <p className="reply-thread__empty">No replies yet. Send the first reply below.</p>
      ) : (
        <div className="reply-thread__messages">
          {replies.map((reply) => (
            <div key={reply.id} className="reply-bubble reply-bubble--admin">
              <div className="reply-bubble__header">
                <span className="reply-bubble__author">🛡 Admin ({reply.sentBy})</span>
                <span className="reply-bubble__time">
                  {new Date(reply.createdAt).toLocaleString('en-IN', {
                    day: '2-digit', month: 'short', year: 'numeric',
                    hour: '2-digit', minute: '2-digit',
                  })}
                </span>
              </div>
              <p className="reply-bubble__message">{reply.message}</p>
            </div>
          ))}
        </div>
      )}

      {/* Reply Form */}
      <form onSubmit={handleSend} className="reply-form">
        <label htmlFor="reply-message" className="reply-form__label">
          Send Reply to Client
          {!leadEmail && (
            <span className="reply-form__note"> (no email on file — reply saved to DB only)</span>
          )}
        </label>
        <textarea
          id="reply-message"
          className="reply-form__textarea"
          placeholder="Type your reply here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
        />
        {feedback && (
          <div className={`reply-form__feedback reply-form__feedback--${feedback.type}`}>
            {feedback.text}
          </div>
        )}
        <button
          type="submit"
          className="reply-form__btn"
          disabled={sending || !message.trim()}
        >
          {sending ? '⏳ Sending...' : leadEmail ? '📧 Send Reply & Email Client' : '💾 Save Reply'}
        </button>
      </form>
    </div>
  );
}
