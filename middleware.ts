import { NextResponse, NextRequest } from 'next/server';

/**
 * @param req
 */


export default function middleware(req: NextRequest, res: NextResponse) {
  const token = req.cookies.get('token');

  const { pathname, origin, host, search } = req.nextUrl;
  // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
  const hostname = req.headers.get('host');

  // console.log(token, 'cookie from middleware');

  if(req.url.includes('redirect') && !req.url.includes('token') && !req.url.includes('?ts')){
    return new Response(null, { status: 404 });    
  }
  
  if (token?.value && req.url.includes('otp')) {
    return NextResponse.redirect(`${origin}`);
  }
  // console.log(req.url);
  
  
  // If localhost, assign the host value manually
  // If prod, get the custom domain/subdomain value by removing the root URL
  // (in the case of "test.vercel.app", "vercel.app" is the root URL)
  const currentHost =
    process.env.NODE_ENV == 'production'
      ? hostname?.replace(`.8doors.vercel.app`, '') // PUT YOUR DOMAIN HERE
      : hostname?.replace(`.localhost:3000`, '');

  // Prevent security issues – users should not be able to canonically access
  // the pages/sites folder and its respective contents. This can also be done
  // via rewrites to a custom 404 page
  // console.log(token,"token is from middleware");

  if (pathname.startsWith(`/_sites`)) {
    return new Response(null, { status: 404 });
  }

  if (!pathname.includes('_sites') && !hostname?.includes('clinic')) {
    return NextResponse.rewrite(`${origin}${pathname}`);
  }

  if (
    !pathname.includes('.') && // exclude all files in the public folder
    !pathname.startsWith('/api') // exclude all API routes
  ) {
    // rewrite to the current hostname under the pages/sites folder
    // the main logic component will happen in pages/sites/[site]/index.tsx
    return NextResponse.rewrite(`${origin}/_sites/${currentHost}${pathname}`);
  }
}
