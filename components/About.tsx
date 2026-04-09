import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-[#060A12] text-white selection:bg-white selection:text-black">
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-white/10">
        <div className="absolute -top-24 -left-20 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 right-0 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <span className="text-[10px] uppercase tracking-[0.45em] font-black text-zinc-400">KURUMSAL</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-[900] tracking-tight leading-[0.95]">
            Dijital Dünyanın
            <span className="block bg-gradient-to-r from-[#C4B5FD] to-[#7DD3FC] bg-clip-text text-transparent">Yeni Nesil Mimarları</span>
          </h1>
          <p className="mt-6 max-w-3xl text-zinc-300 text-base sm:text-lg leading-relaxed">
            NextGen Medya, markalar için yalnızca bir ajans değil; SEO, performans pazarlama, yaratıcı içerik üretimi ve teknoloji altyapısını tek bir büyüme sistemi
            içinde birleştiren stratejik iş ortağıdır.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <article className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/15 bg-white/[0.03]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
              alt="Creative Collaboration"
              className="w-full h-full object-cover min-h-[340px] lg:min-h-[520px]"
            />
          </article>

          <article className="lg:col-span-5 rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-[900] tracking-tight">Strateji + Kreatif + Performans</h2>
            <div className="mt-5 space-y-4 text-zinc-300 leading-relaxed">
              <p>Her projede önce iş hedefini tanımlar, ardından bu hedefe hizmet edecek kanal mimarisini; SEO, içerik, reklam ve dönüşüm optimizasyonu katmanlarıyla kurarız.</p>
              <p>Video prodüksiyon, web deneyimi, Google Ads / Meta Ads yönetimi ve teknik SEO operasyonunu tek çatı altında yürüterek ölçülebilir müşteri kazanımı sağlarız.</p>
              <p>Kurumsal markalar için süreç yönetimi, raporlama disiplini ve departmanlar arası iletişimi sadeleştiren proje yönetim modeli uygularız.</p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Veri Odaklı Karar', 'Haftalık Optimizasyon', 'Uçtan Uca Üretim', 'Şeffaf Raporlama', 'Lokal + Global SEO', 'Dönüşüm Odaklı Kreatif'].map((item) => (
                <span key={item} className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold tracking-wide text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {[
              ['360° Growth Partnerliği', 'Pazarlama, kreatif, teknoloji ve içerik ekiplerini tek hedefe hizalayarak dağınık operasyonu ortadan kaldırıyoruz.'],
              ['Kurumsal Güven ve Süreç', 'Periyodik toplantılar, KPI panoları ve düzenli raporlarla karar alıcı ekipler için net bir görünürlük sunuyoruz.'],
              ['Satışa Dokunan Strateji', 'Sadece trafik değil; doğru müşteri segmentine ulaşan, lead kalitesini artıran ve geliri büyüten aksiyonlar planlıyoruz.']
            ].map(([title, desc]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <h3 className="text-white text-xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-3 text-zinc-300 text-sm leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
