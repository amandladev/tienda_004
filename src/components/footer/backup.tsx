"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter, ArrowRight, ChevronUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ElegantFooter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send this to your API
      setSubscribed(true)
      setEmail("")

      // Reset the subscribed state after 5 seconds
      setTimeout(() => {
        setSubscribed(false)
      }, 5000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              {/* Replace with your actual logo */}
              <div className="h-10 w-10 bg-greenNew rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-gray-800 font-medium text-xl tracking-tight">Logo</span>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Soluciones de limpieza profesionales para industrias y hogares, con más de 25 años de experiencia
              brindando productos de la más alta calidad.
            </p>

            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="w-10 h-10 rounded-full bg-grayNew flex items-center justify-center transition-colors hover:bg-greenNew group">
                  <Facebook className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                </div>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="w-10 h-10 rounded-full bg-grayNew flex items-center justify-center transition-colors hover:bg-greenNew group">
                  <Instagram className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="w-10 h-10 rounded-full bg-grayNew flex items-center justify-center transition-colors hover:bg-greenNew group">
                  <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                </div>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div className="w-10 h-10 rounded-full bg-grayNew flex items-center justify-center transition-colors hover:bg-greenNew group">
                  <Twitter className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                </div>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6 relative">
              Enlaces Rápidos
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-greenNew -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "¿Quiénes Somos?", href: "/#about" },
                { name: "Sectores", href: "/#sectors" },
                { name: "Productos", href: "/products" },
                { name: "Asesoría Experta", href: "/advice" },
                { name: "Tienda Virtual", href: "/store" },
                { name: "Contacto", href: "/#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-greenNew transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6 relative">
              Contáctenos
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-redNew -mb-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-redNew mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Av. Principal 1234, Lima, Perú</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-redNew mr-3 flex-shrink-0" />
                <a href="tel:+51123456789" className="text-gray-600 hover:text-redNew transition-colors">
                  +51 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-redNew mr-3 flex-shrink-0" />
                <a href="mailto:info@azochem.com" className="text-gray-600 hover:text-redNew transition-colors">
                  info@azochem.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-redNew mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600">
                  <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábado: 9:00 AM - 1:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6 relative">
              Boletín Informativo
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellowNew -mb-2"></span>
            </h3>
            <p className="text-gray-600 mb-4">
              Suscríbase para recibir noticias, ofertas especiales y consejos de limpieza profesional.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Su correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pr-12 border-gray-300 focus:border-greenNew focus:ring-greenNew"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1 bottom-1 bg-greenNew hover:bg-greenNew/90 text-white"
                  style={{ backgroundColor: "var(--greenNew)" }}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-greenNew"
                >
                  ¡Gracias por suscribirse!
                </motion.p>
              )}
            </form>

            <div className="mt-6 p-4 bg-grayNew rounded-lg">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-800">Certificaciones:</strong> ISO 9001, ISO 14001, OHSAS 18001
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-grayNew">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} AZOCHEM®. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-greenNew transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="hover:text-greenNew transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/cookies" className="hover:text-greenNew transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200 hover:bg-greenNew hover:border-greenNew group transition-colors z-50"
        aria-label="Scroll to top"
        style={{ ["--hover-bg-color" as any]: "var(--greenNew)" }}
      >
        <ChevronUp className="h-6 w-6 text-gray-600 group-hover:text-white transition-colors" />
      </button>
    </footer>
  )
}

