import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req) {
  const token = await getToken({ req, secret });
  const { pathname } = req.nextUrl;

  // If user is logged in and trying to access /login or /register, redirect to home page
  if (
    token &&
    (pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/forgot-password")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/forgot-password"],
};
