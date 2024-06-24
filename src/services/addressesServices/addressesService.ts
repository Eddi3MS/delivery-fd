import { AxiosResponse } from 'axios'
import { api } from '../api'
import { AddressDTO } from './dtos/AddressesDTO'

type Address = {
  street: string
  number: string
  complement?: string
  neighborhood: string
}

class AddressesService {
  public static async updateAddress(
    id: string,
    data: Partial<Address>
  ): Promise<AxiosResponse<AddressDTO>> {
    return await api.put<AddressDTO>(`/addresses/update/${id}`, data)
  }

  public static async createAddress(
    data: Address
  ): Promise<AxiosResponse<AddressDTO>> {
    return await api.post<AddressDTO>(`addresses/create`, data)
  }

  public static async list(): Promise<AxiosResponse<AddressDTO>> {
    return await api.get<AddressDTO>(`/addresses/list`)
  }
}

export { AddressesService }
