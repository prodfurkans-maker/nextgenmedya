
import React from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const bannerImageUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000";

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Arka Plan Görseli */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <img 
          src={bannerImageUrl} 
          alt="NextGen Medya Banner" 
          className="w-full h-full object-cover object-right opacity-80 md:opacity-100 transition-transform duration-[10000ms] hover:scale-110"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-[2px] bg-black"></div>
            <span className="text-[12px] uppercase tracking-[0.6em] font-black text-black">
              YENİ NESİL DİJİTAL ÇÖZÜMLER
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-[950] tracking-tighter text-black leading-[0.85] mb-12 uppercase">
            Geleceği <br />
            <span className="text-zinc-400">Tasarlıyoruz.</span>
          </h1>
          
          <p className="text-zinc-600 text-lg md:text-xl max-w-xl mb-12 font-semibold leading-relaxed">
            Stratejik düşünce ve yaratıcı tasarımı teknoloji ile birleştirerek markanızı dijitalin zirvesine taşıyoruz.
          </p>
          
          <div className="flex flex-wrap items-center gap-8">
            <button 
              onClick={() => onNavigate('portfolio')}
              className="bg-black text-white px-16 py-7 text-[12px] uppercase tracking-[0.4em] font-black hover:bg-zinc-800 transition-all shadow-2xl active:scale-95"
            >
              İşlerimizi Görün
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="group flex items-center space-x-6 text-[12px] uppercase tracking-[0.4em] font-black text-black"
            >
              <span>Hemen Başlayalım</span>
              <div className="w-16 h-16 rounded-full border-2 border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 transform group-hover:rotate-45">
                <span className="text-2xl">→</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Alt Dekoratif Elementler */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end space-y-4">
         <span className="text-[11px] uppercase tracking-[0.5em] font-black text-zinc-400">NEXTGEN MEDYA • 2026</span>
         <div className="w-32 h-[1px] bg-zinc-200"></div>
      </div>
    </section>
  );
};

export default Hero;
