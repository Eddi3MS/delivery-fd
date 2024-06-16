export interface UserDTO {
  name: string
  email: string
  phone: string
  profilePic: string
  role: 'USER' | 'ADMIN'
}
