'use client'

import { CategoriesService } from '@/services/categoriesServices'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function Categories() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: CategoriesService.list,
  })

  if (isLoading) {
    return <p>loading</p>
  }

  if (isError || !data) {
    return <p>error</p>
  }

  return (
    <section className="flex flex-col items-center">
      {data.map((c) => (
        <div key={c._id}>
          <p>{c.name}</p>
        </div>
      ))}
    </section>
  )
}
