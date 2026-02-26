import Image from "next/image";
import type { JSX } from "react";

type HeroProps = {
  title: string;
  text?: string;
  logo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  id?: string;
};

export const Hero = ({ title, text, logo, id }: HeroProps): JSX.Element => {
  return (
    <section className="hero" id={id}>
      {logo && (
        <div className="hero-logo-container">
          <Image
            alt={logo.alt}
            className="hero-logo-image"
            height={logo.height}
            src={logo.src}
            width={logo.width}
            priority
          />
        </div>
      )}
      <h1 className="hero-title">{title}</h1>
      {text && <p className="hero-text">{text}</p>}
    </section>
  );
};
