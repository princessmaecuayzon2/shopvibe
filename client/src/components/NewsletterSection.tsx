import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-slate-700/20 to-gray-700/20 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-700/20 to-slate-700/20 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 border border-slate-700 rounded-xl mb-6 shadow-lg">
          <Mail className="w-8 h-8 text-slate-300" />
        </div>
        
        {/* Content */}
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3" 
            style={{ fontFamily: '"Inter", sans-serif', letterSpacing: '-0.02em' }}>
          Stay in the Loop
        </h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-medium" 
           style={{ fontFamily: '"Inter", sans-serif' }}>
          Get exclusive deals, new arrivals, and insider updates delivered to your inbox
        </p>
        
        {/* Form */}
        {!isSubscribed ? (
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 font-medium"
                style={{ fontFamily: '"Inter", sans-serif' }}
              />
            </div>
            <button 
              onClick={handleSubscribe}
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-500"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3 max-w-md mx-auto p-4 bg-green-900/50 border border-green-700 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold" style={{ fontFamily: '"Inter", sans-serif' }}>
              Successfully subscribed! Welcome aboard.
            </span>
          </div>
        )}
        
        {/* Trust indicators */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-medium">No spam, ever</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="font-medium">Unsubscribe anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="font-medium">Exclusive offers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;