import { AxiosResponse } from 'axios'
import { api } from '../api'
import { ProductDTO, ProductsList } from './dtos/productsDTO'

type Product = {}

class ProductsService {
  public static async updateProduct(
    id: string,
    data: Partial<Product>
  ): Promise<AxiosResponse<ProductDTO>> {
    return await api.put<ProductDTO>(`/products/update/${id}`, data)
  }

  public static async deleteProduct(
    id: string
  ): Promise<AxiosResponse<ProductDTO>> {
    return await api.delete<ProductDTO>(`/products/delete/${id}`)
  }

  public static async createProduct(
    data: Product
  ): Promise<AxiosResponse<ProductDTO>> {
    return await api.post<ProductDTO>(`products/create`, data)
  }

  public static async list(): Promise<AxiosResponse<ProductsList>> {
    return await api.get<ProductsList>(`/products/list`)
  }
}

export { ProductsService }
