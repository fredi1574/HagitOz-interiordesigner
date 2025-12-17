import type { JSX } from "react";
import { Hero } from "./components/Hero";
import { CTA } from "./components/CTA";

const aboutParagraphs = [
  "כאן מתחיל מסע שעובר דרך קירות, צבעים ורהיטים, אבל בליבו הוא עוסק ביצירת בית שמרגיש שלכם ושמשקף את מי שאתם באמת",

  `עבורי, עיצוב פנים הוא שפה, דרך להבין מה אנשים צריכים כדי להרגיש שלמים. 
להבחין באור שנשפך פנימה בשעות הבוקר, להבין מה באמת מרגיע אתכם אחרי יום עמוס 
ולמצוא את הנקודה המדויקת שבה יופי פוגש פונקציונליות. 
אני מאמינה שהבית שלכם צריך לשקף את מי שאתם ולא את מה שמכתיבים הטרנדים.
`,

  "כשאני נכנסת לפרויקט, אני מגיעה עם סקרנות אמיתית. אני מקשיבה. אני רוצה לשמוע את הסיפור שלכם, את השגרה היומיומית, החלומות, ההרגלים, הכאבים. יחד אנחנו יוצרים מרחב שמרגיש טבעי, מלא השראה ומדויק, כזה שמשרת אתכם באמת.",

  `
אני מאמינה שתהליך עיצוב טוב הוא תהליך נעים, שקוף, מדויק, מכיל.
כזה ששם אתכם במרכז, ועם זאת מעניק לכם הובלה מקצועית שמסירה מכם התלבטויות ומעניקה בהירות.,
אם אתם מרגישים שהגיע הזמן לייצר מרחב שמדבר אתכם, אני מזמינה אתכם לצאת איתי לדרך ויחד נצא למסע של עיצוב אמיתי, רגוע ומדויק.`,
  "ברוכים הבאים הביתה ♥",
] as const;

const valueCards = [
  {
    title: "קשובה",
    description:
      "כל פרויקט מתחיל בשיחת היכרות. אני לומדת אתכם, את הצרכים שלכם, ואת מה שגורם לכם להרגיש טוב בבית.",
  },
  {
    title: "טבעית",
    description:
      "אני משלבת שימוש בחומרים טבעיים - עץ, אבן, טקסטיל. חומרים שמביאים חום, מרקם ותחושה אותנטית לחלל.",
  },
  {
    title: "ייחודית",
    description: `כל בית שאני מעצבת נולד מהאנשים שחיים בו, מההרגלים והחלומות שלהם וממה שגורם להם להרגיש טוב.
כל פרויקט מקבל את הטביעה האישית שלו, שמשקפת את מי שגר בו.
`,
  },
] as const;

const portfolioItems = [
  "[דירה בוהו-כפרית בתל אביב]",
  "[בית נורדי-תעשייתי בצפון]",
  "[דירת סטודיו רגועה]",
] as const;

const HomePage = (): JSX.Element => (
  <div dir="rtl" lang="he">
    <AboutSection />
    <AboutContentSection />
    <PhilosophySection />
    <PortfolioSection />
    <CTA />
  </div>
);

const AboutSection = (): JSX.Element => (
  <Hero
    id="about"
    logo={{
      alt: "Iztrubal logo",
      height: 210,
      src: "/logo.png",
      width: 210,
    }}
    text={aboutParagraphs[0]}
    title="ברוכים הבאים"
  />
);

const AboutContentSection = (): JSX.Element => (
  <section className="mx-auto my-20 max-w-[900px] px-[5%]">
    {aboutParagraphs.slice(1).map((text) => (
      <p
        className="text-text-secondary mb-[1.8rem] text-base leading-[2]"
        key={text}
      >
        {text}
      </p>
    ))}
  </section>
);

const PhilosophySection = (): JSX.Element => (
  <section className="from-bg-light to-muted bg-gradient-to-b p-8">
    <div className="mx-auto max-w-[1200px] text-center">
      <h2 className="mb-12 text-2xl font-light tracking-[2px] md:text-3xl">
        הגישה שלי לעיצוב
      </h2>
      <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12">
        {valueCards.map((value) => (
          <article
            className="bg-white px-8 py-12 shadow-[0_5px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
            key={value.title}
          >
            <h3 className="text-accent mb-6 text-2xl font-normal tracking-[1px]">
              {value.title}
            </h3>
            <p className="text-text-secondary text-[1.05rem] leading-[1.9]">
              {value.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const PortfolioSection = (): JSX.Element => (
  <section
    className="mx-auto my-32 max-w-[1400px] px-[5%] py-32"
    id="portfolio"
  >
    <h2 className="mb-16 text-center text-2xl font-light tracking-[2px] md:text-3xl">
      פרויקטים נבחרים
    </h2>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
      {portfolioItems.map((item) => (
        <div
          className="group from-muted via-accent to-text-primary relative flex h-[450px] cursor-pointer items-center justify-center overflow-hidden bg-gradient-to-br p-4 text-center text-base text-white shadow-[0_5px_25px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_50px_rgba(0,0,0,0.2)]"
          key={item}
        >
          <div className="from-accent/30 to-text-primary/40 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {item}
        </div>
      ))}
    </div>
  </section>
);

export default HomePage;
