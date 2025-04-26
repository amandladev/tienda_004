import { formatPrice } from "@/lib/utils"
import Image from "next/image"
import type { CartItem } from "@/context/cart-context"

interface CheckoutSummaryProps {
  items: CartItem[]
  subtotal: number
  shippingCost: number
  tax: number
  total: number
}

export default function CheckoutSummary({ items, subtotal, shippingCost, tax, total }: CheckoutSummaryProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
      <h2 className="text-lg font-medium text-gray-900">Resumen de compra</h2>

      <ul className="mt-6 divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="flex py-4">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>{item.name}</h3>
                  <p className="ml-4">{formatPrice(item.price * item.quantity)}</p>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty {item.quantity}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-sm text-gray-600">Subtotal</div>
          <div className="text-base font-medium text-gray-900">{formatPrice(subtotal)}</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">Shipping</div>
          <div className="text-base font-medium text-gray-900">{formatPrice(shippingCost)}</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">Taxes</div>
          <div className="text-base font-medium text-gray-900">{formatPrice(tax)}</div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Total</div>
          <div className="text-base font-medium text-gray-900">{formatPrice(total)}</div>
        </div>
      </div>
    </div>
  )
}

