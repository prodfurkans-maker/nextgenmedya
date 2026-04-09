import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#060A12] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">Yasal</span>
        <h1 className="text-3xl sm:text-5xl font-[900] mt-3 mb-8">Kullanım Koşulları</h1>

        <div className="space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
          <p>Bu web sitesini kullanan her ziyaretçi aşağıdaki kullanım koşullarını kabul etmiş sayılır.</p>
          {[
            ['Fikri Mülkiyet', 'Sitedeki tüm metin, görsel, tasarım ve marka öğeleri NextGen Medya’ya aittir veya lisanslı olarak kullanılır.'],
            ['Sorumluluk Sınırı', 'Web sitesindeki bilgiler bilgilendirme amaçlıdır; hizmet kapsamı ve şartları ayrıca sözleşme ile belirlenir.'],
            ['Kullanıcı Yükümlülükleri', 'Kullanıcılar siteyi hukuka ve dürüst kullanım kurallarına uygun biçimde kullanmayı kabul eder.'],
            ['Güncellemeler', 'NextGen Medya, kullanım koşullarını önceden bildirmeksizin güncelleme hakkını saklı tutar.']
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/15 bg-white/[0.03] p-5">
              <h2 className="font-extrabold text-white mb-2">{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
