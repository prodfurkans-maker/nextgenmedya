import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { id: 'home', name: 'Anasayfa' },
    { id: 'corporate', name: 'Kurumsal' },
    { id: 'services', name: 'Hizmetler' },
    { id: 'portfolio', name: 'Portfolyo' },
    { id: 'contact', name: 'İletişim' }
  ];

  const logoUrl = 'https://lh3.googleusercontent.com/d/18wpfqJGwsE1h_t3vUpcNfeSjxQVtC4ls';

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-3 sm:top-4 left-3 right-3 sm:left-6 sm:right-6 z-[60] transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? 'bg-[#0D1323]/90 backdrop-blur-xl border border-indigo-300/20 shadow-2xl rounded-2xl py-2.5'
            : 'bg-[#0D1323]/70 backdrop-blur-lg border border-indigo-300/10 rounded-2xl py-3.5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-3 sm:px-5 md:px-7 flex items-center justify-between gap-3">
          <button onClick={() => handleNavigate('home')} className="flex items-center space-x-3 text-left group min-w-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl blur-lg bg-indigo-400/40" />
              {!logoError ? (
                <img
                  src={logoUrl}
                  alt="NextGen Medya Logo"
                  loading="lazy"
                  className={`relative rounded-2xl object-contain transition-all duration-500 border border-white/30 bg-white/90 p-1 ${
                    isScrolled ? 'h-10 w-10 sm:h-11 sm:w-11' : 'h-11 w-11 sm:h-12 sm:w-12'
                  }`}
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-white/90 border border-white/30" />
              )}
            </div>
            <div className="min-w-0">
              <p className="font-[900] tracking-tight text-sm sm:text-base md:text-lg text-white truncate">
                NextGen <span className="text-indigo-200">Medya</span>
              </p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-indigo-100/70 font-bold truncate">
                Premium Growth Studio
              </p>
            </div>
          </button>

          <div className="hidden xl:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`relative px-4 py-2.5 rounded-xl text-[12px] uppercase tracking-[0.2em] font-black transition-all ${
                  activePage === link.id
                    ? 'text-[#0D1323] bg-white shadow-lg'
                    : 'text-indigo-100/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavigate('contact')}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#F8D57E] to-[#E8B84A] text-[#111827] text-[11px] uppercase tracking-[0.2em] font-black px-4 md:px-6 py-3 rounded-xl hover:brightness-95 transition-all"
            >
              Teklif Al
              <ArrowUpRight size={14} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center rounded-xl p-2.5 bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Menü"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 230 }}
              className="ml-auto h-full w-[88%] max-w-sm bg-[#0D1323] p-6 flex flex-col border-l border-indigo-300/20"
            >
              <div className="flex items-center justify-between mb-8">
                <p className="font-black uppercase tracking-[0.24em] text-xs text-indigo-100/60">Menü</p>
                <Sparkles size={16} className="text-indigo-100/60" />
              </div>

              <div className="space-y-3">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.06 }}
                    onClick={() => handleNavigate(link.id)}
                    className={`w-full text-left px-4 py-4 rounded-2xl font-extrabold tracking-tight text-2xl transition-all ${
                      activePage === link.id ? 'bg-white text-[#0D1323]' : 'bg-white/5 text-white'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-indigo-200/20 space-y-3">
                <a href="mailto:info@nextgenmedya.com" className="block text-white font-bold text-sm">
                  info@nextgenmedya.com
                </a>
                <a href="tel:05434123380" className="block text-indigo-100/70 font-semibold text-sm">
                  0543 412 33 80
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
