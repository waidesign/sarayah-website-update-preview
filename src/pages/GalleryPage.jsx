import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const GALLERY = [
  { image: '/assets/media/villas/4-bedroom/IMG_8416.jpg', alt: '4-Bedroom Villa estate at twilight', className: 'col-span-2 row-span-2 lg:col-span-3' },
  { image: '/assets/media/villas/4-bedroom/IMG_8401.jpg', alt: '4-Bedroom Villa grand living area', className: 'col-span-2 lg:col-span-3' },
  { image: '/assets/media/villas/2-bedroom/IMG_8219.jpg', alt: '2-Bedroom Villa interior detail', className: 'col-span-1' },
  { image: '/assets/media/villas/4-bedroom/IMG_8391.jpg', alt: 'Master suite at Sarayah', className: 'col-span-1' },
  { image: '/assets/media/villas/4-bedroom/IMG_8417.jpg', alt: 'Grand entrance', className: 'col-span-2 lg:col-span-1' },
  { image: '/assets/media/villas/4-bedroom/IMG_8422.jpg', alt: 'Second bedroom suite', className: 'col-span-2 lg:col-span-3' },
  { image: '/assets/media/villas/4-bedroom/IMG_8384.jpg', alt: 'Poolside patio doors', className: 'col-span-2 row-span-2 lg:col-span-3' },
  { image: '/assets/media/villas/4-bedroom/IMG_8394.jpg', alt: 'Open-plan living and dining area', className: 'col-span-2 lg:col-span-3' },
  { image: '/assets/media/villas/2-bedroom/IMG_8218.jpg', alt: 'Sarayah villa architectural detail', className: 'col-span-1' },
  { image: '/assets/media/villas/4-bedroom/IMG_8400.jpg', alt: 'Dining table for eight', className: 'col-span-1' },
  { image: '/assets/media/villas/4-bedroom/IMG_8424.jpg', alt: 'Bedroom detail', className: 'col-span-2 lg:col-span-2' },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-primary text-white pt-40 pb-20 px-6 sm:px-10 lg:px-20 text-center">
        <Reveal className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6 block">The Collection</span>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">Visual <em className="font-light">Inspiration.</em></h1>
          <p className="text-white/80 text-lg leading-relaxed">A curated look inside our signature villas in Thalang District — from sun-drenched pool decks to intimate master suites.</p>
        </Reveal>
      </section>

      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <Reveal className="grid grid-cols-2 lg:grid-cols-6 auto-rows-[220px] sm:auto-rows-[260px] lg:auto-rows-[240px] gap-4 lg:gap-5">
            {GALLERY.map((item) => (
              <div key={item.image + item.alt} className={`relative rounded-xl overflow-hidden group ${item.className}`}>
                <img alt={item.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.image} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-6 sm:px-8 bg-primary text-white text-center">
        <Reveal>
          <h2 className="font-headline text-3xl sm:text-5xl mb-10">Experience it for yourself.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/villas" className="bg-white text-primary px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-fixed-dim transition-all w-full sm:w-auto">Explore Villas</Link>
            <Link to="/booking" className="bg-transparent border border-white/30 px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-white/10 transition-all w-full sm:w-auto">Book Your Stay</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
