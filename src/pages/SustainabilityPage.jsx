import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function SustainabilityPage() {
  return (
    <>
      <section className="bg-primary text-white pt-40 pb-20 px-6 sm:px-10 lg:px-20 text-center">
        <Reveal className="max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6 block">Our Ethos</span>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">A Curated <em className="font-light">Sanctuary.</em></h1>
          <p className="text-white/80 text-lg leading-relaxed">Sustainability isn't a policy here — it's the foundation. True luxury should exist in harmony with the local environment and community of Thalang District.</p>
        </Reveal>
      </section>

      {/* ===== PILLAR ONE: OWNERSHIP ===== */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-white">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <Reveal className="lg:col-span-2 space-y-5">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block">Pillar One</span>
            <h2 className="text-3xl sm:text-4xl font-headline italic">Direct ownership, <span className="font-light not-italic text-secondary">direct accountability.</span></h2>
            <p className="text-on-surface-variant leading-loose">Sarayah operates on a single-ownership model — the owner is physically present and invested in the long-term vitality of the estate, not a distant management fee.</p>
            <p className="text-on-surface-variant leading-loose">Managing our own properties means stable, long-term employment for our local Thalang staff, avoiding the precarious seasonal labor common elsewhere on the island.</p>
          </Reveal>
          <Reveal delay={100} className="bg-surface-container-low rounded-2xl p-8">
            <h4 className="font-headline text-lg text-primary mb-3 italic">The Ethical Booking Edge</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">When you book directly, 100% of your stay's value stays within the local ecosystem. We bypass the 15-25% commission fees charged by global OTAs, reinvesting those funds into property upkeep and community-led initiatives in Thalang.</p>
          </Reveal>
        </div>
      </section>

      {/* ===== PILLAR TWO: THERMODYNAMIC DESIGN ===== */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-primary text-white">
        <div className="max-w-[1000px] mx-auto">
          <Reveal className="mb-14">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 block mb-4">Pillar Two</span>
            <h2 className="text-3xl sm:text-4xl font-headline italic">Thermodynamic <span className="font-light not-italic">design.</span></h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <Reveal delay={80}>
              <h4 className="font-headline text-lg mb-3">Natural Airflow Purity</h4>
              <p className="text-sm text-white/70 leading-relaxed">An architectural protocol built around Northern Phuket's wind patterns — high-pitched vaulted ceilings and cross-ventilation reduce mechanical cooling needs by up to 30%.</p>
            </Reveal>
            <Reveal delay={160}>
              <h4 className="font-headline text-lg mb-3">Material Truth</h4>
              <p className="text-sm text-white/70 leading-relaxed">Sukabumi stone from Indonesia lines our pools — a naturally purifying volcanic stone that reduces the chemical load needed for water maintenance.</p>
            </Reveal>
            <Reveal delay={240}>
              <h4 className="font-headline text-lg mb-3">Water Intelligence</h4>
              <p className="text-sm text-white/70 leading-relaxed">Advanced filtration and catchment systems help us stay responsible consumers of the island's most precious resource.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY & FOOTPRINT ===== */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-white">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal className="rounded-2xl overflow-hidden aspect-square shadow-luxe">
            <img src="/assets/media/villas/2-bedroom/IMG_8218.jpg" className="w-full h-full object-cover" alt="Phuket nature and sustainable luxury" />
          </Reveal>
          <Reveal delay={100} className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl italic mb-3">Community Roots</h3>
              <p className="text-on-surface-variant leading-relaxed">We prioritize local partnerships — from artisan-made furniture to partner chefs — a commitment to keeping the "Original Phuket" alive in the face of mass development.</p>
            </div>
            <div>
              <h3 className="font-headline text-2xl italic mb-3">Gentle Footprint</h3>
              <p className="text-on-surface-variant leading-relaxed">Energy-efficient cooling and water systems, and no single-use plastics throughout the guest experience.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-6 sm:px-8 bg-surface-container-low text-center">
        <Reveal>
          <h2 className="font-headline text-3xl sm:text-5xl italic mb-6">Quiet luxury, <em className="text-primary not-italic font-light">rooted in place.</em></h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed">Our goal is to leave the Thalang District better than we found it, one guest at a time.</p>
          <Link to="/villas" className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-container transition-all">
            Return to Our Villas
          </Link>
        </Reveal>
      </section>
    </>
  );
}
