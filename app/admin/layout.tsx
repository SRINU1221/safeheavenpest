import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import Link from 'next/link';
import './AdminLayout.css';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className="admin-layout">
      {/* Admin Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar__header">
          <Link href="/" className="admin-logo">
            SafeHaven<span>Pest</span>
          </Link>
          <span className="admin-badge">Admin</span>
        </div>

        <nav className="admin-nav">
          <Link href="/admin" className="admin-nav__link">
            Dashboard
          </Link>
          <Link href="/admin/leads" className="admin-nav__link">
            Leads Management
          </Link>
          {/* Add more admin links here in the future */}
        </nav>

        <div className="admin-sidebar__footer">
          <div className="admin-user">
            <div className="admin-user__avatar">{session.user.name?.charAt(0) || 'A'}</div>
            <div className="admin-user__info">
              <span className="admin-user__name">{session.user.name}</span>
              <span className="admin-user__role">{session.user.role}</span>
            </div>
          </div>
          <Link href="/api/auth/signout" className="admin-logout">
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Admin Main Content */}
      <main className="admin-main">
        {children}
      </main>
    </div>
  );
}
