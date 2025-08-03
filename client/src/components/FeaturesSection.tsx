import React from 'react';
import { Truck, Shield, Headphones } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const FEATURES: Feature[] = [
  {
    icon: Truck,
    title: 'Free Shipping',
    desc: 'Free delivery on orders over $50'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    desc: 'SSL encryption & fraud protection'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Round-the-clock customer service'
  }
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="group flex items-center gap-3 p-3 bg-white border border-gray-100 hover:border-gray-300 rounded-lg transition-all duration-200 hover:shadow-sm">
    {/* Icon */}
    <div className="bg-gray-900 w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors">
      <feature.icon className="w-4 h-4 text-white" />
    </div>
    
    {/* Content */}
    <div className="min-w-0 flex-1">
      <h3 className="text-sm font-bold text-gray-900 mb-0.5" 
          style={{ fontFamily: '"Inter", sans-serif' }}>
        {feature.title}
      </h3>
      <p className="text-xs text-gray-600 leading-tight" 
         style={{ fontFamily: '"Inter", sans-serif' }}>
        {feature.desc}
      </p>
    </div>
  </div>
);

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-6 bg-gray-50 border-y border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        {/* Compact Header */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-1" 
              style={{ fontFamily: '"Inter", sans-serif' }}>
            Why Shop With Us
          </h2>
        </div>

        {/* Features Grid - Horizontal on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;