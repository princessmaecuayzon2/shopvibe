'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop&q=80',
      productCount: '250+ Products',
      featured: true
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&q=80',
      productCount: '180+ Products',
      featured: false
    },
    {
      id: 3,
      name: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&q=80',
      productCount: '320+ Products',
      featured: true
    },
    {
      id: 4,
      name: 'Beauty',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&q=80',
      productCount: '90+ Products',
      featured: false
    },
    {
      id: 5,
      name: 'Sports',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&q=80',
      productCount: '150+ Products',
      featured: false
    },
    {
      id: 6,
      name: 'Books',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&q=80',
      productCount: '500+ Products',
      featured: true
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Discover
          </span>
          <br />
          <span>What You Love</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Browse our curated collection across multiple categories.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
            >
              {/* Category Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Featured Badge */}
                {category.featured && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              {/* Category Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-bold mb-1 group-hover:text-purple-300 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm mb-3">{category.productCount}</p>
                
                <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2 group-hover:gap-3">
                  Shop Now 
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
       <div className="text-center mt-6">
  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 text-white">
    <h2 className="text-lg font-bold mb-2">Can't Find What You're Looking For?</h2>
    <p className="text-purple-100 mb-3 text-sm max-w-md mx-auto">
      Explore our complete catalog or use our search to find exactly what you need.
    </p>
    <div className="flex flex-col sm:flex-row gap-2 justify-center">
      <button className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-50 transition-colors duration-300">
        Browse All Products
      </button>
      <button className="border-2 border-white text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors duration-300">
        Advanced Search
      </button>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default HeroSection;