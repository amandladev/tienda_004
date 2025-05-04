// app/api/products/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const products = [
    { id: 1, name: 'Camiseta', price: 20 },
    { id: 2, name: 'Pantalón', price: 35 },
  ]
  return NextResponse.json(products)
}

export async function POST(req: Request) {
  const body = await req.json()
  const newProduct = {
    id: Date.now(),
    name: body.name,
    price: body.price,
  }

  // Aquí podrías insertar en una base de datos real
  return NextResponse.json(newProduct, { status: 201 })
}
