import React from 'react';
import { Step } from '../types';

const Process: React.FC = () => {
  const steps: Step[] = [
    { id: 1, title: 'Analiz', description: 'Pazar, hedef kitle, anahtar kelime ve rakip verilerini analiz ederek hızlı kazanım alanlarını belirleriz.' },
    { id: 2, title: 'Strateji', description: 'SEO, içerik, reklam ve web dönüşüm katmanlarını tek KPI çerçevesinde bir growth planına dönüştürürüz.' },
    { id: 3, title: 'Üretim', description: 'Web, içerik ve video prodüksiyon çıktılarını marka diline uygun, satış ve lead üretimi odaklı biçimde hayata geçiririz.' },
    { id: 4, title: 'Optimizasyon', description: 'Haftalık test-öğren yaklaşımıyla maliyetleri düşürüp dönüşüm oranını artıran sürekli optimizasyon modeli uygularız.' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0F172A] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-8 sm:mb-10">
          <span className="text-indigo-200/70 uppercase tracking-[0.35em] text-[10px] font-bold">Çalışma Sistemi</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] tracking-tight mt-3">Ölçülebilir Growth Workflow</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <article key={step.id} className="rounded-2xl border border-indigo-200/20 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition-all">
              <span className="text-3xl font-black text-indigo-200/60">0{step.id}</span>
              <h3 className="text-xl font-bold mt-3 mb-2">{step.title}</h3>
              <p className="text-indigo-100/80 text-sm leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
