import Image from "next/image";
import type { JSX } from "react";
import { Hero } from "../components/Hero";
import { CTA } from "../components/CTA";

export const metadata = { title: "Services" };

const introText =
  "כל פרויקט מתחיל בהקשבה - להבין מי אתם, איך אתם חיים, ומה חשוב לכם. לכן אני מציעה מגוון שירותים שמתאימים לצרכים שונים, מפגישת ייעוץ בודדת ועד ליווי מלא של כל תהליך השיפוץ והעיצוב.";

const services = [
  {
    title: "ייעוץ נקודתי בבית הלקוח",
    subtitle: "פגישה חד-פעמית להתנעת תהליך או פתרון ממוקד",
    description:
      "תהליך קצר ומדויק המאפשר לקבל החלטות עיצוביות בטוחות. מתאים לרענון חלל קיים או כמענה לשאלות מקצועיות לפני קנייה, שינוי או שיפוץ קטן.",
    features: [
      "פגישת ייעוץ בבית (כשעתיים–שלוש)",
      "ניתוח צרכים והגדרת סגנון",
      "כיווני צבע, חומרים, תאורה ופריסה",
      "רעיונות לשדרוג מהיר בתקציב מגוון",
      "סיכום מפגש מסודר עם המלצות ולינקים",
    ],
  },
  {
    title: "עיצוב חדר בודד",
    subtitle: "פוקוס על חלל אחד שמקבל תשומת לב מלאה",
    description:
      "תכנון ועיצוב של חדר יחיד - חדר שינה, סלון, מטבח, חדר ילדים או כל חלל שזקוק לשידרוג.",
    features: [
      "תכנון מפורט של החלל",
      "בחירת צבעים וחומרים",
      "תוכנית ריהוט ופריסה",
      "המלצות לרכישת פריטים",
      "ליווי עד להשלמת החדר",
    ],
  },
  {
    title: "שיפוץ חלקי / אזור מוגדר בבית",
    subtitle: "שדרוג משמעותי ללא שיפוץ כולל",
    description:
      "תכנון ועיצוב לחלל מרכזי או אזור מסוים בבית — מטבח, סלון, יחידת הורים, אמבטיה או כל מרחב שזקוק לרענון או חידוש.",
    features: [
      "פגישת אפיון בבית",
      "תוכנית פריסה וסקיצות עיצוב",
      "המלצות לחומרים, חיפויים ונגרות",
      "ליווי בבחירת רהיטים ותאורה",
      "ביקורי שטח ופיקוח נקודתי",
      "תמיכה עד לסיום העבודה",
    ],
  },
  {
    title: "ליווי מלא לשיפוץ או בנייה",
    subtitle: "תהליך כולל – משלב הרעיון ועד הכניסה לבית",
    description:
      "מסלול מקיף ומעמיק הכולל תכנון מלא, הדמיות מפורטות, ליווי קבלנים ופיקוח מקצועי עד רגע המסירה. מתאים לדירות חדשות, בתים פרטיים ושיפוץ גדול.",
    features: [
      "תכנון אדריכלי מלא",
      "תוכניות חשמל, תאורה, אינסטלציה ונגרות",
      "הדמיות תלת־ממד מפורטות",
      "תכנון חומרים, ריצופים וגמרים",
      "ליווי בבחירת כל רכישות הבית",
      "פיקוח בשטח ותיאום בעלי מקצוע",
      "ליווי עד מסירה מושלמת",
    ],
  },
  {
    title: "עיצוב לעסקים",
    subtitle: "חללים שמספרים סיפור מותג ומעצימים חוויית לקוח",
    description:
      "תכנון פנימי מלא לעסקים: חנויות, קליניקות, משרדים ומרחבי עבודה. שילוב בין פונקציונליות לויזואליות מדויקת לפי ערכי המותג.",
    features: [
      "אפיון מותג וצרכי העסק",
      "תכנון פריסת חללים ואזורי עבודה",
      "בחירת חומרים, צבעים ותאורה עסקית",
      "עיצוב ריהוט ואלמנטים גרפיים",
      "ליווי רכישות ושדרוג חוויית הלקוח",
      "ליווי ופיקוח על בעלי מקצוע",
    ],
  },
] as const;

const processSteps = [
  {
    number: "1",
    title: "פגישת היכרות",
    text: "נפגש, נדבר על החזון, הצרכים והחלומות שלכם.",
    icon: "/meeting.png",
  },
  {
    number: "2",
    title: "תכנון והצעה",
    text: "אכין עבורכם הצעה מפורטת עם קונספט ראשוני.",
    icon: "/planning.png",
  },
  {
    number: "3",
    title: "עיצוב ופיתוח",
    text: "נעבוד יחד על הפיתוח המלא של העיצוב.",
    icon: "/sketches.png",
  },
  {
    number: "4",
    title: "ביצוע והשלמה",
    text: "אלווה אתכם עד לרגע שהמפתח מסתובב בדלת.",
    icon: "/finish.png",
  },
] as const;

const faqItems = [
  {
    question: "כמה זמן לוקח פרויקט עיצוב?",
    answer:
      "משך הפרויקט תלוי בהיקפו - ייעוץ בודד יכול להתבצע תוך שבוע, בעוד שיפוץ מלא יכול לקחת 3-6 חודשים. בפגישת ההיכרות נוכל לקבוע לוח זמנים מדויק.",
  },
  {
    question: "איך מחושב התמחור?",
    answer:
      "כל פרויקט הוא ייחודי, והתמחור תלוי בהיקפו, המורכבות והשירותים שנכללים בו. לאחר פגישת ההיכרות אני מכינה הצעת מחיר מפורטת ושקופה.",
  },
  {
    question: "האם יש צורך בשיפוץ מלא?",
    answer:
      "בכלל לא! יש הרבה דרכים לשפר ולשדרג חלל גם בלי שיפוץ - דרך הום סטיילינג, החלפת אלמנטים בודדים, או עיצוב חכם של החלל הקיים.",
  },
  {
    question: "האם את עובדת עם קבלנים שלי?",
    answer:
      "בהחלט! אני יכולה לעבוד עם הקבלנים והספקים שלכם, או לחלופין להמליץ על אנשי מקצוע מוכחים שאני עובדת איתם בקביעות.",
  },
] as const;

const ServicesPage = (): JSX.Element => (
  <div className="leading-[1.8]" dir="rtl" lang="he">
    <Hero
      text="מייעוץ ראשוני ועד ליווי מלא - אני כאן כדי להפוך את החלל שלכם לבית"
      title="השירותים שלי"
    />
    <IntroSection />
    <ServicesSection />
    <ProcessSection />
    <FaqSection />
    <CTA />
  </div>
);

const IntroSection = (): JSX.Element => (
  <section className="mx-auto my-20 max-w-[900px] px-[5%] text-center">
    <p className="text-text-secondary text-base leading-[2]">{introText}</p>
  </section>
);

/**
 * Renders a single service card.
 */
const ServiceCard = ({
  service,
  className = "",
}: {
  service: (typeof services)[number];
  className?: string;
}): JSX.Element => (
  <article
    className={`hover:border-r-accent bg-muted/20 hover:bg-muted/40 border-r-4 border-r-transparent p-12 shadow-[0_5px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] ${className}`}
  >
    <h3 className="text-text-primary mb-4 text-[1.8rem] font-normal tracking-[1px]">
      {service.title}
    </h3>
    <p className="text-accent mb-6 text-[1.1rem] italic">{service.subtitle}</p>
    <p className="text-text-secondary mb-6 text-base leading-[2]">
      {service.description}
    </p>
    <ul className="mt-6 list-none p-0">
      {service.features.map((feature) => (
        <li
          className="border-bg-light text-text-secondary relative border-b py-[0.7rem] text-base last:border-b-0"
          key={feature}
        >
          <span className="text-accent ml-2 font-bold">✓</span>
          {feature}
        </li>
      ))}
    </ul>
  </article>
);

/**
 * Services section with all cards in a responsive grid.
 */
const ServicesSection = (): JSX.Element => (
  <section className="mx-auto my-24 max-w-[1800px] px-[5%]">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 xl:grid-cols-3 xl:gap-12">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  </section>
);

const ProcessSection = (): JSX.Element => (
  <section className="from-bg-light to-muted my-24 bg-gradient-to-b px-[5%] py-24 text-center">
    <h2 className="text-text-primary mb-16 text-[clamp(2rem,4vw,2.5rem)] font-light tracking-[2px]">
      איך אנחנו עובדים יחד?
    </h2>
    <div className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
      {processSteps.map((step) => (
        <article
          className="relative bg-white p-8 pb-10 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
          key={step.number}
        >
          <div className="from-bg-lighter to-bg-light mx-auto mb-6 flex h-[120px] w-[120px] items-center justify-center rounded-[30px] bg-gradient-to-br shadow-[inset_0_1px_8px_rgba(255,255,255,0.6)]">
            <Image
              alt={step.title}
              className="h-auto w-[80%]"
              height={96}
              src={step.icon}
              width={96}
            />
          </div>
          <div className="bg-accent mx-auto mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-full text-xl font-semibold text-white shadow-[0_8px_20px_rgba(191,163,149,0.4)]">
            {step.number}
          </div>
          <h4 className="text-text-primary mb-4 text-[1.3rem] font-normal">
            {step.title}
          </h4>
          <p className="text-text-secondary text-base leading-[2]">
            {step.text}
          </p>
        </article>
      ))}
    </div>
  </section>
);

const FaqSection = (): JSX.Element => (
  <section className="mx-auto my-24 max-w-[900px] px-[5%]">
    <h2 className="text-text-primary mb-12 text-center text-[clamp(2rem,4vw,2.5rem)] font-light tracking-[2px]">
      שאלות נפוצות
    </h2>
    {faqItems.map((item) => (
      <article
        className="mb-6 bg-white p-8 shadow-[0_3px_15px_rgba(0,0,0,0.05)]"
        key={item.question}
      >
        <h4 className="text-accent mb-4 text-[1.3rem] font-medium">
          {item.question}
        </h4>
        <p className="text-text-secondary text-base leading-[2]">
          {item.answer}
        </p>
      </article>
    ))}
  </section>
);

export default ServicesPage;
