import React from 'react';
import { TrendingUp, Target, Rocket } from 'lucide-react';

const insights = [
  { icon: <TrendingUp size={22} />, title: 'Veri Odaklı Büyüme', desc: 'KPI bazlı optimizasyon ile bütçe verimliliğini artırıp sonuçları görünür hale getiriyoruz.' },
  { icon: <Target size={22} />, title: '360° Strateji', desc: 'SEO + web + video + sosyal medya ekiplerini tek tasarım sistemi ve tek hedefte topluyoruz.' },
  { icon: <Rocket size={22} />, title: 'Hızlı Uygulama', desc: 'Haftalık iterasyon modeliyle kreatif, teklif ve kampanya katmanlarını sürekli geliştiriyoruz.' }
];

const HomeInsights: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-8 sm:mb-10">
          <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">NEDEN NEXTGEN?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-[#0F172A] tracking-tight mt-3">Modern SaaS Disiplini + Kreatif Pazarlama</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {insights.map((item, index) => (
            <article key={index} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">{item.icon}</div>
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
