import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#060A12] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">Yasal</span>
        <h1 className="text-3xl sm:text-5xl font-[900] mt-3 mb-8">Gizlilik Politikası</h1>

        <div className="space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
          <p>Bu politika, NextGen Medya web sitesini ziyaret eden kullanıcıların kişisel bilgilerinin nasıl işlendiğini açıklar.</p>
          {[
            ['Veri Güvenliği', 'Veriler; yetkisiz erişim, kayıp veya kötüye kullanıma karşı güncel güvenlik önlemleriyle korunur.'],
            ['Üçüncü Taraf Hizmetler', 'Analitik ve reklam ölçümleme servisleriyle sınırlı veri paylaşımı yapılabilir; servisler kendi politikalarına tabidir.'],
            ['Saklama Süresi', 'Kişisel veriler, işleme amacı için gerekli süre boyunca veya ilgili mevzuatın öngördüğü yasal sürelerde saklanır.'],
            ['İletişim', 'Gizlilikle ilgili talepleriniz için info@nextgenmedya.com üzerinden bizimle iletişime geçebilirsiniz.']
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

export default PrivacyPage;
