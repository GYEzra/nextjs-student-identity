export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    // "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|videos|images).*)",
    // "/((?!api|_next/static|_next/image|manifest.webmanifest|favicon.ico|sitemap.xml|robots.txt|/|auth|verify|.*\\.png|.*\\.jpg|.*\\.jpeg$).*)",
    "/((?!api|_next/static|_next/image|images|videos|contracts|login|signup|favicon.ico|manifest.webmanifest|sitemap.xml|robots.txt|$).*)",
  ],
};
