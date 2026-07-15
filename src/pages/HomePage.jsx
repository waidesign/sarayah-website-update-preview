import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import Reveal from '../components/Reveal';
import FaqSection from '../components/FaqSection';
import {
  THALANG_NODES,
  FACILITIES,
  WHY_SARAYAH,
  TOURS,
  EXPERIENCES,
  GALLERY,
  GALLERY_2BR,
  VILLAS,
  SERVICES,
} from '../data/homepage';

export default function HomePage() {
  return (
    <>
      <HeroSlider />


      {/* ===== SECTION 1: STATEMENT (pure negative space, no image) ===== */}
      <section className="py-32 sm:py-40 lg:py-52 px-6 sm:px-8 bg-background">
        <Reveal className="max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-8 block">The Sarayah Mission</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">
            Luxury isn't gold leaf. <br className="hidden sm:block" />
            It's <em className="text-primary">space, silence,</em> <br className="hidden sm:block" />
            and sensory purity.
          </h2>
          <p className="mt-10 text-on-surface-variant leading-loose text-lg max-w-3xl mx-auto">Two private-pool estates in Thalang District, engineered for the traveler who values a locked gate over a lobby.</p>
        </Reveal>
      </section>

      {/* ===== SECTION 2: FULL-BLEED IMAGE BREAK, QUOTE OVERLAY ===== */}
      <Reveal as="section" className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
        <img alt="Sarayah Phuket — luxury villa design detail" className="absolute inset-0 w-full h-full object-cover" src="/assets/img/cool-light-bulb.jpg" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="relative z-10 h-full flex items-end px-6 sm:px-10 lg:px-20 pb-16 sm:pb-20">
          <p className="text-white font-headline italic text-2xl sm:text-3xl lg:text-4xl leading-snug max-w-3xl">
            "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
          </p>
        </div>
      </Reveal>

      {/* ===== SECTION 3: VILLA SHOWCASE (full-bleed alternating panels) ===== */}
      <section className="bg-background">
        <div className="px-6 sm:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16 lg:pb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">The Spaces</span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">Two flagship villas.<br /><em className="text-primary">Zero compromise.</em></h2>
          </Reveal>
        </div>

        {VILLAS.map((villa, i) => (
          <div key={villa.name} className="relative h-[85vh] sm:h-screen overflow-hidden group">
            <Link to={villa.href} className="absolute inset-0">
              <img alt={villa.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={villa.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className={`relative z-10 h-full flex items-end px-6 sm:px-10 lg:px-20 pb-16 sm:pb-20 ${i % 2 === 1 ? 'lg:justify-end lg:text-right' : ''}`}>
                <div className="max-w-lg">
                  <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-4 block">{villa.eyebrow}</span>
                  <h3 className="text-4xl sm:text-5xl font-headline text-white mb-5">{villa.name}</h3>
                  <p className="text-white/80 leading-relaxed mb-8">{villa.body}</p>
                  <span className="inline-flex items-center gap-3 border-b-2 border-white/30 pb-1 text-white text-sm font-bold tracking-widest uppercase group-hover:border-white transition-all">
                    Explore the Villa <span className="material-symbols-outlined text-base">arrow_right_alt</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>

      {/* ===== SECTION 4: OUR FACILITIES ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto mb-16 lg:mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">In Every Villa</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">Our Facilities.<br /><em className="text-primary">Every comfort, considered.</em></h2>
          <p className="mt-8 text-on-surface-variant leading-loose text-lg">Not a checklist of add-ons — just what a private-pool estate should already have, built in from the start.</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-outline-variant/20 max-w-[1100px] mx-auto">
          {FACILITIES.map((facility, i) => (
            <Reveal key={facility.label} delay={i * 60} className="flex flex-col items-center justify-center text-center gap-2 px-6 sm:px-8 py-8 border-b border-r border-outline-variant/20">
              <span className="material-symbols-outlined text-primary text-2xl">{facility.icon}</span>
              <h3 className="text-base font-headline text-on-surface">{facility.label}</h3>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-center justify-center text-center gap-8">
          <Link to="/booking" className="bg-primary text-white px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-container transition-all w-full sm:w-auto text-center">
            Request a Booking
          </Link>
          <Link to="/villas" className="inline-flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-sm border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
            View All Facilities <span className="material-symbols-outlined text-base">arrow_right_alt</span>
          </Link>
        </Reveal>
      </section>

      {/* ===== SECTION 5: WHY SARAYAH PHUKET ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">The Sarayah Promise</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">Why <em className="text-primary">Sarayah</em> Phuket?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-10 lg:gap-16 max-w-[1100px] mx-auto">
          {WHY_SARAYAH.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-headline text-on-surface mb-2">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs mx-auto">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== SECTION 6: PHUKET TOURS (editorial overlay cards) ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-background border-t border-outline-variant/10">
        <Reveal className="max-w-4xl mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">Beyond the Villa</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">Phuket Tours.<br /><em className="text-primary">Special discount.</em></h2>
          <p className="mt-8 text-on-surface-variant leading-loose text-lg">Discover the Andaman's most spectacular destinations — Phang Nga Bay's limestone giants, the Phi Phi Islands' impossible blues — booked through your Sarayah concierge at a preferred rate.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {TOURS.map((tour, i) => (
            <Reveal key={tour.name} delay={i * 100} className="group">
              <div className="relative aspect-[4/5] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-luxe">
                <img alt={tour.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={tour.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                  <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-3 block">Special Discount</span>
                  <h3 className="text-2xl sm:text-3xl font-headline text-white mb-3">{tour.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-7 max-w-sm">{tour.body}</p>
                  <div className="flex items-center gap-6">
                    <Link to="/booking" className="bg-white text-primary px-7 py-3 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-fixed-dim transition-all">
                      Book Now
                    </Link>
                    <Link to="/experiences" className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase border-b-2 border-white/30 pb-1 hover:border-white transition-all">
                      Learn More <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== SECTION 7: PHUKET EXPERIENCES (featured + compact list) ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <Reveal className="max-w-4xl mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">Curated Experiences</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">Live it like a local.<br /><em className="text-primary">Curated by Sarayah.</em></h2>
          <p className="mt-8 text-on-surface-variant leading-loose text-lg">From private yacht charters to poolside tasting menus, our concierge arranges Phuket's finest experiences — vetted, booked, and billed with the same ease as your stay.</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal className="relative rounded-2xl overflow-hidden shadow-luxe aspect-[4/5] sm:aspect-video lg:aspect-[4/3]">
            <img alt={EXPERIENCES[0].title} className="absolute inset-0 w-full h-full object-cover" src={EXPERIENCES[0].image} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-3 block">{EXPERIENCES[0].category}</span>
              <h3 className="text-2xl sm:text-3xl font-headline text-white">{EXPERIENCES[0].title}</h3>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col justify-center">
            <p className="text-on-surface-variant leading-loose text-lg mb-10">{EXPERIENCES[0].body}</p>
            <div className="divide-y divide-outline-variant/20 border-t border-b border-outline-variant/20">
              {EXPERIENCES.slice(1).map((exp) => (
                <div key={exp.title} className="flex items-center gap-6 py-6">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img alt={exp.title} className="w-full h-full object-cover" src={exp.image} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-1 block">{exp.category}</span>
                    <h4 className="font-headline text-lg text-on-surface truncate">{exp.title}</h4>
                  </div>
                  <span className="material-symbols-outlined text-primary ml-auto shrink-0">arrow_right_alt</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-16 lg:mt-20 text-center">
          <Link to="/experiences" className="inline-flex items-center gap-3 border border-outline-variant/30 px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:border-primary hover:text-primary transition-all">
            Explore All Experiences
          </Link>
        </Reveal>
      </section>

      {/* ===== SECTION 8: THE THALANG DICHOTOMY (SCN NODE) ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-background border-t border-outline-variant/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">The Strategic Choice</span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08] italic">Why the North is the <br /><span className="font-light not-italic">New Standard.</span></h2>
            <p className="mt-10 text-on-surface-variant leading-loose text-lg">Phuket is an island of two halves. The south is characterized by high-density tourism, traffic bottlenecks, and digitized nightlife. The north—specifically the <strong>Thalang District</strong>—is where the "Original Phuket" still breathes. It is the definitive frontier for those who understand that true luxury is land-space.</p>
            <p className="mt-6 text-on-surface-variant leading-loose">At Sarayah, we chose Thalang not just for its proximity to the airport, but for the psychological distance it provides from the island's commercial pulse. Here, you are minutes away from <strong>Bang Tao's</strong> elite dining and <strong>Surin's</strong> crystalline waters, yet your return home is to a secure, gated sanctuary where the only sound is the rustling of palms.</p>
            <div className="mt-12">
              <Link to="/phuket" className="inline-flex items-center gap-4 text-primary font-bold tracking-widest uppercase text-sm border-b-2 border-primary/20 pb-2 hover:border-primary transition-all">
                Read the Thalang Intelligence Guide <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
          <div className="lg:col-span-7 space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {THALANG_NODES.map((node) => (
                <Reveal key={node.title} className="space-y-6">
                  <h3 className="text-3xl font-headline text-primary italic">{node.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-loose">{node.body}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="grid grid-cols-2 gap-12">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-luxe">
                <img
                  alt="Sunset over a private pier on the Andaman coastline near Sarayah"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/assets/img/layan-beach.jpg"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-luxe">
                <img
                  alt="Sunrise over Cape Yamu coastline near Sarayah"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/assets/img/yamu-sunrise.jpg"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: THE SERVICE LAYER (dark, stat-led) ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-on-surface text-white">
        <Reveal className="max-w-4xl mx-auto text-center mb-20 lg:mb-24">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-white/50 mb-6 block">Personalized Care</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline leading-[1.08]">Direct-to-owner <br /><em>accountability.</em></h2>
          <p className="mt-8 text-white/60 leading-loose text-lg">No faceless management agency. A 24/7 WhatsApp concierge, run by the team that built, maintains, and loves these properties.</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-10 lg:gap-16 max-w-[1100px] mx-auto">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 90} className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-white text-3xl">{service.icon}</span>
              </div>
              <h4 className="font-headline text-xl mb-2">{service.title}</h4>
              <p className="text-sm text-white/60 leading-relaxed max-w-xs mx-auto">{service.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== SECTION 10: PHOTO & VIDEO GALLERY -- 4-BEDROOM (mosaic grid) ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
        <Reveal className="max-w-4xl mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">Inside the Grand Estate</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">The Gallery.<br /><em className="text-primary">4-Bedroom Villa.</em></h2>
          <p className="mt-8 text-on-surface-variant leading-loose text-lg">Every room, every corner — captured exactly as you'll find it. No stock photography, no surprises at check-in.</p>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-2 lg:grid-cols-6 auto-rows-[280px] sm:auto-rows-[340px] lg:auto-rows-[320px] gap-4 lg:gap-5">
          {GALLERY.map((item) => (
            <div key={item.image} className={`relative rounded-xl overflow-hidden group ${item.className}`}>
              <img alt={item.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.image} />
            </div>
          ))}
        </Reveal>

        <Reveal delay={150} className="mt-16 lg:mt-20 text-center">
          <Link to="/villas/4-bedroom-villa" className="inline-flex items-center gap-3 border border-outline-variant/30 px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:border-primary hover:text-primary transition-all">
            View the 4-Bedroom Villa
          </Link>
        </Reveal>
      </section>

      {/* ===== SECTION 10B: PHOTO & VIDEO GALLERY -- 2-BEDROOM (mosaic grid) ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <Reveal className="max-w-4xl mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">Inside the Intimate Sanctuary</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">The Gallery.<br /><em className="text-primary">2-Bedroom Villa.</em></h2>
          <p className="mt-8 text-on-surface-variant leading-loose text-lg">The same standard, at an intimate scale — every room, every corner, exactly as you'll find it.</p>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-2 lg:grid-cols-6 auto-rows-[280px] sm:auto-rows-[340px] lg:auto-rows-[320px] gap-4 lg:gap-5">
          {GALLERY_2BR.map((item) => (
            <div key={item.image} className={`relative rounded-xl overflow-hidden group ${item.className}`}>
              <img alt={item.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.image} />
            </div>
          ))}
        </Reveal>

        <Reveal delay={150} className="mt-16 lg:mt-20 text-center">
          <Link to="/villas/2-bedroom-private-pool" className="inline-flex items-center gap-3 border border-outline-variant/30 px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:border-primary hover:text-primary transition-all">
            View the 2-Bedroom Villa
          </Link>
        </Reveal>
      </section>

      {/* ===== SECTION 11: DISCREET ANSWERS (FAQ & AUTHORITY) ===== */}
      <FaqSection />

      {/* ===== SECTION 12: FINAL CTA ===== */}
      <section className="py-32 sm:py-40 lg:py-48 px-6 sm:px-8 bg-primary relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-[0.08]">
          <img alt="Sarayah Phuket Villas Aerial" className="w-full h-full object-cover grayscale" src="/assets/media/villas/4-bedroom/IMG_8416.jpg" />
        </div>
        <Reveal className="relative z-10 text-center">
          <h2 className="text-white font-headline text-5xl sm:text-7xl lg:text-8xl leading-[1.05] mb-10">Stop searching.<br /><em>Start arriving.</em></h2>
          <p className="text-white/70 mb-14 max-w-4xl mx-auto text-lg leading-relaxed">Join the circle of discerning travelers who choose Sarayah for the privacy they actually deserve.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/booking" className="bg-white text-primary px-12 py-5 rounded-lg font-bold tracking-widest uppercase hover:bg-primary-fixed-dim transition-all w-full sm:w-auto text-xs">Book Direct & Secure Priority</Link>
            <Link to="/contact" className="bg-transparent border border-white/30 px-12 py-5 rounded-lg font-bold tracking-widest uppercase hover:bg-white/10 transition-all w-full sm:w-auto text-xs">Chat with our Concierge</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
