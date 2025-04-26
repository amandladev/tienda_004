"use client"

import { useState } from "react"
import ProductCard from "./product-card"
import ProductFilters from "./product-filters"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, SlidersHorizontal } from "lucide-react"
import { products } from "@/utils/productsMockup"

// Sample product data - replace with your actual products
// const products = [
//   {
//     id: 1,
//     name: "Jabón Líquido",
//     category: "personalCare",
//     description: "Jabón profesional de uso continuo.  Enjuague rápido y efectivo.",
//     features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
//     image: "/products/liquid_soap.jpg?height=300&width=300",
//     priceDetail: [
//       {
//         price: 10,
//         amount: 0.38
//       }
//     ],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["0.38"],
//     price: 10,
//   },
//   {
//     id: 2,
//     name: "Jabón Neutro",
//     category: "cleaning",
//     description: "Jabón profesional sin olor ni color para manos en cocina",
//     features: ["No streaks", "Anti-fog", "Long-lasting"],
//     image: "/products/neutral_soap.jpg?height=300&width=300",
//     priceDetail: [{
//       price: 20,
//       amount: 1
//     }],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["1"],
//     price: 10,
//   },
//   {
//     id: 3,
//     name: "Shampoo Professional Line",
//     category: "personalCare",
//     description: "Shampoo profesional PH balanceado para la familia",
//     features: ["Long-lasting", "Natural scents", "Odor neutralizing"],
//     image: "/products/shampoo_familia.jpg?height=300&width=300",
//     priceDetail: [{
//       price: 25,
//       amount: 0.5
//     }],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["0.5"],
//     price: 10,
//   },
//   {
//     id: 4,
//     name: "Shampoo Pets",
//     category: "personalCare",
//     description: "Shampoo profesional PH balanceado para mascotas",
//     features: ["Versatile", "Gentle formula", "Deep cleaning"],
//     image: "/products/gato_1.jpg?height=300&width=300",
//     priceDetail: [{
//       price: 20,
//       amount: 1
//     }],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["1"],
//     price: 10,
//   },
//   {
//     id: 5,
//     name: "Shampoo Pets Antipulgas",
//     category: "personalCare",
//     description: "Shampoo profesional para mascotas con adhitivo antipulgas",
//     features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
//     image: "/products/perro_1.jpg?height=300&width=300",
//     priceDetail: [
//       {
//         price: 25,
//         amount: 1
//       }
//     ],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["1"],
//     price: 10,
//   },
//   {
//     id: 6,
//     name: "Biochlor Prime",
//     category: "desinfeccion",
//     description: "Desinfectante profesional de mayor uso en el mundo para la industria de alimentos.",
//     features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
//     image: "/frutas/frutas_1.jpg?height=300&width=300",
//     priceDetail: [
//       {
//         price: 15,
//         amount: 0.25
//       }
//     ],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["0.25"],
//     price: 10,
//   },
//   {
//     id: 7,
//     name: "Lavavajillas Conc. / Lavaplatos",
//     category: "cleaning",
//     description: "Lavalozas profesionales para vajilla, utensilios, cubiertos y ollas",
//     features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
//     image: "/products/lavavajillas.jpg?height=300&width=300",
//     priceDetail: [
//       {
//         price: 15,
//         amount: 1
//       },
//       {
//         price: 50,
//         amount: 4
//       }
//     ],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["1", "4"],
//     price: 10,
//   },
//   {
//     id: 8,
//     name: "Limpia baños",
//     category: "cleaning",
//     description: "Limpieza profesional para el baño (Artefactos, quitamanchas, funguicida)",
//     features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
//     image: "/products/limpia_banos.jpg?height=300&width=300",
//     priceDetail: [
//       {
//         price: 35,
//         amount: 1
//       },
//       {
//         price: 120,
//         amount: 4
//       }
//     ],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["1", "4"],
//     price: 10,
//   },
//   {
//     id: 9,
//     name: "Limpia vidrios",
//     category: "cleaning",
//     description: "Limpia vidrios con formulación profesional",
//     features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
//     image: "/products/limpia_vidrios.jpg?height=300&width=300",
//     priceDetail: [
//       {
//         price: 10,
//         amount: 1
//       },
//       {
//         price: 35,
//         amount: 4
//       }
//     ],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["1"],
//     price: 10,
//   },
//   {
//     id: 10,
//     name: "Limpiatodo Cuaternario",
//     category: "cleaning",
//     description: "Limpieza y desinfección profesional de superficies",
//     features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
//     image: "/products/limpiatodo_cuaternario.jpg?height=300&width=300",
//     priceDetail: [
//       {
//         price: 30,
//         amount: 1
//       },
//       {
//         price: 100,
//         amount: 4
//       }
//     ],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["1", "4"],
//     price: 10,
//   }
//   ,
//   {
//     id: 11,
//     name: "Limpiapisos Cuaternario",
//     category: "cleaning",
//     description: "Limpieza y desinfección profesional de pisos",
//     features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
//     image: "/products/pisos_cuaternario.jpg?height=300&width=300",
//     priceDetail: [
//       {
//         price: 40,
//         amount: 4
//       }
//     ],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["4"],
//     price: 10,
//   },
//   {
//     id: 12,
//     name: "Sacagrasa",
//     category: "cleaning",
//     description: "Sacagrasas profesional para campanas, parrillas y grasa pesada",
//     features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
//     image: "/products/saca_grasa.jpg?height=300&width=300",
//     priceDetail: [
//       {
//         price: 20,
//         amount: 0.5
//       }
//     ],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["0.5"],
//     price: 10,
//   },
//   {
//     id: 14,
//     name: "Sacasarro RTU",
//     category: "cleaning",
//     description: "Sacasarro profesional PH balanceado para duchas, griferia y desagües",
//     features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
//     image: "/products/sacasarro.jpg?height=300&width=300",
//     priceDetail: [
//       {
//         price: 20,
//         amount: 1
//       }
//     ],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["1"],
//     price: 10,
//   },
//   {
//     id: 15,
//     name: "Ropa blanca",
//     category: "living",
//     description: "Limpieza profesional de ropa blanca",
//     features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
//     image: "/products/ropa_blanca.jpg?height=300&width=300",
//     priceDetail: [
//       {
//         price: 50,
//         amount: 4
//       }
//     ],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["4"],
//     price: 10,
//   },
//   {
//     id: 16,
//     name: "Ropa color",
//     category: "living",
//     description: "Limpieza profesional de ropa de color",
//     features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
//     image: "/products/ropa_color.jpg?height=300&width=300",
//     priceDetail: [
//       {
//         price: 50,
//         amount: 4
//       }
//     ],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["4"],
//     price: 10,
//   },
//   {
//     id: 17,
//     name: "Gel Hidroalcohol",
//     category: "desinfeccion",
//     description: "Limpiador con humectantes y dióxido de Cloro.",
//     features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
//     image: "/products/gel_hidroalcohol.jpg?height=300&width=300",
//     priceDetail: [
//       {
//         price: 15,
//         amount: 0.5
//       },
//       {
//         price: 20,
//         amount: 1
//       }
//     ],
//     inStock: true,
//     featured: true,
//     rating: 4.5,
//     size: ["0.5", "1"],
//     price: 10,
//   }
// ]

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

        {/* Products */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b">
            {/* Mobile Filter Button */}
            <Button
              variant="outline"
              className="lg:hidden flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filtros
            </Button>

            {/* View Mode Toggles */}
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
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
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

