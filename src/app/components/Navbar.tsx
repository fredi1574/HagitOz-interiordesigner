"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type JSX } from "react";
import { createPortal } from "react-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { useLocale } from "../lib/LocaleProvider";
import { getDirection } from "../lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const linkDefs = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/services", key: "nav.services" },
  { href: "/projects", key: "nav.projects" },
  { href: "/contact", key: "nav.contact" },
];

type Translate = ReturnType<typeof useLocale>["t"];

type NavLinksProps = {
  itemClass: string;
  onNavigate?: () => void;
  pathname: string;
  t: Translate;
};

type DesktopNavProps = Pick<NavLinksProps, "pathname" | "t">;

type MobileNavProps = DesktopNavProps & {
  onNavigate: () => void;
  open: boolean;
};

type MobileDrawerProps = Pick<MobileNavProps, "onNavigate" | "pathname" | "t">;

type MobileToggleProps = {
  open: boolean;
  onToggle: () => void;
};

function NavLinks({
  itemClass,
  onNavigate,
  pathname,
  t,
}: NavLinksProps): JSX.Element {
  return (
    <>
      {linkDefs.map((link, index) => {
        const active = pathname === link.href;
        const stateClasses = active
          ? "text-accent-alt font-medium"
          : "text-text-secondary hover:text-accent-alt";
        const staggerClass = itemClass.includes("stagger")
          ? `stagger-${index + 1}`
          : "";

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`${itemClass} ${stateClasses} ${staggerClass}`}
            onClick={onNavigate}
          >
            {t(link.key) as string}
          </Link>
        );
      })}
    </>
  );
}

function DesktopNav({ pathname, t }: DesktopNavProps): JSX.Element {
  return (
    <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
      <NavLinks
        itemClass="site-nav-link text-caption transition-all duration-300 hover:scale-105 animate-fade-in-up"
        pathname={pathname}
        t={t}
      />
    </nav>
  );
}

function usePreventBodyScroll(active: boolean): void {
  useEffect(() => {
    if (!active) {
      return;
    }
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [active]);
}

function MobileDrawer({
  onNavigate,
  pathname,
  t,
}: MobileDrawerProps): JSX.Element {
  const { locale } = useLocale();
  const isRtl = getDirection(locale) === "rtl";
  const slideAnimation = isRtl ? "animate-slide-in-left" : "animate-slide-in-right";

  return (
    <div
      className="fixed inset-0 z-50 flex md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <button
        type="button"
        aria-label="Close navigation menu"
        className="absolute inset-0 bg-background/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onNavigate}
      />
      <div
        className={`border-border bg-background flex h-full w-[85%] max-w-sm flex-col border-r shadow-2xl transition-transform duration-500 ease-in-out ${slideAnimation} ${isRtl ? "mr-auto border-r-0 border-l" : "ml-auto"}`}
      >
        {/* Mobile Header with Logo */}
        <div className="flex items-center justify-between border-b border-border/40 px-6 py-5">
          <Link href="/" className="flex items-center" onClick={onNavigate}>
            <Image
              src="/logo.png"
              alt="Hagit Oz Logo"
              width={100}
              height={40}
              className="h-auto w-auto brightness-90 grayscale hover:grayscale-0 transition-all"
            />
          </Link>
          <button
            type="button"
            aria-label="Close navigation drawer"
            className="text-text-secondary hover:text-accent transition-colors p-2"
            onClick={onNavigate}
          >
            <span className="sr-only">Close</span>
            <div className="relative h-6 w-6">
              <span className="bg-current absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rotate-45 rounded-full" />
              <span className="bg-current absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 -rotate-45 rounded-full" />
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1 overflow-y-auto px-6 py-8">
          <NavLinks
            itemClass="site-nav-link text-lg py-3 opacity-0 animate-fade-in-up"
            onNavigate={onNavigate}
            pathname={pathname}
            t={t}
          />
        </nav>

        {/* Social Links & Language */}
        <div className="mt-auto border-t border-border/40 p-6 space-y-8 animate-fade-in-up stagger-6 opacity-0">
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-secondary hover:text-accent-alt transition-colors" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="text-text-secondary hover:text-accent-alt transition-colors" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-text-secondary hover:text-accent-alt transition-colors" aria-label="LinkedIn">
              <FaLinkedinIn size={22} />
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[10px] uppercase tracking-widest text-text-secondary/60 font-medium">
              {locale === 'en' ? 'Select Language' : 'בחירת שפה'}
            </p>
            <LanguageSwitcher menuPlacement="top" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNav({
  onNavigate,
  open,
  pathname,
  t,
}: MobileNavProps): JSX.Element | null {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  usePreventBodyScroll(open && mounted);

  if (!mounted || !open || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <MobileDrawer onNavigate={onNavigate} pathname={pathname} t={t} />,
    document.body,
  );
}

function MobileToggle({ onToggle, open }: MobileToggleProps): JSX.Element {
  return (
    <button
      type="button"
      aria-label="Toggle navigation menu"
      aria-expanded={open}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 md:hidden"
      onClick={onToggle}
    >
      <div className="flex h-5 w-6 flex-col items-center justify-center gap-1.5">
        <span
          className={`bg-foreground h-0.5 w-full rounded-full transition-all duration-300 ease-out ${open ? "translate-y-2 rotate-45" : ""
            }`}
        />
        <span
          className={`bg-foreground h-0.5 w-full rounded-full transition-all duration-300 ease-out ${open ? "opacity-0 scale-x-0" : ""
            }`}
        />
        <span
          className={`bg-foreground h-0.5 w-full rounded-full transition-all duration-300 ease-out ${open ? "-translate-y-2 -rotate-45" : ""
            }`}
        />
      </div>
    </button>
  );
}

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const { t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className="hairline bg-background/70 animate-fade-in sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">
          {/* <Logo label={t("nav.logo") as string} /> */}
          <DesktopNav pathname={pathname} t={t} />
          <div className="flex flex-1 items-center justify-end gap-3">
            <MobileToggle
              open={mobileOpen}
              onToggle={() => setMobileOpen((prev) => !prev)}
            />
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
        <MobileNav
          onNavigate={() => setMobileOpen(false)}
          open={mobileOpen}
          pathname={pathname}
          t={t}
        />
      </div>
    </header>
  );
}
