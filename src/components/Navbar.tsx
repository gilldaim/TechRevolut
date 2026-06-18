import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
}

export default function Navbar({}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Logo className="h-10 w-10 hover:scale-[1.02] transition-transform duration-200" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-red-brand font-medium tracking-wide transition-colors duration-200 text-sm"
            >
              How It Works
            </a>
            <a
              href="#reviews"
              className="text-gray-600 hover:text-red-brand font-medium tracking-wide transition-colors duration-200 text-sm"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-red-brand font-medium tracking-wide transition-colors duration-200 text-sm"
            >
              Contact
            </a>
          </div>

          {/* Desktop Call To Action */}
          <div className="hidden md:flex items-center space-x-3.5">
            {/* Support WhatsApp Link */}
            <a
              href="https://wa.me/18022556509"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center space-x-1.5 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-250/60 px-3 py-1.5 rounded-lg text-xs font-black transition cursor-pointer"
              title="Message our team on WhatsApp at 802-255-6509"
            >
              <span className="text-sm">💬</span>
              <span>WhatsApp Support</span>
            </a>

            <a
              href="#contact"
              className="bg-red-brand text-white hover:bg-red-700 font-semibold text-sm px-5 py-2.5 rounded-lg flex items-center space-x-2 shadow-lg shadow-red-600/15 hover:shadow-red-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Check My Bill</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-brand p-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-auto left-0 right-0 bg-white shadow-xl border-b border-gray-100 transition-all duration-300">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-red-brand transition"
            >
              How It Works
            </a>
            <a
              href="#reviews"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-red-brand transition"
            >
              Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-red-brand transition"
            >
              Contact
            </a>
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
              {/* Mobile WhatsApp Button */}
              <a
                href="https://wa.me/18022556509"
                target="_blank"
                referrerPolicy="no-referrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl border bg-emerald-50 text-emerald-900 border-emerald-250/70 font-extrabold flex items-center justify-center space-x-2 text-xs transition-all cursor-pointer"
              >
                <span>💬</span>
                <span>WhatsApp: +1 (802) 255-6509</span>
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-red-brand text-white hover:bg-red-700 py-3 rounded-lg font-semibold text-sm flex items-center justify-center space-x-2 shadow-md shadow-red-600/10"
              >
                <span>Check My Bill</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
