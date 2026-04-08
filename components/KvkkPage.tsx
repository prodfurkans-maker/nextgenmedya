import React from 'react';

const KvkkPage: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">Yasal</span>
        <h1 className="text-3xl sm:text-5xl font-[900] text-[#0F172A] mt-3 mb-6">KVKK Aydınlatma Metni</h1>
        <div className="space-y-5 text-zinc-600 leading-relaxed text-sm sm:text-base">
          <p>
            NextGen Medya olarak kişisel verilerinizi, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında hukuka ve dürüstlük kurallarına uygun şekilde işleriz.
          </p>
          <p>
            Toplanan veriler; teklif süreçlerinin yönetimi, iletişim taleplerinin karşılanması, hizmet operasyonlarının yürütülmesi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla kullanılabilir.
          </p>
          <p>
            KVKK kapsamındaki haklarınıza ilişkin taleplerinizi info@nextgenmedya.com adresinden bize iletebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KvkkPage;
