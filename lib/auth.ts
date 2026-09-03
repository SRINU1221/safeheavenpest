import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

// Hardcoded fallback admin for production environments without a live database.
// To change these credentials, update ADMIN_EMAIL and ADMIN_PASSWORD env vars on Render.
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@safehavenpestcontrol.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email = credentials.email as string;
        const password = credentials.password as string;

        // First try database lookup
        try {
          const { db } = await import('@/lib/db');
          const user = await db.user.findUnique({
            where: { email },
          });

          if (user) {
            const passwordsMatch = await bcrypt.compare(password, user.passwordHash);
            if (passwordsMatch) {
              return { id: user.id, email: user.email, name: user.name, role: user.role };
            }
            return null;
          }
        } catch {
          // Database not available — fall through to hardcoded admin check
          console.warn('Database unavailable, using fallback admin credentials.');
        }

        // Fallback: check against hardcoded/env-var admin credentials
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
          return {
            id: 'admin-fallback',
            email: ADMIN_EMAIL,
            name: 'SafeHaven Admin',
            role: 'admin',
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role as string;
        (session.user as any).id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'fallback-dev-secret-change-in-production',
  session: { strategy: 'jwt' },
});
