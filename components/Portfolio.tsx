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
      title: 'Nocturnal Identity',
      cat: 'BRAND EXPERIENCE',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
      logoId: '1mpzqBGdkaSVV4dCzemn8REuPcQlF2ldm',
      desc: 'Premium marka dili ve landing mimarisi ile yüksek etkileşimli deneyim tasarımı.',
      stats: '4.2x Engagement'
    },
    {
      title: 'Quantum Commerce',
      cat: 'PERFORMANCE DESIGN',
      img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=1200',
      logoId: '1QSf3qBwqTFb7yL6x6l5f5KVDRkX0pe5D',
      desc: 'Dönüşüm odaklı kreatifler ve funnel optimizasyonu ile satış artışı.',
      stats: '+120% Sales'
    },
    {
      title: 'Aura Motion',
      cat: 'VISUAL DIRECTION',
      img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200',
      logoId: '1wDaiq6v8qkkR6deMQs2PvH5AOD_gz_eg',
      desc: 'Hikâye odaklı video & kampanya tasarımıyla premium marka algısı.',
      stats: '5.1M Reach'
    },
    {
      title: 'Velocity Lab',
      cat: 'SEO + GROWTH',
      img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
      logoId: '1AXuRtmnSbETxcPl2ADUPyAdle2SHvq3g',
      desc: 'Teknik SEO ve içerik mimarisiyle sürdürülebilir organik büyüme.',
      stats: '3x Organic'
    }
  ];

  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-16 sm:py-20 bg-[#060A12]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 sm:mb-12 gap-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-[900] tracking-tight text-white">Seçkin <span className="text-[#7DD3FC]">Projeler</span></h2>
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
