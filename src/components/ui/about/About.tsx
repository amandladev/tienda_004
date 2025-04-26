"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Leaf, TrendingUp, Users } from "lucide-react"

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Quiénes Somos?</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La percepción de limpieza, higiene, libre de gérmenes, nunca ha cobrado mayor importancia que en estas
            épocas.
            <br className="hidden md:block" />
            La limpieza ya no es suficiente, la capacidad de adaptar los protocolos y/o costumbres de limpieza a la
            nueva modalidad y transmitir los conocimientos con eficacia y veracidad es prioridad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <Image
              src="/acid.jpg"
              alt="Our team at work"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-3xl font-light text-gray-800 border-l-4 border-primary pl-4">Nuestra historia</h3>
            <p className="text-gray-600 leading-relaxed">
              AZOCHEM® marca de propiedad familiar, evolucionando durante más de 25 años, combina las mejores
              condiciones en manufactura con las máximas exigencias de calidad para conseguir un proceso de producción seguro,
              ofreciendo a la industria productos de la mejor funcionalidad con desarrollos personalizados.
            </p>
            <p className="text-gray-600 leading-relaxed">
            AZOCHEM® es el polo técnico que investiga y desarrolla desinfectantes, así como limpiadores, agrupando empresas independientes con un único network que comparten recursos y know-how, manteniendo las características comerciales de cada una.
            AZOCHEM® ofrece soluciones integrales para mantener ambientes y equipamientos higienizados, promover alimentos seguros, así como optimizar la calidad de la utilización del agua.
            </p>

            {/* Key Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-lg">Calidad</h4>
                  <p className="text-sm text-gray-600 mt-1">Ingredientes de alta calidad para resultados excepcionales</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-lg">Eco-Friendly</h4>
                  <p className="text-sm text-gray-600 mt-1">Formulas y embalajes ecológicos</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-lg">Seguro para las familias</h4>
                  <p className="text-sm text-gray-600 mt-1">Formulas sin sustancias tóxicas</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-primary/10 p-4 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-lg">Innovación</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Constante mejora de nuestros productos
                   </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {[
            { value: "25+", label: "Años de Experiencia" },
            { value: "100+", label: "Soluciones de Higiene" },
            { value: "250+", label: "Clientes Satisfechos" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl font-bold text-primary mb-3 text-greenNew">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

