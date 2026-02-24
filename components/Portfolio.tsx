
import React, { useState } from 'react';

interface PortfolioProps {
  limit?: number;
  onNavigate?: (page: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ limit, onNavigate }) => {
  const projects = [
    { 
      title: "Hillstone Pendik", 
      cat: "İNŞAAT PROJESİ", 
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
      logoId: "1mpzqBGdkaSVV4dCzemn8REuPcQlF2ldm",
      desc: "Modern mimari ve inşaat teknolojilerinin dijital vizyonu.",
      zoomLogo: true
    },
    { 
      title: "On Müzik", 
      cat: "MÜZİK PRODÜKSİYON", 
      img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000",
      logoId: "1QSf3qBwqTFb7yL6x6l5f5KVDRkX0pe5D",
      desc: "Ses ve estetiğin dijital dünyadaki uyumu."
    },
    { 
      title: "Mjora Butik", 
      cat: "MODA & E-TİCARET", 
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
      logoId: "1wDaiq6v8qkkR6deMQs2PvH5AOD_gz_eg",
      desc: "Butik modanın minimal ve şık tasarımı."
    },
    { 
      title: "Virafit", 
      cat: "SAĞLIK & FITNESS", 
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
      logoId: "1AXuRtmnSbETxcPl2ADUPyAdle2SHvq3g",
      desc: "Performans odaklı bir dijital deneyim."
    }
  ];

  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-zinc-400 mb-4 block underline underline-offset-8 decoration-zinc-200">VİTRİNİMİZ</span>
            <h2 className="text-5xl md:text-8xl font-[900] tracking-tighter text-black">İşlerimiz.</h2>
          </div>
          {limit && onNavigate && (
            <button 
              onClick={() => onNavigate('portfolio')} 
              className="text-[11px] uppercase tracking-[0.2em] font-black bg-white border border-zinc-200 px-8 py-4 hover:bg-black hover:text-white transition-all duration-500 shadow-sm"
            >
              Tüm Projeler
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {displayProjects.map((p, idx) => {
            const [imageError, setImageError] = useState(false);
            const logoUrl = `https://lh3.googleusercontent.com/d/${p.logoId}`;

            return (
              <div key={idx} className="group flex flex-col">
                <div className="relative overflow-hidden bg-zinc-200 aspect-[4/3] mb-10 shadow-xl shadow-zinc-200/40 rounded-2xl cursor-pointer">
                  {/* Project Image - Blurred initially, clear on hover */}
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 opacity-60 blur-lg scale-110 group-hover:opacity-100 group-hover:blur-0 group-hover:scale-100" 
                  />
                  
                  {/* Logo Container - Visible initially, fades out on hover */}
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-700 group-hover:opacity-0 group-hover:scale-110 z-10">
                    <div className={`bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl flex items-center justify-center border border-white/20 transition-all duration-700 ${
                      p.zoomLogo ? 'w-56 h-56 md:w-72 md:h-72 p-4' : 'w-48 h-48 md:w-64 md:h-64 p-10'
                    }`}>
                      {!imageError ? (
                        <img 
                          src={logoUrl} 
                          alt={`${p.title} Logo`} 
                          className={`max-w-full max-h-full object-contain drop-shadow-xl ${p.zoomLogo ? 'scale-125' : ''}`} 
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <span className="text-black text-xl font-black tracking-tighter uppercase">
                          {p.title}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 text-[10px] font-black tracking-widest rounded-full shadow-lg z-20 opacity-100 transition-opacity">
                    {p.cat}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-4 px-2">
                  <div className="flex items-start justify-between">
                    <div className="max-w-[70%]">
                      <h3 className="text-3xl font-[950] text-black tracking-tighter uppercase group-hover:text-zinc-600 transition-colors leading-none">
                        {p.title}
                      </h3>
                      <p className="text-zinc-500 text-sm font-semibold leading-relaxed mt-3">
                        {p.desc}
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center p-2 border border-zinc-100 shadow-sm">
                      <img 
                        src={logoUrl} 
                        alt={`${p.title} Logo`} 
                        className="w-full h-full object-contain transition-all duration-500"
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
