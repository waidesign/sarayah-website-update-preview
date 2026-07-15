import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { BLOG_LIST } from '../data/blog';

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Journal"
        title="Phuket"
        italicTitle="Dialogues."
        subtitle="Perspectives on luxury, local culture, and the art of the getaway. Curated stories from the heart of Thalang District."
        image="/assets/img/best_villas_2026_article_1776802414982.png"
        height="min-h-[55vh]"
      />

      <section className="py-20 sm:py-28 lg:py-36 px-6 sm:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-on-surface-variant/70 mb-12">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-bold">Journal</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-10 lg:border-r lg:border-outline-variant/20 lg:pr-8">
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
                      <span>Curated Experiences</span>
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_right_alt</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/phuket" className="group flex items-center justify-between text-sm text-on-surface-variant hover:text-primary transition-colors">
                      <span>Destination Guide</span>
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

              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10">
                <span className="text-xs uppercase tracking-widest font-bold text-primary mb-2 block">Direct Booking Benefit</span>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-4">Book direct with us to bypass agency fees and unlock complimentary airport transfer.</p>
                <Link to="/booking" className="text-xs font-bold text-primary uppercase tracking-wider hover:underline">Check Availability</Link>
              </div>
            </aside>

            {/* Main Blog Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-10">
              {BLOG_LIST.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 2) * 80} className="group">
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxe-sm mb-6">
                      <img alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={post.image} />
                    </div>
                  </Link>
                  <span className="text-xs uppercase tracking-[0.25em] font-bold text-primary mb-2 block">{post.category}</span>
                  <h3 className="text-xl font-headline text-on-surface mb-3">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{post.teaser}</p>
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
                    Read Article <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
