import Reveal from './Reveal';

export default function PageHeader({ eyebrow, title, italicTitle, subtitle, image, stats, height = 'min-h-[70vh]' }) {
  return (
    <section className={`relative ${height} flex items-end overflow-hidden bg-primary`}>
      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={image} />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
      <Reveal className="relative z-10 w-full px-6 sm:px-10 lg:px-20 pt-40 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6 block">{eyebrow}</span>
          <h1 className="font-headline text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
            {title}
            {italicTitle && (
              <>
                <br />
                <em className="font-light">{italicTitle}</em>
              </>
            )}
          </h1>
          {subtitle && <p className="text-white/80 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
          {stats && stats.length > 0 && (
            <div className="flex gap-10 border-t border-white/20 pt-8 mt-10 flex-wrap">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="block text-[10px] uppercase tracking-widest text-white/50 mb-1">{s.label}</span>
                  <span className="text-lg font-light text-white">{s.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
