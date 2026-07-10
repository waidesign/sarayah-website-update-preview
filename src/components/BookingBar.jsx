import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

// Availability form. Rendered with different `variant` styling:
//  - "floating": an in-flow white card at the bottom of HeroSlider's content
//    column, visible immediately on load (no scrolling needed to see it).
//  - "sticky": a fixed, full-width bar pinned below the Header, faded in
//    once the Hero (and its floating card) has scrolled out of view.
// Both submit the same checkIn/checkOut/guests params BookingModal uses.
export default function BookingBar({ variant = 'floating', className = '' }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [checkIn, setCheckIn] = useState(searchParams.get('checkIn') || '');
  const [checkOut, setCheckOut] = useState(searchParams.get('checkOut') || '');
  const [guests, setGuests] = useState(parseInt(searchParams.get('guests'), 10) || 2);

  useEffect(() => {
    setCheckIn(searchParams.get('checkIn') || '');
    setCheckOut(searchParams.get('checkOut') || '');
    setGuests(parseInt(searchParams.get('guests'), 10) || 2);
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.set('checkIn', checkIn);
    if (checkOut) params.set('checkOut', checkOut);
    params.set('guests', String(guests));
    navigate(`/booking?${params.toString()}`);
  };

  const isFloating = variant === 'floating';

  return (
    <form
      onSubmit={handleSubmit}
      className={`backdrop-blur-xl backdrop-saturate-150 text-left rounded-2xl shadow-luxe border ${
        isFloating
          ? 'bg-white/35 border-white/25'
          : 'bg-white/95 border-outline-variant/20'
      } ${className}`}
    >
      <div
        className="grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-row sm:items-center sm:gap-6 lg:gap-8 px-5 sm:px-8 py-4 sm:py-6"
      >
        <label className={`flex flex-col sm:flex-1 sm:border-r sm:pr-6 lg:pr-8 ${isFloating ? 'sm:border-white/20' : 'sm:border-outline-variant/15'}`}>
          <span className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${isFloating ? 'text-white' : 'text-secondary'}`}>Check In</span>
          <input
            type="date"
            required
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className={`text-sm bg-transparent focus:outline-none ${isFloating ? 'text-white [color-scheme:dark]' : 'text-on-surface'}`}
          />
        </label>

        <label className={`flex flex-col sm:flex-1 sm:border-r sm:pr-6 lg:pr-8 ${isFloating ? 'sm:border-white/20' : 'sm:border-outline-variant/15'}`}>
          <span className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${isFloating ? 'text-white' : 'text-secondary'}`}>Check Out</span>
          <input
            type="date"
            required
            value={checkOut}
            min={checkIn || undefined}
            onChange={(e) => setCheckOut(e.target.value)}
            className={`text-sm bg-transparent focus:outline-none ${isFloating ? 'text-white [color-scheme:dark]' : 'text-on-surface'}`}
          />
        </label>

        <div className={`col-span-2 flex items-center justify-between sm:flex-1 sm:flex-col sm:items-start sm:justify-center sm:border-r sm:pr-6 lg:pr-8 ${isFloating ? 'sm:border-white/20' : 'sm:border-outline-variant/15'}`}>
          <span className={`text-[10px] uppercase tracking-widest font-bold sm:mb-1 ${isFloating ? 'text-white' : 'text-secondary'}`}>Guests</span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              aria-label="Decrease guests"
              className={`text-lg font-bold w-6 h-6 flex items-center justify-center rounded-full transition-colors shrink-0 ${isFloating ? 'text-white hover:bg-white/20' : 'text-primary hover:bg-surface-container-high'}`}
            >
              −
            </button>
            <span className={`text-sm w-20 text-center ${isFloating ? 'text-white' : 'text-on-surface'}`}>
              {guests} {guests === 1 ? 'Guest' : 'Guests'}
            </span>
            <button
              type="button"
              onClick={() => setGuests((g) => Math.min(16, g + 1))}
              aria-label="Increase guests"
              className={`text-lg font-bold w-6 h-6 flex items-center justify-center rounded-full transition-colors shrink-0 ${isFloating ? 'text-white hover:bg-white/20' : 'text-primary hover:bg-surface-container-high'}`}
            >
              +
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="col-span-2 sm:col-span-1 bg-primary text-white px-8 py-3.5 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-container transition-all shrink-0 sm:w-auto"
        >
          Check Availability
        </button>
      </div>
    </form>
  );
}
