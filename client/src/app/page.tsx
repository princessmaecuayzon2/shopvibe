'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductsSection from '../components/ProductsSection';
import NewsletterSection from '../components/NewsletterSection';
import { CartItem, Product } from '../types';
import { SAMPLE_PRODUCTS } from '../data/mockData';

const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-center">
      {/* Colorful 3-dots loading animation */}
      <div className="flex items-center justify-center space-x-2 mb-6">
        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-bounce"></div>
      </div>
      
      {/* Store name with gradient */}
      <div className="flex items-center justify-center space-x-1">
        <span className="text-2xl font-black tracking-wider text-gray-900" 
              style={{ fontFamily: '"Inter", "Poppins", sans-serif', letterSpacing: '0.2em' }}>
        SHOP VIBE
        </span>
      </div>
      
      {/* Loading text */}
      <p className="text-gray-500 text-sm mt-2 font-medium">Loading your shopping experience...</p>
    </div>
    
    <style jsx>{`
      @keyframes bounce {
        0%, 80%, 100% {
          transform: scale(0);
        }
        40% {
          transform: scale(1);
        }
      }
      
      .animate-bounce {
        animation: bounce 1.4s infinite ease-in-out both;
      }
      
      [animation-delay\\:"-0.3s"] {
        animation-delay: -0.32s;
      }
      
      [animation-delay\\:"-0.15s"] {
        animation-delay: -0.16s;
      }
    `}</style>
  </div>
);

const EcommerceStore: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (product: Product): void => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleToggleWishlist = (productId: number): void => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getTotalCartItems = (cartItems: CartItem[]): number => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const totalCartItems = getTotalCartItems(cartItems);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemCount={totalCartItems}
      />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection 
        products={SAMPLE_PRODUCTS}
        wishlist={wishlist}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
      />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default EcommerceStore;