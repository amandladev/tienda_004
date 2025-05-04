export interface Product {
    id: number;
    name: string;
    category: string;
    categoryName: string;
    description: string;
    features: string[];
    image: string;
    images: string[];
    priceDetail: PriceDetail[];
    inStock: boolean;
    featured: boolean;
    rating: number;
    reviewCount?: number;
    size: string[];
    relatedProducts?: RelatedProduct[];
    details: ProductDetails;
    priceSelected?: PriceDetail;
  }
  
  export interface PriceDetail {
    price: number;
    amount: number;
  }
  
  export interface RelatedProduct {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  export interface ProductDetails {
    size: string;
    ingredients: string;
    directions: string;
    warnings: string;
  }
  
export interface ProductCardProps {
    product: Product
    viewMode: "grid" | "list"
  }