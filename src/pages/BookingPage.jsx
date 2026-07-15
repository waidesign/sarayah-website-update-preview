import { Link, useSearchParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import BookingBar from '../components/BookingBar';

function formatDate(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function BookingPage() {
  const [params] = useSearchParams();
  const checkIn = formatDate(params.get('checkIn'));
  const checkOut = formatDate(params.get('checkOut'));
  const guests = params.get('guests');
  const hasSelection = checkIn || checkOut || guests;

  return (
    <>
      <section className="bg-primary text-white pt-40 pb-24 px-6 sm:px-10 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Reveal className="max-w-4xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6 block">Availability</span>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">Check your <em className="font-light">dates.</em></h1>
            <p className="text-white/80 text-lg leading-relaxed">Book directly for the best rates, early check-in priority, and a dedicated concierge from the moment you land.</p>
          </Reveal>
          <Reveal delay={80}>
            <BookingBar variant="sticky" className="mx-auto !bg-white" />
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-white">
        <div className="max-w-[720px] mx-auto">


          <Reveal delay={100} className="text-center mb-14">
            <p className="text-on-surface-variant leading-relaxed">
              Real-time availability is confirmed directly with our concierge team — no third-party booking engine, no platform markup. Choose your villa below, or message us directly with your dates.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            <Reveal className="rounded-2xl overflow-hidden shadow-luxe-sm group">
              <Link to="/villas/2-bedroom-private-pool">
                <div className="relative aspect-[4/3]">
                  <img src="/assets/media/villas/2-bedroom/IMG_8219.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="2-Bedroom Pool Villa" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-white font-headline text-xl">2-Bedroom Pool Villa</h3>
                    <span className="text-white/70 text-xs uppercase tracking-widest">Check availability</span>
                  </div>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={80} className="rounded-2xl overflow-hidden shadow-luxe-sm group">
              <Link to="/villas/4-bedroom-villa">
                <div className="relative aspect-[4/3]">
                  <img src="/assets/media/villas/4-bedroom/IMG_8417.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="4-Bedroom Grand Villa" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-white font-headline text-xl">4-Bedroom Grand Villa</h3>
                    <span className="text-white/70 text-xs uppercase tracking-widest">Check availability</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={150} className="text-center">
            <a
              href="https://wa.me/66825651186"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-container transition-all"
            >
              <span className="material-symbols-outlined text-base">chat</span> Confirm via WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
