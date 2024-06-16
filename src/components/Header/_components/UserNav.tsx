'use client'
import React from 'react'
import Link from './Link'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'
import { useUserStore } from '@/store/useUserStore'
import { useRouter } from 'next/navigation'
import { UserService } from '@/services/authService'
import { LogOutIcon } from 'lucide-react'
import { ErrorHandling } from '@/errors/errorHandling/ErrorHandling'
import { toast } from 'sonner'

export default function UserNav() {
  const { setUser, user } = useUserStore((state) => state)

  const router = useRouter()

  const handleLogout = async () => {
    try {
      await UserService.logout()

      setUser(null)
      localStorage.removeItem('curr-user')
      router.push('/')
    } catch (error) {
      const errorHandling = new ErrorHandling(error)
      toast.error(errorHandling.error.message)
    }
  }

  return (
    <>
      {!user ? (
        <>
          <Link href="/auth/sign-up">Cadastrar</Link>
          <Button asChild>
            <NextLink href="/auth/sign-in">Entrar</NextLink>
          </Button>
        </>
      ) : (
        <>
          <Link href="/admin">Dashboard</Link>
          <Button
            variant="destructive"
            size="icon"
            onClick={handleLogout}
            aria-label="sair"
          >
            <LogOutIcon size={18} />
          </Button>
        </>
      )}
    </>
  )
}
