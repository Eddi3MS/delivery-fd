'use client'

import { useUserStore } from '@/store/useUserStore'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = useUserStore((state) => state.user)
  const router = useRouter()

  useLayoutEffect(() => {
    if (!user) return

    router.push('/')
  }, [user, router])

  if (!user) {
    return children
  }

  return null
}
