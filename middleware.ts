import { getToken } from 'next-auth/jwt';
import withAuth from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
  async function middleware(req: NextRequest) {
    const token = await getToken({ req });
    if (!token) {
      NextResponse.redirect('/login');
    }
  },
  {
    pages: {
      signIn: '/login',
      error: '/error',
    },
  }
);

export const config = {
  matcher: ['/'],
};
