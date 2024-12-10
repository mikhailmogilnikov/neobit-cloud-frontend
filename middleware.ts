import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import { AppPrivateRoutes, AppPublicRoutes, EAppRoutes } from '@/src/shared/config/routes';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access')?.value;

  const {
    url,
    nextUrl: { pathname, origin },
  } = request;

  if (url.includes('.png') || url.includes('.gif')) return NextResponse.next();

  const currentPath = pathname;

  // Unknown routes skip
  if (!Object.values(EAppRoutes).includes(currentPath as EAppRoutes)) return NextResponse.next();

  if (!token) {
    const isPublicRoute = AppPublicRoutes.some((route) => {
      const regex = new RegExp(route);

      return regex.test(currentPath);
    });

    if (!isPublicRoute) {
      return NextResponse.redirect(`${origin}${EAppRoutes.SIGN_IN}`);
    }
  }

  if (token) {
    const isPrivateRoute = AppPrivateRoutes.some((route) => {
      const regex = new RegExp(route);

      return regex.test(currentPath);
    });


    if (!isPrivateRoute) {
      return NextResponse.redirect(`${origin}${EAppRoutes.BUCKETS}`);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|public|images|manifest.json|sw.js|assets|favicon.ico).*)',
  ],
};
