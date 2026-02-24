
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Anasayfa' },
    { id: 'corporate', name: 'Kurumsal' },
    { id: 'services', name: 'Hizmetler' },
    { id: 'portfolio', name: 'Portfolyo' },
    { id: 'contact', name: 'İletişim' },
  ];

  const logoUrl = "https://lh3.googleusercontent.com/d/18wpfqJGwsE1h_t3vUpcNfeSjxQVtC4ls";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav border-b border-gray-100 py-3' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={() => onNavigate('home')}
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
              onClick={() => onNavigate(link.id)}
              className={`text-[13px] uppercase tracking-[0.25em] font-black transition-all relative py-2 ${
                activePage === link.id ? 'text-black' : 'text-zinc-400 hover:text-black'
              }`}
            >
              {link.name}
              {activePage === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-black rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center">
          <button 
            onClick={() => onNavigate('contact')}
            className="hidden sm:block bg-black text-white text-[12px] uppercase tracking-[0.3em] font-[900] px-10 py-4 hover:bg-zinc-800 transition-all shadow-2xl active:scale-95"
          >
            Teklif Alın
          </button>
          <button className="xl:hidden text-black ml-6 p-2 bg-zinc-100 rounded-full">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
