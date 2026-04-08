import React from 'react';
import { Plus } from 'lucide-react';

const faqItems = [
  {
    q: 'Digital marketing agency olarak hangi hizmetleri veriyorsunuz?',
    a: 'SEO, teknik SEO, Google Ads/PPC, Meta Ads, video prodüksiyon, web site yapımı, 360° sosyal medya yönetimi ve CRO hizmetleri sunuyoruz.'
  },
  {
    q: '360 sosyal medya yönetimi neleri kapsar?',
    a: 'İçerik planı, kreatif üretim, topluluk yönetimi, reklam optimizasyonu ve performans raporlarını kapsar.'
  },
  {
    q: 'Web site yapımı süreciniz nasıl ilerliyor?',
    a: 'Keşif, UX/UI tasarım, mobil-first geliştirme, teknik SEO kurulumları ve yayın sonrası ölçümleme adımlarıyla ilerler.'
  },
  {
    q: 'Video yapımı hizmetiniz performans pazarlamayla entegre mi?',
    a: 'Evet. Video prodüksiyon çıktıları reklam hedeflerine göre farklı platform formatlarında optimize edilir.'
  }
];

const SeoFaq: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-zinc-50">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10">
        <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400 mb-3 block">SSS</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] tracking-tight text-zinc-900 mb-8 sm:mb-10">Sık Sorulan Sorular</h2>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <article key={index} className="group bg-white border border-zinc-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base sm:text-lg font-extrabold text-zinc-900">{item.q}</h3>
                <Plus size={16} className="text-zinc-400 mt-1" />
              </div>
              <p className="mt-2 text-zinc-600 text-sm sm:text-base leading-relaxed">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoFaq;
