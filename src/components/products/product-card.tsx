import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"
import { PriceDetail, ProductCardProps } from "@/commons/product-interface"


export default function ProductCard({ product, viewMode }: ProductCardProps) {
  const { addItem } = useCart()
  const { id, name, description, image, rating, inStock, featured, priceDetail } = product
  const [priceSelected, setPriceSelected] = useState<PriceDetail>(priceDetail[0])

  const addCartItem = (product : any) => {
    const newProductToCart = { ...product, priceSelected: priceSelected }
    addItem(newProductToCart as any)
  }
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

        <div className="p-4">
          {/* <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">{rating}</span>
          </div> */}

          <Link href={`/store/${id}`}>
            <h3 className="font-medium text-gray-900 mb-1 hover:text-gray-600 transition-colors">{name}</h3>
          </Link>

          <p className="text-gray-500 text-sm mb-3 line-clamp-2">{description}</p>

          <div className="flex items-center justify-between">
            <div className="text-sm md:text-md font-extrabold text-greenNew">
              {priceDetail.map((detail, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priceOption"
                    value={detail.amount}
                    checked={priceSelected.amount === detail.amount}
                    onChange={() => setPriceSelected(detail)}
                    className="accent-blue-600"
                  />
                  <span>
                    S/ {detail.price.toFixed(2)} - {detail.amount} KG
                  </span>
                </label>
              ))}
            </div>
            <Button disabled={!inStock} onClick={() => addCartItem(product)} className="text-xs">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Agregar
            </Button>
          </div>
        </div>
      </div>
    )
  }
  // <input
  //   type="radio"
  //   id={`price-${id}`}
  //   name="price"
  //   value={priceSelected?.price}
  //   checked={priceSelected?.price === priceSelected?.price}
  //   onChange={() => setPriceSelected(priceSelected)}
  // />
  // <label htmlFor={`price-${id}`} className="ms-3 cursor-pointer">
  //   S/ {priceSelected?.price.toFixed(2)} - {priceSelected?.amount} KG
  // </label>
  // List View
  return (
    <div className="group flex flex-col sm:flex-row gap-4 bg-white rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4">
      <Link href={`/store/${id}`} className="block relative">
        <div className="aspect-square w-full sm:w-40 h-40 relative overflow-hidden bg-gray-100 rounded-md">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {featured && <Badge className="bg-gray-600 hover:bg-gray-700">Featured</Badge>}
          {!inStock && <Badge variant="destructive">Out of Stock</Badge>}
        </div>
      </Link>

      <div className="flex-1 flex flex-col">
        {/* <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">{rating}</span>
        </div> */}

        <Link href={`/products/${id}`}>
          <h3 className="font-medium text-gray-900 mb-1 hover:text-gray-600 transition-colors">{name}</h3>
        </Link>

        <p className="text-gray-500 text-sm mb-3 flex-grow">{description}</p>

        <div className="flex items-center justify-between mt-auto">
          <div className="text-sm md:text-md font-extrabold text-greenNew">
            {priceDetail.map((detail, index) => (
              <div key={index}>
                S/ {detail.price.toFixed(2)} - {detail.amount} KG
              </div>
            ))}
          </div>
          <Button disabled={!inStock} onClick={() => addCartItem(product)}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Agregar
          </Button>
        </div>
      </div>
    </div>
  )
}

