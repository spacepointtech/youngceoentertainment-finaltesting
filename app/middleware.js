import { NextResponse } from 'next/server';

// Define protected routes
const protectedRoutes = ['/subscription', '/dashboard/*'];


export function middleware(req) {
  // Get the token from cookies (assuming you're storing JWT or session in cookies)
  const token = req.cookies.get('authToken'); 

  // Check if the current route is protected
  const { pathname } = req.nextUrl;
  if (protectedRoutes.includes(pathname)) {
    // If there is no token, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL('/signup', req.url));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Define which routes the middleware should apply to
export const config = {
  matcher: ['/subscription', '/dashboard/*'],
};
