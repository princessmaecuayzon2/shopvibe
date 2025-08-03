import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
}

const CATEGORIES = [
  'Electronics',
  'Fashion', 
  'Books',
  'Accessories',
  'Home & Living',
  'Clothing',
  'Beauty'
];

const Logo: React.FC = () => (
  <div className="flex items-center">
    <span className="text-2xl font-black tracking-wider text-gray-900" 
          style={{ fontFamily: '"Inter", "Poppins", sans-serif', letterSpacing: '0.2em' }}>
      SHOP VIBE
    </span>
  </div>
);

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex-1 max-w-xl mx-8 relative">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search from over 50,000 products"
          className="w-full px-6 py-3 pr-12 text-gray-700 bg-gray-100 border-2 border-transparent rounded-full focus:outline-none focus:bg-white focus:border-gray-900 transition-all duration-300 text-sm"
          style={{ fontFamily: '"Inter", sans-serif' }}
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 hover:bg-gray-700 text-white rounded-full p-2 transition-colors duration-300">
          <Search className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const AuthButtons: React.FC = () => (
  <div className="flex items-center gap-3">
    <button className="px-5 py-2 text-gray-900 border-2 border-gray-900 rounded-full font-semibold text-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
      Login
    </button>
    <button className="px-5 py-2 bg-gray-900 text-white rounded-full font-semibold text-sm hover:bg-gray-700 transition-all duration-300">
      Register
    </button>
  </div>
);

const CartButton: React.FC<{ count: number }> = ({ count }) => (
  <button className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors duration-300">
    <ShoppingCart className="w-6 h-6" />
    {count > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
        {count > 99 ? '99+' : count}
      </span>
    )}
  </button>
);

const Categories: React.FC = () => (
  <nav className="bg-gray-50 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center overflow-x-auto">
        {CATEGORIES.map((category) => (
          <a
            key={category}
            href="#"
            className="relative px-6 py-4 text-gray-600 hover:text-gray-900 font-medium text-sm uppercase tracking-wide whitespace-nowrap transition-all duration-300 group"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            <span className="relative z-10">{category}</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gray-900 group-hover:w-4/5 transition-all duration-300"></div>
          </a>
        ))}
      </div>
    </div>
  </nav>
);

const MobileMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="px-4 py-6 space-y-4">
        {/* Mobile Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-3 pr-10 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-gray-900"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
        </div>
        
        {/* Mobile Auth */}
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 text-gray-900 border border-gray-900 rounded-lg font-semibold text-sm">
            Login
          </button>
          <button className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold text-sm">
            Register
          </button>
        </div>
        
        {/* Mobile Categories */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Categories</h3>
          <div className="space-y-2">
            {CATEGORIES.map((category) => (
              <a
                key={category}
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between h-16 py-4">
            <Logo />
            
            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1">
              <SearchBar />
            </div>
            
            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Desktop Auth Buttons */}
              <div className="hidden md:flex">
                <AuthButtons />
              </div>
              
              <CartButton count={cartItemCount} />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop Categories */}
        <div className="hidden md:block">
          <Categories />
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} />
    </>
  );
};

export default Header;