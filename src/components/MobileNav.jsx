import { NavLink } from 'react-router-dom';

const ITEMS = [
  { to: '/', label: 'Home', icon: 'home', end: true },
  { to: '/villas', label: 'Explore', icon: 'search' },
  { to: '/booking', label: 'Bookings', icon: 'calendar_today' },
];

export default function MobileNav() {
  return (
    <nav className="bg-[#fbf9f4]/90 backdrop-blur-xl fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 md:hidden z-50 border-t border-[#c0c9c3]/15">
      {ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center transition-colors ${
              isActive ? 'text-[#003629]' : 'text-stone-400 hover:text-[#003629]'
            }`
          }
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="font-['Manrope'] text-[10px] uppercase tracking-widest font-semibold">{item.label}</span>
        </NavLink>
      ))}
      <a
        className="flex flex-col items-center justify-center text-stone-400 hover:text-[#003629] transition-colors"
        href="https://wa.me/66825651186"
        target="_blank"
        rel="noopener"
      >
        <span className="material-symbols-outlined">chat</span>
        <span className="font-['Manrope'] text-[10px] uppercase tracking-widest font-semibold">Concierge</span>
      </a>
    </nav>
  );
}
