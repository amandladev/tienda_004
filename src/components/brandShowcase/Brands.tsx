'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Hotel, Warehouse, Factory, Building } from 'lucide-react';
import { clients } from '../ui/clients/clientsData';

interface Brand {
  name: string;
  logo: string;
  sector: string;
}

const brands: Brand[] = [
  // Livestock sector
  {
    name: 'Ranch Solutions',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=400&h=200&q=80',
    sector: 'livestock'
  },
  {
    name: 'Farm Fresh',
    logo: 'https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?auto=format&fit=crop&w=400&h=200&q=80',
    sector: 'livestock'
  },
  // Dairy sector
  {
    name: 'Pure Dairy',
    logo: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&h=200&q=80',
    sector: 'dairy'
  },
  {
    name: 'Milk Masters',
    logo: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=400&h=200&q=80',
    sector: 'dairy'
  },
  // Hotels sector
  {
    name: 'Grand Hotel',
    logo: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=400&h=200&q=80',
    sector: 'hotels'
  },
  {
    name: 'Luxury Stays',
    logo: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&h=200&q=80',
    sector: 'hotels'
  },
  // Industrial sector
  {
    name: 'Tech Industries',
    logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=200&q=80',
    sector: 'industrial'
  },
  {
    name: 'Manufacturing Pro',
    logo: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=400&h=200&q=80',
    sector: 'industrial'
  },
];

const sectors = [
  { id: 'all', name: 'Todos', icon: Building },
  { id: 'livestock', name: 'Agro', icon: Warehouse },
  { id: 'dairy', name: 'Lacteos', icon: Factory },
  { id: 'hotels', name: 'Food & Drink', icon: Hotel },
  { id: 'industrial', name: 'Ganaderia', icon: Building2 },
  { id: 'industrial', name: 'Horeca', icon: Building2 },
];

export default function BrandShowcase() {
  const [selectedSector, setSelectedSector] = useState('all');

  const filteredBrands = clients.filter(
    brand => selectedSector === 'all' || brand.sector === selectedSector
  );

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Nuesros Socios de Confianza
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Estamos orgullosos de trabajar con las mas respectadas empresas de distintas industrias,
          brindando soluciones de limpieza de alta calidad a sus necesidades.
          
        </p>

        {/* Sector Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <button
                key={sector.id}
                onClick={() => setSelectedSector(sector.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all
                  ${selectedSector === sector.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                <Icon className="w-4 h-4 shrink-0" strokeWidth={2} />
                <span>{sector.name}</span>
              </button>
            );
          })}
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-black rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="aspect-[2/1] relative overflow-hidden rounded-lg bg-green-300 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="absolute inset-0 w-full h-full object-contain p-4 bg-white"
                />
              </div>
              <h3 className="mt-4 text-center text-gray-800 font-medium">
                {brand.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}