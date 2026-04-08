import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">Yasal</span>
        <h1 className="text-3xl sm:text-5xl font-[900] text-[#0F172A] mt-3 mb-6">Gizlilik Politikası</h1>
        <div className="space-y-5 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            Bu web sitesini ziyaret ettiğinizde paylaştığınız kişisel bilgiler, veri güvenliği standartlarına uygun olarak korunur.
          </p>
          <p>
            Çerezler, kullanıcı deneyimini geliştirmek ve performans ölçümü yapmak amacıyla kullanılabilir. Tarayıcı ayarlarınızdan çerez tercihlerini yönetebilirsiniz.
          </p>
          <p>
            Gizlilik politikamız hakkında detaylı bilgi veya veri talepleriniz için info@nextgenmedya.com üzerinden bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
