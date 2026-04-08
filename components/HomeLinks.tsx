import React from 'react';
import { ArrowUpRight, Briefcase, FileText, Layers, MessageCircle } from 'lucide-react';

interface HomeLinksProps {
  onNavigate: (page: string) => void;
}

const links = [
  { title: 'Hizmet Paketleri', desc: 'SEO, performans reklam, web ve video hizmet detaylarını inceleyin.', page: 'services', icon: <Layers size={18} /> },
  { title: 'Vaka Çalışmaları', desc: 'Gerçek marka sonuçları, KPI gelişimi ve sektör bazlı başarı hikayeleri.', page: 'portfolio', icon: <Briefcase size={18} /> },
  { title: 'Kurumsal Yapımız', desc: 'Çalışma modelimiz, uzmanlıklarımız ve ajans yaklaşımımız.', page: 'corporate', icon: <FileText size={18} /> },
  { title: 'Hızlı Teklif Al', desc: 'Markanıza özel büyüme planı ve bütçe önerisi için hemen iletişime geçin.', page: 'contact', icon: <MessageCircle size={18} /> }
];

const HomeLinks: React.FC<HomeLinksProps> = ({ onNavigate }) => {
  return (
    <section className="py-14 sm:py-16 bg-[#070B14]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-6 sm:mb-8">
          <span className="text-[10px] uppercase tracking-[0.35em] font-black text-zinc-400">HIZLI GEZİN</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-[900] tracking-tight text-white">İhtiyacınıza Göre Hemen İlerleyin</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {links.map((link) => (
            <button
              key={link.title}
              onClick={() => onNavigate(link.page)}
              className="text-left rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:-translate-y-1 transition-all"
            >
              <div className="w-10 h-10 rounded-xl border border-white/15 bg-white/10 flex items-center justify-center text-zinc-100 mb-4">
                {link.icon}
              </div>
              <h3 className="text-white font-extrabold text-lg">{link.title}</h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{link.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                Sayfaya git <ArrowUpRight size={13} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeLinks;
