"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"

// Services data - replace with your actual services
const services = [
  {
    id: 1,
    title: "Agro",
    description: "Soluciones especializadas en limpieza para la industria agrícola.",
    image: "/agro/agro_1.jpg",
    features: [
      "Palto",
      "Citricos",
      "ViD",
      "Mango",
    ],
    products: [
      { id: 101, name: "producto prueba 1", image: "/agro/agro_1.jpg" },
      { id: 102, name: "producto prueba 2", image: "/agro/agro_1.jpg" },
    ],
  },
  {
    id: 2,
    title: "Lácteos",
    description: "Limpieza y sanitización para plantas de procesamiento lácteo.",
    image: "/lacteos/lacteos_5.jpg",
    features: [
      "Daily office cleaning",
      "Floor and carpet care",
      "Window cleaning",
      "Restroom sanitation",
      "Green cleaning options",
    ],
    products: [
      { id: 201, name: "Detergente Especializado", image: "/products/lacteos_1.jpg" },
      { id: 202, name: "Sanitizante para Equipos", image: "/products/lacteos_2.jpg" },
    ],
  },
  {
    id: 3,
    title: "Food & Drink",
    description:
      "Custom cleaning solutions for unique environments and specific industry requirements. Our expert team develops tailored approaches for your specialized cleaning needs.",
    image: "/frutas/frutas_0.jpg?height=600&width=800",
    features: [
      "Clean room maintenance",
      "Healthcare facility cleaning",
      "Food processing area sanitation",
      "Laboratory cleaning",
      "Antistatic cleaning",
    ],
    products: [
      { id: 101, name: "Desinfectante Agrícola", image: "/agro/agro_1.jpg" },
      { id: 102, name: "Limpiador de Suelos", image: "/agro/agro_1.jpg" },
    ],
  },
  {
    id: 4,
    title: "Ganaderia",
    description:
      "Preventive maintenance and regular upkeep services to ensure your facility remains in optimal condition. We help extend the life of your assets and prevent costly repairs.",
    image: "/ganaderia/ganaderia_4.jpg?height=600&width=800",
    features: [
      "Equipment maintenance",
      "Preventive cleaning",
      "Surface protection",
      "Periodic deep cleaning",
      "Maintenance scheduling",
    ],
    products: [
      { id: 101, name: "Desinfectante Agrícola", image: "/agro/agro_1.jpg" },
      { id: 102, name: "Limpiador de Suelos", image: "/agro/agro_1.jpg" },
    ],
  },
  {
    id: 5,
    title: "Horeca",
    description:
      "Expert consultation and training services to help your team maintain cleanliness and safety standards. We share our expertise to empower your organization.",
    image: "/hoteles/hotel_2.jpg?height=600&width=800",
    features: [
      "Cleaning protocol development",
      "Staff training programs",
      "Safety compliance consulting",
      "Efficiency audits",
      "Best practices workshops",
    ],
    products: [
      { id: 101, name: "Desinfectante Agrícola", image: "/agro/agro_1.jpg" },
      { id: 102, name: "Limpiador de Suelos", image: "/agro/agro_1.jpg" },
    ],
  },
];

// export default function ServicesSection() {
//   const [activeService, setActiveService] = useState(services[0])

//   return (
//     <section className="py-16 bg-white" id="services">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Nuestros Sectores</h2>
//           <div className="w-24 h-1 bg-black mx-auto"></div>
//           <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
//           Descubra nuestra amplia gama de servicios de limpieza y mantenimiento diseñados para satisfacer sus necesidades específicas.
//           </p>
//         </div>

//         {/* Services Navigation */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {services.map((service) => (
//             <button
//               key={service.id}
//               onClick={() => setActiveService(service)}
//               className={`px-6 py-3 rounded-full text-md font-medium transition-colors
//                 ${
//                   activeService.id === service.id
//                     ? "bg-color-yellow text-white"
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//             >
//               {service.title}
//             </button>
//           ))}
//         </div>

//         {/* Service Content */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeService.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="grid lg:grid-cols-2 gap-12 items-center"
//           >
//             <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
//               <Image
//                 src={activeService.image || "/placeholder.svg"}
//                 alt={activeService.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Service Information */}
//             <div className="space-y-6 order-1 lg:order-2">
//               {/* <h3 className="text-2xl font-light text-gray-800">{activeService.title}</h3> */}
//               <p className="text-gray-600">{activeService.description}</p>

//               {/* Features List */}
//               <div className="space-y-4">
//                 <h4 className="font-medium text-gray-800">Key Features:</h4>
//                 <ul className="space-y-3">
//                   {activeService.features.map((feature, index) => (
//                     <motion.li
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-center space-x-3 text-gray-600"
//                     >
//                       <Check className="h-5 w-5 text-gray-600 flex-shrink-0" />
//                       <span>{feature}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Call to Action */}
//               <div className="pt-6">
//                 <button className="px-8 py-3 bg-color-yellow text-white rounded-md hover:bg-gray-700 transition-colors">
//                   Mira los productos
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   )
// }

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Nuestros Sectores</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra nuestra amplia gama de servicios de limpieza y mantenimiento diseñados para satisfacer sus necesidades específicas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`px-6 py-3 rounded-full text-md font-medium transition-colors ${
                activeService.id === service.id
                  ? "bg-color-yellow text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src={activeService.image} alt={activeService.title} fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">{activeService.description}</p>

            <div className="mb-4">
              <h4 className="font-medium text-gray-800">Sectores:</h4>
              <ul className="space-y-2 text-gray-600">
                {activeService.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-gray-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-color-yellow text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Mirar mas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

