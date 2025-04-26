"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Building2, Award } from "lucide-react"

// Organized client data by sectors
const clientsBySector = {
  Agro: [
    {
      name: "Danper",
      logo: "/clients/danper.svg",
      link: "https://www.danper.com",
    },
    {
      name: "Agrihusac",
      logo: "/clients/agrihusac.png",
      link: "",
    },
    {
      name: "AIB Agroindustrias",
      logo: "/clients/aib.png",
      link: "https://www.aib.com.pe",
    },
    {
      name: "T&T Fruits",
      logo: "/clients/TyT.jpg",
      link: "https://tytfruits.com",
    },
  ],
  Lácteos: [
    {
      name: "Gloria",
      logo: "/clients/gloria.png",
      link: "https://www.gloria.com.pe",
    },
    {
      name: "Laive",
      logo: "/clients/laive.png",
      link: "https://laive.pe/",
    },
    {
      name: "Chugur",
      logo: "/clients/chugur.png",
      link: "https://chugurquesos.com/",
    },
    {
      name: "Lacteus",
      logo: "/clients/lacteus.png",
      link: "",
    },
    {
      name: "Nestle",
      logo: "/clients/nestle.jpeg",
      link: "https://www.nestle.com.pe/",
    },
  ],
  "Food & Drink": [
    {
      name: "Aliex",
      logo: "/clients/aliex.png",
      link: "https://aliexperu.com/",
    },
    {
      name: "General Foods",
      logo: "/clients/general_foods.png",
      link: "https://www.generalfoodsperu.com",
    },
    {
      name: "Perulab Ecologic",
      logo: "/clients/ecologic-logo.png",
      link: "https://perulabecologic.com.pe/",
    },
    {
      name: "Aktiva Packaging",
      logo: "/clients/aktivapack.png",
      link: "https://aktivapackaging.pe",
    },
  ],
  Ganaderia: [
    {
      name: "Establo Piamonte",
      logo: "/clients/piamonte.png",
      link: "",
    },
    {
      name: "Establo El Sequion",
      logo: "/clients/sequion.png",
      link: "",
    },
    {
      name: "Establo Gasur",
      logo: "/clients/gasur.png",
      link: "",
    },
    {
      name: "Establo Santa Fe",
      logo: "/clients/santa_fe.png",
      link: "",
    },
  ],
  Horeca: [
    {
      name: "Grupo Express",
      logo: "/clients/grupo_express.jpg",
      link: "https://grupoexpressperu.com",
    },
    {
      name: "Flora y Fauna",
      logo: "/clients/flora_fauna.svg",
      link: "https://perulabecologic.com.pe/",
    },
  ],
}

// Color mapping for sectors
const sectorColors = {
  Agro: "greenNew",
  Lácteos: "redNew",
  "Food & Drink": "yellowNew",
  Ganaderia: "greenNew",
  Horeca: "greenNew",
}
const sectorImage = {
  Agro: "/agro/agro_1.jpg?height=600&width=800",
  Lácteos: "/lacteos/lacteos_5.jpg?height=600&width=800",
  "Food & Drink": "/food/agua.jpg?height=600&width=800",
  Ganaderia: "/ganaderia/ganaderia_4.jpg?height=600&width=800",
  Horeca: "/hoteles/hoteles.jpg?height=600&width=800",
}

export default function PrestigiousClientsSection() {
  const sectors = Object.keys(clientsBySector)
  const [activeSector, setActiveSector] = useState(sectors[0])
  const [autoplayPaused, setAutoplayPaused] = useState(false)

  // Auto-rotate through sectors
  useEffect(() => {
    if (autoplayPaused) return

    const interval = setInterval(() => {
      setActiveSector((current) => {
        const currentIndex = sectors.indexOf(current)
        const nextIndex = (currentIndex + 1) % sectors.length
        return sectors[nextIndex]
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [sectors, autoplayPaused])

  const handleSectorChange = (sector: string) => {
    setActiveSector(sector)
    setAutoplayPaused(true)

    // Resume autoplay after 10 seconds of inactivity
    const timer = setTimeout(() => {
      setAutoplayPaused(false)
    }, 10000)

    return () => clearTimeout(timer)
  }

  const handlePrevSector = () => {
    const currentIndex = sectors.indexOf(activeSector)
    const prevIndex = currentIndex === 0 ? sectors.length - 1 : currentIndex - 1
    handleSectorChange(sectors[prevIndex])
  }

  const handleNextSector = () => {
    const currentIndex = sectors.indexOf(activeSector)
    const nextIndex = (currentIndex + 1) % sectors.length
    handleSectorChange(sectors[nextIndex])
  }

  // Get current sector color
  const currentColor = sectorColors[activeSector as keyof typeof sectorColors] || "greenNew"
  const currentImage = sectorImage[activeSector as keyof typeof sectorImage] || "/agro/agro_1.jpg"
  return (
    <section className="w-full py-24 bg-grayNew" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center my-6">
            <Award className="h-7 w-7 text-greenNew mr-3" />
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Nuestros Clientes Destacados
            </h2>
          </div>
          <div className={`w-24 h-1 bg-${currentColor} mx-auto mb-4 transition-colors duration-500`}></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Nuestras soluciones de limpieza son la elección preferida por las empresas más prestigiosas.
          </p>
        </div>

        {/* Sector Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="inline-flex items-center bg-white rounded-full shadow-md p-1.5">
            {sectors.map((sector) => {
              // const sectorColor = sectorColors[sector as keyof typeof sectorColors] || "greenNew"
              return (
                <button
                  key={sector}
                  onClick={() => handleSectorChange(sector)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeSector === sector
                    ? `bg-yellowNew text-black shadow-sm font-extrabold`
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                >

                  {sector}
                </button>
              )
            })}
          </div>
        </div>

        {/* Client Logos Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSector}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[500px] flex flex-col relative overflow-hidden"
            >
              <div className="flex-1 flex items-center justify-center relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                  {currentImage && (
                    <div
                      className="absolute inset-0 z-0"
                      style={{
                        backgroundImage: `url(${currentImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  )}
                  {clientsBySector[activeSector as keyof typeof clientsBySector].map((client, index) => (
                    <motion.div
                      key={client.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex flex-col items-center "
                    >
                      <div
                        className={`bg-white backdrop-blur-md rounded-xl shadow-lg p-6 h-32 w-full flex items-center justify-center mb-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent `}
                        // className="absolute inset-0 rounded-xl bg-white/50 backdrop-blur-md shadow-lg border-2 border-transparent transition-all duration-300"
                        style={{
                          borderColor: "transparent",
                          ["--hover-border-color" as any]: `var(--${currentColor})`,
                        }}
                        onMouseOver={(e) => {
                          ; (e.currentTarget as HTMLDivElement).style.borderColor = `var(--${currentColor})`
                        }}
                        onMouseOut={(e) => {
                          ; (e.currentTarget as HTMLDivElement).style.borderColor = "transparent"
                        }}
                      >
                        <div style={{
                          backgroundImage: `url(${client.logo})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          top: "0",
                          
                          left: "0",
                          right: "0",
                          bottom: "0",
                          filter: "blur(10px)",
                          zIndex: "-1",
                          opacity: "0.5",
                        }}>

                        </div>
                        <a
                          href={client.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full flex items-center justify-center"
                        >
                          <Image
                            src={client.logo || "/placeholder.svg"}
                            alt={`${client.name} logo`}
                            width={160}
                            height={80}
                            className="object-cover w-auto h-auto max-h-16 min-w-36 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                            style={{ width: "auto", height: "auto" }}
                          />
                        </a>
                      </div>
                      {/* <p className="text-sm font-medium text-gray-700">{client.name}</p> */}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 z-50 -translate-y-3/4 left-0 -ml-4 md:-ml-8">
            <button
              onClick={handlePrevSector}
              className={`bg-white rounded-full p-2 shadow-lg hover:bg-${currentColor} hover:text-white transition-colors`}
              aria-label="Previous sector"
              style={{ ["--hover-bg-color" as any]: `var(--${currentColor})` }}
              onMouseOver={(e) => {
                ; (e.currentTarget as HTMLButtonElement).style.backgroundColor = `var(--${currentColor})`
                e.currentTarget.querySelector("svg")!.style.color = "white"
              }}
              onMouseOut={(e) => {
                ; (e.currentTarget as HTMLButtonElement).style.backgroundColor = "white"
                e.currentTarget.querySelector("svg")!.style.color = "#374151"
              }}
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="absolute top-1/2 z-50 -translate-y-3/4 right-0 -mr-4 md:-mr-8">
            <button
              onClick={handleNextSector}
              className={`bg-white rounded-full p-2 shadow-lg hover:bg-${currentColor} hover:text-white transition-colors`}
              aria-label="Next sector"
              style={{ ["--hover-bg-color" as any]: `var(--${currentColor})` }}
              onMouseOver={(e) => {
                ; (e.currentTarget as HTMLButtonElement).style.backgroundColor = `var(--${currentColor})`
                e.currentTarget.querySelector("svg")!.style.color = "white"
              }}
              onMouseOut={(e) => {
                ; (e.currentTarget as HTMLButtonElement).style.backgroundColor = "white"
                e.currentTarget.querySelector("svg")!.style.color = "#374151"
              }}
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Sector Indicators */}
        {/* <div className="flex justify-center">
          <div className="flex space-x-2">
            {sectors.map((sector) => {
              const sectorColor = sectorColors[sector as keyof typeof sectorColors] || "greenNew"
              return (
                <button
                  key={`indicator-${sector}`}
                  onClick={() => handleSectorChange(sector)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSector === sector ? `bg-yellowNew w-6` : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  style={activeSector === sector ? {  width: "1.5rem" } : {}}
                  aria-label={`Go to ${sector} sector`}
                />
              )
            })}
          </div>
        </div> */}
        {/* Call to Action */}
        {/* <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Únase a nuestra distinguida lista de clientes y descubra por qué las empresas líderes confían en nosotros.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1"
              style={{ backgroundColor: "var(--redNew)", ["--hover-bg-color" as any]: "var(--redNew)" }}
              onMouseOver={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#8a2430" // Slightly darker redNew
              }}
              onMouseOut={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--redNew)"
              }}
            >
              Contáctenos Hoy
            </a>
          </div>
        </div> */}
      </div>
    </section>
  )
}

