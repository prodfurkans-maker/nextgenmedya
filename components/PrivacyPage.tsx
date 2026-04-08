import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">Yasal</span>
        <h1 className="text-3xl sm:text-5xl font-[900] text-[#0F172A] mt-3 mb-6">Gizlilik Politikası</h1>

        <div className="space-y-5 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>Bu politika, NextGen Medya web sitesini ziyaret eden kullanıcıların kişisel bilgilerinin nasıl işlendiğini ve korunduğunu açıklar.</p>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="font-extrabold text-zinc-900 mb-2">Veri Güvenliği</h2>
            <p>Veriler; yetkisiz erişim, kayıp veya kötüye kullanıma karşı güncel güvenlik önlemleriyle korunur.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="font-extrabold text-zinc-900 mb-2">Üçüncü Taraf Hizmetler</h2>
            <p>Analitik ve reklam ölçümleme servisleriyle sınırlı veri paylaşımı yapılabilir. Bu servisler kendi gizlilik politikalarına tabidir.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="font-extrabold text-zinc-900 mb-2">İletişim</h2>
            <p>Gizlilikle ilgili talepleriniz için info@nextgenmedya.com üzerinden bizimle iletişime geçebilirsiniz.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
