import React from 'react';

const KvkkPage: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">Yasal</span>
        <h1 className="text-3xl sm:text-5xl font-[900] text-[#0F172A] mt-3 mb-6">KVKK Aydınlatma Metni</h1>

        <div className="space-y-5 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>NextGen Medya olarak kişisel verilerinizi 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında, hukuka ve dürüstlük kurallarına uygun şekilde işleriz.</p>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="font-extrabold text-zinc-900 mb-2">İşlenen Veri Kategorileri</h2>
            <p>Kimlik bilgileri, iletişim bilgileri, talep/mesaj içerikleri, işlem güvenliği kayıtları ve pazarlama izin tercihleri.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="font-extrabold text-zinc-900 mb-2">İşleme Amaçları</h2>
            <p>Teklif süreçlerinin yürütülmesi, müşteri iletişimi, hizmet operasyonları, sözleşmesel yükümlülükler ve yasal zorunlulukların yerine getirilmesi.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="font-extrabold text-zinc-900 mb-2">Haklarınız</h2>
            <p>KVKK’nın 11. maddesi kapsamındaki erişim, düzeltme, silme, itiraz ve kısıtlama haklarınızı info@nextgenmedya.com adresi üzerinden kullanabilirsiniz.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KvkkPage;
