import React from 'react';

const CookiePolicyPage: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#060A12] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">Yasal</span>
        <h1 className="text-3xl sm:text-5xl font-[900] mt-3 mb-8">Çerez Politikası</h1>

        <div className="space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
          <p>Bu site, kullanıcı deneyimini geliştirmek ve performansı ölçmek amacıyla çerezler kullanır.</p>
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-5">
            <h2 className="font-extrabold text-white mb-2">Çerez Türleri</h2>
            <p>Zorunlu çerezler sitenin çalışması için gereklidir. Analitik ve pazarlama çerezleri onayınıza bağlıdır.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-5">
            <h2 className="font-extrabold text-white mb-2">Tercih Yönetimi</h2>
            <p>Çerez tercihlerinizi tarayıcı ayarlarınızdan veya sitedeki çerez bildirimi üzerinden güncelleyebilirsiniz.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-5">
            <h2 className="font-extrabold text-white mb-2">Reklam ve Analitik Çerezleri</h2>
            <p>Analitik çerezler ziyaret davranışlarını anlamamıza, reklam çerezleri ise kampanyaların performansını ölçmemize yardımcı olur.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicyPage;
