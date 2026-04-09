import React from 'react';
import { Search, Megaphone, Palette, ArrowUpRight, Video, Globe, BarChart3 } from 'lucide-react';

interface ServicesProps {
  limit?: number;
  onNavigate?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ limit, onNavigate }) => {
  const allServices = [
    { title: 'Dijital Deneyim Tasarımı', icon: <Palette />, desc: 'Kullanıcı odaklı, modern ve yüksek performanslı web arayüzleri geliştiriyoruz.' },
    { title: 'Stratejik Pazarlama', icon: <Megaphone />, desc: 'Markanızın sesini doğru kitleye, en etkili kanallar üzerinden ulaştırıyoruz.' },
    { title: 'SEO & Teknik Büyüme', icon: <Search />, desc: 'Organik görünürlük için teknik SEO, içerik stratejisi ve dönüşüm optimizasyonu sunuyoruz.' },
    { title: 'Video Prodüksiyon', icon: <Video />, desc: 'Marka hikayenizi platforma uygun dikey/yatay video setleriyle ölçeklenebilir hale getiriyoruz.' },
    { title: 'Web Site Yapımı', icon: <Globe />, desc: 'Hızlı, SEO uyumlu ve dönüşüm odaklı kurumsal/e-ticaret web siteleri geliştiriyoruz.' },
    { title: 'Performans Raporlama', icon: <BarChart3 />, desc: 'Kanal bazlı KPI panelleri ve haftalık test-öğren döngüsü ile net görünürlük sağlıyoruz.' }
  ];

  const services = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section className="py-16 sm:py-20 bg-[#070B14]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        {!limit && (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 mb-8 sm:mb-10">
            <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">HİZMETLER</span>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-[900] text-white tracking-tight">Büyüme için Uçtan Uca Servis Ekosistemi</h1>
            <p className="mt-4 text-zinc-300 max-w-3xl">
              Strateji, kreatif üretim, medya satın alma, SEO ve teknik altyapı katmanlarını tek ekipte birleştirerek sürdürülebilir büyüme, kaliteli lead üretimi
              ve satış odaklı dijital performans sağlıyoruz.
            </p>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 sm:mb-12 gap-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-[900] tracking-tight text-white">
              Uzmanlık <span className="text-[#C4B5FD]">Alanlarımız</span>
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">Modern dijital ihtiyaçlarınız için uçtan uca, premium çözümler üretiyoruz.</p>
          </div>
          {limit && onNavigate && (
            <button onClick={() => onNavigate('services')} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-black text-white border border-white/15 rounded-xl px-4 py-3">
              Tüm Hizmetler
              <ArrowUpRight size={14} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {services.map((item, idx) => (
            <article key={idx} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm hover:bg-white/[0.06] hover:-translate-y-1 transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#A78BFA]/20 text-[#C4B5FD] flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-[900] mb-2 text-white tracking-tight">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>

        {!limit && (
          <p className="mt-8 text-sm text-zinc-400 leading-relaxed max-w-4xl">
            Hizmet paketlerimiz; e-ticaret, sağlık, inşaat, eğitim ve kurumsal markalar için sektör dinamiklerine göre özelleştirilir. Böylece reklam bütçesi verimliliği,
            organik görünürlük ve marka güveni aynı anda güçlenir.
          </p>
        )}
      </div>
    </section>
  );
};

export default Services;
