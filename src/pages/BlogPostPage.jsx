import { Link, Navigate, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { BLOG_DATA } from '../data/blog';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_DATA[slug];

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-primary">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={post.image} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
        <Reveal className="relative z-10 w-full px-6 sm:px-10 lg:px-20 pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6 block">The Journal · {post.category}</span>
            <h1 className="font-headline text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
              {post.title} <br />
              <em className="font-light">{post.italicTitle}</em>
            </h1>
            <span className="text-white/60 text-sm">{post.meta}</span>
          </div>
        </Reveal>
      </section>

      {/* ===== BODY ===== */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-white">
        <Reveal className="max-w-[720px] mx-auto">
          {post.pullQuote && (
            <p className="font-headline italic text-2xl sm:text-3xl text-on-surface leading-relaxed mb-10 border-l-4 border-primary/20 pl-6">
              "{post.pullQuote}"
            </p>
          )}
          <div className="space-y-6">
            {post.paragraphs.map((p, i) => (
              <p key={i} className="text-on-surface-variant leading-loose text-lg">{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== CALLOUT ===== */}
      {post.callout && (
        <section className="py-20 sm:py-24 px-6 sm:px-8 bg-surface-container-low">
          <div className="max-w-[900px] mx-auto">
            <Reveal className="text-center mb-14">
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">{post.callout.title}</span>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {post.callout.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 80} className="text-center">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-headline text-lg text-on-surface mb-2">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 bg-primary text-white text-center">
        <Reveal className="max-w-2xl mx-auto">
          <h2 className="font-headline text-4xl sm:text-5xl mb-6">{post.ctaHeadline}</h2>
          <p className="text-white/70 mb-10 leading-relaxed">{post.ctaBody}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {post.ctaButtons.map((btn, i) => (
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
          </div>
        </Reveal>
      </section>

      {/* ===== BACK TO JOURNAL ===== */}
      <section className="py-14 px-6 sm:px-8 bg-white text-center">
        <Link to="/blog" className="inline-flex items-center gap-3 text-primary text-xs font-bold tracking-widest uppercase border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
          <span className="material-symbols-outlined text-sm">arrow_back</span> Back to the Journal
        </Link>
      </section>
    </>
  );
}
