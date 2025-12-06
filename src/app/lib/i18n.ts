import type { Dictionary, Locale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
      he: "עברית",
      en: "English",
    },
    home: {
      heroTag: "Interior Design Studio",
      heroTitle: "Timeless interiors for modern living",
      heroBody:
        "We craft warm, functional spaces with a focus on materiality and light. From residential renovations to boutique commercial projects.",
      selectedProjectsTitle: "Selected Projects",
      selectedProjectsSubtitle: "A glimpse into recent work.",
      exploreAllProjects: "Explore all projects",
      servicesTitle: "Services",
      servicesSubtitle:
        "Full-service interior design from concept to installation.",
      servicesCards: [
        {
          title: "Residential",
          body: "Renovations, new builds, and furnishings.",
        },
        {
          title: "Commercial",
          body: "Boutiques, cafés, and creative studios.",
        },
        { title: "Styling", body: "Photo styling and real-estate staging." },
      ],
      testimonialsTitle: "Kind words",
      testimonialsSubtitle: "Testimonials from our clients.",
    },
    common: {
      bookConsultation: "Book a consultation",
      viewProjects: "View projects",
    },
    footer: {
      basedIn: "Based in Haifa, Israel · Available nationwide",
    },
    contact: {
      title: "Contact",
      subtitle: "Share your project—let's design something beautiful.",
      headerTitle: "Let's talk",
      nameLabel: "Full name",
      phoneLabel: "Phone",
      emailLabel: "Email",
      messageLabel: "Tell me a bit about the project",
      required: "*",
      nextStepsTitle: "What happens after you send?",
      phone: "Phone",
      whatsapp: "WhatsApp",
      whatsappLink: "Send a message",
      email: "Email",
      location: "Service area",
      locationValue: "Haifa, Krayot and the North",
      hours: "Available hours",
      hoursValue: "Sun–Thu, 9:00–17:00",
      socialTitle: "Follow us",
      social: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "LinkedIn",
      },
      form: {
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        phonePlaceholder: "Phone",
        messagePlaceholder: "Tell me about your project",
        submitIdle: "Send an inquiry",
        submitSubmitting: "Sending...",
        submitSuccess: "Sent!",
        errorGeneric: "Something went wrong",
        errorFailed: "Failed to send message",
        successTitle: "Message Sent!",
        successMessage:
          "Thank you for your inquiry. I'll get back to you as soon as possible to discuss your project.",
        sendAnother: "Send Another Message",
      },
    },
    services: {
      title: "Services",
      subtitle: "Tailored to your project scope and timeline across Israel.",
      cards: [
        {
          title: "Full-Service Interior Design",
          body: "End‑to‑end design for apartments, private homes, and boutique commercial spaces.",
          includes: [
            "Concept development and mood boards",
            "Space planning and technical drawings",
            "Material/finish schedules and lighting plans",
            "Custom cabinetry and millwork details",
            "Procurement, contractor coordination, and installation oversight",
          ],
          note: "Typical engagement: 3–8 months depending on scope.",
        },
        {
          title: "Furniture, Decor & Styling",
          body: "Room‑by‑room refreshes and complete furnishing packages tailored to your lifestyle.",
          includes: [
            "Furniture layouts and selections",
            "Textiles, rugs, and window treatments",
            "Art curation and accessories",
            "On‑site styling and installation",
          ],
          note: "Lead time varies by vendor availability.",
        },
        {
          title: "Design Consultations",
          body: "Targeted sessions for layout questions, finishes, or pre‑renovation planning.",
          includes: [
            "90–120 minute on‑site or virtual session",
            "Actionable recap with recommendations and sources",
            "Follow‑up support available on request",
          ],
          note: "Available across Israel.",
        },
      ],
      processTitle: "Our design process",
      processSubtitle:
        "A clear, collaborative path from first call to installation.",
      process: [
        {
          step: "01",
          title: "Discovery",
          body: "We learn about your space, goals, budget, and timeline; site visit as needed.",
        },
        {
          step: "02",
          title: "Concept",
          body: "Mood boards, plans, and initial palettes establish the design direction.",
        },
        {
          step: "03",
          title: "Design & Documents",
          body: "Detailed drawings, specs, and selections for contractors and vendors.",
        },
        {
          step: "04",
          title: "Procurement & Install",
          body: "Ordering, tracking, and white‑glove installation with site coordination.",
        },
      ],
      faqTitle: "FAQs",
      faqSubtitle: "Common questions about working together.",
      faqs: [
        {
          q: "Do you work outside Haifa?",
          a: "Yes. We serve clients across Israel. Travel fees may apply outside the Haifa metropolitan area.",
        },
        {
          q: "Can you work with my contractor?",
          a: "Absolutely. We collaborate with your team or introduce trusted partners as needed.",
        },
        {
          q: "What budgets do you work with?",
          a: "We tailor scopes for a range of budgets; transparency on costs and lead times is central to our process.",
        },
        {
          q: "Do you offer virtual services?",
          a: "Consultations and design reviews are available virtually when appropriate.",
        },
      ],
      ctaTitle: "Ready to start your project?",
      ctaBody: "Book an online consultation. We'll tailor a scope for you.",
    },
    projects: {
      title: "Projects",
      subtitle: "Explore our portfolio of completed projects.",
      viewProject: "View Project",
      backToProjects: "Back to Projects",
      projectOverview: "Project Overview",
      aboutThisProject: "About This Project",
      keyHighlights: "Key Highlights",
      designChallenges: "Design Challenges",
      projectDetails: "Project Details",
      completionDate: "Completion Date",
      size: "Size",
      timeline: "Timeline",
      budgetRange: "Budget Range",
      materialsUsed: "Materials Used",
      projectTeam: "Project Team",
      projectGallery: "Gallery",
      before: "Before",
      after: "After",
    },
    gallery: {
      pressEscToClose: "Press ESC to close",
    },
    notFound: {
      title: "Project not found",
      backToHome: "Back to Homepage",
      viewAllProjects: "View All Projects",
    },
  },
  he: {
    nav: {
      home: "דף הבית",
      about: "אודות",
      services: "מסלולים",
      projects: "פרויקטים",
      contact: "צור קשר",
      language: "שפה",
      he: "עברית",
      en: "English",
    },
    home: {
      heroTag: "סטודיו לעיצוב פנים",
      heroTitle: "עיצובים על‑זמניים לחיים מודרניים",
      heroBody:
        "אנחנו יוצרים חללים חמים ופונקציונליים עם דגש על חומריות ואור. משיפוצים למגורים ועד פרויקטים מסחריים בוטיק.",
      selectedProjectsTitle: "פרויקטים נבחרים",
      selectedProjectsSubtitle: "הצצה לעבודות אחרונות.",
      exploreAllProjects: "צפו בכל הפרויקטים",
      servicesTitle: "מסלולים",
      servicesSubtitle: "עיצוב פנים מקצה לקצה — מקונספט ועד התקנה.",
      servicesCards: [
        { title: "מגורים", body: "שיפוצים, בנייה חדשה והלבשת בתים." },
        { title: "מסחר", body: "בוטיקים, בתי קפה וסטודיואים יצירתיים." },
      ],
      testimonialsTitle: "מילים חמות",
      testimonialsSubtitle: "המלצות מלקוחות.",
    },
    common: {
      bookConsultation: "קבעו פגישת ייעוץ",
      viewProjects: "צפו בפרויקטים",
    },
    contact: {
      title: "צור קשר",
      subtitle: "ספרו לנו על הפרויקט — ניצור משהו יפהפה יחד.",
      headerTitle: "בואו נדבר",
      nameLabel: "שם מלא",
      phoneLabel: "טלפון",
      emailLabel: "אימייל",
      messageLabel: "ספרו לי קצת על הפרויקט",
      required: "*",
      nextStepsTitle: "מה קורה אחרי שתשלחו?",
      phone: "טלפון",
      whatsapp: "וואטסאפ",
      whatsappLink: "שלחו הודעה",
      email: "אימייל",
      location: "אזור פעילות",
      locationValue: "חיפה, קריות וצפון",
      hours: "שעות זמינות",
      hoursValue: "א'–ה', 9:00–17:00",
      socialTitle: "עקבו אחרינו",
      social: {
        instagram: "אינסטגרם",
        facebook: "פייסבוק",
        linkedin: "לינקדאין",
      },
      form: {
        namePlaceholder: "שם",
        emailPlaceholder: "אימייל",
        phonePlaceholder: "טלפון",
        messagePlaceholder: "ספרו לי קצת על הפרויקט",
        submitIdle: "שלחו פנייה",
        submitSubmitting: "שולחים...",
        submitSuccess: "נשלח!",
        errorGeneric: "משהו השתבש",
        errorFailed: "שליחת ההודעה נכשלה",
        successTitle: "ההודעה נשלחה!",
        successMessage:
          "תודה על הפנייה. אחזור אליכם בהקדם כדי לדון בפרויקט שלכם.",
        sendAnother: "שלחו הודעה נוספת",
      },
    },
    services: {
      title: "מסלולים",
      subtitle: "מותאמים להיקף וללוחות הזמנים של הפרויקט שלכם ברחבי ישראל.",
      cards: [
        {
          title: "עיצוב פנים מקצה לקצה",
          body: "עיצוב מלא לדירות, בתים פרטיים ומסחר בוטיק.",
          includes: [
            "פיתוח קונספט ולוחות השראה",
            "תכנון חללים ושרטוטים טכניים",
            "מפרטי חומרים וגמר ותכנון תאורה",
            "נגרות מותאמת אישית ותכנון נגרות",
            "רכש, תיאום קבלנים וליווי התקנה",
          ],
          note: "משך ממוצע: 3–8 חודשים בהתאם להיקף.",
        },
        {
          title: "ריהוט, הלבשה וסטיילינג",
          body: "רענון חללים לפי חדרים או חבילות ריהוט מלאות המותאמות לאורח החיים שלכם.",
          includes: [
            "תכנון פריסות ריהוט ובחירות",
            "טקסטיל, שטיחים והצללות",
            "אוצרות אמנות ואקססוריז",
            "סטיילינג והתקנה באתר",
          ],
          note: "זמני אספקה משתנים לפי ספקים.",
        },
        {
          title: "ייעוצי עיצוב",
          body: "פגישות ממוקדות לשאלות תכנון, גמרים או הכנה לשיפוץ.",
          includes: [
            "90–120 דקות בפגישה פרונטלית או וירטואלית",
            "סיכום פעיל עם המלצות ומקורות",
            "אפשרות לליווי המשך לפי צורך",
          ],
          note: "זמין ברחבי ישראל.",
        },
      ],
      processTitle: "תהליך העבודה שלנו",
      processSubtitle: "דרך ברורה ומשותפת מהשיחה הראשונה ועד ההתקנה.",
      process: [
        {
          step: "01",
          title: "היכרות",
          body: "נלמד על החלל, המטרות, התקציב ולוחות הזמנים; ונבצע ביקור באתר לפי הצורך.",
        },
        {
          step: "02",
          title: "קונספט",
          body: "לוחות השראה, תוכניות ופלטות ראשוניות לקביעת כיוון העיצוב.",
        },
        {
          step: "03",
          title: "תכנון ומסמכים",
          body: "שרטוטים מפורטים, מפרטים ובחירות לקבלנים ולספקים.",
        },
        {
          step: "04",
          title: "רכש והתקנה",
          body: "הזמנות, מעקב והתקנה מוקפדת בתיאום באתר.",
        },
      ],
      faqTitle: "שאלות נפוצות",
      faqSubtitle: "תשובות מהירות בנוגע לעבודתנו המשותפת.",
      faqs: [
        {
          q: "האם אתם עובדים מחוץ לחיפה?",
          a: "כן. אנו משרתים לקוחות ברחבי הארץ. ייתכנו עלויות נסיעה מחוץ למטרופולין חיפה.",
        },
        {
          q: "האם ניתן לעבוד עם הקבלן שלי?",
          a: "בהחלט. נשתף פעולה עם הצוות שלכם או נמליץ על שותפים אמינים.",
        },
        {
          q: "עם אילו תקציבים אתם עובדים?",
          a: "אנו מתאימים את ההיקף למגוון תקציבים; שקיפות בעלויות ובזמני אספקה היא עיקרון מרכזי.",
        },
        {
          q: "האם יש שירותים וירטואליים?",
          a: "ייעוצים וביקורות תכנון זמינים גם מרחוק כשמתאים.",
        },
      ],
      ctaTitle: "מוכנים להתחיל את הפרויקט?",
      ctaBody: "קבעו ייעוץ אונליין. נתאים עבורכם היקף מדויק.",
    },
    projects: {
      title: "פרויקטים",
      subtitle: "גלו את תיק העבודות שלנו.",
      viewProject: "צפו בפרויקט",
      backToProjects: "חזרה לפרויקטים",
      projectOverview: "סקירת הפרויקט",
      aboutThisProject: "אודות הפרויקט",
      keyHighlights: "נקודות מפתח",
      designChallenges: "אתגרי עיצוב",
      projectDetails: "פרטי הפרויקט",
      completionDate: "תאריך סיום",
      size: "גודל",
      timeline: "לוח זמנים",
      budgetRange: "טווח תקציב",
      materialsUsed: "חומרים שנעשה בהם שימוש",
      projectTeam: "צוות הפרויקט",
      projectGallery: "גלרייה",
      before: "לפני",
      after: "אחרי",
    },
    gallery: {
      pressEscToClose: "לחצו ESC לסגירה",
    },
    notFound: {
      title: "הפרויקט לא נמצא",
      backToHome: "חזרה לדף הבית",
      viewAllProjects: "צפו בכל הפרויקטים",
    },
  },
};

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "he" ? "rtl" : "ltr";
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getSafeLocale(input?: string | null): Locale {
  return input === "en" ? "en" : "he";
}

export function getByPath(dict: Dictionary, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (
      acc &&
      typeof acc === "object" &&
      key in (acc as Record<string, unknown>)
    ) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, dict);
}
