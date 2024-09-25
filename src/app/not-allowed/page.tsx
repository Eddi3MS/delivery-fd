import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NotAllowed() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-lg">Não autorizado.</h1>
      <p className="">Verifique suas credenciais e tente novamente.</p>
      <Button asChild className="mt-4">
        <Link href="/">Voltar</Link>
      </Button>
    </div>
  )
}
