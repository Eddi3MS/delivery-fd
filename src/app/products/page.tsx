import { ProductsList } from '@/types/DTOs/products'
import Image from 'next/image'

async function fetchProducts(): Promise<
  { products: ProductsList } | { error: string }
> {
  try {
    const res = await fetch(`${process.env.BASE_API}/products/list`, {
      next: { tags: ['products'] },
    })

    if (!res.ok) {
      throw new Error('Failed to list products')
    }

    return res.json()
  } catch (error) {
    console.log('🚀 ~ fetchProducts ~ error:', error)
    return { error: 'Algo deu errado com a requisição.' }
  }
}

export default async function Products() {
  const response = await fetchProducts()

  if ('error' in response) {
    return <p>{response.error}</p>
  }

  return (
    <div>
      {response.products.map(({ _id, name, products }) => (
        <div key={_id}>
          <p>{name}</p>
          <div>
            {products.map((p) => (
              <div key={p._id}>
                <Image src={p.image} alt="" width={200} height={200} />

                {p.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
