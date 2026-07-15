import { Link, Navigate, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { BLOG_DATA, BLOG_LIST } from '../data/blog';
import { parseInlineLinks } from '../utils/seo';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_DATA[slug];

  if (!post) return <Navigate to="/blog" replace />;

  const otherPosts = BLOG_LIST.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-primary">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={post.image} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
        <Reveal className="relative z-10 w-full px-6 sm:px-10 lg:px-20 pt-40 pb-16 sm:pb-20">
          <div className="max-w-5xl mx-auto lg:mx-0">
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
        <div className="max-w-[1280px] mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-on-surface-variant/70 mb-12">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Journal</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-bold truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-10 lg:border-r lg:border-outline-variant/20 lg:pr-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">Other Articles</h3>
                <ul className="space-y-6">
                  {otherPosts.map((other) => (
                    <li key={other.slug}>
                      <Link to={`/blog/${other.slug}`} className="group block">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-primary/60 block mb-1">{other.category}</span>
                        <span className="text-sm font-headline text-on-surface group-hover:text-primary transition-colors line-clamp-2 leading-snug">{other.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <Link to="/villas" className="group flex items-center justify-between text-sm text-on-surface-variant hover:text-primary transition-colors">
                      <span>Our Villas</span>
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_right_alt</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/experiences" className="group flex items-center justify-between text-sm text-on-surface-variant hover:text-primary transition-colors">
                      <span>Experiences</span>
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_right_alt</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/booking" className="group flex items-center justify-between text-sm text-on-surface-variant hover:text-primary transition-colors">
                      <span>Book Direct</span>
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_right_alt</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Main Article Content */}
            <div className="lg:col-span-3 max-w-[720px]">
              <Reveal>
                {post.pullQuote && (
                  <p className="font-headline italic text-2xl sm:text-3xl text-on-surface leading-relaxed mb-10 border-l-4 border-primary/20 pl-6">
                    "{post.pullQuote}"
                  </p>
                )}
                <div className="space-y-6">
                  {post.paragraphs.map((p, i) => (
                    <p key={i} className="text-on-surface-variant leading-loose text-lg">{parseInlineLinks(p)}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
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
        <Reveal className="max-w-4xl mx-auto">
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
