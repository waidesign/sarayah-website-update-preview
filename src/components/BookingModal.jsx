import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

export default function BookingModal({ onClose }) {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  // Lock background scroll while the modal is open, and let Escape close it.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.set('checkIn', checkIn);
    if (checkOut) params.set('checkOut', checkOut);
    params.set('guests', String(guests));
    onClose();
    navigate(`/booking?${params.toString()}`);
  };

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-surface-container-lowest rounded-2xl shadow-2xl w-full max-w-md p-8 sm:p-10">
        <button
          onClick={onClose}
          aria-label="Close booking form"
          className="absolute top-5 right-5 text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <h2 id="booking-modal-title" className="font-headline text-2xl sm:text-3xl text-on-surface mb-2">
          Reserve Your Stay
        </h2>
        <p className="text-sm text-on-surface-variant mb-8">Select your dates and party size to check availability.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-[10px] uppercase tracking-widest font-bold text-secondary block mb-2">Check In</span>
              <input
                type="date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border border-outline-variant/30 rounded-lg px-3 py-2.5 text-sm text-on-surface bg-transparent focus:outline-none focus:border-primary transition-colors"
              />
            </label>
            <label className="block">
              <span className="text-[10px] uppercase tracking-widest font-bold text-secondary block mb-2">Check Out</span>
              <input
                type="date"
                required
                value={checkOut}
                min={checkIn || undefined}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border border-outline-variant/30 rounded-lg px-3 py-2.5 text-sm text-on-surface bg-transparent focus:outline-none focus:border-primary transition-colors"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-[10px] uppercase tracking-widest font-bold text-secondary block mb-2">Guests</span>
            <div className="flex items-center justify-between border border-outline-variant/30 rounded-lg px-4 py-2.5">
              <button
                type="button"
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                aria-label="Decrease guests"
                className="text-primary text-lg font-bold w-6 h-6 flex items-center justify-center hover:bg-surface-container-high rounded-full transition-colors"
              >
                −
              </button>
              <span className="text-sm text-on-surface">
                {guests} {guests === 1 ? 'Guest' : 'Guests'}
              </span>
              <button
                type="button"
                onClick={() => setGuests((g) => Math.min(16, g + 1))}
                aria-label="Increase guests"
                className="text-primary text-lg font-bold w-6 h-6 flex items-center justify-center hover:bg-surface-container-high rounded-full transition-colors"
              >
                +
              </button>
            </div>
          </label>

          <button
            type="submit"
            className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary-container transition-all"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>,
    document.body,
  );
}
