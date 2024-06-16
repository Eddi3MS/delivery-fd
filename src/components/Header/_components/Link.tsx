'use client'
import React, { ComponentProps } from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export default function Link({
  className,
  href,
  ...rest
}: ComponentProps<typeof NextLink>) {
  const pathname = usePathname()

  return (
    <NextLink
      className={cn(
        'uppercase leading-3  h-10 flex items-center hover:underline underline-offset-4 whitespace-nowrap text-sm font-medium rounded-md ring-offset-white transition-colors focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300',
        pathname === href ||
          (pathname.includes('products') && href === '/products')
          ? 'text-orange-500 hover:text-orange-500/90'
          : 'text-gray-800 hover:text-orange-500/90',
        className
      )}
      href={href}
      {...rest}
    />
  )
}
