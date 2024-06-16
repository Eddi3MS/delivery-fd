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
import { SignInUserSchema, signInUserSchema } from '@/schemas/userSchema'
import { UserService } from '@/services/authService'
import { useUserStore } from '@/store/useUserStore'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function SignIn() {
  const setUser = useUserStore((state) => state.setUser)

  const form = useForm<SignInUserSchema>({
    resolver: zodResolver(signInUserSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: SignInUserSchema) {
    try {
      const res = await UserService.signIn(values)

      setUser(res.data)
    } catch (error) {
      const errorHandling = new ErrorHandling(error)
      toast.error(errorHandling.error.message)
    }
  }

  return (
    <section className="flex-1 grid grid-cols-1 lg:grid-cols-3">
      <div
        className="lg:col-span-2 bg-cover lg:bg-right-bottom hidden lg:block"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/dcag6rujo/image/upload/v1718214020/guochjuombevr38sayc1.jpg)',
        }}
      />

      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="font-bold text-2xl text-red-600 hover:text-red-700">
          Burger King
        </h1>
        <Card className="w-[min(94%,740px)] mx-auto">
          <CardHeader>
            <CardTitle>Entrar</CardTitle>
            <CardDescription>Bem-vindo de volta..</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full md:w-auto">
                  Entrar
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
