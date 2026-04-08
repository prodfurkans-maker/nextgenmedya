import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
  onProjectSelect: (project: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 'hillstone',
      title: 'Hillstone Pendik',
      subtitle: 'WEB TASARIM & SOSYAL MEDYA',
      desc: "Hillstone Pendik'in kurumsal web sitesini hayata geçirip reklam ve prodüksiyon süreçleriyle dijital görünürlüğü %85 artırdık.",
      logoId: '1mpzqBGdkaSVV4dCzemn8REuPcQlF2ldm',
      videoUrl:
        'https://www.youtube.com/embed/8uLlnrvHiCw?autoplay=1&mute=1&controls=0&loop=1&playlist=8uLlnrvHiCw&si=OdaSKWS5mp-fV26O&enablejsapi=1',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
      type: 'video',
      stats: '2.5M+ GÖSTERİM',
      duration: 45000
    },
    {
      id: 'onmuzik',
      title: 'On Müzik',
      subtitle: 'META ADS & SATIŞ YÖNETİMİ',
      desc: 'DJ ekipmanları ve profesyonel ses sistemleri satışında performans reklam yönetimi ile satış hacmini %120 artırdık.',
      logoId: '1QSf3qBwqTFb7yL6x6l5f5KVDRkX0pe5D',
      img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000',
      stats: '%120 SATIŞ ARTIŞI',
      type: 'image',
      duration: 8000
    },
    {
      id: 'mjora',
      title: 'Mjora Butik',
      subtitle: 'E-TİCARET & REKLAM YÖNETİMİ',
      desc: 'Meta ve Google reklam optimizasyonu ile ROAS oranını 4.5 seviyesine çıkararak sürdürülebilir satış artışı sağladık.',
      logoId: '1wDaiq6v8qkkR6deMQs2PvH5AOD_gz_eg',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000',
      stats: '4.5 ROAS VERİMİ',
      type: 'image',
      duration: 8000
    },
    {
      id: 'virafit',
      title: 'Virafit',
      subtitle: 'META ADS & SEO',
      desc: 'Performans pazarlaması ve SEO çalışmalarıyla üye kayıt maliyetini %40 düşürüp organik trafiği 3 katına çıkardık.',
      logoId: '1AXuRtmnSbETxcPl2ADUPyAdle2SHvq3g',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000',
      stats: '3X ORGANİK TRAFİK',
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
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden bg-black rounded-b-[2rem] sm:rounded-b-[3rem]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          className="absolute inset-0"
        >
          {slides[currentSlide].type === 'video' ? (
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none scale-110">
              <iframe
                className="absolute top-1/2 left-1/2 w-[120vw] h-[68vw] min-h-[105vh] min-w-[190vh] -translate-x-1/2 -translate-y-1/2"
                src={slides[currentSlide].videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          ) : (
            <img src={slides[currentSlide].img} alt={slides[currentSlide].title} className="w-full h-full object-cover" />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/55 to-black/70" />
      <div className="absolute -top-32 -right-24 w-80 h-80 bg-white/10 blur-3xl rounded-full" />

      <div className="relative z-20 max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 pb-14 sm:pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 sm:gap-4 bg-white/10 border border-white/15 rounded-2xl p-3 pr-4 sm:pr-5 backdrop-blur-lg mb-7 sm:mb-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl p-1.5 flex items-center justify-center overflow-hidden">
                <img
                  src={`https://lh3.googleusercontent.com/d/${slides[currentSlide].logoId}`}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-zinc-300 font-black">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="text-[10px] sm:text-xs text-white font-extrabold mt-1">{slides[currentSlide].stats}</p>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-[950] tracking-tight text-white leading-[0.9] uppercase">
              {slides[currentSlide].title}
            </h1>

            <p className="mt-5 sm:mt-7 text-zinc-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              {slides[currentSlide].desc}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 bg-white text-black rounded-xl px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] font-black hover:bg-zinc-200 transition-all"
              >
                Proje Başlat
                <ArrowUpRight size={15} />
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center justify-center gap-2 border border-white/35 text-white rounded-xl px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] font-black hover:bg-white/10 transition-all"
              >
                Çalışmalarımız
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentSlide(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentSlide === idx ? 'w-12 bg-white' : 'w-5 bg-white/35'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
