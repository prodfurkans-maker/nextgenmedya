
import React from 'react';
import { Step } from '../types';

const Process: React.FC = () => {
  const steps: Step[] = [
    { id: 1, title: "Analiz", description: "Pazar ve rakip verilerini detaylıca inceliyoruz." },
    { id: 2, title: "Strateji", description: "Hedeflere uygun yol haritasını kurguluyoruz." },
    { id: 3, title: "Tasarım", description: "Yaratıcı konseptleri hayata geçiriyoruz." },
    { id: 4, title: "Optimizasyon", description: "Performansı sürekli ölçüp iyileştiriyoruz." }
  ];

  return (
    <section className="py-24 bg-[#1E1E1E] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[#9E9E9E] uppercase tracking-widest text-xs font-bold mb-4 block">Çalışma Süreci</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Başarı Tesadüf Değildir.</h2>
          </div>
          <p className="text-[#9E9E9E] max-w-xs text-sm">Disiplinli ve şeffaf bir süreçle hayallerinizi somut sonuçlara dönüştürüyoruz.</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 left-0 w-full h-px bg-[#4A4A4A] hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12">
            {steps.map((step) => (
              <div key={step.id} className="relative group">
                <div className="hidden lg:block absolute -top-[52px] left-0 w-3 h-3 bg-[#9E9E9E] rounded-full border-4 border-[#1E1E1E] z-10 group-hover:bg-white group-hover:scale-150 transition-all duration-300"></div>
                <span className="text-6xl font-black text-[#4A4A4A]/20 absolute -top-8 -left-4 pointer-events-none group-hover:text-[#4A4A4A]/40 transition-colors">
                  0{step.id}
                </span>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                <p className="text-[#9E9E9E] text-sm leading-relaxed relative z-10">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
