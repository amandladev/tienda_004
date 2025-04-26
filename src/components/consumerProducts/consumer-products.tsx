"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { products } from "@/utils/productsMockup"

export default function ConsumerProductsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProducts = activeTab === "all" ? products : products.filter((product) => product.category === activeTab)

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 flex justify-center" id="consumer-products">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-xl bg-gray-100 border border-primary/10">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
            Limpieza Profesional, Ahora para tu Hogar
              </h3>
            <p className="text-gray-500">
            Nuestro equipo de expertos en limpieza industrial ha reformulado nuestros productos para su uso cotidiano. El mismo poder y eficiencia, ahora para tu hogar.
              
            </p>
          </div>
          <Link href={"/store"}>
            <Button size="lg" className="px-8">
              Ir a la tienda <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

