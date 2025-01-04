import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';
export function middleware(req:any) {
  const token = req.cookies.get('token'); // Read token from cookie

  if (req.nextUrl.pathname === '/login' && token?.value) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  return NextResponse.next();
}


export const config = {
  matcher: ['/login'],
};