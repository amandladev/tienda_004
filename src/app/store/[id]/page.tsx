"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronRight, Home, Star, ShoppingCart, Heart, Share2, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/context/cart-context"
import ShareButton from "@/components/cart/share-button"
import { products } from "@/utils/productsMockup"

// This would normally come from a database or API

export default function ProductDetailPage() {
  const [product, setProduct] = useState(products[0])
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const handleAddToCart = () => {
    // Add the product to cart with the selected quantity
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id.toString(),
        name: product.name,
        price: product.priceDetail[0].price,
        image: product.images[0],
      })
    }
  }

  useEffect(() => {
    const getId = () => {
      const url = window.location.href
      const id = url.split("/").pop()
      return id
    }
    const id = Number(getId())

    if (id) {
      const currentProduct = products.find((product) => product.id === id)
      if (currentProduct !== undefined) {
        setProduct(currentProduct)
      }
    }
    // setProduct()
  }, [])
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm text-gray-500">
            <Link href="/" className="flex items-center hover:text-gray-700">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/products" className="hover:text-gray-700">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative rounded-lg overflow-hidden border bg-gray-100">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-square relative rounded-md overflow-hidden border cursor-pointer ${index === 0 ? "ring-2 ring-gray-600" : ""
                      }`}>
                    <div className="absolute inset-0 bg-cover bg-center blur-lg scale-110"
                      style={
                        {
                          backgroundImage: `url(${image})`
                        }
                      }>
                    </div>
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-1">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="text-2xl font-medium text-greenNew mb-4">S/ {product.priceDetail[0].price.toFixed(2)}</div>

              {/* Description */}
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Options */}
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                    Tamaño
                  </label>
                  <Select defaultValue="0.5">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                    {
                      product.size.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size} KG
                        </SelectItem>
                      ))
                    }
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Cantidad
                  </label>
                  <Select defaultValue="1">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button onClick={handleAddToCart} className="flex-1" size="lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Agregar al carrito
                </Button>
                {/* <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </Button> */}
                {/* <Button variant="outline" size="icon" className="h-11 w-11">
                  <Share2 className="h-5 w-5" />
                </Button> */}
                <ShareButton
                  title={product.name}
                  description={`Check out this amazing product: ${product.name}`}
                  variant="outline"
                  size="icon"
                  className="h-11 w-11"
                />
              </div>

              {/* Product Details */}
              <div className="border-t pt-6 mt-auto">
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Detalles</TabsTrigger>
                    <TabsTrigger value="ingredients">Ingredientes</TabsTrigger>
                    <TabsTrigger value="directions">Uso</TabsTrigger>
                  </TabsList>
                  <div className="min-h-[150px]">
                    <TabsContent value="details" className="pt-4">
                      <dl className="space-y-2">
                        <div className="flex">
                          <dt className="w-24 flex-shrink-0 text-gray-500">Tamaño:</dt>
                          <dd>{product.details.size}</dd>
                        </div>
                        <div className="flex">
                          <dt className="w-24 flex-shrink-0 text-gray-500">Categoría:</dt>
                          <dd className="capitalize">{product.categoryName.replace("-", " ")}</dd>
                        </div>
                        <div className="flex">
                          <dt className="w-24 flex-shrink-0 text-gray-500">SKU:</dt>
                          <dd>MSC-{product.id.toString().padStart(4, "0")}</dd>
                        </div>
                      </dl>
                    </TabsContent>
                    <TabsContent value="ingredients" className="pt-4">
                      <p className="text-gray-600">{product.details.ingredients}</p>
                    </TabsContent>
                    <TabsContent value="directions" className="pt-4">
                      <p className="text-gray-600">{product.details.directions}</p>
                      <p className="text-gray-600 mt-2 text-sm font-medium">Warning: {product.details.warnings}</p>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-light text-gray-900">Productos relacionados</h2>
            {/* <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div> */}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="group bg-white rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <span className="text-gray-900">S/ {relatedProduct.price.toFixed(2)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

