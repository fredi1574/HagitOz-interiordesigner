import Link from "next/link";
import type { JSX } from "react";
import { headers } from "next/headers";
import { Hero } from "../components/Hero";
import { CTA } from "../components/CTA";

export const metadata = { title: "Projects" };
export const dynamic = "force-dynamic";

type ProjectSummary = {
  slug: string;
  title: string;
  location?: string;
  coverUrl?: string;
};

const comingSoonProjects = [
  { title: "בקרוב", description: "פרויקט חדש בעבודה\nבוהו כפרי במרכז" },
  { title: "בקרוב", description: "פרויקט נוסף בדרך\nנורדי-תעשייתי בצפון" },
  { title: "בקרוב", description: "פרויקט מתוכנן\nמודרני מינימליסטי" },
  { title: "בקרוב", description: "פרויקט חדש\nכפרי רומנטי" },
  { title: "בקרוב", description: "פרויקט בתכנון\nסקנדינבי חם" },
] as const;

async function getProjects(): Promise<ProjectSummary[]> {
  try {
    const hdrs = await headers();
    const proto = hdrs.get("x-forwarded-proto") || "http";
    const host = hdrs.get("host");
    const url = `${proto}://${host}/api/projects`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("failed");
    const data = await res.json();
    return (
      (data?.projects as ProjectSummary[])?.map((project) => ({
        slug: project.slug,
        title: project.title,
        location: project.location,
        coverUrl: project.coverUrl,
      })) ?? []
    );
  } catch (error) {
    console.error("Projects API Error:", error);
    const { projects } = await import("../lib/sampleData");
    return projects.map((project) => ({
      slug: project.slug,
      title: project.title,
      location: project.location,
      coverUrl: project.coverUrl,
    }));
  }
}

const PortfolioPage = async (): Promise<JSX.Element> => {
  const projects = await getProjects();
  return (
    <div className="leading-[1.8]" dir="rtl" lang="he">
      <Hero
        text="כל פרויקט הוא סיפור ייחודי של הקשבה, יצירה והפיכת חלל לבית אמיתי"
        title="פרויקטים"
      />
      <div className="mx-auto my-20 max-w-[1400px] px-[5%]">
        <InfoBanner />
        <PortfolioGrid projects={projects} />
      </div>
      <CTA />
    </div>
  );
};

const InfoBanner = (): JSX.Element => (
  <div className="mx-auto mb-20 max-w-[800px] bg-white p-12 text-center">
    <p className="text-text-secondary mb-8 text-base leading-[2]">
      הפרויקטים מוצגים בצורה מפורטת שתעזור לכם להכיר את תהליך העבודה והתוצאה
      הסופית. פרויקטים חדשים מתווספים שאופן שוטף ברגע שהם מוכנים להצגה מושלמת
    </p>
    <a
      className="bg-accent hover:bg-text-primary inline-block px-10 py-4 text-base tracking-[1px] text-white no-underline transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(191,163,149,0.3)]"
      href="/contact"
    >
      בואו נדבר על הפרויקט שלכם
    </a>
  </div>
);

type PortfolioGridProps = {
  projects: ProjectSummary[];
};

const PortfolioGrid = ({ projects }: PortfolioGridProps): JSX.Element => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10">
    {projects.map((project) => (
      <ProjectCard key={project.slug} project={project} />
    ))}
    {comingSoonProjects.map((item) => (
      <ComingSoonCard
        key={item.description}
        description={item.description}
        title={item.title}
      />
    ))}
  </div>
);

type ProjectCardProps = {
  project: ProjectSummary;
};

const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => (
  <Link
    className="group block overflow-hidden bg-white shadow-[0_5px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]"
    href={`/projects/${project.slug}`}
  >
    <div
      className="from-muted to-accent text-text-primary relative flex h-[400px] items-center justify-center bg-gradient-to-br bg-cover bg-center text-base"
      style={
        project.coverUrl
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url(${project.coverUrl})`,
            }
          : undefined
      }
    >
      {!project.coverUrl ? `[תמונה - ${project.title}]` : null}
      <div className="absolute right-0 bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:to-black/10 group-hover:backdrop-blur-sm">
        <h3 className="mb-2 text-2xl font-light tracking-[1px]">
          {project.title}
        </h3>
        {project.location ? (
          <p className="text-base tracking-[0.5px] opacity-90">
            {project.location}
          </p>
        ) : null}
      </div>
    </div>
  </Link>
);

type ComingSoonCardProps = {
  title: string;
  description: string;
};

const ComingSoonCard = ({
  title,
  description,
}: ComingSoonCardProps): JSX.Element => (
  <div className="group bg-bg-light flex cursor-default flex-col items-center justify-center overflow-hidden p-12 text-center shadow-[0_5px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
    <div className="text-accent mb-4 text-6xl" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.5 7h11" />
        <path d="M6.5 17h11" />
        <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
        <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
      </svg>
    </div>
    <h3 className="text-accent mb-4 text-2xl font-light tracking-[2px]">
      {title}
    </h3>
    <p className="text-text-secondary text-base leading-[2] whitespace-pre-line">
      {description}
    </p>
  </div>
);

export default PortfolioPage;
