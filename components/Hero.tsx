import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, ShieldCheck, PlayCircle } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
  onProjectSelect: (project: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,140,248,.22),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(251,191,36,.15),transparent_35%)]" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-bold text-indigo-700 shadow-sm">
              <Sparkles size={14} /> 2025 UI/UX trendleriyle tasarlanan premium growth partner
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[950] tracking-tight text-[#0F172A] leading-[0.95]">
              Digital Growth için
              <span className="block text-indigo-700">Yüksek Dönüşüm Odaklı</span>
              Tasarım + Pazarlama
            </h1>

            <p className="mt-5 text-zinc-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              SEO, video yapımı, web site geliştirme ve 360° sosyal medya yönetimini tek sistemde birleştiriyoruz.
              Sonuç: daha yüksek güven, daha güçlü marka algısı ve daha fazla dönüşüm.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white text-sm font-black tracking-wide shadow-lg"
              >
                Ücretsiz Strateji Görüşmesi
                <ArrowUpRight size={16} />
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-300 bg-white text-zinc-800 text-sm font-black tracking-wide"
              >
                Başarı Hikayeleri
              </button>
            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {['14+ sektörde aktif proje', 'Ortalama 3.8x ROAS', 'Mobil-first dönüşüm odaklı UX'].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-zinc-200 bg-white/90 backdrop-blur p-4 sm:p-5 shadow-xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-zinc-200">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/8uLlnrvHiCw?autoplay=1&mute=1&controls=0&loop=1&playlist=8uLlnrvHiCw&modestbranding=1&playsinline=1"
                  title="NextGen Medya Showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <p className="text-white text-xs font-extrabold tracking-wider uppercase">SHOWREEL / DİJİTAL BÜYÜME</p>
                  <PlayCircle size={20} className="text-white" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="rounded-2xl border border-zinc-200 p-4 bg-zinc-50">
                  <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">Lead Maliyeti</p>
                  <p className="text-2xl font-[900] text-[#0F172A] mt-2">-42%</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 p-4 bg-zinc-50">
                  <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">Dönüşüm Oranı</p>
                  <p className="text-2xl font-[900] text-[#0F172A] mt-2">+31%</p>
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 flex items-start gap-2">
                <ShieldCheck size={18} className="text-emerald-600 mt-0.5" />
                <p className="text-sm text-emerald-800 font-semibold">Strateji + tasarım + performans tek ekipte, haftalık optimize edilir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
