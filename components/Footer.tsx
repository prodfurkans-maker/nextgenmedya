
import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [logoError, setLogoError] = useState(false);
  const logoUrl = "https://lh3.googleusercontent.com/d/18wpfqJGwsE1h_t3vUpcNfeSjxQVtC4ls";

  return (
    <footer className="bg-white text-black pt-32 pb-16 border-t border-zinc-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-24">
          <div className="lg:col-span-5">
            <button onClick={() => onNavigate('home')} className="mb-12 flex items-center group text-left space-x-6">
              {!logoError ? (
                <img 
                  src={logoUrl} 
                  alt="Nova Digital Footer Logo" 
                  className="h-28 md:h-32 w-auto object-contain transition-all duration-700 group-hover:scale-105 rounded-full mix-blend-multiply"
                  onError={() => setLogoError(true)}
                />
              ) : null}
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-[900] tracking-tighter text-black">
                  NextGen <span className="text-zinc-400">Medya</span>
                </span>
                <span className="text-[11px] font-black tracking-[0.5em] text-zinc-300 uppercase">Premium Agency</span>
              </div>
            </button>
            <p className="text-zinc-500 text-xl max-w-md leading-relaxed font-semibold">
              Dijital dünyada fark yaratan, yüksek enerjili ve modern stratejilerle markanızı geleceğe taşıyoruz.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <p className="text-[12px] uppercase tracking-[0.5em] font-black text-zinc-300 mb-10">MENÜ</p>
              <ul className="space-y-6 text-base font-bold text-zinc-600">
                <li><button onClick={() => onNavigate('home')} className="hover:text-black hover:translate-x-2 transition-all">Anasayfa</button></li>
                <li><button onClick={() => onNavigate('corporate')} className="hover:text-black hover:translate-x-2 transition-all">Ajansımız</button></li>
                <li><button onClick={() => onNavigate('services')} className="hover:text-black hover:translate-x-2 transition-all">Hizmetlerimiz</button></li>
                <li><button onClick={() => onNavigate('portfolio')} className="hover:text-black hover:translate-x-2 transition-all">Portfolyo</button></li>
              </ul>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.5em] font-black text-zinc-300 mb-10">KONUM</p>
              <p className="text-base text-zinc-600 leading-loose font-bold">
                Levent Loft / İstanbul<br />
                Merkezi İş Alanı<br />
                +90 212 555 0123
              </p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.5em] font-black text-zinc-300 mb-10">DİJİTAL</p>
              <a href="mailto:hello@nextgenmedya.com" className="text-lg font-[900] text-black border-b-4 border-black/10 pb-2 hover:border-black transition-all inline-block">
                hello@nextgenmedya.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[11px] font-[900] text-zinc-400 tracking-[0.5em]">© 2026 NEXTGEN MEDYA DIGITAL AGENCY</p>
          <div className="flex space-x-12 text-[11px] font-[900] text-zinc-400 tracking-widest uppercase">
            <a href="#" className="hover:text-black transition-colors">KVKK</a>
            <a href="#" className="hover:text-black transition-colors">Gizlilik Sözleşmesi</a>
            <a href="#" className="hover:text-black transition-colors">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
