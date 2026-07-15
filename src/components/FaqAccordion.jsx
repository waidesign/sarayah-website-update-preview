import { useState } from 'react';
import Reveal from './Reveal';

export default function FaqAccordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <Reveal delay={100} className="divide-y divide-outline-variant/20 border-t border-b border-outline-variant/20">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-8 py-8 text-left"
              aria-expanded={isOpen}
            >
              <h3 className="text-xl sm:text-2xl font-headline text-on-surface">{item.q}</h3>
              <span className={`material-symbols-outlined text-primary text-3xl shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>add</span>
            </button>
            <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <p className="text-on-surface-variant leading-loose pb-8 max-w-5xl">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Reveal>
  );
}
