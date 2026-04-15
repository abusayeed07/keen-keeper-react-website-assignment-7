// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const navLinks = [
    { to: '/', label: 'Home', icon: HomeIcon },
    { to: '/timeline', label: 'Timeline', icon: ClockIcon },
    { to: '/stats', label: 'Stats', icon: ChartBarIcon },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-800">Keen<span className='text-[#244D3F]'>Keeper</span></span>
        </div>
        
        <div className="flex space-x-1 md:space-x-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center space-x-1 md:space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#244D3F] text-white font-semibold'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <link.icon className="w-5 h-5" />
              <span className="text-sm md:text-base">{link.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;