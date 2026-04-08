import React from 'react';
import { PlayCircle } from 'lucide-react';

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
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,.3),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,.25),transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/70 via-[#070B14]/85 to-[#070B14]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h1 className="mt-2 text-5xl sm:text-6xl md:text-7xl font-[900] tracking-tight leading-[0.95] text-white">
              Geleceği Tasarlıyoruz,
              <span className="block bg-gradient-to-r from-[#C4B5FD] to-[#7DD3FC] bg-clip-text text-transparent">
                Markanızı Büyütüyoruz
              </span>
            </h1>

            <p className="mt-5 text-zinc-300 text-sm sm:text-lg max-w-2xl lg:max-w-xl mx-auto lg:mx-0 leading-relaxed">
              SEO, performans reklamcılığı, web site yapımı, video prodüksiyon ve 360 sosyal medya yönetimini tek growth çatısı altında birleştiriyor;
              markanız için sürdürülebilir müşteri kazanımı sağlıyoruz.
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

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-violet-400/25 to-cyan-300/20 blur-3xl" />
            <div className="relative h-full min-h-[430px] lg:min-h-[560px] rounded-[28px] border border-white/20 bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl p-3 sm:p-4 shadow-[0_30px_90px_rgba(0,0,0,.45)]">
              <div className="relative h-full rounded-2xl overflow-hidden border border-white/15">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/8uLlnrvHiCw?autoplay=1&mute=1&controls=1&loop=1&playlist=8uLlnrvHiCw&modestbranding=1&playsinline=1"
                  title="NextGen Medya Hero Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

                <span className="absolute top-4 left-4 rounded-full border border-white/35 bg-black/40 px-3 py-1 text-[10px] font-black tracking-[0.25em] uppercase text-zinc-100 backdrop-blur">
                  NextGen Showreel
                </span>

                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-white text-[11px] sm:text-xs font-black tracking-[0.2em] uppercase">Video Prodüksiyon</p>
                    <p className="text-zinc-200 text-xs sm:text-sm font-semibold">Marka hikayenizi premium görsel dille anlatıyoruz</p>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/30 flex items-center justify-center text-white">
                    <PlayCircle size={20} />
                  </div>
                </div>

                <div className="absolute left-4 right-4 bottom-20 h-1.5 rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full w-1/3 bg-gradient-to-r from-[#C4B5FD] to-[#7DD3FC]" />
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
