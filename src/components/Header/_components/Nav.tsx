'use client'

import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import Link from './Link'
import UserNav from './UserNav'

export default function Nav({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <nav className={cn('gap-4 items-center flex', className)} {...rest}>
      <Link href="/produtos" title="lista de produtos">
        Produtos
      </Link>

      <div className="flex flex-col gap-4 lg:hidden">
        <UserNav />
      </div>
    </nav>
  )
}
