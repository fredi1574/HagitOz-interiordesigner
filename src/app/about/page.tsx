import type { JSX } from "react";
import { Hero } from "../components/Hero";
import { CTA } from "../components/CTA";

export const metadata = { title: "About" };

const storyParagraphs = [
  "שמי חגית.",
  "אני בעלת תואר ראשון במתמטיקה ומדעי המחשב ותואר שני במנהל עסקים, שני עולמות שדורשים חשיבה אנליטית, ראייה מערכתית, סדר ויכולת להתמקד במטרה. הרקע הזה בנה אצלי חשיבה לוגית, דיוק ואהבה לפתרון בעיות מורכבות.",
  "אבל הלב תמיד חיפש דרך להביא לידי ביטוי גם יצירתיות ורגש. רציתי שהעשייה שלי תהיה משמעותית ושתביא ערך אמיתי לעולם, לא רק לייצר תוצרים אלא גם לגעת באנשים ולשפר את איכות חייהם.",
] as const;

const storyJourney = [
  "ההכרות שלי עם עולם העיצוב החלה בקורס הום סטיילינג.  אז גיליתי איזו השפעה יש לעיצוב על התחושה הפנימית, ואיך דרך הבנה עמוקה של צרכים ואורח חיים אפשר לייצר תחושת בית אמיתית.",
  "כשסיימתי את לימודי ההום סטיילינג הבנתי שזה לא מספיק בשבילי. רציתי להבין את הדברים לעומק ולכן החלטתי להמשיך ולהרחיב את הכלים המקצועיים שלי ונרשמתי ללימודי עיצוב פנים. מהר מאוד הבנתי שזה הרבה מעבר לשינוי של צבע או רהיט, זהו תהליך אישי, שמבקש להבין מה באמת עושה טוב לאנשים במרחב הפרטי שלהם - בבית.",
  `כשאני מתחילה פרויקט חדש, לפני הכל, אני רוצה להכיר את האנשים שגרים בבית.
באמצעות שאלות ממוקדות אני לומדת להכיר את הדרך שבה הם חווים את הבית. 
אני משלבת חשיבה שיטתית עם אינטואיציה, יצירתיות עם סדר, כדי ליצור מרחב שמרגיש נכון, נינוח ומעורר השראה.
`,
] as const;

const approachParagraphs = [
  "כשאני עובדת, אני לא מתמקדת רק בקירות, מידות וצבעים – אני מקשיבה לאנשים שיחיו שם, לדרך שבה הם חווים את הבית. אני משלבת חשיבה שיטתית עם אינטואיציה, יצירתיות עם סדר, כדי ליצור מרחב שמרגיש נכון, נינוח ומעורר השראה.",
] as const;

const values = [
  {
    title: "חשיבה מערכתית",
    description: "ראייה רחבה של כל המרכיבים – מהתכנון הראשוני ועד הפרט האחרון.",
  },
  {
    title: "יצירתיות ורגש",
    description: "שילוב של אמנות ואינטואיציה ליצירת חללים שמדברים ללב.",
  },
  {
    title: "הקשבה אמיתית",
    description:
      "הבנה עמוקה של מי שאתם, איך אתם חיים, ומה גורם לכם להרגיש בבית.",
  },
] as const;

/**
 * Renders the about page with hero, story, values and CTA sections.
 * @returns {JSX.Element} Full about experience in Hebrew RTL layout.
 */
const AboutPage = (): JSX.Element => (
  <div className="leading-[1.9]" dir="rtl" lang="he">
    <Hero title="נעים להכיר" />
    <StorySection />
    <ApproachSection />
    <ValuesSection />
    <ClosingSection />
    <CTA />
  </div>
);

const StorySection = (): JSX.Element => (
  <section className="mx-auto max-w-7xl overflow-hidden py-8">
    <div className="from-muted to-accent text-text-primary mb-8 flex h-[400px] w-full items-center justify-center bg-gradient-to-br text-center md:float-right md:ml-8 md:h-[600px] md:w-[40%] md:max-w-[500px] md:[shape-outside:inset(0)]">
      [תמונה של המעצבת]
    </div>
    {storyParagraphs.map((text) => (
      <p
        className="text-text-primary mb-8 text-[1.15rem] leading-[2.2]"
        key={text}
      >
        {text}
      </p>
    ))}
    <p className="border-r-accent bg-bg-light text-accent my-4 border-r-4 px-6 py-6 text-[1.25rem] leading-[2] font-normal md:[margin-right:calc(40%+2rem)]">
      ומכאן זה התחיל...
    </p>
    {storyJourney.map((text) => (
      <p
        className="text-text-primary mb-8 text-[1.15rem] leading-[2.2]"
        key={text}
      >
        {text}
      </p>
    ))}
  </section>
);

const ApproachSection = (): JSX.Element => (
  <section className="mx-auto max-w-7xl">
    {approachParagraphs.map((text) => (
      <p
        className="text-text-primary mb-8 text-[1.15rem] leading-[2.2]"
        key={text}
      >
        {text}
      </p>
    ))}
    <p className="border-r-accent bg-bg-light text-accent my-4 border-r-4 px-6 py-6 text-[1.25rem] leading-[2] font-normal">
      בעיניי, עיצוב הוא לא רק איך המקום נראה, אלא איך הוא גורם לנו להרגיש.
    </p>
  </section>
);

const ValuesSection = (): JSX.Element => (
  <section className="from-bg-light to-muted my-24 bg-gradient-to-b px-[5%] py-20 text-center">
    <h2 className="text-text-primary mb-16 text-[clamp(2rem,5vw,2.5rem)] font-light tracking-[2px]">
      הערכים שמנחים אותי
    </h2>
    <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-12">
      {values.map((value) => (
        <article
          className="bg-white p-8 text-center shadow-[0_5px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-2.5"
          key={value.title}
        >
          <h3 className="text-accent mb-4 text-[1.4rem] font-normal tracking-[1px]">
            {value.title}
          </h3>
          <p className="text-text-primary text-[1.05rem] leading-[1.9]">
            {value.description}
          </p>
        </article>
      ))}
    </div>
  </section>
);

const ClosingSection = (): JSX.Element => (
  <section className="mx-auto my-24 max-w-[900px] px-[5%] text-center">
    <p className="text-text-primary text-[1.3rem] leading-[2]">
      אני מזמינה אתכם למסע משותף שבו נבין יחד מה באמת חשוב לכם, נחלום על
      האפשרויות, וניצור את הבית שמשקף את מי שאתם באמת.
    </p>
  </section>
);

export default AboutPage;
