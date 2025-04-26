import ProductsGrid from "@/components/products/product-grid"
import ProductsHeader from "@/components/products/product-header"

export default function Store() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ProductsHeader />
      <ProductsGrid />
    </main>
  )
}

