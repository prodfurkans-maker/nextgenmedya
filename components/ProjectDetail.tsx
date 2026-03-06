
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Globe } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    title: string;
    cat: string;
    img: string;
    logoId: string;
    desc: string;
    subtitle?: string;
    stats?: string;
    details?: string[];
    url?: string;
    videoUrl?: string;
  };
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const logoUrl = `https://lh3.googleusercontent.com/d/${project.logoId}`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pb-20 pt-24 md:pt-32" // Added padding top to avoid navbar overlap
    >
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden bg-black mx-4 md:mx-12 rounded-[2rem] md:rounded-[4rem]">
        {project.videoUrl ? (
          <div className="absolute inset-0 w-full h-full pointer-events-none scale-110">
            <iframe
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
              src={project.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            <div className="absolute inset-0 bg-black/40 z-10"></div>
          </div>
        ) : (
          <>
            <img 
              src={project.img} 
              alt={project.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </>
        )}
        
        <div className="absolute top-6 left-6 md:top-10 md:left-12 z-20">
          <button 
            onClick={onBack}
            className="flex items-center space-x-3 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs md:text-sm font-black tracking-widest uppercase">Geri Dön</span>
          </button>
        </div>

        <div className="absolute bottom-10 left-6 md:bottom-20 md:left-12 z-20 max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8 mb-4">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl md:rounded-3xl p-4 shadow-2xl flex items-center justify-center">
              <img src={logoUrl} alt={project.title} className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-black text-white/80 block mb-2">
                {project.cat}
              </span>
              <h1 className="text-4xl md:text-8xl font-[950] tracking-tighter text-white uppercase leading-none">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-12 mt-12 md:mt-20 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          {/* Left Column: Description & Details */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-zinc-200/50 border border-zinc-100">
              <h2 className="text-2xl md:text-3xl font-[950] text-black tracking-tighter uppercase mb-8">Proje Hakkında</h2>
              <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-medium">
                {project.desc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-16">
                <div className="space-y-6">
                  <h3 className="text-xs font-black tracking-[0.3em] text-zinc-400 uppercase">Neler Yaptık?</h3>
                  <ul className="space-y-4">
                    {['Meta Reklam Yönetimi', 'Sosyal Medya Stratejisi', 'İçerik Üretimi', 'Performans Analizi'].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3 text-black font-bold">
                        <CheckCircle2 size={18} className="text-zinc-300" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xs font-black tracking-[0.3em] text-zinc-400 uppercase">Teknolojiler</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {['Meta Ads', 'Google Ads', 'SEO', 'Analytics', 'Content Studio'].map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 bg-zinc-50 border border-zinc-100 rounded-xl text-[10px] md:text-xs font-black text-zinc-500 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Meta */}
          <div className="space-y-8">
            {project.stats && (
              <div className="bg-black p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] text-white shadow-2xl">
                <TrendingUp size={32} md:size={40} className="mb-6 text-zinc-400" />
                <span className="text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase mb-2 block">Başarı İstatistiği</span>
                <h3 className="text-3xl md:text-4xl font-[950] tracking-tighter uppercase leading-tight">
                  {project.stats}
                </h3>
              </div>
            )}

            <div className="bg-zinc-50 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-zinc-100">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm">
                    <Users size={18} md:size={20} className="text-black" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase block">Müşteri</span>
                    <span className="font-bold text-black text-sm md:text-base">{project.title}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm">
                    <Globe size={18} md:size={20} className="text-black" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase block">Sektör</span>
                    <span className="font-bold text-black text-sm md:text-base">{project.cat}</span>
                  </div>
                </div>
              </div>
              
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full mt-10 md:mt-12 bg-white border border-zinc-200 text-black py-5 md:py-6 rounded-2xl font-black text-[10px] md:text-[11px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all shadow-sm flex items-center justify-center"
                >
                  Web Sitesini Ziyaret Et
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
