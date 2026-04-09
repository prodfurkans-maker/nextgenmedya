import React from 'react';

const KvkkPage: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#060A12] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">Yasal</span>
        <h1 className="text-3xl sm:text-5xl font-[900] mt-3 mb-8">KVKK Aydınlatma Metni</h1>

        <div className="space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
          <p>NextGen Medya olarak kişisel verilerinizi 6698 sayılı KVKK kapsamında hukuka uygun şekilde işleriz.</p>
          {[
            ['İşlenen Veri Kategorileri', 'Kimlik bilgileri, iletişim bilgileri, talep içerikleri, işlem güvenliği kayıtları ve pazarlama izin tercihleri.'],
            ['İşleme Amaçları', 'Teklif süreçlerinin yürütülmesi, müşteri iletişimi, hizmet operasyonları, sözleşmesel yükümlülükler ve yasal zorunluluklar.'],
            ['Hukuki Sebepler', 'Veriler; açık rıza, sözleşmenin kurulması/ifası, meşru menfaat ve ilgili mevzuattaki yükümlülükler kapsamında işlenir.'],
            ['Haklarınız', 'KVKK 11. madde kapsamındaki erişim, düzeltme, silme ve itiraz haklarınızı info@nextgenmedya.com adresinden kullanabilirsiniz.']
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

export default KvkkPage;
