import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export default function ProductsHeader() {
  return (
    <div className="bg-white border-b mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="flex items-center hover:text-gray-700">
            <Home className="h-4 w-4 mr-1" />
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900 font-medium">Productos</span>
        </nav>

        {/* Page Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-light text-gray-900">Nuestros Productos</h1>
            <p className="mt-1 text-gray-500">
            Navega por nuestro catalogo de soluciones de limpieza profesional
            </p>
          </div>

          {/* Product Count */}
          <div className="text-sm text-gray-500">
            Mostrando <span className="font-medium">24</span> productos
          </div>
        </div>
      </div>
    </div>
  )
}

