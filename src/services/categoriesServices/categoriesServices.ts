import { AxiosResponse } from 'axios'
import { api } from '../api'
import { CategoryDTO } from './dtos/CategoriesDTO'

type Category = { name: string }

type CategoryOrder = {
  order: number
  id: string
}[]

class CategoriesService {
  public static async updateCategory(
    id: string,
    data: Category
  ): Promise<AxiosResponse<CategoryDTO>> {
    return await api.put<CategoryDTO>(`/categories/update/${id}`, data)
  }

  public static async deleteCategory(
    id: string
  ): Promise<AxiosResponse<CategoryDTO>> {
    return await api.delete<CategoryDTO>(`/categories/delete/${id}`)
  }

  public static async createCategory(
    data: Category
  ): Promise<AxiosResponse<CategoryDTO>> {
    return await api.post<CategoryDTO>(`categories/create`, data)
  }

  public static async reorderCategories(
    data: CategoryOrder
  ): Promise<AxiosResponse<CategoryDTO>> {
    return await api.post<CategoryDTO>(`categories/reorder`, data)
  }

  public static async list(): Promise<AxiosResponse<CategoryDTO[]>> {
    return await api.get<CategoryDTO[]>(`/categories/list`)
  }
}

export { CategoriesService }
