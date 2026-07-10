import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#f5f3ee] w-full py-12 px-8 flex flex-col items-center gap-6">
      <div className="font-serif text-xl tracking-widest text-[#003629] uppercase">SARAYAH PHUKET</div>
      <div className="flex flex-wrap justify-center gap-8">
        <Link className="font-['Manrope'] text-xs tracking-tighter text-stone-500 hover:text-[#1B4D3E] transition-colors" to="/villas">Our Villas</Link>
        <Link className="font-['Manrope'] text-xs tracking-tighter text-stone-500 hover:text-[#1B4D3E] transition-colors" to="/experiences">Experiences</Link>
        <Link className="font-['Manrope'] text-xs tracking-tighter text-stone-500 hover:text-[#1B4D3E] transition-colors" to="/reviews">Reviews</Link>
        <Link className="font-['Manrope'] text-xs tracking-tighter text-stone-500 hover:text-[#1B4D3E] transition-colors" to="/blog">Journal</Link>
        <Link className="font-['Manrope'] text-xs tracking-tighter text-stone-500 hover:text-[#1B4D3E] transition-colors" to="/contact">Contact</Link>
        <Link className="font-['Manrope'] text-xs tracking-tighter text-stone-500 hover:text-[#1B4D3E] transition-colors" to="/sustainability">Sustainability</Link>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <Link className="font-['Manrope'] text-xs tracking-tighter text-stone-500 hover:text-[#1B4D3E] transition-colors" to="/villas/2-bedroom-private-pool">2-Bedroom Pool Villa</Link>
        <Link className="font-['Manrope'] text-xs tracking-tighter text-stone-500 hover:text-[#1B4D3E] transition-colors" to="/villas/4-bedroom-villa">4-Bedroom Villa</Link>
        <Link className="font-['Manrope'] text-xs tracking-tighter text-stone-500 hover:text-[#1B4D3E] transition-colors" to="/booking">Check Availability</Link>
      </div>
      <p className="font-['Manrope'] text-xs tracking-tighter text-[#003629] mt-4 opacity-60">
        &copy; 2026 Sarayah Phuket Villas &mdash; Luxury Private Pool Villa Rentals in Thalang District, Phuket
      </p>
    </footer>
  );
}
