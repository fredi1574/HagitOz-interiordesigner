"use client";

import { FormEvent, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoCheckmark, IoCloseCircle, IoRefresh } from "react-icons/io5";
import { LuClock3, LuMapPin } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { useLocale } from "../lib/LocaleProvider";
import { getDirection } from "../lib/i18n";

export default function ContactPage() {
  const { t, locale } = useLocale();
  const dir = getDirection(locale);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data?.error || (t("contact.form.errorFailed") as string),
        );
      }
      setStatus("success");
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : (t("contact.form.errorGeneric") as string) || "";
      setError(msg);
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-page flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-8">
        <div className="animate-fade-in-up mx-auto w-full max-w-2xl text-center">
          <div className="from-accent/10 to-accent/5 border-accent/20 rounded-3xl border bg-gradient-to-br p-8">
            <div className="bg-accent/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
              <IoCheckmark className="h-8 w-8" />
            </div>
            <h3 className="heading-md mb-4">
              {t("contact.form.successTitle") as string}
            </h3>
            <p className="text-body text-foreground/70 mb-6">
              {t("contact.form.successMessage") as string}
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                setName("");
                setPhone("");
                setEmail("");
                setMessage("");
                setError(null);
              }}
              className="bg-accent text-background inline-flex items-center justify-center px-6 py-3 text-sm font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:brightness-95"
            >
              {t("contact.form.sendAnother") as string}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <div className="mx-auto w-full">
        <div className="overflow-hidden rounded-3xl">
          {/* Header Section */}
          <section className="hero">
            <h1 className="hero-title">{t("contact.headerTitle") as string}</h1>
          </section>

          {/* Content Section */}
          <div className="mx-auto w-full max-w-4xl p-8 md:p-12">
            <form onSubmit={onSubmit}>
              <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:gap-12">
                {/* Form Section */}
                <div className="lg:w-3/5">
                  <div className="space-y-6">
                    <div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={status === "submitting"}
                        dir={dir}
                        placeholder={
                          (t("contact.form.namePlaceholder") as string) ||
                          "Name"
                        }
                        className="focus:border-accent border-border-light w-full border-2 px-4 py-4 text-base transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(191,163,149,0.1)] focus:outline-none disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        disabled={status === "submitting"}
                        dir={dir}
                        placeholder={
                          (t("contact.form.phonePlaceholder") as string) ||
                          "Phone"
                        }
                        className="focus:border-accent border-border-light w-full border-2 px-4 py-4 text-base transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(191,163,149,0.1)] focus:outline-none disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "submitting"}
                        dir={dir}
                        placeholder={
                          (t("contact.form.emailPlaceholder") as string) ||
                          "Email"
                        }
                        className="focus:border-accent border-border-light w-full border-2 px-4 py-4 text-base transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(191,163,149,0.1)] focus:outline-none disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        disabled={status === "submitting"}
                        dir={dir}
                        placeholder={
                          (t("contact.form.messagePlaceholder") as string) ||
                          "Tell us about your project"
                        }
                        className="focus:border-accent border-border-light min-h-[150px] w-full resize-y border-2 px-4 py-4 text-base transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(191,163,149,0.1)] focus:outline-none disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Error and Submit Button */}
                  {error && (
                    <div className="animate-fade-in-up mb-6 border border-red-200 bg-red-50 p-4">
                      <div className="flex items-center gap-3">
                        <IoCloseCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                        <p className="text-caption text-red-700">{error}</p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className="bg-accent hover:bg-text-primary disabled:hover:bg-accent my-4 flex w-full items-center justify-center gap-3 px-10 py-4 text-base tracking-[1px] text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:cursor-pointer hover:shadow-[0_5px_20px_rgba(191,163,149,0.3)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    {status === "submitting" && (
                      <IoRefresh className="h-5 w-5 animate-spin" />
                    )}
                    {status === "submitting"
                      ? (t("contact.form.submitSubmitting") as string)
                      : (t("contact.form.submitIdle") as string)}
                  </button>
                </div>

                {/* Contact Info Section */}
                <div className="lg:w-3/5">
                  <div className="px-2 pt-0 pb-2 md:px-10 md:pt-0 md:pb-10">
                    <div className="space-y-5">
                      {/* Phone */}
                      <div className="flex items-center gap-4 p-4 transition-all duration-300 hover:scale-[1.02]">
                        <div className="min-w-[30px] text-2xl">
                          <FiPhone />
                        </div>
                        <div className="flex-1">
                          <span className="text-foreground/70">
                            <a
                              href="tel:+972503200133"
                              className="hover:text-foreground no-underline transition-colors duration-300"
                            >
                              050-3200133
                            </a>
                          </span>
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div className="flex items-center gap-4 p-4 transition-all duration-300 hover:scale-[1.02]">
                        <div className="min-w-[30px] text-2xl">
                          <FaWhatsapp />
                        </div>
                        <div className="flex-1">
                          <span className="text-foreground/70">
                            <a
                              href="https://wa.me/972503200133"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-foreground no-underline transition-colors duration-300"
                            >
                              {t("contact.whatsappLink") as string}
                            </a>
                          </span>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-center gap-4 p-4 transition-all duration-300 hover:scale-[1.02]">
                        <div className="min-w-[30px] text-2xl">
                          <MdOutlineMailOutline />
                        </div>
                        <div className="flex-1">
                          <span className="text-foreground/70">
                            <a
                              href="mailto:design@example.com"
                              className="hover:text-foreground no-underline transition-colors duration-300"
                            >
                              design@example.com
                            </a>
                          </span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-4 p-4 transition-all duration-300 hover:scale-[1.02]">
                        <div className="min-w-[30px] text-2xl">
                          <LuMapPin />
                        </div>
                        <div className="flex-1">
                          <span className="text-foreground/70">
                            {(t("contact.locationValue") as string) ||
                              "Haifa, Krayot and the North"}
                          </span>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-center gap-4 p-4 transition-all duration-300 hover:scale-[1.02]">
                        <div className="min-w-[30px] text-2xl">
                          <LuClock3 />
                        </div>
                        <div className="flex-1">
                          <span className="text-foreground/70">
                            {(t("contact.hoursValue") as string) ||
                              "Sun–Thu, 9:00–17:00"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
