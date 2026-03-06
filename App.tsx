
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import References from './components/References';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Sayfa değiştiğinde en üste kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, selectedProject]);

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
            <Portfolio limit={4} onNavigate={() => setActivePage('portfolio')} onProjectSelect={handleProjectSelect} />
            <CTA onNavigate={() => setActivePage('contact')} />
          </>
        );
      case 'corporate':
        return <About />;
      case 'services':
        return <Services onNavigate={() => {}} />;
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
      <Navbar activePage={activePage} onNavigate={(page) => {
        setActivePage(page);
        setSelectedProject(null);
      }} />
      {/* Navbar logosu büyüdüğü için pt-20'den pt-32 veya pt-40'a çıkarıldı */}
      <main className={`flex-grow ${activePage === 'project-detail' ? 'pt-0' : 'pt-32 md:pt-40'}`}>
        {renderContent()}
      </main>
      <Footer onNavigate={setActivePage} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
