"use client";

import Image from "next/image";
import ImageCarousel from "../../components/ImageCarousel";
import { useLocale } from "../../lib/LocaleProvider";
import { Project } from "../../lib/types";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function ProjectPageClient({ project }: Props) {
  const { t, locale } = useLocale();

  // Helper functions to get localized content
  const getLocalizedTitle = () => {
    return locale === "he" && project.titleHe ? project.titleHe : project.title;
  };

  const getLocalizedLocation = () => {
    return locale === "he" && project.locationHe
      ? project.locationHe
      : project.location;
  };

  const getLocalizedDescription = () => {
    return locale === "he" && project.descriptionHe
      ? project.descriptionHe
      : project.description;
  };

  const getLocalizedHighlights = () => {
    return locale === "he" && project.highlightsHe
      ? project.highlightsHe
      : project.highlights;
  };

  const getLocalizedChallenges = () => {
    return locale === "he" && project.challengesHe
      ? project.challengesHe
      : project.challenges;
  };

  const getLocalizedTeam = () => {
    return locale === "he" && project.teamHe ? project.teamHe : project.team;
  };

  const getLocalizedMaterials = () => {
    return locale === "he" && project.materialsHe
      ? project.materialsHe
      : project.materials;
  };

  return (
    <div className="min-h-screen">
      {/* Compact Hero Section */}
      <div className="relative">
        {project.coverUrl ? (
          <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
            <Image
              src={project.coverUrl}
              alt={getLocalizedTitle()}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 p-3 sm:p-4 md:p-5">
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-3 lg:grid-cols-3 lg:gap-4">
                  <div className="lg:col-span-2">
                    <h1 className="mb-1.5 text-xl font-bold text-white sm:mb-2 sm:text-2xl md:text-3xl">
                      {getLocalizedTitle()}
                    </h1>
                    {getLocalizedLocation() && (
                      <p className="mb-2 text-base text-white/90 sm:mb-3 sm:text-lg">
                        {getLocalizedLocation()}
                      </p>
                    )}
                    {getLocalizedDescription() && (
                      <p className="max-w-xl text-xs leading-snug text-white/80 sm:text-sm">
                        {getLocalizedDescription()}
                      </p>
                    )}
                  </div>

                  {/* Quick Project Info */}
                  <div className="bg-background/20 border border-white/20 p-3 sm:p-4">
                    <h3 className="mb-2 text-base font-semibold text-white">
                      {t("projects.projectDetails") as string}
                    </h3>
                    <div className="space-y-2 text-xs">
                      {project.completionDate && (
                        <div className="flex justify-between">
                          <span className="text-white/70">
                            {t("projects.completionDate") as string}
                          </span>
                          <span className="text-white">
                            {project.completionDate}
                          </span>
                        </div>
                      )}
                      {project.size && (
                        <div className="flex justify-between">
                          <span className="text-white/70">
                            {t("projects.size") as string}
                          </span>
                          <span className="text-white">{project.size}</span>
                        </div>
                      )}
                      {project.timeline && (
                        <div className="flex justify-between">
                          <span className="text-white/70">
                            {t("projects.timeline") as string}
                          </span>
                          <span className="text-white">{project.timeline}</span>
                        </div>
                      )}
                      {project.budget && (
                        <div className="flex justify-between">
                          <span className="text-white/70">
                            {t("projects.budgetRange") as string}
                          </span>
                          <span className="text-white">{project.budget}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-[50vh] min-h-[400px] items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <div className="px-4 text-center">
              <h1 className="mb-2 text-2xl font-bold sm:mb-3 sm:text-3xl md:text-4xl">
                {getLocalizedTitle()}
              </h1>
              {getLocalizedLocation() && (
                <p className="text-foreground/70 mb-3 text-lg sm:mb-4 sm:text-xl">
                  {getLocalizedLocation()}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Back Navigation */}
      <div className="px-4 pt-4 pb-0 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/projects"
            className={`group bg-background/80 border-accent/30 text-caption hover:bg-accent/10 focus-visible:ring-accent inline-flex items-center gap-2 border px-4 py-2 font-medium shadow-sm backdrop-blur-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
            style={{ boxShadow: "0 2px 8px 0 rgba(169,99,96,0.1)" }}
          >
            <span className="font-playfair tracking-wide uppercase">
              {t("projects.backToProjects") as string}
            </span>
            <IoMdArrowRoundBack className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Compact Project Details */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-4 lg:gap-6">
            {/* Main Content - 3 columns */}
            <div className="space-y-4 lg:col-span-3">
              {/* Project Highlights - Compact Grid */}
              {getLocalizedHighlights() &&
                getLocalizedHighlights()!.length > 0 && (
                  <div className="border-accent/20 border bg-transparent p-3 sm:p-4">
                    <h3 className="mb-2 text-base font-semibold">
                      {t("projects.keyHighlights") as string}
                    </h3>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {getLocalizedHighlights()!.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1 flex-shrink-0">
                            •
                          </span>
                          <span className="text-foreground/80 text-xs leading-snug">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Challenges - Compact */}
              {getLocalizedChallenges() && (
                <div className="border-accent/20 border bg-transparent p-3 sm:p-4">
                  <h3 className="mb-2 text-base font-semibold">
                    {t("projects.designChallenges") as string}
                  </h3>
                  <p className="text-foreground/80 text-xs leading-snug">
                    {getLocalizedChallenges()}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-3">
              {/* Materials */}
              {getLocalizedMaterials() &&
                getLocalizedMaterials()!.length > 0 && (
                  <div className="border-accent/20 border bg-transparent p-3 sm:p-4">
                    <h3 className="mb-2 text-base font-semibold">
                      {t("projects.materialsUsed") as string}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {getLocalizedMaterials()!.map((material, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-1.5 py-0.5 text-[11px]"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {/* Team */}
              {getLocalizedTeam() && getLocalizedTeam()!.length > 0 && (
                <div className="border-accent/20 border bg-transparent p-3 sm:p-4">
                  <h3 className="mb-2 text-base font-semibold">
                    {t("projects.projectTeam") as string}
                  </h3>
                  <ul className="space-y-1.5">
                    {getLocalizedTeam()!.map((member, index) => (
                      <li
                        key={index}
                        className="text-foreground/80 text-xs leading-snug"
                      >
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Gallery Section */}
      {Array.isArray(project.gallery) && project.gallery.length > 0 && (
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-xl font-bold">
              {t("projects.projectGallery") as string}
            </h2>
            <ImageCarousel
              items={project.gallery}
              beforeText={t("projects.before") as string}
              afterText={t("projects.after") as string}
            />
          </div>
        </div>
      )}
    </div>
  );
}
