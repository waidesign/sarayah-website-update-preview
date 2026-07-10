import BookingBar from './BookingBar';

// Single full-bleed hero -- one video, one combined message covering both
// villas, no card frame and nothing to switch between. Replaces the earlier
// "Portal" split-panel concept entirely (see ai-brain/project-history.md).
// The floating BookingBar below is the booking entry point -- visible on
// load as a card docked at the bottom of the hero, then handed off to a
// fixed sticky copy (rendered by HomePage) once the hero scrolls out of view.
export default function HeroSlider() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary" id="hero">
      <div className="absolute inset-0">
        <div className="hero3-crop-wrap">
          <video autoPlay muted loop playsInline className="hero3-crop-inner object-cover">
            <source src="/assets/media/reels/4-bedroom_viral_reel.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-primary/10" />

      {/* min-h-screen (not h-screen) so content that needs more room than
          100vh at a given viewport height grows the section instead of
          clipping -- the bottom padding + gap below are tuned to clear the
          WhatsApp float / mobile nav (ai-brain/rules.md). */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center gap-4 sm:gap-12 px-6 sm:px-10 lg:px-20 pt-28 pb-44 sm:pb-28 lg:pb-20">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-3 sm:mb-6 block">Two Villas · Thalang District, Phuket</span>
          <h1 className="font-headline text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-3 sm:mb-6 tracking-tight">
            Refuge for two.
            <br />
            <span className="italic font-light">Room for twelve.</span>
          </h1>
          <p className="hidden sm:block text-white/80 leading-relaxed max-w-xl mb-10 text-lg mx-auto">
            Two private-pool sanctuaries in Thalang District — an intimate 2-bedroom refuge for couples, and a 4-bedroom grand estate built for gatherings. Direct-to-owner, always private.
          </p>

        </div>

        <BookingBar variant="floating" className="w-full max-w-4xl mx-auto" />
      </div>
    </section>
  );
}
