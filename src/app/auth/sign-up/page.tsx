'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ErrorHandling } from '@/errors/errorHandling/ErrorHandling'
import { SignUpUserSchema, signUpUserSchema } from '@/schemas/userSchema'
import { UserService } from '@/services/authService'
import { useUserStore } from '@/store/useUserStore'
import { formatPhoneNumber, removeNotNumbers } from '@/utils/inputs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function SignUp() {
  const setUser = useUserStore((state) => state.setUser)

  const form = useForm<SignUpUserSchema>({
    resolver: zodResolver(signUpUserSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
      phone: '',
    },
  })

  async function onSubmit(values: SignUpUserSchema) {
    try {
      const res = await UserService.signUp(values)
      setUser(res.data)
    } catch (error) {
      const errorHandling = new ErrorHandling(error)
      toast.error(errorHandling.error.message)
    }
  }

  return (
    <section className="flex-1 grid grid-cols-1 lg:grid-cols-3">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="font-bold text-2xl text-red-600 hover:text-red-700">
          Burger King
        </h1>
        <Card className="w-[min(94%,740px)] mx-auto">
          <CardHeader>
            <CardTitle>Registre-se</CardTitle>
            <CardDescription>
              Faça seu registro e comece a utilizar nossos serviços..
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input
                          {...rest}
                          onChange={(e) => {
                            const valueNum = removeNotNumbers(
                              e.target.value
                            ).slice(0, 11)

                            onChange(valueNum)
                          }}
                          value={formatPhoneNumber(value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full md:w-auto">
                  Registrar
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div
        className="lg:col-span-2 bg-cover lg:bg-bottom hidden lg:block"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/dcag6rujo/image/upload/v1718214020/guochjuombevr38sayc1.jpg)',
        }}
      />
    </section>
  )
}
