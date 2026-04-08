import React from 'react';
import { Home, BriefcaseBusiness, Layers3, FolderKanban, Phone } from 'lucide-react';

interface MobileBottomNavProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const items = [
  { id: 'home', label: 'Ana', icon: <Home size={18} /> },
  { id: 'corporate', label: 'Kurumsal', icon: <BriefcaseBusiness size={18} /> },
  { id: 'services', label: 'Hizmet', icon: <Layers3 size={18} /> },
  { id: 'portfolio', label: 'Projeler', icon: <FolderKanban size={18} /> },
  { id: 'contact', label: 'İletişim', icon: <Phone size={18} /> }
];

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activePage, onNavigate }) => {
  return (
    <div className="fixed md:hidden bottom-3 left-3 right-3 z-[70]">
      <nav className="bg-[#0D1323]/95 border border-indigo-200/20 backdrop-blur-xl rounded-2xl shadow-2xl px-2 py-2">
        <ul className="grid grid-cols-5 gap-1">
          {items.map((item) => {
            const active = activePage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex flex-col items-center justify-center py-2 rounded-xl transition-all ${
                    active ? 'bg-white text-[#0D1323]' : 'text-indigo-100/70'
                  }`}
                >
                  {item.icon}
                  <span className="text-[10px] mt-1 font-bold tracking-wide">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileBottomNav;
