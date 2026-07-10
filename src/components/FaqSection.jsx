import Reveal from './Reveal';
import FaqAccordion from './FaqAccordion';
import { FAQS } from '../data/homepage';

export default function FaqSection() {
  return (
    <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
      <div className="max-w-[900px] mx-auto">
        <Reveal className="mb-16 lg:mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4 block">Knowledge Hub</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline text-on-surface leading-[1.1]">The definitive intelligence <br />for <em className="text-primary">Phuket villa rentals.</em></h2>
        </Reveal>

        <FaqAccordion items={FAQS} />
      </div>
    </section>
  );
}
