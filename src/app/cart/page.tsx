'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/cart-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { formatPrice } from '@/lib/utils'
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react'
import Navbar from '@/components/ui/navbar/Navbar'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart()
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  
  const discount = promoApplied ? subtotal * 0.1 : 0
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal - discount + shipping
  
  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'discount10') {
      setPromoApplied(true)
    }
  }
  
  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400" />
            <h2 className="mt-4 text-2xl font-medium text-gray-900">Su carrito de compras está vacío</h2>
            <p className="mt-2 text-gray-500">Parece que aún no has agregado ningún producto.</p>
            <div className="mt-6">
              <Link href="/store">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continuar comprando
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrito de compras</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {items.map(item => (
                  <li key={item.id} className="p-6">
                    <div className="flex flex-col sm:flex-row">
                      <div className="flex-shrink-0 h-24 w-24 sm:h-32 sm:w-32 relative rounded overflow-hidden bg-gray-100">
                        <Image 
                          src={item.image || "/placeholder.svg"} 
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 sm:ml-6 mt-4 sm:mt-0">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                          <p className="text-lg font-medium text-gray-900">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Price: {formatPrice(item.price)}</p>
                        
                        <div className="mt-4 flex justify-between items-center">
                          <div className="flex items-center border border-gray-300 rounded">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-gray-500 hover:text-gray-700"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-2 text-gray-900">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-gray-500 hover:text-gray-700"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 flex items-center"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="p-6 border-t border-gray-200 flex justify-between">
                <Link href="/store">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Button>
                </Link>
                
                <Button variant="outline" onClick={clearCart} className="text-red-500 hover:text-red-700">
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Resumen de compra</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">{formatPrice(subtotal)}</span>
                  </div>
                  
                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envio</span>
                    <span className="text-gray-900">
                      {shipping === 0 ? 'Free' : formatPrice(shipping)}
                    </span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-900">Total</span>
                      <span className="text-gray-900">{formatPrice(total)}</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Impuestos
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex space-x-2 mb-4">
                    <Input
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                    />
                    <Button 
                      variant="outline" 
                      onClick={handleApplyPromo}
                      disabled={promoApplied || !promoCode}
                    >
                      Aplicar
                    </Button>
                  </div>
                  
                  {promoApplied && (
                    <div className="mb-4 text-sm text-green-600">
                      Promo code applied successfully!
                    </div>
                  )}
                  
                  <Link href="/checkout" passHref>
                  <Button className="w-full">
                    Proceder al checkout
                  </Button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
