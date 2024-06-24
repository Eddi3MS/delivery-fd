import { SignInUserSchema, SignUpUserSchema } from '@/schemas/userSchema'
import { AxiosResponse } from 'axios'
import { api } from '../api'
import { UserDTO } from './dtos/UserDTO'

class UserService {
  public static async logout() {
    return await api.post('/users/signout')
  }

  public static async updateProfile(
    id: string,
    data: Partial<SignUpUserSchema>
  ): Promise<AxiosResponse<UserDTO>> {
    return await api.put<UserDTO>(`/users/update/${id}`, data)
  }

  public static async signUp(
    data: SignUpUserSchema
  ): Promise<AxiosResponse<UserDTO>> {
    return await api.post<UserDTO>(`users/signup`, data)
  }

  public static async signIn(
    data: SignInUserSchema
  ): Promise<AxiosResponse<UserDTO>> {
    return await api.post<UserDTO>(`/users/signin`, data)
  }

  public static async getProfile(id: string): Promise<AxiosResponse<UserDTO>> {
    return await api.get<UserDTO>(`/users/profile/${id}`)
  }

  public static async getMe(): Promise<AxiosResponse<UserDTO>> {
    return await api.get<UserDTO>(`/users/me`)
  }
}

export { UserService }
