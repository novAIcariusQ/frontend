import { LoginForm } from '@features/auth/login-form'

type LoginPageProps = {
  mode?: 'sign-in' | 'sign-up'
}

export function LoginPage({ mode = 'sign-in' }: LoginPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-4 py-10">
      <LoginForm mode={mode} />
    </main>
  )
}
