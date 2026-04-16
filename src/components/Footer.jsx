import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] border-t border-red-900/50 pt-16 pb-10">
      {/* Logo & Description */}
      <div className="text-center space-y-3.5 mb-12">
        <h2 className="text-6xl font-bold text-white">KeenKeeper</h2>
        <p className="text-sm text-gray-300  mx-auto px-4">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
      </div>

      {/* Social Links */}
      <div className="text-center mb-12">
        <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>
        <div className="gap-4 flex justify-center">
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white/10 hover:bg-red-500/30 p-3 rounded-full transition-colors"
            aria-label="Instagram"
          >
            <RiInstagramFill className="text-2xl text-white hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://www.facebook.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white/10 hover:bg-blue-600/30 p-3 rounded-full transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookSquare className="text-2xl text-white hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://x.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white/10 hover:bg-gray-600/30 p-3 rounded-full transition-colors"
            aria-label="Twitter/X"
          >
            <RiTwitterXFill className="text-2xl text-white hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 max-w-7xl mx-auto px-6">
        <div>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;