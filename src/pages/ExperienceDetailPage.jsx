import { Link, Navigate, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import FaqAccordion from '../components/FaqAccordion';
import { EXPERIENCES_DATA } from '../data/experiences';

const WHATSAPP_SLUGS = new Set(['car-rentals', 'taxi-transfers']);

export default function ExperienceDetailPage() {
  const { slug } = useParams();
  const exp = EXPERIENCES_DATA[slug];

  if (!exp) return <Navigate to="/experiences" replace />;

  const ctaHref = WHATSAPP_SLUGS.has(slug) ? 'https://wa.me/66825651186' : '/contact';
  const ctaExternal = WHATSAPP_SLUGS.has(slug);

  return (
    <>
      <PageHeader eyebrow={exp.category} title={exp.title} italicTitle={exp.italicTitle} image={exp.heroImage} height="min-h-[60vh]" />

      {/* ===== INTRO ===== */}
      <section className="py-24 sm:py-28 px-6 sm:px-8 bg-white">
        <Reveal className="max-w-5xl mx-auto text-center">
          <p className="font-headline italic text-2xl sm:text-3xl text-on-surface leading-relaxed">{exp.intro}</p>
        </Reveal>
      </section>

      {/* ===== BODY BLOCKS ===== */}
      {exp.body.map((block, i) => (
        <section key={block.title} className={`py-20 sm:py-28 px-6 sm:px-8 ${i % 2 === 0 ? 'bg-surface-container-low' : 'bg-white'}`}>
          <div className={`max-w-[1280px] mx-auto grid grid-cols-1 ${block.image ? 'lg:grid-cols-2' : ''} gap-12 lg:gap-20 items-center`}>
            <Reveal className={`space-y-6 ${block.image && block.imageSide === 'left' ? 'lg:order-2' : ''}`}>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block">{block.eyebrow}</span>
              <h2 className="text-3xl sm:text-4xl font-headline text-on-surface leading-tight italic">
                {block.title} <br />
                <span className="font-light not-italic text-secondary">{block.italicTitle}</span>
              </h2>
              {block.paragraphs.map((p, pi) => (
                <p key={pi} className="text-on-surface-variant leading-loose">{p}</p>
              ))}
            </Reveal>
            {block.image && (
              <Reveal delay={100} className={`rounded-2xl overflow-hidden aspect-video shadow-luxe ${block.imageSide === 'left' ? 'lg:order-1' : ''}`}>
                <img src={block.image} className="w-full h-full object-cover" alt={block.italicTitle} />
              </Reveal>
            )}
          </div>
        </section>
      ))}

      {/* ===== HIGHLIGHTS ===== */}
      {exp.highlights && (
        <section className="py-24 sm:py-28 px-6 sm:px-8 bg-surface-container-low">
          <div className="max-w-[1000px] mx-auto">
            <Reveal className="text-center mb-14">
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">{exp.highlights.title}</span>
            </Reveal>
            <div className="space-y-10">
              {exp.highlights.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 80} className="flex gap-8 items-start">
                  <span className="text-3xl font-headline italic text-primary/30 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-xl font-headline italic text-on-surface">{item.title}</h3>
                      {item.meta && <span className="text-sm font-bold text-primary tracking-wide">{item.meta}</span>}
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed mt-2">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FEATURE TILES ===== */}
      {exp.featureTiles && (
        <section className="py-20 px-6 sm:px-8 bg-white">
          <div className="max-w-[1000px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
            {exp.featureTiles.map((tile, i) => (
              <Reveal key={tile.label} delay={i * 60} className="text-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{tile.icon}</span>
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">{tile.label}</span>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ===== FAQ ===== */}
      {exp.faqs && (
        <section className="py-24 sm:py-28 px-6 sm:px-8 bg-white">
          <div className="max-w-[900px] mx-auto">
            <Reveal className="text-center mb-14">
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">Questions & Answers</span>
            </Reveal>
            <FaqAccordion items={exp.faqs} />
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 bg-primary text-white text-center">
        <Reveal>
          <h2 className="font-headline text-4xl sm:text-6xl mb-10">Ready to arrange it?</h2>
          {ctaExternal ? (
            <a href={ctaHref} target="_blank" rel="noopener" className="inline-block bg-white text-primary px-12 py-5 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-fixed-dim transition-all">
              {exp.ctaLabel}
            </a>
          ) : (
            <Link to={ctaHref} className="inline-block bg-white text-primary px-12 py-5 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-fixed-dim transition-all">
              {exp.ctaLabel}
            </Link>
          )}
        </Reveal>
      </section>
    </>
  );
}
