import { AxiosResponse } from 'axios'
import { api } from '../api'
import { OrderDTO } from './dtos/ordersDTO'

class OrdersService {
  public static async updateOrder(
    id: string,
    data: { name: string }
  ): Promise<AxiosResponse<OrderDTO>> {
    return await api.put<OrderDTO>(`/orders/update/${id}`, data)
  }

  public static async createOrder(data: {
    name: string
  }): Promise<AxiosResponse<OrderDTO>> {
    return await api.post<OrderDTO>(`orders/create`, data)
  }

  public static async deleteOrder(
    id: string
  ): Promise<AxiosResponse<OrderDTO>> {
    return await api.delete<OrderDTO>(`/orders/delete/${id}`)
  }

  public static async listOwn(): Promise<AxiosResponse<OrderDTO[]>> {
    return await api.get<OrderDTO[]>(`/orders/own`)
  }

  public static async listAll(): Promise<AxiosResponse<OrderDTO[]>> {
    return await api.get<OrderDTO[]>(`/orders/all`)
  }

  public static async getOrderDetails(
    id: string
  ): Promise<AxiosResponse<OrderDTO>> {
    return await api.get<OrderDTO>(`/orders/update/${id}`)
  }
}

export { OrdersService }
