
import React from 'react';
import { Layout, Search, BarChart, Smartphone, Globe, PenTool } from 'lucide-react';

interface ServicesProps {
  limit?: number;
  onNavigate?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ limit, onNavigate }) => {
  const allServices = [
    { title: "Kreatif Tasarım", icon: <Layout />, desc: "UX odaklı, modern ve kullanıcı dostu arayüzler tasarlıyoruz." },
    { title: "SEO Stratejileri", icon: <Search />, desc: "Organik aramada sürdürülebilir başarı ve görünürlük." },
    { title: "Performans Reklam", icon: <BarChart />, desc: "Veri odaklı kampanya yönetimi ile yüksek geri dönüşüm." },
    { title: "Mobil Uygulama", icon: <Smartphone />, desc: "Modern teknolojilerle performanslı mobil deneyimler." },
    { title: "Web Geliştirme", icon: <Globe />, desc: "Hızlı, güvenli ve tüm cihazlara uyumlu web altyapıları." },
    { title: "Kurumsal Kimlik", icon: <PenTool />, desc: "Markanızın gücünü yansıtan özgün ve modern tasarım dili." }
  ];

  const services = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
             <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400 mb-4 block">NE YAPIYORUZ?</span>
            <h2 className="text-4xl md:text-6xl font-[900] tracking-tight text-black mb-6">Dijital Çözümler</h2>
            <p className="text-black/60 text-lg leading-relaxed max-w-xl font-medium">İşinizi dijital dünyada bir adım öne taşıyacak uçtan uca uzman çözümler sunuyoruz.</p>
          </div>
          {limit && onNavigate && (
            <button onClick={() => onNavigate('services')} className="text-[11px] uppercase tracking-[0.2em] font-black border-b-4 border-black pb-2 hover:border-gray-300 transition-all">Tümünü Keşfet</button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="bg-white p-12 group hover:bg-black transition-all duration-500 border border-gray-100 shadow-sm hover:shadow-2xl">
              <div className="w-12 h-12 mb-10 text-black group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>
              <h3 className="text-xl font-[900] mb-6 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed group-hover:text-gray-400 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
