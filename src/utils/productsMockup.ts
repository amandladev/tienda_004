export const products = [
    {
        id: 1,
        name: "Jabón Líquido",
        category: "personalCare",
        categoryName: "Cuidado Personal",
        images: [
            "/products/liquid_soap.jpg?height=600&width=600",
            "/limpieza/limpieza_1.jpg?height=600&width=600",
            "/limpieza/limpieza_2.jpg?height=600&width=600",
            "/limpieza/limpieza_3.jpg?height=600&width=600",
          ],
        description: "Jabón profesional de uso continuo.  Enjuague rápido y efectivo.",
        features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
        image: "/products/liquid_soap.jpg?height=300&width=300",
        priceDetail: [{
            price: 10,
            amount: 0.38
        }],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["0.38"],
        details: {
            size: "4 KG",
            ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
            directions:
              "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
            warnings: "Keep out of reach of children. Avoid contact with eyes.",
        },
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127
    },
    {
        id: 2,
        name: "Jabón Neutro",
        category: "cleaning",
        categoryName: "Cuidado Personal",
        description: "Jabón profesional sin olor ni color para manos en cocina",
        features: ["No streaks", "Anti-fog", "Long-lasting"],
        image: "/products/neutral_soap.jpg?height=300&width=300",
        priceDetail: [{
            price: 20,
            amount: 1
        }],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["1"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/neutral_soap.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 3,
        name: "Shampoo Professional Line",
        category: "personalCare",
        categoryName: "Cuidado Personal",
        description: "Shampoo profesional libre de sales de uso continuo, para el hogar.",
        features: ["Long-lasting", "Natural scents", "Odor neutralizing"],
        image: "/products/shampoo_familia.jpg?height=300&width=300",
        priceDetail: [{
            price: 25,
            amount: 0.5
        }],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["0.5"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/shampoo_familia.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 4,
        name: "Shampoo Pets Royal",
        category: "personalCare",
        categoryName: "Cuidado Personal",
        description: "Shampoo profesional para Mascotas razas finas. PH Balanceado.",
        features: ["Versatile", "Gentle formula", "Deep cleaning"],
        image: "/products/gato_1.jpg?height=300&width=300",
        priceDetail: [{
            price: 20,
            amount: 1
        }],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["1"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/gato_1.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 5,
        name: "Shampoo Pets Antipulgas",
        category: "personalCare",
        categoryName: "Cuidado Personal",
        description: "Shampoo para Mascotas con formulación especial antipulgas.",
        features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
        image: "/products/perro_1.jpg?height=300&width=300",
        priceDetail: [
            {
                price: 25,
                amount: 1
            }
        ],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["1"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/perro_1.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 6,
        name: "Biochlor Prime",
        category: "desinfeccion",
        categoryName: "Desinfección",
        description: "Desinfectante profesional de mayor uso en el mundo para la industria de alimentos.",
        features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
        image: "/frutas/frutas_1.jpg?height=300&width=300",
        priceDetail: [
            {
                price: 15,
                amount: 0.25
            }
        ],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["0.25"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/frutas/frutas_1.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 7,
        name: "Lavavajillas Conc. / Lavaplatos",
        category: "cleaning",
        categoryName: "Limpieza",
        description: "Lavalozas Profesional, desengrase y brillo para Loza y Utensilios.",
        features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
        image: "/products/lavavajillas.jpg?height=300&width=300",
        priceDetail: [
            {
                price: 15,
                amount: 1
            }
        ],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["1"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/lavavajillas.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 8,
        name: "Limpia baños",
        category: "cleaning",
        categoryName: "Limpieza",
        description: "Limpieza profesional desodorizante de uso continuo para el baño (artefactos, quitamanchas, funguicida).",
        features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
        image: "/products/limpia_banos.jpg?height=300&width=300",
        priceDetail: [
            {
                price: 35,
                amount: 1
            }
        ],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["1"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/limpia_banos.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 9,
        name: "Limpia vidrios",
        category: "cleaning",
        categoryName: "Limpieza",
        description: "Limpia vidrios profesional con antiadherente y repelente de insectos.",
        features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
        image: "/products/limpia_vidrios.jpg?height=300&width=300",
        priceDetail: [
            {
                price: 10,
                amount: 1
            }
        ],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["1"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/limpia_vidrios.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 10,
        name: "Limpiatodo Cuaternario",
        category: "cleaning",
        categoryName: "Limpieza",
        description: "Limpiador profesional. Listo para usar, disolución correcta, sumamente efectivo.",
        features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
        image: "/products/limpiatodo_cuaternario.jpg?height=300&width=300",
        priceDetail: [
            {
                price: 30,
                amount: 1
            }
        ],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["1"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/limpiatodo_cuaternario.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 11,
        name: "Limpiapisos Cuaternario",
        category: "cleaning",
        categoryName: "Limpieza",
        description: "Listo para usar, disolución correcta y secado rápido. Contiene dióxido de Cloro.",
        features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
        image: "/products/pisos_cuaternario.jpg?height=300&width=300",
        priceDetail: [
            {
                price: 40,
                amount: 4
            }
        ],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["4"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/pisos_cuaternario.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 12,
        name: "Sacagrasa",
        category: "cleaning",
        categoryName: "Limpieza",
        description: "Removedor ecológico profesional de grasa pesada (campanas, parrillas, etc).",
        features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
        image: "/products/saca_grasa.jpg?height=300&width=300",
        priceDetail: [
            {
                price: 20,
                amount: 0.5
            }
        ],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["0.5"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/saca_grasa.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 14,
        name: "Sacasarro RTU",
        category: "cleaning",
        categoryName: "Limpieza",
        description: "Removedor profesional de incrustaciones y óxidos para el hogar.",
        features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
        image: "/products/sacasarro.jpg?height=300&width=300",
        priceDetail: [
            {
                price: 20,
                amount: 1
            }
        ],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["1"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/sacasarro.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 15,
        name: "Ropa blanca",
        category: "living",
        categoryName: "Ropa",
        description: "Detergente profesional clorado, con inhibidores de corrosión.",
        features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
        image: "/products/ropa_blanca.jpg?height=300&width=300",
        priceDetail: [
            {
                price: 50,
                amount: 4
            }
        ],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["4"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/ropa_blanca.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 16,
        name: "Ropa color",
        category: "living",
        categoryName: "Ropa",
        description: "Detergente profesional de espuma controlada. Libre de nonil fenol y fosfatos.",
        features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
        image: "/products/ropa_color.jpg?height=300&width=300",
        priceDetail: [
            {
                price: 50,
                amount: 4
            }
        ],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["4"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/ropa_color.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
    {
        id: 17,
        name: "Gel Hidroalcohol",
        category: "desinfeccion",
        categoryName: "Desinfección",
        description: "Limpiador con humectantes y dióxido de Cloro.",
        features: ["Eco-friendly", "Non-toxic", "Biodegradable"],
        image: "/products/gel_hidroalcohol.jpg?height=300&width=300",
        priceDetail: [
            {
                price: 15,
                amount: 0.5
            },
            {
                price: 20,
                amount: 1
            }
        ],
        inStock: true,
        featured: true,
        rating: 4.5,
        size: ["0.5", "1"],
        relatedProducts: [
            {
              id: 3,
              name: "Glass & Window Cleaner",
              price: 9.99,
              image: "/limpieza/limpieza_6.jpg?height=300&width=300",
            },
            {
              id: 5,
              name: "Bathroom Cleaner",
              price: 11.99,
              image: "/limpieza/limpieza_5.jpg?height=300&width=300",
            },
            {
              id: 8,
              name: "Disinfectant Spray",
              price: 8.99,
              image: "/limpieza/limpieza_7.jpg?height=300&width=300",
            },
            {
              id: 11,
              name: "Oven & Grill Cleaner",
              price: 15.99,
              image: "/limpieza/limpieza_8.jpg?height=300&width=300",
            },
        ],
        reviewCount: 127,
        images: [
          "/products/gel_hidroalcohol.jpg?height=600&width=600",
          "/limpieza/limpieza_1.jpg?height=600&width=600",
          "/limpieza/limpieza_2.jpg?height=600&width=600",
          "/limpieza/limpieza_3.jpg?height=600&width=600",
        ],
        details: {
          size: "4 KG",
          ingredients: "Water, Surfactants, Citric Acid, Natural Fragrance",
          directions:
            "Spray directly onto surface and wipe clean with a cloth or paper towel. For tough stains, let sit for 30 seconds before wiping.",
          warnings: "Keep out of reach of children. Avoid contact with eyes.",
      },
    },
]