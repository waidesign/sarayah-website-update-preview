import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';
import WhatsAppFloat from './WhatsAppFloat';
import BookingBar from './BookingBar';

export default function Layout() {
  const { pathname } = useLocation();
  const [stickyBarVisible, setStickyBarVisible] = useState(false);

  useEffect(() => {
    if (pathname === '/') {
      const hero = document.getElementById('hero');
      const header = document.querySelector('header');
      if (!hero) {
        setStickyBarVisible(false);
        return undefined;
      }
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const observer = new IntersectionObserver(([entry]) => setStickyBarVisible(!entry.isIntersecting), {
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0,
      });
      observer.observe(hero);
      return () => observer.disconnect();
    } else {
      const handleScroll = () => {
        setStickyBarVisible(window.scrollY > 120);
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

  const showStickyBar = stickyBarVisible && pathname !== '/booking';

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Header />
      
      <div
        aria-hidden={!showStickyBar}
        className={`fixed left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] max-w-4xl z-40 transition-all duration-300 top-[95px] lg:top-[130px] ${
          showStickyBar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <BookingBar variant="sticky" />
      </div>

      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
      <WhatsAppFloat />
    </div>
  );
}

