import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { DEFAULT_VERSION, isSiteVersion, VERSIONS } from '@/config/site-versions'

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const { pathname } = request.nextUrl

  // Already under /v1|/v2|... — leave alone (draft preview on apex via /v2)
  if (VERSIONS.some(version => pathname === `/${version}` || pathname.startsWith(`/${version}/`))) {
    return NextResponse.next()
  }

  // Wildcard hosts (*.jissjoy.com): v1/v2/... → that version.
  // Unknown labels (www, foo, apex hostname) → DEFAULT_VERSION.
  const subdomain = host.split('.')[0]?.toLowerCase() ?? ''
  const version = isSiteVersion(subdomain) ? subdomain : DEFAULT_VERSION

  const url = request.nextUrl.clone()
  url.pathname = `/${version}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
