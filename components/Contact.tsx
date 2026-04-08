import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const WA_NUMBER = '905364290919';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    service: '360 Sosyal Medya Yönetimi',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      'Merhaba NextGen Medya,',
      '',
      `Ad Soyad: ${form.fullName || '-'}`,
      `E-posta: ${form.email || '-'}`,
      `İlgilenilen Hizmet: ${form.service || '-'}`,
      `Mesaj: ${form.message || '-'}`
    ].join('\n');

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-400 mb-6 block">İLETİŞİM</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-[900] text-[#0F172A] mb-10 sm:mb-12 tracking-tight">Premium bir büyüme planı oluşturalım.</h2>

            <div className="space-y-12 mb-16">
              <div className="flex items-start space-x-8">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center border-2 border-black text-black">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-[11px] uppercase tracking-widest text-gray-400 mb-2">E-POSTA ADRESİMİZ</h4>
                  <a href="mailto:info@nextgenmedya.com" className="text-black text-xl font-bold hover:text-zinc-600 transition-colors">info@nextgenmedya.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center border-2 border-black text-black">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-[11px] uppercase tracking-widest text-gray-400 mb-2">TELEFON HATTIMIZ</h4>
                  <a href="tel:05364290919" className="text-black text-xl font-bold hover:text-zinc-600 transition-colors">0536 429 09 19</a>
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

          <div className="bg-gradient-to-br from-[#1C2333] via-[#2A3349] to-[#111827] p-8 sm:p-12 md:p-16 shadow-2xl rounded-3xl border border-zinc-300/30">
            <h3 className="text-3xl font-[900] text-white mb-12 tracking-tight">Yeni Bir Proje mi Var?</h3>
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-300/70 mb-4">AD SOYAD</label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
                    className="bg-transparent border-b-2 border-zinc-300/30 py-3 text-white focus:outline-none focus:border-white transition-colors font-bold"
                    placeholder="Tam adınız"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-300/70 mb-4">E-POSTA</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    className="bg-transparent border-b-2 border-zinc-300/30 py-3 text-white focus:outline-none focus:border-white transition-colors font-bold"
                    placeholder="E-posta adresiniz"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-300/70 mb-4">İLGİLENDİĞİNİZ HİZMET</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
                  className="bg-transparent border-b-2 border-zinc-300/30 py-4 text-white focus:outline-none focus:border-white transition-colors appearance-none font-bold cursor-pointer"
                >
                  <option className="bg-black">360 Sosyal Medya Yönetimi</option>
                  <option className="bg-black">SEO & Teknik SEO</option>
                  <option className="bg-black">Google Ads / Meta Ads</option>
                  <option className="bg-black">Web Site Yapımı</option>
                  <option className="bg-black">Video Yapımı & Prodüksiyon</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-300/70 mb-4">MESAJINIZ</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  className="bg-transparent border-b-2 border-zinc-300/30 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none font-bold"
                  placeholder="Proje detaylarından bahsedin..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-[#D9DCE4] to-[#AEB6C5] text-[#111827] py-5 font-[900] uppercase tracking-[0.3em] text-[11px] transition-all shadow-xl">
                WHATSAPP'TAN GÖNDER
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
