"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type JSX } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "../lib/LocaleProvider";
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
      {linkDefs.map((link) => {
        const active = pathname === link.href;
        const stateClasses = active
          ? "text-accent-alt font-medium"
          : "text-text-secondary hover:text-accent-alt";
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`${itemClass} ${stateClasses}`}
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
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onNavigate}
      />
      <div className="border-border bg-background animate-slide-in-right ml-auto flex h-full w-72 flex-col border-l shadow-2xl">
        <div className="border-border flex items-center justify-end border-b px-4 py-3">
          <button
            type="button"
            aria-label="Close navigation drawer"
            className="border-border hover:border-accent focus-visible:ring-accent flex h-9 w-9 items-center justify-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:outline-none"
            onClick={onNavigate}
          >
            <span className="sr-only">Close</span>
            <span className="relative block h-4 w-4">
              <span className="bg-foreground absolute top-1/2 left-1/2 h-0.5 w-full -translate-x-1/2 rotate-45" />
              <span className="bg-foreground absolute top-1/2 left-1/2 h-0.5 w-full -translate-x-1/2 -rotate-45" />
            </span>
          </button>
        </div>
        <nav className="flex flex-col gap-3 overflow-y-auto px-5 py-6">
          <NavLinks
            itemClass="site-nav-link text-base transition-colors duration-300"
            onNavigate={onNavigate}
            pathname={pathname}
            t={t}
          />
        </nav>
        <div className="border-border mt-auto border-t px-5 py-5">
          <LanguageSwitcher menuPlacement="top" />
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
      className="border-border hover:border-accent focus-visible:ring-accent flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border transition-colors focus-visible:ring-2 focus-visible:outline-none md:hidden"
      onClick={onToggle}
    >
      <span
        className={`bg-foreground h-0.5 w-6 rounded transition-transform ${
          open ? "translate-y-1.5 rotate-45" : ""
        }`}
      />
      <span
        className={`bg-foreground h-0.5 w-6 rounded transition-opacity ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`bg-foreground h-0.5 w-6 rounded transition-transform ${
          open ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      />
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
