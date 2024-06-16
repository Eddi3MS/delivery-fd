import z from 'zod'

export const signUpUserSchema = z.object({
  name: z.string().min(4, {
    message: 'Nome deve conter 4 caracteres ou mais.',
  }),
  phone: z
    .string()
    .regex(/^(\d{2})(\d{4,5})(\d{4})$/, 'Formato de telefone inválido..'),
  email: z.string().email({ message: 'E-mail inválido.' }),
  password: z
    .string()
    .min(5, {
      message: 'Senha deve conter 5 caracteres ou mais.',
    })
    .regex(
      /^(?=.*[A-Z])(?=.*\d).*$/,
      'Senha deve conter pelo menos 1 número e 1 letra maiúscula.'
    ),
})

export type SignUpUserSchema = z.infer<typeof signUpUserSchema>

export const updateUserSchema = z.object({
  name: z.string().min(1).optional(),
  phone: z.string().min(1).optional(),
  email: z.string().min(1).email().optional(),
  password: z.string().min(5).optional(),
  profilePic: z.string().min(10).optional(),
})

export const signInUserSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido.' }),
  password: z.string().min(5, {
    message: 'Senha deve conter 5 caracteres ou mais.',
  }),
})

export type SignInUserSchema = z.infer<typeof signInUserSchema>
