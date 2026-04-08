import React from 'react';
import { TrendingUp, Target, Rocket } from 'lucide-react';

const insights = [
  {
    icon: <TrendingUp size={22} />,
    title: 'Veri Odaklı Büyüme',
    desc: 'Her kampanyayı KPI ve gelir hedefiyle yönetiyor, bütçeyi en yüksek dönüşüm sağlayan kanala göre yeniden dağıtıyoruz.'
  },
  {
    icon: <Target size={22} />,
    title: '360° Strateji',
    desc: 'SEO, web site, video prodüksiyon ve sosyal medya ekipleri tek plan üzerinden ilerleyerek marka dilinde tutarlılık sağlıyor.'
  },
  {
    icon: <Rocket size={22} />,
    title: 'Hızlı Uygulama',
    desc: 'Kampanya çıkış sürelerini kısaltan çevik çalışma modeliyle yeni kreatif ve teklifleri haftalık döngülerde optimize ediyoruz.'
  }
];

const HomeInsights: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-8 sm:mb-12">
          <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">NEDEN NEXTGEN?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-[#0F172A] tracking-tight mt-3">
            Premium Ajans Deneyimi + Ölçülebilir Sonuç
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {insights.map((item, index) => (
            <article key={index} className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">{item.title}</h3>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeInsights;
