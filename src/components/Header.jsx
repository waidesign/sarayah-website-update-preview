import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/villas', label: 'Our Villas' },
  { to: '/experiences', label: 'Experiences' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/blog', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
];

function NavItem({ link }) {
  return (
    <NavLink
      to={link.to}
      className={({ isActive }) =>
        `relative py-1 font-['Noto_Serif'] uppercase tracking-[0.2em] text-[10px] font-bold transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-primary after:transition-all after:duration-300 ${
          isActive ? 'text-primary after:w-full' : 'text-on-surface/80 hover:text-primary after:w-0 hover:after:w-full'
        }`
      }
    >
      {link.label}
    </NavLink>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 nav">
        {/* Utility bar -- distinct dark-green tier above the main nav, desktop only */}
        <div className="hidden lg:block bg-primary text-white/70">
          <div className="max-w-[1920px] mx-auto px-8 py-2 flex justify-between items-center text-[11px] tracking-[0.2em] uppercase">
            <a
              href="https://wa.me/66825651186"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              Concierge — +66 82 565 1186
            </a>
            <div className="flex items-center gap-8">
              <span className="text-white/40">Direct Booking Guarantee</span>
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-white transition-colors">
                  {lang} <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
                <div className="absolute right-0 top-full pt-3 z-[110] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white shadow-xl rounded-lg p-2 min-w-[80px] border border-outline-variant/10">
                    {['en', 'th', 'ru'].map((code) => (
                      <button
                        key={code}
                        onClick={() => setLang(code)}
                        className="block w-full text-left px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-on-surface hover:bg-surface transition-colors"
                      >
                        {code.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main nav -- logo centered, links split either side */}
        <nav className="bg-[#fbf9f4]/95 backdrop-blur-lg w-full px-6 sm:px-8 py-5 lg:py-5 border-b border-outline-variant/20 shadow-sm">
          <div className="max-w-[1920px] mx-auto relative flex items-center justify-between">
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.slice(0, 2).map((link) => (
                <NavItem key={link.to} link={link} />
              ))}
            </div>

            <Link
              className="text-xl lg:text-2xl font-serif tracking-[0.3em] text-[#003629] lg:absolute lg:left-1/2 lg:-translate-x-1/2"
              to="/"
            >
              SARAYAH
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.slice(2).map((link) => (
                <NavItem key={link.to} link={link} />
              ))}
              <Link
                to="/booking"
                className="bg-primary text-on-primary px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-lg hover:bg-primary-container transition-all"
              >
                Book Now
              </Link>
            </div>

            <button
              className="lg:hidden text-primary p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-surface z-[150] transition-transform duration-500 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full bg-white">
          <div className="flex justify-between items-center px-8 py-6 border-b border-outline-variant/10">
            <span className="text-xl font-serif tracking-widest text-primary">MENU</span>
            <button className="text-primary p-2" onClick={closeMenu} aria-label="Close menu">
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-8 py-12 flex flex-col gap-8">
            <Link className="text-3xl font-headline italic text-on-surface" to="/" onClick={closeMenu}>Home</Link>
            {NAV_LINKS.map((link) => (
              <Link key={link.to} className="text-3xl font-headline italic text-on-surface" to={link.to} onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
            <div className="pt-8 border-t border-outline-variant/20 flex flex-col gap-4">
              <Link
                to="/booking"
                onClick={closeMenu}
                className="bg-primary text-on-primary px-8 py-5 text-center text-xs font-bold tracking-widest uppercase rounded-lg"
              >
                Book My Stay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
