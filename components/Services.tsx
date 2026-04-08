import React from 'react';
import { Search, Megaphone, Video, MonitorSmartphone, Share2, Gauge, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  limit?: number;
  onNavigate?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ limit, onNavigate }) => {
  const allServices = [
    {
      title: 'SEO & Teknik SEO',
      icon: <Search />,
      desc: 'Site mimarisi, hız optimizasyonu, schema, teknik audit, anahtar kelime kümeleri ve içerik stratejisi ile sürdürülebilir organik büyüme.'
    },
    {
      title: 'Performans Reklamcılığı',
      icon: <Megaphone />,
      desc: 'Google Ads, Meta Ads, YouTube ve remarketing kurguları ile ROAS odaklı kampanya yönetimi ve günlük optimizasyon.'
    },
    {
      title: 'Video Yapımı',
      icon: <Video />,
      desc: 'Reels, kısa-form reklam videoları, marka filmi ve ürün videoları dahil uçtan uca prodüksiyon ve post-prodüksiyon hizmeti.'
    },
    {
      title: 'Web Site Yapımı',
      icon: <MonitorSmartphone />,
      desc: 'Mobil-first, hızlı ve SEO uyumlu kurumsal web siteleri ile landing page altyapıları; dönüşüm odaklı UX/UI tasarım.'
    },
    {
      title: '360° Sosyal Medya Yönetimi',
      icon: <Share2 />,
      desc: 'İçerik planlama, kreatif üretim, topluluk yönetimi, aylık raporlama ve kanal bazlı büyüme stratejileri.'
    },
    {
      title: 'CRO & Analitik',
      icon: <Gauge />,
      desc: 'GA4, Tag Manager, dönüşüm izleme, A/B testleri ve funnel optimizasyonu ile pazarlama bütçesini verimli hale getirme.'
    }
  ];

  const services = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 sm:mb-16 gap-6">
          <div className="max-w-4xl">
            <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400 mb-3 block">HİZMETLER</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-[900] tracking-tight text-zinc-900 mb-4">Digital Marketing Agency Çözümleri</h2>
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-3xl font-medium">
              Global agency standartlarına uygun şekilde SEO, performans reklamcılığı, video üretimi, web site geliştirme ve 360 sosyal medya yönetimini tek ekipte birleştiriyoruz.
            </p>
          </div>
          {limit && onNavigate && (
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-black border border-zinc-200 rounded-xl px-4 py-3 hover:bg-zinc-900 hover:text-white transition-all w-fit"
            >
              Tüm Hizmetler
              <ArrowUpRight size={14} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {services.map((item, idx) => (
            <article
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl group border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 mb-6 text-zinc-900 bg-zinc-100 rounded-xl flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-[900] mb-3 text-zinc-900">{item.title}</h3>
              <p className="text-sm sm:text-base text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
