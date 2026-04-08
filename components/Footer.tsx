import React, { useState } from 'react';
import { ArrowUpRight, Instagram, Facebook, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [logoError, setLogoError] = useState(false);
  const logoUrl = 'https://lh3.googleusercontent.com/d/18wpfqJGwsE1h_t3vUpcNfeSjxQVtC4ls';

  return (
    <footer className="bg-gradient-to-b from-[#0F172A] via-[#162235] to-[#1E293B] text-white pt-20 sm:pt-24 pb-10 border-t border-cyan-200/20 relative overflow-hidden">
      <div className="absolute -top-24 right-0 w-72 h-72 bg-cyan-200/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 left-0 w-72 h-72 bg-slate-200/10 blur-3xl rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 mb-14">
          <div className="lg:col-span-5">
            <button onClick={() => onNavigate('home')} className="mb-8 flex items-center group text-left space-x-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-cyan-200/30 blur-xl" />
                {!logoError ? (
                  <img
                    src={logoUrl}
                    alt="NextGen Medya Footer Logo"
                    className="relative h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-2xl"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-2xl border border-white/20" />
                )}
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-[900] tracking-tighter text-white block">NextGen <span className="text-cyan-200">Medya</span></span>
                <span className="text-[11px] font-black tracking-[0.35em] text-zinc-300/70 uppercase">Signature Growth Agency</span>
              </div>
            </button>

            <p className="text-zinc-200/90 text-base sm:text-lg max-w-md leading-relaxed font-medium">
              SEO, video yapımı, web site geliştirme ve 360 sosyal medya yönetimiyle markanızı premium bir büyüme sistemine taşıyoruz.
            </p>

            <button
              onClick={() => onNavigate('contact')}
              className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-[#E6ECF3] to-[#C3CEDD] text-[#111827] px-5 py-3 rounded-xl text-xs uppercase tracking-[0.22em] font-black"
            >
              Ücretsiz Keşif Görüşmesi
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] font-black text-zinc-300/70 mb-6">MENÜ</p>
              <ul className="space-y-4 text-sm sm:text-base font-semibold text-zinc-200/90">
                <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Anasayfa</button></li>
                <li><button onClick={() => onNavigate('corporate')} className="hover:text-white transition-colors">Kurumsal</button></li>
                <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Hizmetler</button></li>
                <li><button onClick={() => onNavigate('portfolio')} className="hover:text-white transition-colors">Portfolyo</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">İletişim</button></li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] font-black text-zinc-300/70 mb-6">HİZMETLER</p>
              <ul className="space-y-4 text-sm sm:text-base font-semibold text-zinc-200/90">
                <li>SEO & Teknik SEO</li>
                <li>Video Yapımı</li>
                <li>Web Site Yapımı</li>
                <li>360 Sosyal Medya</li>
                <li>Google Ads / Meta Ads</li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] font-black text-zinc-300/70 mb-6">İLETİŞİM</p>
              <div className="space-y-4 text-sm sm:text-base font-semibold text-zinc-200/90">
                <a href="mailto:info@nextgenmedya.com" className="block hover:text-white">info@nextgenmedya.com</a>
                <a href="tel:05364290919" className="block hover:text-white">0536 429 09 19</a>
                <p>Levent / İstanbul</p>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20"><Instagram size={16} /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20"><Facebook size={16} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20"><Linkedin size={16} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-7 border-t border-zinc-300/25 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] sm:text-[11px] font-[900] text-zinc-300/70 tracking-[0.25em] uppercase">© 2026 NextGen Medya</p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] sm:text-[11px] font-[900] text-zinc-300/80 tracking-widest uppercase">
            <button onClick={() => onNavigate('kvkk')} className="hover:text-white transition-colors">KVKK</button>
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Gizlilik</button>
            <button onClick={() => onNavigate('cookies')} className="hover:text-white transition-colors">Çerez</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Kullanım Koşulları</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
