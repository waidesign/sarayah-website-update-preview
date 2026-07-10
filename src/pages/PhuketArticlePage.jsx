import { Link, Navigate, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import FaqAccordion from '../components/FaqAccordion';
import { PHUKET_DATA } from '../data/phuket';

export default function PhuketArticlePage() {
  const { slug } = useParams();
  const article = PHUKET_DATA[slug];

  if (!article) return <Navigate to="/phuket" replace />;

  return (
    <>
      {/* ===== HERO ===== */}
      {article.heroImage ? (
        <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-primary">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={article.heroImage} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
          <Reveal className="relative z-10 w-full px-6 sm:px-10 lg:px-20 pt-40 pb-16">
            <div className="max-w-3xl mx-auto lg:mx-0">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6 block">{article.category}</span>
              <h1 className="font-headline text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                {article.title} <em className="font-light">{article.italicTitle}</em>
              </h1>
            </div>
          </Reveal>
        </section>
      ) : (
        <section className="bg-primary text-white pt-40 pb-20 px-6 sm:px-10 lg:px-20">
          <Reveal className="max-w-3xl mx-auto lg:mx-0">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6 block">{article.category}</span>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              {article.title} <em className="font-light">{article.italicTitle}</em>
            </h1>
          </Reveal>
        </section>
      )}

      {/* ===== BODY ===== */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-white">
        <Reveal className="max-w-[720px] mx-auto space-y-6">
          {article.pullQuote && (
            <p className="font-headline italic text-2xl sm:text-3xl text-on-surface leading-relaxed border-l-4 border-primary/20 pl-6 mb-4">"{article.pullQuote}"</p>
          )}
          {article.paragraphs.map((p, i) => (
            <p key={i} className="text-on-surface-variant leading-loose text-lg">{p}</p>
          ))}
        </Reveal>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      {article.comparisonTable && (
        <section className="py-20 px-6 sm:px-8 bg-surface-container-low">
          <Reveal className="max-w-[720px] mx-auto">
            <h2 className="text-center font-headline text-2xl mb-10">{article.comparisonTable.title}</h2>
            <div className="overflow-hidden rounded-2xl border border-outline-variant/15 bg-white shadow-luxe-sm">
              <div className="grid grid-cols-2 bg-primary text-white text-xs uppercase tracking-widest">
                {article.comparisonTable.columns.map((col) => (
                  <div key={col} className="p-5 text-center font-bold">{col}</div>
                ))}
              </div>
              {article.comparisonTable.rows.map((row, i) => (
                <div key={i} className={`grid grid-cols-2 ${i % 2 === 1 ? 'bg-surface-container-low/50' : ''}`}>
                  <div className="p-5 text-center text-sm text-on-surface-variant border-r border-outline-variant/10">{row[0]}</div>
                  <div className="p-5 text-center text-sm font-bold text-primary">{row[1]}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* ===== STATS ===== */}
      {article.stats && (
        <section className="py-20 px-6 sm:px-8 bg-surface-container-low">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
            {article.stats.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="text-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-headline text-lg text-on-surface mb-1">{s.title}</h3>
                <p className="text-sm text-on-surface-variant">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ===== CHECKLIST ===== */}
      {article.checklist && (
        <section className="py-20 px-6 sm:px-8 bg-white">
          <div className="max-w-[720px] mx-auto">
            <Reveal className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4 block">{article.checklist.title}</span>
            </Reveal>
            <div className="space-y-6">
              {article.checklist.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 80} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                  <div>
                    <h4 className="font-bold text-on-surface">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== 3-COL CARDS (Surin vibe/secret/gastronomy) ===== */}
      {article.cards && (
        <section className="py-20 px-6 sm:px-8 bg-surface-container-low">
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
            {article.cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 80} className="bg-white p-8 rounded-2xl shadow-luxe-sm">
                <h3 className="font-headline text-xl text-primary italic mb-3">{card.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{card.body}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ===== VILLA TEASERS ===== */}
      {article.villaTeasers && (
        <section className="py-20 px-6 sm:px-8 bg-white">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
            {article.villaTeasers.map((v) => (
              <Reveal key={v.title} className="p-8 rounded-2xl border border-outline-variant/15">
                <h3 className="font-headline text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{v.body}</p>
                <Link to={v.href} className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
                  View Details <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ===== FAQ ===== */}
      {article.faqs && (
        <section className="py-20 sm:py-24 px-6 sm:px-8 bg-white">
          <div className="max-w-[900px] mx-auto">
            <Reveal className="text-center mb-14">
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">Questions & Answers</span>
            </Reveal>
            <FaqAccordion items={article.faqs} />
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      {article.ctaButtons && (
      <section className="py-24 sm:py-32 px-6 sm:px-8 bg-primary text-white text-center">
        <Reveal className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {article.ctaButtons.map((btn, i) => (
            <Link
              key={btn.label}
              to={btn.href}
              className={
                i === 0
                  ? 'bg-white text-primary px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-fixed-dim transition-all w-full sm:w-auto'
                  : 'bg-transparent border border-white/30 px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-white/10 transition-all w-full sm:w-auto'
              }
            >
              {btn.label}
            </Link>
          ))}
        </Reveal>
      </section>
      )}

      {/* ===== RELATED ===== */}
      {article.relatedLinks && (
        <section className="py-16 px-6 sm:px-8 bg-white">
          <div className="max-w-[900px] mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-on-surface-variant/60 mb-6 block">Related Guides</span>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {article.relatedLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-primary text-sm font-bold tracking-wide border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
