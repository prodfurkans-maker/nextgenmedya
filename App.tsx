
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import References from './components/References';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  // Sayfa değiştiğinde en üste kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setActivePage} />
            <References />
            <Services limit={3} onNavigate={() => setActivePage('services')} />
            <Portfolio limit={4} onNavigate={() => setActivePage('portfolio')} />
            <CTA onNavigate={() => setActivePage('contact')} />
          </>
        );
      case 'corporate':
        return <About />;
      case 'services':
        return <Services onNavigate={() => {}} />;
      case 'portfolio':
        return <Portfolio onNavigate={() => {}} />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      {/* Navbar logosu büyüdüğü için pt-20'den pt-32 veya pt-40'a çıkarıldı */}
      <main className="flex-grow pt-32 md:pt-40">
        {renderContent()}
      </main>
      <Footer onNavigate={setActivePage} />
    </div>
  );
};

export default App;
