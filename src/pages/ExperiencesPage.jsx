import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { EXPERIENCES_LIST } from '../data/experiences';

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Designed for Immersion"
        title="Curated"
        italicTitle="Experiences."
        subtitle="At Sarayah, the villa is only the prologue. The true narrative of your stay is written through your encounters with the island's culture, coastlines, and culinary heritage."
        image="/assets/img/phi_phi_islands_luxury_boat_1776812721087.png"
      />

      {/* ===== GRID ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
          {EXPERIENCES_LIST.map((exp, i) => (
            <Reveal key={exp.slug} delay={(i % 3) * 80} className="group">
              <Link to={`/experiences/${exp.slug}`}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxe-sm mb-6">
                  <img alt={exp.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={exp.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="text-xs uppercase tracking-[0.25em] font-bold text-white/60 mb-2 block">{exp.category}</span>
                    <h3 className="text-xl font-headline text-white">{exp.title}</h3>
                  </div>
                </div>
              </Link>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{exp.teaser}</p>
              <Link to={`/experiences/${exp.slug}`} className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
                {exp.cta} <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== CURATION PHILOSOPHY ===== */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 bg-surface-container-low text-center">
        <Reveal className="max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">Curation Philosophy</span>
          <h2 className="font-headline text-3xl sm:text-4xl italic text-on-surface mb-8 leading-relaxed">"Every experience we recommend is one we'd choose for ourselves — vetted, timed, and free of the crowds."</h2>
          <Link to="/contact" className="inline-block bg-primary text-on-primary px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-container transition-all">
            Speak to a Curator
          </Link>
        </Reveal>
      </section>
    </>
  );
}
