"use client"

import { useEffect, useState } from "react"
import ProductCard from "./product-card"
import ProductFilters from "./product-filters"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, SlidersHorizontal } from "lucide-react"
import { products } from "@/utils/productsMockup"

// Categories for filtering
const categories = [
  { value: "all", label: "Todos los Productos" },
  { value: "desinfeccion", label: "Desinfencción" },
  { value: "personalCare", label: "Personal Care" },
  { value: "cleaning", label: "Limpieza Hogar" },
  { value: "living", label: "Ropa" },
]

export default function ProductsGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortOption, setSortOption] = useState("featured")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  // Filter products by category
  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null // o un spinner

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const firstPrice = a.priceDetail[0].price
    const secondPrice = b.priceDetail[0].price
    switch (sortOption) {
      case "price-low":
        return firstPrice - secondPrice
      case "price-high":
        return secondPrice - firstPrice
      case "name":
        return a.name.localeCompare(b.name)
      case "rating":
        return b.rating - a.rating
      case "featured":
      default:
        return b.featured ? 1 : -1
    }
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b">
            <Button
              variant="outline"
              className="lg:hidden flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filtros
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="h-9 w-9"
              >
                <Grid className="h-4 w-4" />
                <span className="sr-only">Vista de grilla</span>
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="h-9 w-9"
              >
                <List className="h-4 w-4" />
                <span className="sr-only">Vista de lista</span>
              </Button>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Ordenar por:</span>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Categoría</SelectItem>
                  <SelectItem value="price-low">Precio: Bajo a Alto</SelectItem>
                  <SelectItem value="price-high">Precio: Alto a Bajo</SelectItem>
                  <SelectItem value="name">Nombre</SelectItem>
                  <SelectItem value="rating">Valoración</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mobile Filters (Collapsible) */}
          {showFilters && (
            <div className="lg:hidden mb-6">
              <ProductFilters
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={(category) => {
                  setSelectedCategory(category)
                  setShowFilters(false)
                }}
              />
            </div>
          )}

          {/* Products Grid/List */}
          <div
            className={`
            ${viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}
          `}
          >
            {sortedProducts.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} viewMode={viewMode} />
            ))}
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found matching your criteria.</p>
              <Button variant="outline" className="mt-4" onClick={() => setSelectedCategory("all")}>
                Ver todos los productos
              </Button>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" disabled>
                Atras
              </Button>
              <Button variant="outline" className="bg-gray-100">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Siguiente</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

