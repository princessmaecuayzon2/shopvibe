import { Truck, Shield, RefreshCw } from 'lucide-react';
import { Product, Feature, FooterSection } from '../types';

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "electronics",
    rating: 4.8,
    reviews: 1250,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Minimalist Watch Collection",
    price: 189.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "accessories",
    rating: 4.6,
    reviews: 892,
    badge: "New"
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "clothing",
    rating: 4.7,
    reviews: 2104,
    badge: "Eco-Friendly"
  },
  {
    id: 4,
    name: "Smart Home Speaker",
    price: 129.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=400&fit=crop",
    category: "electronics",
    rating: 4.5,
    reviews: 756,
    badge: "Sale"
  },
  {
    id: 5,
    name: "Leather Messenger Bag",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "accessories",
    rating: 4.9,
    reviews: 445,
    badge: "Premium"
  },
  {
    id: 6,
    name: "Sustainable Sneakers",
    price: 119.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    category: "clothing",
    rating: 4.4,
    reviews: 1876,
    badge: "Trending"
  }
];

export const FEATURES: Feature[] = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $100" },
  { icon: Shield, title: "Secure Payment", desc: "100% protected checkout" },
  { icon: RefreshCw, title: "Easy Returns", desc: "30-day return policy" }
];

export const NAVIGATION_ITEMS = ['Home', 'Products', 'Categories', 'About', 'Contact'];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Shop",
    links: ["All Products", "Electronics", "Clothing", "Accessories"]
  },
  {
    title: "Company",
    links: ["About Us", "Contact", "Careers", "Press"]
  },
  {
    title: "Support",
    links: ["Help Center", "Shipping", "Returns", "Size Guide"]
  }
];