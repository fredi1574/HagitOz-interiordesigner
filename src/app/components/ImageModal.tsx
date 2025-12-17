"use client";

import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import { useLocale } from "../lib/LocaleProvider";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
};

export default function ImageModal({
  isOpen,
  onClose,
  src,
  alt,
  caption,
}: ImageModalProps) {
  const { t } = useLocale();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("image-modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("image-modal-open");
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("image-modal-open");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-[60] rounded-full bg-black/70 p-3 text-white shadow-lg transition-all duration-200 hover:scale-110 hover:bg-black/90"
        aria-label="Close image"
      >
        <IoClose className="h-7 w-7" />
      </button>

      {/* Image Container */}
      <div
        className="relative flex h-full max-h-[90vh] w-full max-w-[90vw] items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full max-h-full w-full max-w-6xl">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            priority
            sizes="90vw"
          />
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <div className="absolute bottom-4 left-1/2 max-w-md -translate-x-1/2 rounded bg-black/70 px-4 py-2 text-center text-sm text-white">
          {caption}
        </div>
      )}

      {/* Instructions */}
      <div className="absolute right-4 bottom-4 rounded bg-black/50 px-3 py-1 text-xs text-white">
        {t("gallery.pressEscToClose") as string}
      </div>
    </div>
  );
}
