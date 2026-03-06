
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
  onProjectSelect: (project: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onProjectSelect }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 'hillstone',
      title: "Hillstone Pendik",
      cat: "İNŞAAT PROJESİ",
      subtitle: "WEB TASARIM & SOSYAL MEDYA",
      desc: "Hillstone Pendik'in kurumsal web sitesini (hillstonependik.com) hayata geçirdik. Meta reklam yönetimi ve drone çekimleriyle projenin dijital görünürlüğünü %85 artırdık.",
      logoId: "1mpzqBGdkaSVV4dCzemn8REuPcQlF2ldm",
      videoUrl: "https://www.youtube.com/embed/8uLlnrvHiCw?autoplay=1&mute=1&controls=0&loop=1&playlist=8uLlnrvHiCw&si=OdaSKWS5mp-fV26O&enablejsapi=1",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
      type: 'video',
      stats: "2.5M+ GÖSTERİM",
      url: "https://hillstonependik.com",
      duration: 45000 
    },
    {
      id: 'onmuzik',
      title: "On Müzik",
      cat: "DJ EKİPMANLARI & SES SİSTEMLERİ",
      subtitle: "META ADS & SATIŞ YÖNETİMİ",
      desc: "DJ ekipmanları ve profesyonel ses sistemleri satışında Meta reklam yönetimi ile satış hacmini %120 oranında artırdık.",
      logoId: "1QSf3qBwqTFb7yL6x6l5f5KVDRkX0pe5D",
      img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000",
      stats: "%120 SATIŞ ARTIŞI",
      type: 'image',
      duration: 8000
    },
    {
      id: 'mjora',
      title: "Mjora Butik",
      cat: "MODA & E-TİCARET",
      subtitle: "E-TİCARET & REKLAM YÖNETİMİ",
      desc: "Mjora Butik için kurguladığımız Meta ve Google reklamları ile ROAS oranını 4.5 seviyesine çıkararak satış hacmini sürdürülebilir şekilde büyüttük.",
      logoId: "1wDaiq6v8qkkR6deMQs2PvH5AOD_gz_eg",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000",
      stats: "4.5 ROAS VERİMİ",
      type: 'image',
      duration: 8000
    },
    {
      id: 'virafit',
      title: "Virafit",
      cat: "SAĞLIK & FITNESS",
      subtitle: "META ADS & SEO",
      desc: "Virafit için yürüttüğümüz performans pazarlaması ve SEO çalışmaları ile üye kayıt maliyetlerini %40 düşürürken organik trafiği 3 katına çıkardık.",
      logoId: "1AXuRtmnSbETxcPl2ADUPyAdle2SHvq3g",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000",
      stats: "3X ORGANİK TRAFİK",
      type: 'image',
      duration: 8000
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slides[currentSlide].duration || 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide, slides]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[95vh] flex items-center overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Faster transition
          className="absolute inset-0 z-0"
        >
          {slides[currentSlide].type === 'video' ? (
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none scale-110">
              <iframe
                className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
                src={slides[currentSlide].videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              <div className="absolute inset-0 bg-black/60 z-10"></div>
            </div>
          ) : (
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={slides[currentSlide].img} 
                alt={slides[currentSlide].title} 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center space-x-6 mb-10">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl p-2 md:p-3 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src={`https://lh3.googleusercontent.com/d/${slides[currentSlide].logoId}`} 
                  alt={slides[currentSlide].title}
                  className={`w-full h-full object-contain ${slides[currentSlide].id === 'hillstone' ? 'scale-150' : 'scale-110 md:scale-125'}`}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] uppercase tracking-[0.6em] font-black text-zinc-400 mb-2">
                  {slides[currentSlide].subtitle}
                </span>
                {slides[currentSlide].stats && (
                  <span className="text-[10px] bg-white text-black px-3 py-1 font-black tracking-widest rounded-full inline-block w-fit">
                    {slides[currentSlide].stats}
                  </span>
                )}
              </div>
            </div>
            
            <h1 className="text-6xl md:text-[100px] font-[950] tracking-tighter text-white leading-[0.85] mb-12 uppercase">
              {slides[currentSlide].title.split(' ')[0]} <br />
              <span className="text-zinc-500">{slides[currentSlide].title.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mb-12 font-medium leading-relaxed">
              {slides[currentSlide].desc}
            </p>
            
            <div className="flex flex-wrap items-center gap-8 md:ml-24">
              <button 
                onClick={() => onNavigate('contact')}
                className="group flex items-center space-x-6 text-[12px] uppercase tracking-[0.4em] font-black text-white"
              >
                <span>PROJE BAŞLAT</span>
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 transform group-hover:rotate-45">
                  <span className="text-2xl">→</span>
                </div>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-12 left-12 flex items-center space-x-8 z-30">
        <div className="flex items-center space-x-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentSlide(idx);
              }}
              className={`h-1 transition-all duration-500 rounded-full ${
                currentSlide === idx ? 'w-16 bg-white' : 'w-8 bg-white/20'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Decorative Slide Number */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end z-30">
         <span className="text-8xl font-[950] text-white/5 tracking-tighter leading-none">
           0{currentSlide + 1}
         </span>
         <span className="text-[11px] uppercase tracking-[0.5em] font-black text-zinc-500 mt-4">
           {slides[currentSlide].title}
         </span>
      </div>
    </section>
  );
};

export default Hero;
