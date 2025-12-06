import Link from "next/link";
import type { JSX } from "react";

export const CTA = (): JSX.Element => (
  <section
    className="mt-24 px-[5%] py-20 text-center text-white"
    id="contact"
    style={{
      background:
        "linear-gradient(135deg, var(--text-primary) 0%, var(--gradient-dark) 100%)",
    }}
  >
    <h2 className="mb-6 text-[clamp(2rem,4vw,2.5rem)] font-light tracking-[2px]">
      מוכנים להתחיל?
    </h2>
    <p className="mx-auto mb-8 max-w-[800px] text-[1.2rem] opacity-90">
      בואו נדבר על איך אפשר להפוך את הבית שלכם
      <br />
      למקום שבאמת מרגיש כמו בית
    </p>
    <Link
      className="hover:bg-bg-light hover:text-text-primary inline-block border-2 border-white bg-transparent px-12 py-5 text-[1.1rem] tracking-[1px] text-white no-underline transition-all duration-300"
      href="/contact"
    >
      צרו קשר
    </Link>
  </section>
);
