
import React from 'react';

interface CTAProps {
  onNavigate: (page: string) => void;
}

const CTA: React.FC<CTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-40 bg-[#121212] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[11px] uppercase tracking-[0.6em] font-black text-zinc-500 mb-10 block">HAYALİNİZDEKİ PROJE</span>
          <h2 className="text-5xl md:text-[100px] font-[900] text-white mb-20 tracking-tighter leading-[0.85]">
            Sınırları <br /> <span className="text-zinc-600">Birlikte Aşalım.</span>
          </h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="group relative inline-flex items-center justify-center px-20 py-8 font-black bg-white text-black text-[12px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-zinc-100 shadow-2xl"
          >
            <span className="relative z-10">Bir Adım Atın</span>
            <div className="absolute inset-0 bg-zinc-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
