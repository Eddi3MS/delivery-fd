import { UserDTO } from '@/services/authService/dtos/UserDTO'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface UserState {
  user: UserDTO | null
  setUser: (user: null | UserDTO) => void
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (user: UserState['user']) => set(() => ({ user })),
    }),
    {
      name: 'curr-user',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
