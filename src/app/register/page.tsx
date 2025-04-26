import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Navbar from "@/components/ui/navbar/Navbar"

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6">
              <h2 className="text-center text-3xl font-light text-gray-900">Crear una cuenta</h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Uniendote tendrás acceso a funciones y servicios exclusivos
              </p>
            </div>

            <form className="space-y-6" action="#" method="POST">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="first-name">Nombres</Label>
                  <div className="mt-1">
                    <Input id="first-name" name="first-name" type="text" autoComplete="given-name" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="last-name">Apellidos</Label>
                  <div className="mt-1">
                    <Input id="last-name" name="last-name" type="text" autoComplete="family-name" required />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <div className="mt-1">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Contraseña</Label>
                <div className="mt-1">
                  <Input id="password" name="password" type="password" autoComplete="new-password" required />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Debe tener al menos 8 caracteres con 1 mayúscula, 1 número y 1 caracter especial  
                </p>
              </div>

              <div>
                <Label htmlFor="password-confirm">Confirmar contraseña</Label>
                <div className="mt-1">
                  <Input
                    id="password-confirm"
                    name="password-confirm"
                    type="password"
                    autoComplete="new-password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="terms" name="terms" required />
                <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
                  Acepto {" "}
                  <Link href="/terms" className="text-gray-900 hover:underline">
                    Los Terminos de Servicio
                  </Link>{" "}
                  y{" "}
                  <Link href="/privacy" className="text-gray-900 hover:underline">
                    Política de Privacidad
                  </Link>
                </Label>
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Crear cuenta
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">O continua con</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <div>
                  <Button variant="outline" className="w-full">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                      <path d="M1 1h22v22H1z" fill="none" />
                    </svg>
                    Google
                  </Button>
                </div>

              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
              ¿Ya tienes una cuenta?{" "}
                <Link href="/login" className="font-medium text-gray-900 hover:underline">
                  Ingresar
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

