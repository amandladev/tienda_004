import type React from "react"
import Navbar from "@/components/ui/navbar/Navbar"

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}