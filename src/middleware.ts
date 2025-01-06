import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';
export function middleware(req:any) {
  const token = req.cookies.get('token'); // Read token from cookie
  console.log("token",token)
  if ((req.nextUrl.pathname === '/login'  && token?.value) || (req.nextUrl.pathname === '/sign-up'  && token?.value))  {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if ((req.nextUrl.pathname === '/checkout'  && !token?.value))  {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/login', '/sign-up','/checkout'],
};