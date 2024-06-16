'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'
import { Toaster } from '@/components/ui/sonner'

const Header = dynamic(() => import('@/components/Header'))

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Toaster position="top-center" />
        <footer className="py-4">
          <p className="text-center">to do..</p>
        </footer>
      </body>
    </html>
  )
}

