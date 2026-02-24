
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-400 mb-6 block">İLETİŞİM</span>
            <h2 className="text-5xl md:text-7xl font-[900] text-black mb-12 tracking-tight">Tanışalım.</h2>
            
            <div className="space-y-12 mb-16">
              <div className="flex items-start space-x-8">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center border-2 border-black text-black">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-[11px] uppercase tracking-widest text-gray-400 mb-2">E-POSTA ADRESİMİZ</h4>
                  <p className="text-black text-xl font-bold">merhaba@novadigital.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-8">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center border-2 border-black text-black">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-[11px] uppercase tracking-widest text-gray-400 mb-2">TELEFON HATTIMIZ</h4>
                  <p className="text-black text-xl font-bold">+90 212 555 0123</p>
                </div>
              </div>
            </div>

            <div className="w-full h-80 bg-gray-50 border border-gray-100 relative overflow-hidden contrast-125">
              <div className="absolute inset-0 bg-black/5 z-10"></div>
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" alt="Map View" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                 <span className="bg-black text-white px-6 py-3 font-black text-[10px] tracking-[0.3em]">ISTANBUL OFFICE</span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#000000] p-12 md:p-20 shadow-2xl">
            <h3 className="text-3xl font-[900] text-white mb-12 tracking-tight">Yeni Bir Proje mi Var?</h3>
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-4">AD SOYAD</label>
                  <input type="text" className="bg-transparent border-b-2 border-gray-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-bold" placeholder="Tam adınız" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-4">E-POSTA</label>
                  <input type="email" className="bg-transparent border-b-2 border-gray-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-bold" placeholder="E-posta adresiniz" />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-4">İLGİLENDİĞİNİZ HİZMET</label>
                <select className="bg-transparent border-b-2 border-gray-800 py-4 text-white focus:outline-none focus:border-white transition-colors appearance-none font-bold cursor-pointer">
                  <option className="bg-black">Sosyal Medya Yönetimi</option>
                  <option className="bg-black">Dijital Reklamlar</option>
                  <option className="bg-black">Web Tasarım & UI/UX</option>
                  <option className="bg-black">Video & Prodüksiyon</option>
                </select>
              </div>
              
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-4">MESAJINIZ</label>
                <textarea rows={4} className="bg-transparent border-b-2 border-gray-800 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none font-bold" placeholder="Proje detaylarından bahsedin..."></textarea>
              </div>
              
              <button className="w-full bg-white text-black py-6 font-[900] uppercase tracking-[0.3em] text-[11px] hover:bg-gray-200 transition-all shadow-xl">
                TEKLİF TALEBİ GÖNDER
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
