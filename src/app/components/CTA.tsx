import Link from "next/link";
import type { JSX } from "react";

/**
 * Reusable CTA (Call To Action) section component used across all pages.
 * @returns CTA section JSX element
 */
export const CTA = (): JSX.Element => (
  <section className="cta" id="contact">
    <h2 className="cta-title">מוכנים להתחיל?</h2>
    <p className="cta-text">
      בואו נדבר על איך אפשר להפוך את הבית שלכם
      <br />
      למקום שבאמת מרגיש כמו בית
    </p>
    <Link className="cta-button" href="/contact">
      צרו קשר
    </Link>
  </section>
);
