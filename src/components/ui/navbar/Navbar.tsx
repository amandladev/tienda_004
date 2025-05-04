"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import LoginModal from "../modal/Login"
import RegisterModal from "../modal/Register"
import CartDropdown from "../cart-dropdown"
import { motion, AnimatePresence } from "framer-motion"

const menuItems = [
  { name: "Inicio", href: "/#about" },
  // { name: "Sectores", href: "/#services" },
  // { name: "Asesoría Experta", href: "/#expert-advice" },
  // { name: "Contacto", href: "/#contact" },
]

// Services submenu items
const serviceItems = [
  { name: "Agro", href: "/services/cleaning" },
  { name: "Lacteos", href: "/services/maintenance" },
  { name: "Food & Drink", href: "/services/consulting" },
  { name: "Ganaderia", href: "/services/training" },
  { name: "Horeca", href: "/services/consulting" },
]

const adviceItems = [
  { name: "Planes", href: "/services/cleaning" },
  { name: "Validaciones", href: "/services/maintenance" },
  { name: "Charlas", href: "/services/consulting" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileAdvicesOpen, setIsMobileAdvicesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              {/* <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-gray-800 font-medium text-xl tracking-tight">Logo</span> */}
              <Image 
                src="/logo.jpeg"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {/* First menu item */}
              <Link
                href="/#about"
                className="text-gray-700 hover:text-primary px-2 py-1 text-sm font-medium transition-colors duration-200 relative group"
              >
                ¿Quiénes Somos?
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-primary px-2 py-1 text-sm font-medium transition-colors duration-200">
                  Sectores
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <div className="absolute left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="rounded-lg shadow-lg bg-white ring-1 ring-black/5 overflow-hidden">
                    <div className="py-1">
                      {serviceItems.map((service, index) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-primary px-2 py-1 text-sm font-medium transition-colors duration-200">
                  Asesoría Experta
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <div className="absolute left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="rounded-lg shadow-lg bg-white ring-1 ring-black/5 overflow-hidden">
                    <div className="py-1">
                      {adviceItems.map((advice, index) => (
                        <Link
                          key={advice.name}
                          href={advice.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {advice.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Remaining menu items */}
              {menuItems.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary px-2 py-1 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <CartDropdown />
            <div className="flex space-x-2">
              <LoginModal />
              <RegisterModal />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <CartDropdown />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner">
              {/* Home link */}
              <Link
                href="/"
                className="text-gray-700 hover:bg-primary/10 hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  <span>Sectores</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesOpen ? "transform rotate-180" : ""}`}
                  />
                </button>

                {/* Mobile Services submenu */}
                <motion.div
                  className="pl-4 space-y-1 overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: isMobileServicesOpen ? "auto" : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="text-gray-600 hover:bg-primary/10 hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              </div>

              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMobileAdvicesOpen(!isMobileAdvicesOpen)}
                >
                  <span>Asesoría Experta</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${isMobileAdvicesOpen ? "transform rotate-180" : ""}`}
                  />
                </button>

                {/* Mobile Advice submenu */}
                <motion.div
                  className="pl-4 space-y-1 overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: isMobileAdvicesOpen ? "auto" : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {adviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="text-gray-600 hover:bg-primary/10 hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              </div>

              {/* Remaining menu items */}
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:bg-primary/10 hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-3 px-2">
                  <Link
                    href="/login"
                    className="flex justify-center items-center text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    href="/register"
                    className="flex justify-center items-center text-white bg-primary hover:bg-primary/90 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Registrarse
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

