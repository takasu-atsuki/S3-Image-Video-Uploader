import { getToken } from 'next-auth/jwt';
import withAuth from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
  async function middleware(req) {
    const authPage =
      req.nextUrl.pathname.startsWith('/login') ||
      req.nextUrl.pathname.startsWith('/register');
    const token = await getToken({ req });
    if (authPage) {
      if (token) {
        return NextResponse.redirect(new URL('/download', req.url));
      }

      return null;
    }
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  },
  {
    callbacks: {
      authorized: () => {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ['/', '/login', '/register', '/download', '/upload'],
};
