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

      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
          {BLOG_LIST.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 80} className="group">
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
      </section>
    </>
  );
}
