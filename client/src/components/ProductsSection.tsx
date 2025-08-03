import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Star, Heart, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  badge: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

interface ProductsSectionProps {
  products: Product[];
  wishlist: number[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
}

// Expanded mock data with more products
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199,
    originalPrice: 299,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80",
    rating: 4.8,
    reviews: 234,
    badge: "Best Seller",
    category: "electronics"
  },
  {
    id: 2,
    name: "Designer Cotton T-Shirt",
    price: 49,
    originalPrice: 79,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&q=80",
    rating: 4.5,
    reviews: 128,
    badge: "New",
    category: "clothing"
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    price: 129,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&q=80",
    rating: 4.7,
    reviews: 89,
    badge: "Limited",
    category: "accessories"
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&q=80",
    rating: 4.6,
    reviews: 156,
    badge: "Hot",
    category: "electronics"
  },
  {
    id: 5,
    name: "Minimalist Sneakers",
    price: 89,
    originalPrice: 129,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&q=80",
    rating: 4.4,
    reviews: 203,
    badge: "Sale",
    category: "clothing"
  },
  {
    id: 6,
    name: "Wireless Earbuds Pro",
    price: 179,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&q=80",
    rating: 4.9,
    reviews: 412,
    badge: "Best Seller",
    category: "electronics"
  },
  {
    id: 7,
    name: "Silk Scarf Collection",
    price: 65,
    originalPrice: 95,
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&q=80",
    rating: 4.3,
    reviews: 78,
    badge: "New",
    category: "accessories"
  },
  {
    id: 8,
    name: "Classic Denim Jacket",
    price: 119,
    originalPrice: 169,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=400&fit=crop&q=80",
    rating: 4.7,
    reviews: 145,
    badge: "Trending",
    category: "clothing"
  },
  {
    id: 9,
    name: "Professional Camera Lens",
    price: 449,
    originalPrice: 599,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop&q=80",
    rating: 4.8,
    reviews: 67,
    badge: "Pro",
    category: "electronics"
  },
  {
    id: 10,
    name: "Vintage Sunglasses",
    price: 79,
    originalPrice: 119,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&q=80",
    rating: 4.5,
    reviews: 98,
    badge: "Limited",
    category: "accessories"
  },
  {
    id: 11,
    name: "Cozy Knit Sweater",
    price: 95,
    originalPrice: 139,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&q=80",
    rating: 4.6,
    reviews: 187,
    badge: "Cozy",
    category: "clothing"
  },
  {
    id: 12,
    name: "Portable Speaker",
    price: 129,
    originalPrice: 179,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&q=80",
    rating: 4.4,
    reviews: 234,
    badge: "Sound",
    category: "electronics"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

const ProductCard: React.FC<{
  product: Product;
  isInWishlist: boolean;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
}> = ({ product, isInWishlist, onAddToCart, onToggleWishlist }) => {
  const calculateDiscount = (originalPrice: number, currentPrice: number): number => {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  return (
    <div className="group bg-white rounded-lg border border-gray-100 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={160}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-gray-900 text-white px-2 py-1 rounded-md text-xs font-bold">
            {product.badge}
          </span>
        </div>

        {/* Discount Badge */}
        <div className="absolute top-2 right-10">
          <span className="bg-green-500 text-white px-1.5 py-1 rounded-md text-xs font-bold">
            -{calculateDiscount(product.originalPrice, product.price)}%
          </span>
        </div>
        
        {/* Wishlist Button */}
        <button
          onClick={() => onToggleWishlist(product.id)}
          className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-200"
        >
          <Heart
            className={`w-3 h-3 ${
              isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-white text-gray-900 px-3 py-1.5 rounded-full font-semibold text-xs shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-200 flex items-center gap-1"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-gray-800 transition-colors line-clamp-2" 
            style={{ fontFamily: '"Inter", sans-serif' }}>
          {product.name}
        </h3>
        
        <div className="flex items-center mb-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-500 ml-1 font-medium">
            {product.rating} ({product.reviews})
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-black text-gray-900" style={{ fontFamily: '"Inter", sans-serif' }}>
              ${product.price}
            </span>
            <span className="text-xs text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          </div>
        </div>
        
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-md font-bold text-xs hover:shadow-md transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-1"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          <ShoppingBag className="w-3 h-3" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const SearchBar: React.FC<{ value: string; onChange: (value: string) => void }> = ({ value, onChange }) => (
  <div className="relative flex-1 max-w-md">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
    <input
      type="text"
      placeholder="Search amazing products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white font-medium text-sm"
      style={{ fontFamily: '"Inter", sans-serif' }}
    />
  </div>
);

const CategoryFilter: React.FC<{
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}> = ({ categories, selectedCategory, onCategoryChange }) => (
  <div className="flex gap-2 overflow-x-auto pb-2">
    {categories.map((category) => (
      <button
        key={category.id}
        onClick={() => onCategoryChange(category.id)}
        className={`px-4 py-2 rounded-lg font-bold whitespace-nowrap transition-all duration-200 text-sm ${
          selectedCategory === category.id
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
        }`}
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        {category.name} ({category.count})
      </button>
    ))}
  </div>
);

const ProductsSection: React.FC<ProductsSectionProps> = ({ 
  products = mockProducts, 
  wishlist = [], 
  onAddToCart = () => {}, 
  onToggleWishlist = () => {} 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const generateCategories = (products: Product[]): Category[] => {
    return [
      { id: 'all', name: 'All Products', count: products.length },
      { id: 'electronics', name: 'Electronics', count: products.filter(p => p.category === 'electronics').length },
      { id: 'clothing', name: 'Clothing', count: products.filter(p => p.category === 'clothing').length },
      { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
    ];
  };

  const filterProducts = (products: Product[], category: string, searchQuery: string): Product[] => {
    return products.filter(product => {
      const matchesCategory = category === 'all' || product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const categories = generateCategories(products);
  const filteredProducts = filterProducts(products, selectedCategory, searchQuery);

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            <span className="text-red-600">Trending</span>
            <span> Products</span>
          </h2>
          <p className="text-base text-gray-600 font-medium max-w-2xl mx-auto" style={{ fontFamily: '"Inter", sans-serif' }}>
            Handpicked items that everyone&apos;s talking about
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Products Grid - 4 columns */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: '"Inter", sans-serif' }}>
              No products found
            </h3>
            <p className="text-gray-500 font-medium text-sm">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isInWishlist={wishlist.includes(product.id)}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;