"use client";

import { useLocale } from "@/app/lib/LocaleProvider";
import Link from "next/link";

export default function ProjectNotFound() {
  const { t } = useLocale();

  return (
    <div className="flex h-[calc(100vh-200px)] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-10 text-9xl font-bold">
          {t("notFound.title") as string}
        </h1>

        <div className="flex justify-center gap-10">
          <div>
            <Link href="/">{t("notFound.backToHome") as string}</Link>
          </div>

          <div>
            <Link href="/projects">
              {t("notFound.viewAllProjects") as string}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
