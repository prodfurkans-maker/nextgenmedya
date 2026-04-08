import React from 'react';
import { ArrowUpRight, PlayCircle } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
  onProjectSelect: (project: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen overflow-hidden bg-[#070B14] pt-28 sm:pt-32 pb-14">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=1800"
          alt="Abstract 3D background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,.25),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,.2),transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/70 via-[#070B14]/80 to-[#070B14]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          <div className="text-center lg:text-left flex flex-col justify-center">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.28em] uppercase text-zinc-200">
              Creative Digital Agency
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-[900] tracking-tight leading-[0.95] text-white">
              Geleceği Tasarlıyoruz,
              <span className="block bg-gradient-to-r from-[#C4B5FD] to-[#7DD3FC] bg-clip-text text-transparent">
                Markanızı Büyütüyoruz
              </span>
            </h1>

            <p className="mt-5 text-zinc-300 text-sm sm:text-lg max-w-2xl lg:max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Yaratıcılığı teknolojiyle birleştirerek dijital dünyada iz bırakan deneyimler inşa ediyoruz.
              NextGen Medya ile sınırları zorlayın.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#DDD6FE] to-[#BAE6FD] text-[#0F172A] text-sm font-black"
              >
                Projeye Başla
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-7 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white text-sm font-black"
              >
                Çalışmalarımız
              </button>
            </div>
          </div>

          <div className="">
            <div className="h-full min-h-[420px] lg:min-h-[520px] rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-3 shadow-2xl">
              <div className="relative h-full rounded-xl overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/8uLlnrvHiCw?autoplay=1&mute=1&controls=0&loop=1&playlist=8uLlnrvHiCw&modestbranding=1&playsinline=1"
                  title="NextGen Medya Hero Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs sm:text-sm font-bold tracking-wide">
                  <span>SHOWREEL / NEXTGEN MEDYA</span>
                  <PlayCircle size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
