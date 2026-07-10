import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import FaqAccordion from '../components/FaqAccordion';
import BookingModal from '../components/BookingModal';
import { VILLAS_DATA } from '../data/villas';

export default function VillaDetailPage() {
  const { slug } = useParams();
  const villa = VILLAS_DATA[slug];
  const [bookingOpen, setBookingOpen] = useState(false);

  if (!villa) return <Navigate to="/villas" replace />;

  return (
    <>
      <PageHeader
        eyebrow={villa.heroEyebrow}
        title={villa.heroTitle}
        italicTitle={villa.heroItalic}
        image={villa.heroImage}
        stats={villa.stats}
      />

      {/* ===== ETHOS ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <Reveal className="space-y-8">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block">{villa.ethos.eyebrow}</span>
            <h2 className="font-headline text-4xl sm:text-5xl leading-[1.1] italic">
              {villa.ethos.title} <br />
              <span className="font-light not-italic text-secondary">{villa.ethos.italicTitle}</span>
            </h2>
            {villa.ethos.paragraphs.map((p, i) => (
              <p key={i} className="text-on-surface-variant leading-loose text-lg">{p}</p>
            ))}
            <div className="grid grid-cols-2 gap-12 border-t border-outline-variant/15 pt-10">
              {villa.ethos.stats.map((s) => (
                <div key={s.label}>
                  <span className="font-headline text-4xl text-primary">{s.value}</span>
                  <p className="text-xs uppercase tracking-[0.3em] text-secondary mt-3">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="rounded-3xl overflow-hidden aspect-square shadow-luxe">
              <img src={villa.ethos.image} className="w-full h-full object-cover" alt={`${villa.name} interior detail`} />
            </div>
            <div className="absolute -bottom-10 -right-6 sm:-right-10 bg-white p-8 sm:p-10 rounded-2xl shadow-luxe-sm hidden md:block max-w-xs border border-outline-variant/5">
              <p className="text-primary font-headline italic text-xl leading-relaxed">"{villa.ethos.quote}"</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== VISUAL TOUR (mosaic) ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-background">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="mb-12 lg:mb-16">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">Visual Tour</span>
            <h2 className="font-headline text-4xl sm:text-5xl">Every angle of your sanctuary.</h2>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
            {villa.tourImages.map((img, i) => (
              <div key={img.image + i} className={`relative rounded-xl overflow-hidden group ${i === 0 ? 'col-span-2 row-span-2 sm:col-span-2' : ''}`}>
                <img alt={img.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img.image} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== SECONDARY (sleep/wellness or culinary, alternating image side) ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal delay={100} className={`order-2 lg:order-1 aspect-square overflow-hidden shadow-luxe ${villa.secondary.rounded}`}>
            <img src={villa.secondary.image} className="w-full h-full object-cover" alt={villa.secondary.italicTitle} />
          </Reveal>
          <Reveal className="order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block">{villa.secondary.eyebrow}</span>
            <h3 className="text-4xl font-headline text-on-surface leading-tight italic">
              {villa.secondary.title} <br />
              <span className="font-light not-italic text-secondary">{villa.secondary.italicTitle}</span>
            </h3>
            {villa.secondary.paragraphs.map((p, i) => (
              <p key={i} className="text-on-surface-variant leading-loose">{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== NEIGHBORHOOD ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal className="rounded-2xl overflow-hidden aspect-video shadow-luxe">
            <img src={villa.neighborhood.image} className="w-full h-full object-cover" alt={villa.neighborhood.italicTitle} />
          </Reveal>
          <Reveal delay={100} className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block">{villa.neighborhood.eyebrow}</span>
            <h3 className="text-4xl font-headline text-on-surface leading-tight italic">
              {villa.neighborhood.title} <br />
              <span className="font-light not-italic">{villa.neighborhood.italicTitle}</span>
            </h3>
            {villa.neighborhood.paragraphs.map((p, i) => (
              <p key={i} className="text-on-surface-variant leading-loose">{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== AMENITIES ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="text-center mb-16 lg:mb-20">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">Everything Included</span>
            <h2 className="font-headline text-4xl sm:text-5xl">Complete villa features.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-12">
            {villa.amenityGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 90} className="space-y-6">
                <h3 className="font-headline text-xl text-primary border-b border-outline-variant/20 pb-4">{group.title}</h3>
                <ul className="space-y-4 text-on-surface-variant">
                  {group.items.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHECK AVAILABILITY ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white text-center">
        <Reveal className="max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">Availability</span>
          <h2 className="font-headline text-4xl sm:text-5xl mb-8">Pick your <em className="text-primary">escape dates.</em></h2>
          <p className="text-on-surface-variant leading-relaxed mb-10">Most private pool villas in Phuket book up months in advance. Check your dates and lock in your sanctuary — no middleman, no extra fees.</p>
          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="bg-primary text-white px-12 py-5 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-container transition-all"
          >
            Check Availability
          </button>
        </Reveal>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      {villa.testimonial && (
        <section className="py-24 px-6 sm:px-8 bg-surface-container-low">
          <Reveal className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <blockquote className="font-headline text-2xl sm:text-3xl italic mb-8 leading-relaxed text-on-surface">"{villa.testimonial.quote}"</blockquote>
            <cite className="not-italic">
              <span className="block font-bold text-sm uppercase tracking-widest text-primary mb-1">{villa.testimonial.name}</span>
              <span className="text-xs text-on-surface-variant/60">{villa.testimonial.source}</span>
            </cite>
          </Reveal>
        </section>
      )}

      {/* ===== CROSS-LINK ===== */}
      <section className="py-24 px-6 sm:px-8 bg-white">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4 block">{villa.crossLink.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl font-headline mb-4">{villa.crossLink.title}</h2>
          <p className="text-on-surface-variant mb-10 leading-relaxed">{villa.crossLink.body}</p>
          <Link to={villa.crossLink.href} className="inline-block bg-primary text-on-primary px-10 py-4 rounded-lg text-sm font-bold tracking-widest uppercase hover:bg-primary-container transition-all">
            {villa.crossLink.cta}
          </Link>
        </Reveal>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">Questions & Answers</span>
            <h2 className="font-headline text-4xl">Villa <em className="text-primary font-light">FAQs</em></h2>
          </Reveal>
          <FaqAccordion items={villa.faqs} />
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 bg-primary text-white text-center">
        <Reveal>
          <h2 className="font-headline text-5xl sm:text-7xl mb-10 leading-[1.05]">{villa.ctaTitle}<br /><em>{villa.ctaItalic}</em></h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="bg-white text-primary px-12 py-5 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-fixed-dim transition-all w-full sm:w-auto"
            >
              Request a Booking
            </button>
            <Link to="/villas" className="bg-transparent border border-white/30 px-12 py-5 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-white/10 transition-all w-full sm:w-auto">
              Return to Our Villas
            </Link>
          </div>
        </Reveal>
      </section>

      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
    </>
  );
}
