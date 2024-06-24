export interface ProductDTO {
  createdAt: string
  updatedAt: string
  _id: string
  name: string
  image: string
  price: number
  description: string
  category: string
}

export type ProductsList = ProductDTO[]
