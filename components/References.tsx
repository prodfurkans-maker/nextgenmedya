import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ReferenceLogo = React.memo<{ name: string; logoId: string; services: string[]; zoom?: boolean }>(({ name, logoId, services, zoom }) => {
  const [error, setError] = useState(false);
  const logoUrl = `https://lh3.googleusercontent.com/d/${logoId}`;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-indigo-100/40 blur-2xl" />

      <div className="h-28 flex items-center justify-center">
        {!error ? (
          <img
            src={logoUrl}
            alt={name}
            loading="lazy"
            className={`object-contain transition-transform duration-500 group-hover:scale-105 ${zoom ? 'max-w-[210px] max-h-[140px]' : 'max-w-[170px] max-h-[120px]'}`}
            onError={() => setError(true)}
          />
        ) : (
          <span className="text-xl font-black tracking-tight text-black/30 uppercase">{name}</span>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-zinc-100">
        <h4 className="text-[10px] font-black tracking-[0.35em] text-zinc-400 uppercase mb-3">Hizmetler</h4>
        <div className="flex flex-wrap gap-2">
          {services.map((service, i) => (
            <span key={i} className="text-[11px] font-bold text-zinc-600 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-200">
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
    { name: 'HILLSTONE PENDIK', id: '1mpzqBGdkaSVV4dCzemn8REuPcQlF2ldm', services: ['Drone Çekimi', 'Sosyal Medya', 'Web Yönetimi'], zoom: true },
    { name: 'ON MÜZİK', id: '1QSf3qBwqTFb7yL6x6l5f5KVDRkX0pe5D', services: ['Prodüksiyon', 'Dijital Dağıtım', 'Marka Kimliği'] },
    { name: 'MJORA BUTIK', id: '1wDaiq6v8qkkR6deMQs2PvH5AOD_gz_eg', services: ['E-Ticaret', 'Ürün Çekimi', 'Reklam Yönetimi'] },
    { name: 'VIRAFIT', id: '1AXuRtmnSbETxcPl2ADUPyAdle2SHvq3g', services: ['İçerik Üretimi', 'SEO', 'Mobil Uygulama'] }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.55em] font-[900] text-zinc-400">GÜVENEN MARKALAR</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-[900] tracking-tight text-[#0F172A]">Referanslarımız & Başarı Ekosistemi</h2>
            <p className="mt-3 text-zinc-600 max-w-2xl">Farklı sektörlerde elde ettiğimiz ölçülebilir sonuçlar sayesinde markaların dijital büyümesini sürdürülebilir hale getiriyoruz.</p>
          </div>
          <button className="inline-flex items-center gap-2 w-fit px-4 py-2.5 rounded-xl bg-zinc-900 text-white text-xs uppercase tracking-[0.18em] font-black">
            Case Study İncele
            <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {brands.map((brand, idx) => (
            <ReferenceLogo key={idx} name={brand.name} logoId={brand.id} services={brand.services} zoom={brand.zoom} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
