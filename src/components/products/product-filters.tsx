"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

interface Category {
  value: string
  label: string
}

interface ProductFiltersProps {
  categories: Category[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export default function ProductFilters({ categories, selectedCategory, setSelectedCategory }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 50])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [featuredOnly, setFeaturedOnly] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Categorías</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`block w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors ${
                selectedCategory === category.value
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Rango de precios</h3>
        <Slider
          defaultValue={[0, 50]}
          max={50}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-6"
        />
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">${priceRange[0]}</span>
          <span className="text-sm text-gray-500">${priceRange[1]}</span>
        </div>
      </div> */}

      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Disponibilidad</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="in-stock"
              checked={inStockOnly}
              onCheckedChange={(checked) => setInStockOnly(checked as boolean)}
            />
            <Label htmlFor="in-stock" className="text-sm font-normal cursor-pointer">
              In Stock Only
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="featured"
              checked={featuredOnly}
              onCheckedChange={(checked) => setFeaturedOnly(checked as boolean)}
            />
            <Label htmlFor="featured" className="text-sm font-normal cursor-pointer">
              Featured Products
            </Label>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            setSelectedCategory("all")
            setPriceRange([0, 50])
            setInStockOnly(false)
            setFeaturedOnly(false)
          }}
        >
          Resetear filtros
        </Button>
      </div>
    </div>
  )
}

