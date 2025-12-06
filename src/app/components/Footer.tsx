import Image from "next/image";

const links = [
  {
    href: "https://www.instagram.com/hagit_int_design/",
    icon: "/instagram.png",
    alt: "Instagram",
  },
  {
    href: "https://www.facebook.com/hagitp.interior.design",
    icon: "/facebook.png",
    alt: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/hagitoz",
    icon: "/linkedin.png",
    alt: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="hairline animate-fade-in border-t">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-foreground/60 animate-fade-in-up text-sm transition-colors duration-300">
            {new Date().getFullYear()} Hagit Oz ©
          </p>
          <div className="text-foreground/60 animate-fade-in-up animate-stagger-1 flex gap-3 text-sm transition-colors duration-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={link.icon} alt={link.alt} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
