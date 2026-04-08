import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ReferenceLogo = React.memo<{ name: string; logoId?: string; logoSrc?: string; services: string[]; zoom?: boolean }>(({ name, logoId, logoSrc, services, zoom }) => {
  const [error, setError] = useState(false);
  const logoUrl = logoSrc || `https://lh3.googleusercontent.com/d/${logoId}`;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur shadow-[0_10px_25px_rgba(0,0,0,.25)] hover:-translate-y-1 hover:border-cyan-200/40 transition-all duration-300">
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-cyan-300/20 blur-2xl" />
      <div className="absolute -bottom-12 -left-8 w-24 h-24 rounded-full bg-violet-300/20 blur-2xl" />

      <div className="h-32 flex items-center justify-center">
        {!error ? (
          <div className="w-full h-full border border-white/15 bg-black/40 p-2 rounded-none">
            <img
              src={logoUrl}
              alt={name}
              loading="lazy"
              className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 ${zoom ? 'scale-[1.03]' : ''}`}
              onError={() => setError(true)}
            />
          </div>
        ) : (
          <span className="text-xl font-black tracking-tight text-white/40 uppercase">{name}</span>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <h4 className="text-[10px] font-black tracking-[0.35em] text-zinc-300 uppercase mb-3">Hizmetler</h4>
        <div className="flex flex-wrap gap-2">
          {services.map((service, i) => (
            <span key={i} className="text-[11px] font-bold text-zinc-200 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              {service}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
});

ReferenceLogo.displayName = 'ReferenceLogo';

const References: React.FC = () => {
  const brands = [
    { name: 'HILLSTONE PENDIK', logoSrc: '/hillstone-logo.svg', services: ['Drone Çekimi', 'Sosyal Medya', 'Web Yönetimi', 'Lead Generation'], zoom: true },
    { name: 'ON MÜZİK', id: '1QSf3qBwqTFb7yL6x6l5f5KVDRkX0pe5D', services: ['Prodüksiyon', 'Dijital Dağıtım', 'Marka Kimliği', 'Google Ads'] },
    { name: 'MJORA BUTIK', id: '1wDaiq6v8qkkR6deMQs2PvH5AOD_gz_eg', services: ['E-Ticaret', 'Ürün Çekimi', 'Reklam Yönetimi', 'Dönüşüm Artışı'] },
    { name: 'VIRAFIT', id: '1AXuRtmnSbETxcPl2ADUPyAdle2SHvq3g', services: ['İçerik Üretimi', 'SEO', 'Mobil Uygulama', 'Performans Pazarlama'] }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#060A12] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.55em] font-[900] text-zinc-400">GÜVENEN MARKALAR</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-[900] tracking-tight text-white">Referanslarımız & Başarı Ekosistemi</h2>
            <p className="mt-3 text-zinc-400 max-w-2xl">Farklı sektörlerde elde ettiğimiz ölçülebilir sonuçlar sayesinde markaların dijital büyümesini sürdürülebilir hale getiriyoruz.</p>
          </div>
          <button className="inline-flex items-center gap-2 w-fit px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs uppercase tracking-[0.18em] font-black">
            Case Study İncele
            <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {brands.map((brand, idx) => (
            <ReferenceLogo key={idx} name={brand.name} logoId={brand.id} logoSrc={brand.logoSrc} services={brand.services} zoom={brand.zoom} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
