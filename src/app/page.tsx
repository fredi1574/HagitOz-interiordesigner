import type { JSX } from "react";
import { Hero } from "./components/Hero";
import { CTA } from "./components/CTA";

const aboutParagraphs = [
  "כאן מתחיל מסע שעובר דרך קירות, צבעים ורהיטים, אבל בליבו הוא עוסק ביצירת בית שמרגיש שלכם ושמשקף את מי שאתם באמת.",

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
  <div className="home-page" dir="rtl" lang="he">
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
  <section className="home-about-content">
    {aboutParagraphs.slice(1).map((text) => (
      <p key={text}>{text}</p>
    ))}
  </section>
);

const PhilosophySection = (): JSX.Element => (
  <section className="home-philosophy">
    <div className="home-philosophy-content">
      <h2 className="home-section-title">הגישה שלי לעיצוב</h2>
      <div className="home-values">
        {valueCards.map((value) => (
          <article className="home-value-card" key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const PortfolioSection = (): JSX.Element => (
  <section className="home-portfolio" id="portfolio">
    <h2 className="home-section-title">פרויקטים נבחרים</h2>
    <div className="home-portfolio-grid">
      {portfolioItems.map((item) => (
        <div className="home-portfolio-item" key={item}>
          {item}
        </div>
      ))}
    </div>
  </section>
);

export default HomePage;
