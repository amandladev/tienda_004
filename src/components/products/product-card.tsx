import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
  rating: number
  inStock: boolean
  featured: boolean,
  priceDetail: {
    price: number,
    amount: number,
  }[],
  size: string[]
}

interface ProductCardProps {
  product: Product
  viewMode: "grid" | "list"
}

export default function ProductCard({ product, viewMode }: any) {
  const { id, name, description, price, image, rating, inStock, featured, priceDetail } = product

  // Grid View
  if (viewMode === "grid") {
    return (
      <div className="group bg-white rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Product Image */}
        <Link href={`/store/${id}`} className="block relative">
          <div className="aspect-square relative overflow-hidden bg-gray-100">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {featured && <Badge className="bg-gray-600 hover:bg-gray-700">Nuevo</Badge>}
            {!inStock && <Badge variant="destructive">Sin Stock</Badge>}
          </div>
        </Link>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">{rating}</span>
          </div>

          <Link href={`/store/${id}`}>
            <h3 className="font-medium text-gray-900 mb-1 hover:text-gray-600 transition-colors">{name}</h3>
          </Link>

          <p className="text-gray-500 text-sm mb-3 line-clamp-2">{description}</p>

          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold text-greenNew">S/ {priceDetail[0].price.toFixed(2)}</span>
            <Button size="sm" disabled={!inStock} className="text-xs">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Agregar
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // List View
  return (
    <div className="group flex flex-col sm:flex-row gap-4 bg-white rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4">
      {/* Product Image */}
      <Link href={`/store/${id}`} className="block relative">
        <div className="aspect-square w-full sm:w-40 h-40 relative overflow-hidden bg-gray-100 rounded-md">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {featured && <Badge className="bg-gray-600 hover:bg-gray-700">Featured</Badge>}
          {!inStock && <Badge variant="destructive">Out of Stock</Badge>}
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">{rating}</span>
        </div>

        <Link href={`/products/${id}`}>
          <h3 className="font-medium text-gray-900 mb-1 hover:text-gray-600 transition-colors">{name}</h3>
        </Link>

        <p className="text-gray-500 text-sm mb-3 flex-grow">{description}</p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-medium text-gray-900">${price.toFixed(2)}</span>
          <Button disabled={!inStock}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  )
}

