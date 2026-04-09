import React from 'react';
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

interface CTAProps {
  onNavigate: (page: string) => void;
}

const CTA: React.FC<CTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#111827]">
      <div className="absolute -top-28 -right-24 w-80 h-80 rounded-full bg-zinc-300/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="rounded-[2rem] border border-zinc-300/30 bg-white/10 backdrop-blur-xl p-7 sm:p-10 md:p-14 text-center shadow-2xl">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-black text-zinc-200/85 mb-5">
            <Sparkles size={14} /> Yeni Dönem Büyüme Partneriniz
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-[900] text-white tracking-tight leading-[0.95]">
            Markanızı Sıradanlıktan
            <span className="block text-zinc-300">Premium Etkiye Taşıyalım.</span>
          </h2>

          <p className="mt-5 sm:mt-6 text-zinc-200/85 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Tasarım, performans pazarlama ve içerik üretimini tek bir growth sisteminde birleştiriyor; ölçülebilir ve sürdürülebilir sonuçlar üretiyoruz.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E5E7EB] to-[#BFC6D1] text-[#111827] text-[12px] uppercase tracking-[0.22em] font-black shadow-xl"
            >
              Strateji Görüşmesi Planla
              <ArrowUpRight size={16} />
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-zinc-300/40 text-zinc-100 text-[12px] uppercase tracking-[0.22em] font-black"
            >
              Vaka Çalışmalarını İncele
            </button>
          </div>

          <div className="mt-7 inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-200 font-semibold">
            <ShieldCheck size={16} /> Şeffaf raporlama • Haftalık optimizasyon • Uçtan uca ekip desteği
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
