import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">Yasal</span>
        <h1 className="text-3xl sm:text-5xl font-[900] text-[#0F172A] mt-3 mb-6">Kullanım Koşulları</h1>
        <div className="space-y-5 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            NextGen Medya web sitesini kullanan tüm ziyaretçiler, sitede yer alan içeriklerin fikri mülkiyet haklarına saygı göstermeyi kabul eder.
          </p>
          <p>
            Sitedeki bilgi ve içerikler bilgilendirme amaçlıdır. Hizmet koşulları, proje kapsamına göre sözleşme ile ayrıca belirlenir.
          </p>
          <p>
            Bu kullanım koşulları gerekli görüldüğünde güncellenebilir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
