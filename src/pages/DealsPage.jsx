import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const OFFERS = [
  {
    title: 'Stay 7, Pay 6',
    tag: 'Year Round',
    body: 'Book any villa for 7 consecutive nights and receive your 7th night absolutely free.',
    image: '/assets/media/villas/2-bedroom/IMG_8261.jpg',
    cta: 'Claim Offer',
  },
  {
    title: 'Early Bird Special',
    tag: '90+ Days Advance',
    body: 'Book at least 90 days in advance to receive an exclusive 15% discount on standard rates.',
    image: '/assets/media/villas/4-bedroom/IMG_8401.jpg',
    cta: 'View Dates',
  },
  {
    title: 'Work from Paradise',
    tag: 'Long Stay',
    body: 'Stay 14+ nights and enjoy a 25% discount, including dedicated Wi-Fi, daily housekeeping, and laundry service.',
    image: '/assets/media/villas/4-bedroom/IMG_8400.jpg',
    cta: 'Inquire Now',
  },
];

const REASONS = [
  { icon: 'payments', title: 'Best Price', body: 'Guaranteed lowest rate compared to OTA channels.' },
  { icon: 'schedule', title: 'Priority Check-in', body: 'Early check-in and late check-out, subject to availability.' },
  { icon: 'redeem', title: 'Welcome Amenity', body: 'A complimentary welcome hamper upon your arrival.' },
  { icon: 'forum', title: 'Direct Concierge', body: 'Instant WhatsApp communication with your villa host.' },
];

export default function DealsPage() {
  return (
    <>
      <section className="bg-primary text-white pt-40 pb-20 px-6 sm:px-10 lg:px-20 text-center">
        <Reveal className="max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6 block">Exclusive Benefits</span>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">Special <em className="font-light">Stay Offers.</em></h1>
        </Reveal>
      </section>

      {/* ===== OFFERS ===== */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {OFFERS.map((offer, i) => (
            <Reveal key={offer.title} delay={i * 90} className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxe-sm mb-6">
                <img src={offer.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={offer.title} />
                <span className="absolute top-5 left-5 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold tracking-widest text-primary uppercase">{offer.tag}</span>
              </div>
              <h3 className="font-headline text-2xl mb-3">{offer.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">{offer.body}</p>
              <Link to="/booking" className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
                {offer.cta} <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== WHY BOOK DIRECT ===== */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-surface-container-low">
        <div className="max-w-[1000px] mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4 block">The Direct Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-headline italic">Why book direct?</h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 70} className="text-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{r.icon}</span>
                <h3 className="text-sm font-bold text-on-surface mb-1">{r.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{r.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-6 sm:px-8 bg-primary text-white text-center">
        <Reveal>
          <h2 className="font-headline text-3xl sm:text-5xl mb-8">Ready to claim your offer?</h2>
          <Link to="/booking" className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-fixed-dim transition-all">
            Check Availability
          </Link>
        </Reveal>
      </section>
    </>
  );
}
