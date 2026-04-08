import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  limit?: number;
  onNavigate?: (page: string) => void;
  onProjectSelect: (project: any) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ limit, onNavigate, onProjectSelect }) => {
  const projects = [
    {
      title: 'Hillstone Pendik',
      cat: 'İNŞAAT PROJESİ',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      logoId: '1mpzqBGdkaSVV4dCzemn8REuPcQlF2ldm',
      desc: 'Kurumsal web, reklam yönetimi ve drone prodüksiyonla dijital görünürlüğü %85 artırdık.',
      stats: '2.5M+ Gösterim'
    },
    {
      title: 'On Müzik',
      cat: 'DJ EKİPMANLARI & SES',
      img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200',
      logoId: '1QSf3qBwqTFb7yL6x6l5f5KVDRkX0pe5D',
      desc: 'Performans odaklı kampanyalar ile satış hacminde %120 artış elde edildi.',
      stats: '%120 Satış Artışı'
    },
    {
      title: 'Mjora Butik',
      cat: 'MODA & E-TİCARET',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
      logoId: '1wDaiq6v8qkkR6deMQs2PvH5AOD_gz_eg',
      desc: 'Meta + Google reklam optimizasyonu ile ROAS oranını 4.5 seviyesine taşıdık.',
      stats: '4.5 ROAS'
    },
    {
      title: 'Virafit',
      cat: 'SAĞLIK & FITNESS',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200',
      logoId: '1AXuRtmnSbETxcPl2ADUPyAdle2SHvq3g',
      desc: 'SEO ve performans pazarlama ile üye edinim maliyeti düşerken organik trafik 3 kat büyüdü.',
      stats: '3x Organik Trafik'
    }
  ];

  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-16 sm:py-20 bg-[#060A12]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 sm:mb-12 gap-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-[900] tracking-tight text-white">Seçkin <span className="text-[#7DD3FC]">Projeler</span></h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">Referans markalarımızla birlikte hayata geçirdiğimiz performans odaklı büyüme hikayeleri.</p>
          </div>
          {limit && onNavigate && (
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-black text-white border border-white/15 rounded-xl px-4 py-3"
            >
              Tüm Projeler
              <ArrowUpRight size={14} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {displayProjects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => onProjectSelect(project)}
              className="group text-left rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-black tracking-wider uppercase bg-white/90 text-zinc-900 rounded-full px-3 py-1.5">{project.cat}</span>
                <span className="absolute bottom-4 left-4 text-white text-xs font-extrabold tracking-wide">{project.stats}</span>
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-white/90 border border-white p-2">
                  <img src={`https://lh3.googleusercontent.com/d/${project.logoId}`} alt={project.title} className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-[900] tracking-tight text-white">{project.title}</h3>
                <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{project.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
