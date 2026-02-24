
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { id: 'home', name: 'Anasayfa' },
    { id: 'corporate', name: 'Kurumsal' },
    { id: 'services', name: 'Hizmetler' },
    { id: 'portfolio', name: 'Portfolyo' },
    { id: 'contact', name: 'İletişim' },
  ];

  const logoUrl = "https://lh3.googleusercontent.com/d/18wpfqJGwsE1h_t3vUpcNfeSjxQVtC4ls";

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          isScrolled || isMenuOpen ? 'glass-nav border-b border-gray-100 py-3' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigate('home')}
              className="flex items-center group space-x-4"
            >
              {!logoError ? (
                <img 
                  src={logoUrl} 
                  alt="Nova Digital Logo" 
                  className={`transition-all duration-500 object-contain hover:rotate-3 rounded-full mix-blend-multiply ${
                    isScrolled ? 'h-16 md:h-20' : 'h-24 md:h-32'
                  }`}
                  onError={() => setLogoError(true)}
                />
              ) : null}
              <div className="flex flex-col items-start leading-none">
                <span className={`font-[900] tracking-tighter text-black transition-all duration-500 ${
                  isScrolled ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'
                }`}>
                  NextGen <span className="text-zinc-400">Medya</span>
                </span>
                <span className="text-[10px] font-black tracking-[0.4em] text-zinc-300 mt-1 uppercase">Digital Agency</span>
              </div>
            </button>
          </div>

          <div className="hidden xl:flex items-center space-x-14">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`text-[13px] uppercase tracking-[0.25em] font-black transition-all relative py-2 ${
                  activePage === link.id ? 'text-black' : 'text-zinc-400 hover:text-black'
                }`}
              >
                {link.name}
                {activePage === link.id && (
                  <motion.span 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[4px] bg-black rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <button 
              onClick={() => handleNavigate('contact')}
              className="hidden sm:block bg-black text-white text-[12px] uppercase tracking-[0.3em] font-[900] px-10 py-4 hover:bg-zinc-800 transition-all shadow-2xl active:scale-95"
            >
              Teklif Alın
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden text-black ml-6 p-3 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors z-[70]"
            >
              {isMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-white flex flex-col"
          >
            <div className="flex-grow flex flex-col justify-center px-10 pt-20">
              <div className="space-y-8">
                {navLinks.map((link, idx) => (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    key={link.id}
                    onClick={() => handleNavigate(link.id)}
                    className="flex items-center justify-between w-full group"
                  >
                    <span className={`text-5xl md:text-7xl font-[900] tracking-tighter uppercase transition-colors ${
                      activePage === link.id ? 'text-black' : 'text-zinc-200 group-hover:text-black'
                    }`}>
                      {link.name}
                    </span>
                    <ArrowRight 
                      className={`transition-all duration-500 ${
                        activePage === link.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0'
                      }`} 
                      size={40} 
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="p-10 border-t border-zinc-100 bg-zinc-50 flex flex-col md:flex-row md:items-center justify-between gap-8"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase mb-2">Bize Ulaşın</span>
                <a href="mailto:info@nextgenmedya.com" className="text-xl font-black text-black hover:text-zinc-600 transition-colors">
                  info@nextgenmedya.com
                </a>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-zinc-200 hover:bg-black hover:text-white transition-all shadow-sm">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-zinc-200 hover:bg-black hover:text-white transition-all shadow-sm">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-zinc-200 hover:bg-black hover:text-white transition-all shadow-sm">
                  <Twitter size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
