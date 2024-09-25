'use client' // Error components must be Client Components

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-lg font-bold">Algo deu errado!!</h1>
      <p className="text-gray-700">{error.message}</p>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <Button variant="outline" onClick={() => reset()}>
          Tentar Novamente
        </Button>
        <Button asChild>
          <Link href="/">Voltar</Link>
        </Button>
      </div>
    </div>
  )
}
