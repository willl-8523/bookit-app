import { NextResponse } from 'next/server';
import checkAuth from './app/actions/checkAuth';

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  console.log(`Requested Page: ${pathname}`);

  const { isAuthenticated } = await checkAuth();

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/bookings', '/rooms/add', '/rooms/my'],
};
