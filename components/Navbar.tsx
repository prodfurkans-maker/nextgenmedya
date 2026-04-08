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
            ? 'bg-white/90 backdrop-blur-xl border border-zinc-200 shadow-xl rounded-2xl py-2.5'
            : 'bg-white/70 backdrop-blur-lg border border-zinc-100/80 rounded-2xl py-3.5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-3 sm:px-5 md:px-7 flex items-center justify-between gap-3">
          <button onClick={() => handleNavigate('home')} className="flex items-center space-x-3 text-left group min-w-0">
            {!logoError ? (
              <img
                src={logoUrl}
                alt="NextGen Medya Logo"
                loading="lazy"
                className={`rounded-2xl object-contain transition-all duration-500 ${
                  isScrolled ? 'h-10 w-10 sm:h-11 sm:w-11' : 'h-11 w-11 sm:h-12 sm:w-12'
                }`}
                onError={() => setLogoError(true)}
              />
            ) : null}
            <div className="min-w-0">
              <p className="font-[900] tracking-tight text-sm sm:text-base md:text-lg text-zinc-900 truncate">
                NextGen <span className="text-zinc-400">Medya</span>
              </p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-zinc-500 font-bold truncate">
                Growth & Creative Studio
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
                    ? 'text-white bg-zinc-900 shadow-lg'
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavigate('contact')}
              className="hidden sm:inline-flex items-center gap-2 bg-zinc-900 text-white text-[11px] uppercase tracking-[0.2em] font-black px-4 md:px-6 py-3 rounded-xl hover:bg-black transition-all"
            >
              Teklif Al
              <ArrowUpRight size={14} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center rounded-xl p-2.5 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors"
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
            className="fixed inset-0 z-[55] bg-black/45 backdrop-blur-sm"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 230 }}
              className="ml-auto h-full w-[88%] max-w-sm bg-white p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <p className="font-black uppercase tracking-[0.24em] text-xs text-zinc-400">Menü</p>
                <Sparkles size={16} className="text-zinc-400" />
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
                      activePage === link.id ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-900'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-zinc-100 space-y-3">
                <a href="mailto:info@nextgenmedya.com" className="block text-zinc-900 font-bold text-sm">
                  info@nextgenmedya.com
                </a>
                <a href="tel:05434123380" className="block text-zinc-500 font-semibold text-sm">
                  0543 412 33 80
                </a>
                <button
                  onClick={() => handleNavigate('contact')}
                  className="mt-3 w-full bg-zinc-900 text-white py-3 rounded-xl text-xs uppercase tracking-[0.2em] font-black"
                >
                  Hemen Başlayalım
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
