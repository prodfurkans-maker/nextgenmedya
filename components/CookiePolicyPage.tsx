import React from 'react';

const CookiePolicyPage: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">Yasal</span>
        <h1 className="text-3xl sm:text-5xl font-[900] text-[#0F172A] mt-3 mb-6">Çerez Politikası</h1>
        <div className="space-y-5 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            Bu site, kullanıcı deneyimini geliştirmek, performansı ölçmek ve pazarlama süreçlerini optimize etmek amacıyla çerezler kullanır.
          </p>
          <p>
            Zorunlu çerezler sitenin çalışması için gereklidir. Analitik ve pazarlama çerezleri ise yalnızca onay vermeniz halinde aktif olur.
          </p>
          <p>
            Çerez tercihlerinizi tarayıcı ayarlarınızdan veya sitedeki çerez bildirimi üzerinden dilediğiniz zaman güncelleyebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicyPage;
