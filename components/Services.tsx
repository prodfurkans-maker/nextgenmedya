import React from 'react';
import { Search, Megaphone, Video, MonitorSmartphone, Share2, Gauge, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  limit?: number;
  onNavigate?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ limit, onNavigate }) => {
  const allServices = [
    { title: 'SEO & Teknik SEO', icon: <Search />, desc: 'Site mimarisi, hız, schema, içerik cluster ve teknik audit ile organik büyüme.' },
    { title: 'Performans Reklamcılığı', icon: <Megaphone />, desc: 'Google/Meta/YouTube kampanyalarıyla ROAS odaklı ölçeklenebilir reklam yönetimi.' },
    { title: 'Video Yapımı', icon: <Video />, desc: 'Reels, reklam kreatifleri, ürün videoları ve marka filmi dahil uçtan uca prodüksiyon.' },
    { title: 'Web Site Yapımı', icon: <MonitorSmartphone />, desc: 'Mobil-first, hızlı ve dönüşüm odaklı web siteleri ve landing page altyapıları.' },
    { title: '360° Sosyal Medya', icon: <Share2 />, desc: 'Planlama, kreatif, topluluk yönetimi ve düzenli raporlama ile kanal büyümesi.' },
    { title: 'CRO & Analitik', icon: <Gauge />, desc: 'GA4 + GTM kurulumu, A/B testleri ve funnel optimizasyonu ile verimlilik artışı.' }
  ];

  const services = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 sm:mb-12 gap-4">
          <div className="max-w-4xl">
            <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400 mb-2 block">HİZMETLER</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] tracking-tight text-[#0F172A]">Yüksek Dönüşüm Odaklı Service Stack</h2>
          </div>
          {limit && onNavigate && (
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-black border border-zinc-300 rounded-xl px-4 py-3 bg-white hover:bg-zinc-100 transition-all w-fit"
            >
              Tüm Hizmetler
              <ArrowUpRight size={14} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {services.map((item, idx) => (
            <article
              key={idx}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-[900] mb-2 text-[#0F172A] tracking-tight">{item.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
