import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  limit?: number;
  onNavigate?: (page: string) => void;
  onProjectSelect: (project: any) => void;
}

const ProjectCard = React.memo<{ project: any; logoUrl: string; onSelect: (p: any) => void }>(({ project, logoUrl, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <button className="group flex flex-col text-left" onClick={() => onSelect(project)}>
      <div className="relative overflow-hidden bg-zinc-200 aspect-[4/3] mb-6 rounded-2xl sm:rounded-3xl cursor-pointer border border-zinc-100">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-80 scale-105 group-hover:scale-100 group-hover:opacity-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/10" />

        <div className="absolute top-4 left-4 bg-white/95 text-zinc-900 px-3 py-1.5 text-[10px] font-black tracking-wider rounded-full z-20">
          {project.cat}
        </div>

        <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 z-20 border border-white/60">
          {!imageError ? (
            <img
              src={logoUrl}
              alt={`${project.title} Logo`}
              loading="lazy"
              className="w-full h-full object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-[10px] font-black">Logo</span>
          )}
        </div>
      </div>

      <div className="px-1">
        <h3 className="text-2xl sm:text-3xl font-[900] text-zinc-900 tracking-tight uppercase leading-tight">{project.title}</h3>
        <p className="text-zinc-500 text-sm sm:text-base font-medium leading-relaxed mt-2">{project.desc}</p>
      </div>
    </button>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Portfolio: React.FC<PortfolioProps> = ({ limit, onNavigate, onProjectSelect }) => {
  const projects = [
    {
      title: 'Hillstone Pendik',
      cat: 'İNŞAAT PROJESİ',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      logoId: '1mpzqBGdkaSVV4dCzemn8REuPcQlF2ldm',
      desc: 'Kurumsal web, reklam yönetimi ve drone içerikleriyle görünürlüğü %85 artırdık.',
      stats: '2.5M+ GÖSTERİM'
    },
    {
      title: 'On Müzik',
      cat: 'DJ EKİPMANLARI',
      img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000',
      logoId: '1QSf3qBwqTFb7yL6x6l5f5KVDRkX0pe5D',
      desc: 'Performans reklamlarıyla e-ticaret satış hacminde %120 artış sağladık.',
      stats: '%120 SATIŞ ARTIŞI'
    },
    {
      title: 'Mjora Butik',
      cat: 'MODA & E-TİCARET',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
      logoId: '1wDaiq6v8qkkR6deMQs2PvH5AOD_gz_eg',
      desc: 'Meta + Google reklam optimizasyonu ile 4.5 ROAS verimi yakaladık.',
      stats: '4.5 ROAS VERİMİ'
    },
    {
      title: 'Virafit',
      cat: 'SAĞLIK & FITNESS',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000',
      logoId: '1AXuRtmnSbETxcPl2ADUPyAdle2SHvq3g',
      desc: 'SEO ve performans pazarlama ile maliyeti düşürüp trafiği 3x büyüttük.',
      stats: '3X ORGANİK TRAFİK'
    }
  ];

  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.45em] font-black text-zinc-400 mb-3 block">VİTRİNİMİZ</span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-[900] tracking-tighter text-zinc-900">Başarı Hikayeleri.</h2>
          </div>
          {limit && onNavigate && (
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-black bg-zinc-900 text-white rounded-xl px-4 py-3 hover:bg-black transition-all w-fit"
            >
              Tüm Projeler
              <ArrowUpRight size={14} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {displayProjects.map((p, idx) => (
            <ProjectCard key={idx} project={p} logoUrl={`https://lh3.googleusercontent.com/d/${p.logoId}`} onSelect={onProjectSelect} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
