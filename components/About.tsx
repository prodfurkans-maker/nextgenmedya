
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white selection:bg-black selection:text-white">
      {/* Hero Section */}
      <section className="pt-10 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl">
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-[2px] bg-black"></div>
              <span className="text-[12px] uppercase tracking-[0.5em] font-black text-black">BİZ KİMİZ?</span>
            </div>
            <h1 className="text-5xl md:text-[85px] font-[950] tracking-tighter text-black leading-[0.9] mb-12 uppercase">
              Dijital Dünyanın <br />
              <span className="text-zinc-300">Yeni Nesil Mimarlarıyız.</span>
            </h1>
            
            {/* Hero Image */}
            <div className="w-full h-[50vh] md:h-[65vh] overflow-hidden rounded-3xl mb-16 relative group">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600" 
                alt="NextGen Studio Office" 
                className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-110"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <span className="bg-white/90 backdrop-blur px-6 py-3 text-[10px] font-black tracking-[0.4em] text-black rounded-full uppercase">
                  Merkez Ofis / Levent
                </span>
              </div>
            </div>

            <p className="text-xl md:text-3xl text-zinc-600 font-medium leading-tight max-w-4xl">
              NextGen Medya, markalar için sadece bir dijital ajans değil; büyüme yolculuğunda yanınızda olan bir strateji partneridir. Geleneksel reklamcılık kalıplarını kırarak, veriyi yaratıcılıkla birleştiriyor ve markanızı geleceğe hazırlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Hakkımızda Detay */}
      <section className="py-32 bg-zinc-50/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-zinc-100 -z-10 rounded-full blur-3xl opacity-50"></div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Creative Collaboration" 
                    className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-all duration-1000"
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 order-1 lg:order-2">
              <h2 className="text-[11px] uppercase tracking-[0.6em] font-black text-zinc-400 mb-8">HAKKIMIZDA</h2>
              <p className="text-2xl md:text-4xl text-black font-[900] leading-tight mb-12 tracking-tighter uppercase">
                Strateji, Yaratıcılık ve <br />Performansın Kesişimi.
              </p>
              <div className="space-y-8 text-lg text-zinc-500 leading-relaxed font-medium">
                <p>
                  Kurulduğumuz günden bu yana, markaların dijital karmaşa içerisinde fark edilmesini sağlamak için yaratıcılığı veriyle harmanlıyoruz. NextGen Medya olarak; her projeyi bir iş geliştirme süreci olarak görüyor, markanızın sadece görünür olmasını değil, sürdürülebilir bir ticari başarı inşa etmesini sağlıyoruz.
                </p>
                <p>
                  Profesyonel video prodüksiyon ekibimizden, veri analizi uzmanlarımıza kadar her bir birimimiz; markanızın dijital varlığını en üst seviyeye çıkarmak için kullanıcı deneyimi odaklı teknoloji çözümleri üretir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 md:p-20 bg-white group hover:bg-black transition-all duration-700">
              <span className="text-[11px] uppercase tracking-[0.5em] font-black text-zinc-300 mb-8 block italic group-hover:text-zinc-600 transition-colors">01.</span>
              <h3 className="text-4xl font-[950] text-black mb-10 uppercase tracking-tighter group-hover:text-white transition-colors">Misyonumuz</h3>
              <p className="text-zinc-600 text-xl font-medium leading-relaxed group-hover:text-zinc-400 transition-colors">
                Markalarımızın dijital dünyadaki gürültü içinde öne çıkmasını sağlamak, ölçülebilir sonuçlar üreterek büyümeyi desteklemek ve karmaşık dijital süreçleri sadeleştirerek uzun vadeli değer yaratmak.
              </p>
            </div>
            <div className="p-12 md:p-20 bg-white group hover:bg-black transition-all duration-700">
              <span className="text-[11px] uppercase tracking-[0.5em] font-black text-zinc-300 mb-8 block italic group-hover:text-zinc-600 transition-colors">02.</span>
              <h3 className="text-4xl font-[950] text-black mb-10 uppercase tracking-tighter group-hover:text-white transition-colors">Vizyonumuz</h3>
              <p className="text-zinc-600 text-xl font-medium leading-relaxed group-hover:text-zinc-400 transition-colors">
                Yenilikçi teknolojileri ve yaratıcı stratejileri bir araya getirerek, sektöründe güven veren, teknoloji odaklı ve öncü bir dijital çözüm ortağı olarak global standartlarda başarılara imza atmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break - Process Image */}
      <section className="h-[60vh] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600" 
          alt="Work Process" 
          className="w-full h-full object-cover fixed top-0 left-0 -z-20 brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-6">
          <h2 className="text-4xl md:text-7xl font-[950] text-white uppercase tracking-tighter leading-none">
            HER DETAYDA <br /><span className="text-zinc-400">MÜKEMMELLİK.</span>
          </h2>
        </div>
      </section>

      {/* Hizmet Alanlarımız (Hızlı Bakış) */}
      <section className="py-32 relative z-10 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
             <span className="text-[11px] uppercase tracking-[0.8em] font-black text-zinc-400 block mb-6">UZMANLIK ALANLARI</span>
            <h2 className="text-4xl md:text-6xl font-[900] text-black uppercase tracking-tighter">Neler Yapıyoruz?</h2>
            <div className="w-24 h-2 bg-black mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-12 bg-zinc-50 border border-zinc-100 hover:bg-black hover:text-white group transition-all duration-500 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-zinc-800 transition-all">
                <span className="text-black font-black group-hover:text-white transition-colors">01</span>
              </div>
              <h4 className="text-lg font-black mb-4 uppercase tracking-widest">Sosyal Medya</h4>
              <p className="text-zinc-500 text-sm group-hover:text-zinc-400 font-medium">Topluluk oluşturma ve marka algısını güçlendiren stratejik yönetim.</p>
            </div>
            <div className="p-12 bg-zinc-50 border border-zinc-100 hover:bg-black hover:text-white group transition-all duration-500 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-zinc-800 transition-all">
                <span className="text-black font-black group-hover:text-white transition-colors">02</span>
              </div>
              <h4 className="text-lg font-black mb-4 uppercase tracking-widest">Prodüksiyon</h4>
              <p className="text-zinc-500 text-sm group-hover:text-zinc-400 font-medium">Marka hikayenizi en etkileyici şekilde anlatan görsel içerikler.</p>
            </div>
            <div className="p-12 bg-zinc-50 border border-zinc-100 hover:bg-black hover:text-white group transition-all duration-500 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-zinc-800 transition-all">
                <span className="text-black font-black group-hover:text-white transition-colors">03</span>
              </div>
              <h4 className="text-lg font-black mb-4 uppercase tracking-widest">Web Tasarım</h4>
              <p className="text-zinc-500 text-sm group-hover:text-zinc-400 font-medium">Hız ve dönüşüm odaklı optimize edilmiş modern deneyimler.</p>
            </div>
            <div className="p-12 bg-zinc-50 border border-zinc-100 hover:bg-black hover:text-white group transition-all duration-500 rounded-2xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-zinc-800 transition-all">
                <span className="text-black font-black group-hover:text-white transition-colors">04</span>
              </div>
              <h4 className="text-lg font-black mb-4 uppercase tracking-widest">Dijital Reklam</h4>
              <p className="text-zinc-500 text-sm group-hover:text-zinc-400 font-medium">Veri analizi ile sürekli optimize edilen ROI odaklı kampanyalar.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
