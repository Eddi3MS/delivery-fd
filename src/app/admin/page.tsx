'use client'
import { UserService } from '@/services/authService'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function Admin() {
  return (
    <div>
      <Link href="/admin/categories">Categorias</Link>
    </div>
  )
}
