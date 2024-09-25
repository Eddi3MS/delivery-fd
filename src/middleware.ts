import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

function getRouteType(pathname: string) {
  if (pathname.startsWith('/admin')) return 'admin'
  if (pathname.startsWith('/user')) return 'user'
  if (pathname.startsWith('/auth')) return 'auth'
  return 'public'
}

function getJwtSecretKey() {
  const secret = process.env.JWT_SECRET

  if (!secret) {
    throw new Error('JWT Secret key is not set')
  }

  const enc: Uint8Array = new TextEncoder().encode(secret)
  return enc
}

async function decodeJwtSecret(token: string) {
  try {
    const { payload } = await jwtVerify<{
      userId: string
      userRole: 'USER' | 'ADMIN'
    }>(token, getJwtSecretKey())

    return payload
  } catch (error) {
    console.log('🚀 ~ decodeJwtSecret ~ error:', error)
    return null
  }
}

export async function middleware(req: NextRequest) {
  const { nextUrl } = req
  const { pathname } = nextUrl

  const routeType = getRouteType(pathname)

  if (routeType === 'public') return

  const cookieStore = cookies()
  const token = cookieStore.get('jwt')

  if (routeType === 'auth') {
    return token ? NextResponse.redirect(new URL(`/`, nextUrl)) : undefined
  }

  if (!token) {
    return NextResponse.redirect(new URL(`/auth/sign-in`, nextUrl))
  }

  const payload = await decodeJwtSecret(token.value)

  if (!payload) {
    return NextResponse.redirect(new URL(`/`, nextUrl))
  }

  if (
    (routeType === 'admin' && payload.userRole !== 'ADMIN') ||
    (routeType === 'user' && payload.userRole !== 'USER')
  ) {
    return NextResponse.redirect(new URL(`/not-allowed`, nextUrl))
  }

  return
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
