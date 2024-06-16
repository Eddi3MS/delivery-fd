'use client'
import { UserService } from '@/services/authService'
import React, { useEffect } from 'react'

export default function Admin() {
  useEffect(() => {
    const fetch = async () => {
      const res = await UserService.getMe()
      console.log('🚀 ~ fetch ~ res:', res)
    }

    fetch()
  }, [])
  return <div>page</div>
}
