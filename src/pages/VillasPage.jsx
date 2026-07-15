import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { COMPARISON, FACILITIES, JOURNEY } from '../data/villasPage';

export default function VillasPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Collection · Thalang District"
        title="Our"
        italicTitle="Villas."
        subtitle="Eliminate the uncertainty of mass-market rentals. Sarayah is a curated collection of two flagship properties for those who demand total autonomy and direct-to-owner integrity."
        image="/assets/media/villas/4-bedroom/IMG_8416.jpg"
      />

      {/* ===== OWNER'S CREED ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <Reveal className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block">The Owner's Creed</span>
            <h2 className="font-headline text-4xl sm:text-5xl leading-[1.1] italic text-primary">
              Understand the <br /><span className="font-light not-italic text-secondary">selection.</span>
            </h2>
            <p className="text-on-surface-variant leading-loose text-lg">
              While massive booking engines show thousands of unverified properties, Sarayah operates on a single-ownership model. We didn't just "manage" these villas — we conceived, built, and maintain them to a standard third-party management simply can't replicate.
            </p>
            <p className="text-on-surface-variant leading-loose text-lg">
              You're dealing with the team that knows every plumbing line and every sunset angle of these properties — absolute directness, removing the aggregator tax and reinvesting it into your experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8 border-t border-outline-variant/15">
              <div className="space-y-3">
                <h3 className="font-headline text-xl text-primary">The Thalang Advantage</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Minutes from Bang Tao and Surin's elite dining, yet home to a gated sanctuary with zero shared walls.</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-headline text-xl text-primary">Verified Integrity</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Weekly maintenance audits — if a router underperforms or a pump is audible, it's fixed before you'd ever notice.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-luxe">
              <img src="/assets/media/villas/2-bedroom/IMG_8218.jpg" className="w-full h-full object-cover" alt="Architectural detail of Sarayah Phuket pool villas" />
            </div>
            <div className="absolute -bottom-8 -left-6 sm:-left-10 bg-white p-8 shadow-luxe-sm rounded-xl max-w-xs hidden md:block">
              <h4 className="font-headline text-xl text-primary mb-3 italic">Direct-to-Owner Benefit</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Priority early check-ins, late check-outs, and a dedicated WhatsApp concierge. No middlemen.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== VILLA COLLECTION ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="text-center max-w-4xl mx-auto mb-20 lg:mb-24">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4 block">The Spaces</span>
            <h2 className="text-4xl sm:text-5xl font-headline text-on-surface italic">Choose your sanctuary.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Reveal className="group">
              <Link to="/villas/2-bedroom-private-pool">
                <div className="relative overflow-hidden rounded-2xl shadow-luxe mb-8 aspect-[16/10]">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/media/villas/2-bedroom/IMG_8261.jpg" alt="2-Bedroom Private Pool Villa" />
                  <div className="absolute top-8 left-8 bg-white/95 backdrop-blur px-6 py-3 rounded-full text-xs font-bold tracking-widest text-primary uppercase">Intimate & Private</div>
                </div>
              </Link>
              <h3 className="text-3xl font-headline mb-4">2-Bedroom Private Pool Villa</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">The definitive work-from-paradise node — an integrated infinity pool, a master suite with direct water access, and high-speed fiber throughout.</p>
              <Link to="/villas/2-bedroom-private-pool" className="inline-block bg-primary text-on-primary px-10 py-4 rounded-lg text-sm font-bold tracking-widest uppercase hover:bg-primary-container transition-all">Explore 2BR Sanctuary</Link>
            </Reveal>
            <Reveal delay={100} className="group">
              <Link to="/villas/4-bedroom-villa">
                <div className="relative overflow-hidden rounded-2xl shadow-luxe mb-8 aspect-[16/10]">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/media/villas/4-bedroom/IMG_8401.jpg" alt="4-Bedroom Grand Villa" />
                  <div className="absolute top-8 left-8 bg-primary text-on-primary px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase">The Grand Estate</div>
                </div>
              </Link>
              <h3 className="text-3xl font-headline mb-4">4-Bedroom Grand Villa</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">Engineered for scale — a 400sqm social powerhouse for multi-generational travel or groups of up to 12.</p>
              <Link to="/villas/4-bedroom-villa" className="inline-block bg-primary text-on-primary px-10 py-4 rounded-lg text-sm font-bold tracking-widest uppercase hover:bg-primary-container transition-all">Explore 4BR Estate</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="text-center mb-16 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4 block">Selection Support</span>
            <h2 className="text-4xl sm:text-5xl font-headline text-on-surface italic">The definitive <br /><span className="font-light not-italic text-primary">comparison logic.</span></h2>
          </Reveal>
          <Reveal delay={100} className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-luxe-sm border border-outline-variant/10 min-w-[560px]">
              <thead>
                <tr className="bg-primary text-on-primary text-[10px] uppercase tracking-[0.3em]">
                  <th className="text-left p-6 sm:p-8 font-bold">Feature</th>
                  <th className="text-center p-6 sm:p-8 font-bold border-l border-white/10">2BR Pool Villa</th>
                  <th className="text-center p-6 sm:p-8 font-bold border-l border-white/10">4BR Grand Villa</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i < COMPARISON.length - 1 ? 'border-b border-outline-variant/10' : 'bg-surface-container-lowest'}>
                    <td className="p-6 sm:p-8 font-bold text-primary">{row.feature}</td>
                    <td className="p-6 sm:p-8 text-center text-on-surface-variant">{row.two}</td>
                    <td className="p-6 sm:p-8 text-center text-on-surface-variant">{row.four}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ===== SIGNATURE FACILITIES ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4 block">Standard of Excellence</span>
            <h2 className="text-4xl sm:text-5xl font-headline text-on-surface italic">Signature facilities in every villa.</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-10">
            {FACILITIES.map((f, i) => (
              <Reveal key={f.title} delay={i * 60} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">{f.icon}</span>
                </div>
                <h3 className="text-xl font-headline text-on-surface mb-2">{f.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs mx-auto">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOOKING JOURNEY ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block">Frictionless Future</span>
            <h2 className="text-4xl sm:text-5xl font-headline text-on-surface italic">Transparency from <br /><span className="font-light not-italic text-secondary">inquiry to arrival.</span></h2>
            <p className="text-on-surface-variant leading-loose text-lg">We've removed the middleman — your booking is a direct pact between you and the owner. No hidden fees, no surprise deposits, no faceless support queues.</p>
            <div className="space-y-8 pt-6">
              {JOURNEY.map((step, i) => (
                <div key={step.title} className="flex gap-8">
                  <span className="text-3xl font-headline italic text-primary/30 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4 className="text-xl font-headline italic mb-2">{step.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-2 gap-6">
            <div className="space-y-6 mt-16">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-luxe-sm">
                <img src="/assets/media/villas/2-bedroom/IMG_8219.jpg" className="w-full h-full object-cover" alt="Villa detail" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-luxe-sm">
                <img src="/assets/media/villas/4-bedroom/IMG_8404.jpg" className="w-full h-full object-cover" alt="Villa social areas" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-luxe-sm">
                <img src="/assets/media/villas/2-bedroom/IMG_8217.jpg" className="w-full h-full object-cover" alt="Villa bedroom" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-luxe-sm">
                <img src="/assets/media/villas/4-bedroom/IMG_8417.jpg" className="w-full h-full object-cover" alt="Villa architecture" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 bg-primary text-white text-center">
        <Reveal>
          <h2 className="font-headline text-5xl sm:text-7xl mb-10 leading-[1.05]">Find your<br /><em>perfect sanctuary.</em></h2>
          <p className="text-white/70 mb-12 max-w-4xl mx-auto text-lg leading-relaxed">Join the circle of discerning travelers who choose Sarayah for the privacy they deserve.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/villas/2-bedroom-private-pool" className="bg-white text-primary px-12 py-5 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-fixed-dim transition-all w-full sm:w-auto">Book the 2-Bedroom Villa</Link>
            <Link to="/villas/4-bedroom-villa" className="bg-transparent border border-white/30 px-12 py-5 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-white/10 transition-all w-full sm:w-auto">Book the 4-Bedroom Villa</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
