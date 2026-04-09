import React, { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';

interface CookieConsentProps {
  onNavigate: (page: string) => void;
}

const COOKIE_KEY = 'nextgen-cookie-consent';

const CookieConsent: React.FC<CookieConsentProps> = ({ onNavigate }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-3 right-3 md:left-6 md:right-auto md:max-w-md z-[80]">
      <div className="rounded-2xl border border-zinc-300 bg-white/95 backdrop-blur-xl shadow-2xl p-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700">
            <Cookie size={17} />
          </div>
          <div>
            <p className="text-sm font-extrabold text-zinc-900">Çerez Kullanımı</p>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              Site deneyimini iyileştirmek için çerez kullanıyoruz. Detaylar için çerez politikamızı inceleyebilirsiniz.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <button onClick={accept} className="px-3 py-2 rounded-lg bg-zinc-900 text-white text-xs font-bold">Kabul Et</button>
              <button onClick={() => onNavigate('cookies')} className="px-3 py-2 rounded-lg bg-zinc-100 text-zinc-800 text-xs font-bold">Detaylar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
