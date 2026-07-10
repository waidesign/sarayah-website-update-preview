import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const TESTIMONIALS = [
  {
    name: 'The Henderson Family',
    source: 'Australia',
    quote: 'The 4-bedroom villa was perfect for our family reunion. Having a BBQ grill and a full kitchen made our stay so easy. The self check-in was seamless!',
  },
  {
    name: 'Marcus & Elena',
    source: 'Digital Nomads',
    quote: 'Privacy like we\'ve never experienced. The 2-bedroom pool villa in Thalang is a hidden gem. High-speed internet for work and a stunning infinity pool for the evenings.',
    featured: true,
  },
  {
    name: 'Sarah J.',
    source: 'United Kingdom',
    quote: 'Clean, modern, and very secure. We loved the proximity to Surin Beach but always wanted to get back to our private sanctuary at Sarayah.',
  },
];

const BADGES = ['Verified Direct', 'Hostex Secure', '24/7 Concierge'];

function Stars() {
  return (
    <div className="flex justify-center gap-1 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-primary text-white pt-40 pb-20 px-6 sm:px-10 lg:px-20 text-center">
        <Reveal className="max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6 block">Guest Perspectives</span>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">Stories from <em className="font-light">Sarayah.</em></h1>
          <p className="text-white/80 text-lg leading-relaxed">Trusted by families and group travelers alike — discover why Sarayah is the preferred choice for a luxury private-pool stay in Thalang.</p>
        </Reveal>
      </section>

      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              className={`p-10 rounded-2xl text-center flex flex-col ${t.featured ? 'bg-primary text-white shadow-luxe md:-translate-y-4' : 'bg-surface-container-low'}`}
            >
              <Stars />
              <blockquote className={`font-headline italic text-xl leading-relaxed mb-8 flex-1 ${t.featured ? 'text-white' : 'text-on-surface'}`}>"{t.quote}"</blockquote>
              <cite className="not-italic">
                <span className={`block font-bold text-sm uppercase tracking-widest mb-1 ${t.featured ? 'text-white' : 'text-primary'}`}>{t.name}</span>
                <span className={`text-xs ${t.featured ? 'text-white/60' : 'text-on-surface-variant/60'}`}>{t.source}</span>
              </cite>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 sm:px-8 bg-surface-container-low">
        <Reveal className="max-w-[600px] mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {BADGES.map((badge) => (
            <span key={badge} className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-base">verified</span>
              {badge}
            </span>
          ))}
        </Reveal>
      </section>

      <section className="py-24 sm:py-32 px-6 sm:px-8 bg-primary text-white text-center">
        <Reveal>
          <h2 className="font-headline text-3xl sm:text-5xl mb-10">Write your own story.</h2>
          <Link to="/booking" className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-fixed-dim transition-all">
            Book Now
          </Link>
        </Reveal>
      </section>
    </>
  );
}
