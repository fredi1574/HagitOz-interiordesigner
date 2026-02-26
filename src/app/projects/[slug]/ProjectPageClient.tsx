"use client";

import Image from "next/image";
import ImageCarousel from "../../components/ImageCarousel";
import { useLocale } from "../../lib/LocaleProvider";
import { Project } from "../../lib/types";
import { IoMdArrowRoundBack, IoMdResize, IoMdCalendar, IoMdTime, IoMdWallet } from "react-icons/io";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function ProjectPageClient({ project }: Props) {
  const { t, locale } = useLocale();
  const isRtl = locale === "he";

  // Helper functions to get localized content
  const getLocalizedTitle = () => locale === "he" && project.titleHe ? project.titleHe : project.title;
  const getLocalizedLocation = () => locale === "he" && project.locationHe ? project.locationHe : project.location;
  const getLocalizedDescription = () => locale === "he" && project.descriptionHe ? project.descriptionHe : project.description;
  const getLocalizedHighlights = () => locale === "he" && project.highlightsHe ? project.highlightsHe : project.highlights;
  const getLocalizedChallenges = () => locale === "he" && project.challengesHe ? project.challengesHe : project.challenges;
  const getLocalizedTeam = () => locale === "he" && project.teamHe ? project.teamHe : project.team;
  const getLocalizedMaterials = () => locale === "he" && project.materialsHe ? project.materialsHe : project.materials;

  return (
    <div className="min-h-screen bg-background">
      {/* Immersive Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] min-h-[500px] w-full overflow-hidden">
        {project.coverUrl ? (
          <>
            <Image
              src={project.coverUrl}
              alt={getLocalizedTitle()}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-bg-light to-muted">
            <span className="text-foreground/20 text-3xl md:text-4xl font-serif italic">Hagit Oz Design</span>
          </div>
        )}

        {/* Floating Glassmorphic Info Card */}
        <div className={`absolute bottom-6 md:bottom-12 ${isRtl ? 'right-4 md:right-12' : 'left-4 md:left-12'} z-10 max-w-[calc(100%-2rem)] md:max-w-2xl`}>
          <div className="animate-fade-in-up bg-white/10 border border-white/20 p-5 md:p-8 backdrop-blur-md shadow-2xl">
            <nav className="mb-4 md:mb-6">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-widest text-white/80 uppercase transition-colors hover:text-white"
              >
                {isRtl ? (
                  <>
                    <span>{t("projects.backToProjects") as string}</span>
                    <IoMdArrowRoundBack className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                  </>
                ) : (
                  <>
                    <IoMdArrowRoundBack className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    <span>{t("projects.backToProjects") as string}</span>
                  </>
                )}
              </Link>
            </nav>

            <h1 className="mb-3 md:mb-4 font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight text-white">
              {getLocalizedTitle()}
            </h1>

            <div className="mb-4 md:mb-6 flex items-center gap-3">
              <span className="h-px w-6 md:w-8 bg-accent" />
              <p className="text-base md:text-lg font-light tracking-wide text-white/90">
                {getLocalizedLocation()}
              </p>
            </div>

            {getLocalizedDescription() && (
              <p className="max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-white/80">
                {getLocalizedDescription()}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Project Statistics & Brief */}
      <section className="bg-bg-lighter border-y border-border-light py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-12">
            <div className="lg:col-span-3">
              <h2 className="mb-6 md:mb-8 font-serif text-xl md:text-2xl text-text-primary underline decoration-accent/30 decoration-4 underline-offset-8">
                {t("projects.projectDetails") as string}
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {/* Highlights */}
                <div className="space-y-4">
                  <h3 className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-accent uppercase">
                    {t("projects.keyHighlights") as string}
                  </h3>
                  <ul className="space-y-3">
                    {getLocalizedHighlights()?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                        <span className="text-xs md:text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div className="space-y-4">
                  <h3 className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-accent uppercase">
                    {t("projects.designChallenges") as string}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-text-secondary italic">
                    {getLocalizedChallenges()}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="bg-white p-6 md:p-8 shadow-sm border-l-4 border-accent">
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-1 lg:space-y-8">
                {[
                  { label: "projects.completionDate", value: project.completionDate, icon: IoMdCalendar },
                  { label: "projects.size", value: project.size, icon: IoMdResize },
                  { label: "projects.timeline", value: project.timeline, icon: IoMdTime },
                  { label: "projects.budgetRange", value: project.budget, icon: IoMdWallet },
                ].map((stat, i) => stat.value && (
                  <div key={i} className="group">
                    <div className="flex items-center gap-2 mb-1">
                      <stat.icon className="h-3.5 w-3.5 text-accent transition-transform group-hover:scale-110" />
                      <span className="text-[9px] font-bold tracking-widest text-text-tertiary uppercase">
                        {t(stat.label) as string}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm font-medium text-text-primary pl-5.5">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Team */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Team Section */}
            <div>
              <h3 className="mb-8 md:mb-10 font-serif text-2xl md:text-3xl text-text-primary">
                {t("projects.projectTeam") as string}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {getLocalizedTeam()?.map((member, i) => (
                  <div key={i} className="group border-b border-border-light pb-3 transition-colors hover:border-accent">
                    <p className="text-xs md:text-sm text-text-secondary transition-colors group-hover:text-text-primary">
                      {member}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials Palette */}
            <div>
              <h3 className="mb-8 md:mb-10 font-serif text-2xl md:text-3xl text-text-primary">
                {t("projects.materialsUsed") as string}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {getLocalizedMaterials()?.map((material, i) => (
                  <span
                    key={i}
                    className="bg-bg-light px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-[11px] font-medium tracking-wider text-text-primary uppercase transition-all hover:bg-accent hover:text-white"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Gallery Section */}
      {Array.isArray(project.gallery) && project.gallery.length > 0 && (
        <section className="bg-text-primary py-16 md:py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 md:mb-16 text-center">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
                {t("projects.projectGallery") as string}
              </h2>
              <div className="mx-auto mt-4 md:mt-6 h-1 w-16 md:w-24 bg-accent" />
            </div>

            <div className="relative">
              <ImageCarousel
                items={project.gallery}
                beforeText={t("projects.before") as string}
                afterText={t("projects.after") as string}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
