// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #244D3F20, transparent 50%)`
        }}
      />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#244D3F] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Animated 404 number */}
        <div className="relative mb-8">
          <h1 className="text-[15rem] md:text-[20rem] font-black leading-none tracking-tighter select-none">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#244D3F] via-teal-600 to-[#244D3F] animate-gradient">
              404
            </span>
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border-4 border-[#244D3F] rounded-full opacity-20 animate-ping" />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Lost in Space?
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Oops! The page you're looking for has wandered off into the digital wilderness.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white bg-[#244D3F] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">🏠 Go Back Home</span>
            <div className="absolute inset-0 bg-linear-to-r from-[#244D3F] to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 font-semibold text-[#244D3F] bg-white border-2 border-[#244D3F] rounded-xl hover:bg-[#244D3F] hover:text-white transition-all duration-300 hover:scale-105"
          >
            ← Go Back
          </button>
        </div>

        {/* Helpful links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">Or try these popular pages:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/" className="text-[#244D3F] hover:underline text-sm">Home</Link>
            <span className="text-gray-300">•</span>
            <Link to="/about" className="text-[#244D3F] hover:underline text-sm">About</Link>
            <span className="text-gray-300">•</span>
            <Link to="/contact" className="text-[#244D3F] hover:underline text-sm">Contact</Link>
            <span className="text-gray-300">•</span>
            <Link to="/blog" className="text-[#244D3F] hover:underline text-sm">Blog</Link>
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute bottom-10 left-10 animate-bounce-slow">
        <div className="w-12 h-12 border-2 border-[#244D3F] rounded-full opacity-30" />
      </div>
      <div className="absolute top-1/3 right-20 animate-spin-slow">
        <div className="w-8 h-8 border-4 border-teal-400 border-t-[#244D3F] rounded-full" />
      </div>
    </div>
  );
};

export default NotFound;