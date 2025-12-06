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
  const hasLogo = Boolean(logo);
  const className = hasLogo ? "hero home-about-hero" : "hero";
  const titleClassName = hasLogo ? "home-about-hero-title" : "hero-title";
  const textClassName = hasLogo ? "home-about-hero-text" : "hero-text";

  return (
    <section className={className} id={id}>
      {logo && (
        <div className="home-about-hero-logo">
          <Image
            alt={logo.alt}
            className="home-about-hero-logo-image"
            height={logo.height}
            src={logo.src}
            width={logo.width}
          />
        </div>
      )}
      <h1 className={titleClassName}>{title}</h1>
      {text && <p className={textClassName}>{text}</p>}
    </section>
  );
};
