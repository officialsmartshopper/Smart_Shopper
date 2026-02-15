export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  merchant: string;
  merchantLogo?: string;
  rating?: number;
  reviews?: number;
  isHot?: boolean;
  isNew?: boolean;
  affiliateLink?: string;
  inStock?: boolean;
}

export interface Car {
  id: string;
  name: string;
  year: number;
  seats: number;
  fuelType: string;
  engineSize?: string;
  transmission: string;
  price: number;
  originalPrice?: number;
  image: string;
  location?: string;
  mileage?: number;
}

export interface Review {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  author: string;
  authorAvatar?: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful: number;
  verified: boolean;
  images?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  category: string;
  author?: string;
}

export interface FuelStation {
  id: string;
  name: string;
  brand: string;
  address: string;
  latitude: number;
  longitude: number;
  petrolPrice: number;
  dieselPrice: number;
  premiumPrice?: number;
  distance?: number;
  isOpen: boolean;
  rating?: number;
  updatedAt: string;
}

export interface PriceTrend {
  date: string;
  petrol: number;
  diesel: number;
  premium?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories?: string[];
  productCount?: number;
}

export interface Merchant {
  id: string;
  name: string;
  logo?: string;
  rating: number;
  reviewCount: number;
  location?: string;
  website?: string;
  affiliateId?: string;
}

export interface PriceAlert {
  id: string;
  productId: string;
  targetPrice: number;
  email: string;
  createdAt: string;
}

export interface ComparisonItem {
  product: Product;
  features: Record<string, string | boolean>;
}
