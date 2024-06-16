'use client'

import { useUserStore } from '@/store/useUserStore'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isAdmin = useUserStore((state) => state.user)?.role === 'ADMIN'
  const router = useRouter()

  useLayoutEffect(() => {
    if (!isAdmin) {
      router.push('/')
    }
  }, [isAdmin, router])

  if (!isAdmin) {
    return null
  }

  return children
}
