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
    <section className="py-16 sm:py-20 bg-[#060A12]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-8 sm:mb-10">
          <span className="text-[10px] uppercase tracking-[0.45em] font-black text-zinc-400">İLETİŞİM</span>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-[900] text-white tracking-tight">Projeniz için SEO ve satış odaklı büyüme planı oluşturalım.</h2>
          <p className="mt-4 text-zinc-300 max-w-3xl">
            Web site yapımı, teknik SEO, Google Ads, Meta Ads, video prodüksiyon ve sosyal medya yönetimi ihtiyaçlarınızı tek strateji altında planlayıp hızlıca aksiyona alalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 sm:p-8">
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-zinc-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-[0.28em] text-zinc-400 mb-2">E-Posta</h4>
                  <a href="mailto:info@nextgenmedya.com" className="text-white text-lg sm:text-xl font-bold">info@nextgenmedya.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-zinc-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-[0.28em] text-zinc-400 mb-2">Telefon</h4>
                  <a href="tel:05364290919" className="text-white text-lg sm:text-xl font-bold">0536 429 09 19</a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 h-72 relative">
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" alt="Map View" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/85 text-zinc-900 px-4 py-1.5 text-[10px] tracking-[0.28em] font-black uppercase">Istanbul Office</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 sm:p-8 md:p-10">
            <h3 className="text-2xl sm:text-3xl font-[900] text-white mb-8 tracking-tight">Yeni Bir Proje mi Var?</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.24em] font-black text-zinc-400 mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
                    className="rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white focus:outline-none focus:border-cyan-300/60"
                    placeholder="Tam adınız"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.24em] font-black text-zinc-400 mb-2">E-Posta</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    className="rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white focus:outline-none focus:border-cyan-300/60"
                    placeholder="E-posta adresiniz"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.24em] font-black text-zinc-400 mb-2">Hizmet</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
                  className="rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white focus:outline-none focus:border-cyan-300/60 appearance-none"
                >
                  <option className="bg-[#0A0F1A]">360 Sosyal Medya Yönetimi</option>
                  <option className="bg-[#0A0F1A]">SEO & Teknik SEO</option>
                  <option className="bg-[#0A0F1A]">Google Ads / Meta Ads</option>
                  <option className="bg-[#0A0F1A]">Web Site Yapımı</option>
                  <option className="bg-[#0A0F1A]">Video Yapımı & Prodüksiyon</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.24em] font-black text-zinc-400 mb-2">Mesajınız</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  className="rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white focus:outline-none focus:border-cyan-300/60 resize-none"
                  placeholder="Proje detaylarından bahsedin..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-[#DDD6FE] to-[#BAE6FD] text-[#0F172A] py-4 font-[900] uppercase tracking-[0.22em] text-[11px]">
                WhatsApp'tan Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
