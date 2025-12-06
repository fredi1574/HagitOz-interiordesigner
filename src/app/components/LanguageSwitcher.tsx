"use client";

import { useState, useRef, useEffect, type JSX } from "react";
import { CiGlobe } from "react-icons/ci";
import { useLocale } from "../lib/LocaleProvider";
import { IoChevronDownOutline } from "react-icons/io5";

type LanguageSwitcherProps = {
  menuPlacement?: "top" | "bottom";
};

export default function LanguageSwitcher(
  props?: LanguageSwitcherProps,
): JSX.Element {
  const { menuPlacement = "bottom" } = props ?? {};
  const { locale, setLocale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", label: t("nav.en") },
    { code: "he", label: t("nav.he") },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setLocale(langCode as "en" | "he");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="hover:bg-foreground/5 hover:border-accent/30 flex items-center gap-2 rounded-full border border-black/10 bg-transparent px-3 py-2 transition-all duration-300 hover:scale-100 dark:border-white/10"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* Globe Icon */}
        <CiGlobe className="text-foreground/80 h-5 w-5 transition-colors duration-300" />

        {/* Dropdown Arrow */}
        <IoChevronDownOutline
          className={`text-foreground/60 h-3 w-3 transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`animate-scale-in absolute right-0 z-50 w-32 rounded-lg border border-black/10 bg-white shadow-lg backdrop-blur-sm dark:border-white/10 ${
            menuPlacement === "top"
              ? "bottom-full mb-1 origin-bottom"
              : "top-full mt-1 origin-top"
          }`}
        >
          {languages.map((language, index) => (
            <button
              key={language.code}
              type="button"
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full px-3 py-2 text-left text-sm transition-all duration-300 first:rounded-t-lg last:rounded-b-lg hover:scale-105 ${
                locale === language.code
                  ? "bg-accent/10 font-medium"
                  : "text-foreground/80 hover:bg-foreground/5"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {language.label as string}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
