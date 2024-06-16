'use client'

import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Link from './_components/Link'
import Nav from './_components/Nav'
import UserNav from './_components/UserNav'

const Header = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const doc = document.querySelector('body')
    if (!doc) return

    if (open) {
      doc.style.overflow = 'hidden'
    } else {
      doc.style.overflow = 'initial'
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <Nav
        className={cn(
          'lg:hidden',
          open
            ? 'fixed inset-0 z-10 bg-background flex-col justify-center bg-white'
            : 'hidden'
        )}
      />
      <header className="sticky left-0 right-0 top-0 bg-background z-20 flex items-center bg-gray-50 shadow-sm">
        <div className="flex justify-between items-center w-[min(94%,1280px)] mx-auto py-2">
          <Link
            href="/"
            className="font-bold text-2xl text-red-600 hover:text-red-700"
          >
            Burger King
          </Link>

          <div className="flex gap-5 items-center">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden flex items-center justify-center my-2"
              onClick={() => setOpen((curr) => !curr)}
            >
              <MenuIcon />
            </Button>

            <Nav className="hidden lg:flex" />

            <div className="gap-5 hidden lg:flex ml-5">
              <UserNav />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
