import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">Yasal</span>
        <h1 className="text-3xl sm:text-5xl font-[900] text-[#0F172A] mt-3 mb-6">Kullanım Koşulları</h1>

        <div className="space-y-5 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>Bu web sitesini kullanan her ziyaretçi aşağıdaki kullanım koşullarını kabul etmiş sayılır.</p>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="font-extrabold text-zinc-900 mb-2">Fikri Mülkiyet</h2>
            <p>Sitede yer alan tüm metin, görsel, tasarım ve marka öğeleri NextGen Medya’ya aittir veya lisanslı olarak kullanılır.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="font-extrabold text-zinc-900 mb-2">Sorumluluk Sınırı</h2>
            <p>Web sitesindeki bilgiler bilgilendirme amaçlıdır; hizmet kapsamı ve şartları ayrıca sözleşme ile belirlenir.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="font-extrabold text-zinc-900 mb-2">Güncellemeler</h2>
            <p>NextGen Medya, kullanım koşullarını önceden bildirmeksizin güncelleme hakkını saklı tutar.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
