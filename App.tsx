import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import References from './components/References';
import Process from './components/Process';
import SeoFaq from './components/SeoFaq';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const BASE_URL = 'https://nextgenmedya.com';

type SeoMeta = {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
};

const SEO_BY_PAGE: Record<string, SeoMeta> = {
  home: {
    title: 'NextGen Medya | Digital Marketing Agency, Video Yapımı, Web Site Yapımı & 360 Sosyal Medya',
    description:
      'NextGen Medya; SEO, teknik SEO, video yapımı, web site yapımı, performans reklamcılığı ve 360 sosyal medya yönetimi ile markalara uçtan uca digital marketing agency hizmeti sunar.',
    keywords:
      'digital marketing agency, video yapımı, web site yapımı, 360 sosyal medya yönetimi, teknik seo, performans reklam',
    canonicalPath: '/'
  },
  corporate: {
    title: 'Kurumsal | NextGen Medya Hakkımızda',
    description:
      'NextGen Medya; strateji, yaratıcılık ve veriyi birleştirerek markalara sürdürülebilir dijital büyüme sağlayan yeni nesil ajans yaklaşımı sunar.',
    keywords: 'hakkımızda, dijital ajans vizyonu, yaratıcı ajans, marka stratejisi',
    canonicalPath: '/kurumsal'
  },
  services: {
    title: 'Hizmetler | SEO, Video Prodüksiyon, Web Site Yapımı ve 360 Sosyal Medya',
    description:
      'SEO ve teknik SEO, video prodüksiyon, web site yapımı, performans reklamcılığı ve 360 sosyal medya yönetimi ile dönüşüm odaklı büyüme sağlayın.',
    keywords: 'teknik seo, video prodüksiyon, web site yapımı, sosyal medya yönetimi, ppc, google ads',
    canonicalPath: '/hizmetler'
  },
  portfolio: {
    title: 'Portföy | NextGen Medya Başarı Hikayeleri',
    description:
      'Farklı sektörlerde yürüttüğümüz SEO, reklam ve web projeleriyle elde edilen ölçülebilir başarıları inceleyin.',
    keywords: 'portföy, vaka analizi, başarı hikayeleri, dijital proje örnekleri',
    canonicalPath: '/portfoy'
  },
  contact: {
    title: 'İletişim | NextGen Medya ile Projenizi Başlatın',
    description:
      'SEO ve GEO odaklı dijital büyüme planınızı konuşmak için NextGen Medya ekibiyle iletişime geçin.',
    keywords: 'iletişim, teklif al, dijital ajans iletişim, seo danışmanlığı',
    canonicalPath: '/iletisim'
  },
  'project-detail': {
    title: 'Proje Detayı | NextGen Medya',
    description:
      'NextGen Medya proje detaylarında uygulanan stratejileri, KPI gelişimlerini ve kanal bazlı büyüme sonuçlarını inceleyin.',
    keywords: 'proje detayı, vaka çalışması, seo sonuçları, kampanya performansı',
    canonicalPath: '/proje'
  }
};

const setMetaTag = (name: string, content: string, isProperty = false) => {
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let meta = document.querySelector(selector) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement('meta');
    if (isProperty) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
};

const setCanonical = (url: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', url);
};

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, selectedProject]);

  useEffect(() => {
    const seo = SEO_BY_PAGE[activePage] || SEO_BY_PAGE.home;
    const canonicalUrl = `${BASE_URL}${seo.canonicalPath}`;

    document.title = seo.title;
    setMetaTag('description', seo.description);
    setMetaTag('keywords', seo.keywords);
    setMetaTag('og:title', seo.title, true);
    setMetaTag('og:description', seo.description, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('twitter:title', seo.title);
    setMetaTag('twitter:description', seo.description);
    setCanonical(canonicalUrl);
  }, [activePage]);

  const handleProjectSelect = (project: any) => {
    setSelectedProject(project);
    setActivePage('project-detail');
  };

  const renderContent = () => {
    if (activePage === 'project-detail' && selectedProject) {
      return <ProjectDetail project={selectedProject} onBack={() => setActivePage('portfolio')} />;
    }

    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setActivePage} onProjectSelect={handleProjectSelect} />
            <References />
            <Services limit={3} onNavigate={() => setActivePage('services')} />
            <Process />
            <Portfolio limit={4} onNavigate={() => setActivePage('portfolio')} onProjectSelect={handleProjectSelect} />
            <SeoFaq />
            <CTA onNavigate={() => setActivePage('contact')} />
          </>
        );
      case 'corporate':
        return <About />;
      case 'services':
        return (
          <>
            <Services onNavigate={() => {}} />
            <SeoFaq />
          </>
        );
      case 'portfolio':
        return <Portfolio onNavigate={() => {}} onProjectSelect={handleProjectSelect} />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setActivePage} onProjectSelect={handleProjectSelect} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar
        activePage={activePage}
        onNavigate={(page) => {
          setActivePage(page);
          setSelectedProject(null);
        }}
      />
      <main className={`flex-grow ${activePage === 'project-detail' ? 'pt-0' : 'pt-24 md:pt-28'}`}>
        {renderContent()}
      </main>
      <Footer onNavigate={setActivePage} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
