// src/components/Footer.jsx
import { HeartIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">F</span>
            </div>
            <span className="text-gray-600 text-sm">© 2025 FriendTracker</span>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <span>Made with</span>
            <HeartIcon className="w-4 h-4 text-red-500" />
            <span>to keep friendships alive</span>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;