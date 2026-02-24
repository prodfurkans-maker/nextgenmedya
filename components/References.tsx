
import React, { useState } from 'react';

const ReferenceLogo: React.FC<{ name: string, logoId: string, services: string[], zoom?: boolean }> = ({ name, logoId, services, zoom }) => {
  const [error, setError] = useState(false);
  const logoUrl = `https://lh3.googleusercontent.com/d/${logoId}`;

  return (
    <div className="group flex flex-col items-center p-8 bg-white border border-zinc-100 hover:border-zinc-300 transition-all duration-700 rounded-[2.5rem] w-full h-full min-h-[420px] shadow-sm hover:shadow-2xl overflow-hidden">
      <div className="flex-1 w-full flex items-center justify-center">
        {!error ? (
          <div className={`w-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110 ${zoom ? 'scale-[2.8] translate-y-4' : 'scale-150'}`}>
            <img 
              src={logoUrl} 
              alt={name} 
              className={`${zoom ? 'max-w-[200px] max-h-[160px]' : 'max-w-[160px] max-h-[120px]'} object-contain`}
              onError={() => setError(true)}
            />
          </div>
        ) : (
          <span className="text-xl font-black tracking-tight text-black opacity-20 uppercase">
            {name}
          </span>
        )}
      </div>
      
      <div className="w-full mt-8 pt-8 border-t border-zinc-50 flex flex-col items-center text-center">
        <h4 className="text-[10px] font-black tracking-[0.4em] text-zinc-300 uppercase mb-4">Hizmetlerimiz</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {services.map((service, i) => (
            <span key={i} className="text-[11px] font-bold text-zinc-500 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-500">
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const References: React.FC = () => {
  const brands = [
    { 
      name: "HILLSTONE PENDIK", 
      id: "1mpzqBGdkaSVV4dCzemn8REuPcQlF2ldm", 
      services: ["Drone Çekimi", "Sosyal Medya", "Web Yönetimi"],
      zoom: true
    },
    { 
      name: "ON MÜZİK", 
      id: "1QSf3qBwqTFb7yL6x6l5f5KVDRkX0pe5D",
      services: ["Prodüksiyon", "Dijital Dağıtım", "Marka Kimliği"]
    },
    { 
      name: "MJORA BUTIK", 
      id: "1wDaiq6v8qkkR6deMQs2PvH5AOD_gz_eg",
      services: ["E-Ticaret", "Ürün Çekimi", "Reklam Yönetimi"]
    },
    { 
      name: "VIRAFIT", 
      id: "1AXuRtmnSbETxcPl2ADUPyAdle2SHvq3g",
      services: ["İçerik Üretimi", "SEO", "Mobil Uygulama"]
    }
  ];

  return (
    <section className="py-32 bg-zinc-50/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="w-24 h-1 bg-black mb-10"></div>
          <span className="text-[12px] uppercase tracking-[0.8em] font-[900] text-zinc-400">GÜVENEN MARKALAR</span>
          <h2 className="mt-6 text-4xl md:text-6xl font-[900] tracking-tight text-black uppercase max-w-4xl leading-tight">Sektörün Öncüleri ile Birlikteyiz</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {brands.map((brand, idx) => (
            <ReferenceLogo 
              key={idx} 
              name={brand.name} 
              logoId={brand.id} 
              services={brand.services}
              zoom={brand.zoom}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
