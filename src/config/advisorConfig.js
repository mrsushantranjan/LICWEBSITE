/**
 * Central Configuration for LIC Insurance Advisor Website
 * Advisor: SUDIP KUMAR PATHAK (GUDDU BABA)
 * 
 * Separate configurable objects for:
 * 1. Advisor details
 * 2. Contact information
 * 3. Hero content & rotating headlines
 * 4. Insurance categories
 * 5. Life-stage categories
 * 6. Journey process steps
 * 7. Insurance awareness & financial protection
 * 8. Blog / Knowledge articles
 * 9. Office location & maps
 * 10. Social & communication links
 * 11. SEO & legal compliance
 */

import advisorPortrait from '../assets/images/advisor-sudip-pathak.jpg';
import heroFamily from '../assets/images/hero-family.jpg';

export const advisorConfig = {
  // 1. Advisor Identity Details
  advisor: {
    fullName: "SUDIP KUMAR PATHAK",
    popularName: "GUDDU BABA",
    profession: "LIC Insurance Advisor",
    organization: "Life Insurance Corporation of India (LIC)",
    badgeText: "Independent LIC Insurance Advisor",
    portraitImage: advisorPortrait,
    heroFamilyImage: heroFamily,
    welcomeHeading: "A Message from Sudip Kumar Pathak",
    welcomeMessage: "Welcome. Choosing a life insurance plan is one of the most thoughtful decisions you will ever make for the people you love. My purpose as your LIC advisor is to replace confusion and marketing jargon with honest, transparent guidance tailored specifically to your family's budget, liabilities, and aspirations. Whether you are stepping into your first job, starting a family, or planning for your golden retirement years, I am committed to supporting you with integrity.",
    bio: "Dedicated to helping individuals and families understand life insurance and choose suitable financial protection solutions through LIC."
  },

  // 2. Contact Information
  contact: {
    phone: "9801764651",
    displayPhone: "+91 98017 64651",
    rawPhone: "+919801764651",
    whatsAppNumber: "919801764651",
    email: "sudip.licadvisor@gmail.com",
    serviceHours: "Mon – Sun: 8:00 AM – 9:00 PM",
    supportNote: "Direct phone and WhatsApp support for policy queries, renewal reminders, and documentation."
  },

  // 3. Hero Content & Rotating Headlines
  hero: {
    tagline: "Dedicated to Family Financial Security & Future Planning",
    mainHeadingStart: "Secure Your Family's Future with the",
    rotatingKeywords: [
      "Protect Your Family.",
      "Secure Your Children's Future.",
      "Plan Your Retirement.",
      "Build Long-Term Financial Security.",
      "Get the Right Insurance Guidance."
    ],
    description: "Your family's financial security deserves the right guidance. Get personalized LIC insurance guidance from Sudip Kumar Pathak (Guddu Baba).",
    consultationCtaText: "Schedule a Consultation",
    consultationWhatsAppMsg: "Hello Guddu Baba, I would like to schedule a consultation regarding LIC insurance planning. Please guide me.",
    ctaKeywords: [
      "Secure Your Future",
      "Protect Your Family",
      "Plan Your Child's Future",
      "Start Your Retirement Planning"
    ]
  },

  // 4. WhatsApp Messages (Centralized Templates)
  whatsAppMessages: {
    default: "Hello Guddu Baba, I visited your website and would like to know more about LIC insurance plans. Please guide me.",
    consultation: "Hello Guddu Baba, I would like to schedule a consultation regarding LIC insurance planning. Please guide me.",
    termInsurance: "Hello Sudip Kumar Pathak Ji, I am interested in LIC term insurance plans. Please share the details.",
    endowmentPlans: "Hello Guddu Baba, I would like to learn more about LIC Endowment Plans for savings and security. Please provide guidance.",
    wholeLife: "Hello Sudip Kumar Pathak Ji, I am looking for information on LIC Whole Life Insurance plans. Please assist me.",
    moneyBack: "Hello Guddu Baba, I am interested in LIC Money Back Plans with periodic payouts. Please share suitable options.",
    childrenPlanning: "Hello Guddu Baba, I want to plan my child's financial future through LIC. Please guide me.",
    retirementPlanning: "Hello Guddu Baba, I am interested in retirement and pension planning. Please contact me.",
    ulipPlans: "Hello Sudip Kumar Pathak Ji, I would like to know about LIC Unit Linked Insurance Plans (ULIP). Please provide details.",
    savingsProtection: "Hello Guddu Baba, I want to explore LIC Savings and Protection Plans for my family. Please guide me.",
    policyAssistance: "Hello Guddu Baba, I need some assistance with my existing LIC policy. Please guide me."
  },

  // 5. Button Text Config
  buttons: {
    callNow: "Call Now",
    callAdvisor: "Call Advisor",
    whatsAppNow: "WhatsApp Now",
    chatOnWhatsApp: "Chat on WhatsApp",
    enquireWhatsApp: "Enquire on WhatsApp",
    explorePlans: "Explore Insurance Plans",
    contactAdvisor: "Contact Advisor",
    scheduleConsultation: "Schedule a Consultation",
    sendEnquiry: "Send Enquiry on WhatsApp",
    readArticle: "Read Article",
    askAboutTopic: "Discuss on WhatsApp"
  },

  // 6. Insurance Awareness & Why Financial Protection Matters
  awareness: {
    badge: "Insurance Literacy",
    heading: "Why Financial Protection Matters For Every Family",
    subheading: "Life insurance is not merely an investment; it is the financial shield that ensures your family's dignity and standard of living remain unshaken when life takes unexpected turns.",
    pillars: [
      {
        id: "income-replacement",
        title: "Guaranteed Income Replacement",
        description: "Replaces the earning member's economic contribution so monthly household expenses, rent, and utility bills continue without distress."
      },
      {
        id: "debt-shield",
        title: "Debt & Liability Shield",
        description: "Prevents personal loans, business borrowings, or home loan burdens from falling onto your grieving spouse or dependent children."
      },
      {
        id: "goal-preservation",
        title: "Preserving Life Goals",
        description: "Guarantees that your children's dream college degrees and marriage milestones are funded regardless of life's contingencies."
      },
      {
        id: "sovereign-assurance",
        title: "Sovereign Trust of LIC",
        description: "Backed by the sovereign guarantee of the Government of India under Section 37 of the LIC Act, ensuring unshakeable claim security."
      }
    ]
  },

  // 7. Insurance Planning by Life Stage ("Insurance Planning for Every Stage of Life")
  lifeStages: [
    {
      id: "young-professionals",
      title: "Young Professionals",
      tagline: "Financial protection and early insurance planning",
      ageRange: "Age 21 – 30",
      description: "Starting your career is the single best time to buy life insurance. Premiums are at their lifetime lowest, and disciplined early habits build massive long-term security.",
      benefits: [
        "Lowest premium rates locked in for life",
        "Disciplined savings habit early in career",
        "Tax deductions under Section 80C",
        "Early shield before family responsibilities multiply"
      ],
      recommendedTypes: ["High-Cover Pure Term Insurance", "Endowment Savings Plans"],
      whatsAppMessage: "Hello Guddu Baba, I am a young professional looking for early life insurance and financial planning guidance through LIC. Please assist me."
    },
    {
      id: "married-couples",
      title: "Married Couples",
      tagline: "Family protection and financial responsibilities",
      ageRange: "Age 26 – 40",
      description: "Marriage brings shared aspirations and shared liabilities like home loans and household setups. Dual-income or single-earner, your spouse's lifestyle must remain safeguarded.",
      benefits: [
        "Income replacement for spouse security",
        "Home loan and personal liability protection",
        "Combined savings for joint wealth creation",
        "Health and critical illness riders"
      ],
      recommendedTypes: ["Term Insurance with High Sum Assured", "Money Back Plans"],
      whatsAppMessage: "Hello Guddu Baba, my spouse and I are planning our family financial protection through LIC. Please provide suitable guidance."
    },
    {
      id: "parents",
      title: "Parents",
      tagline: "Children's future and education planning",
      ageRange: "For Growing Families",
      description: "Children depend entirely on you. A well-chosen children's policy ensures education and marriage funding even if you are no longer around, via Premium Waiver benefits.",
      benefits: [
        "Guaranteed funds for higher education & coaching",
        "Premium Waiver Benefit rider (LIC pays future premiums if parent passes away)",
        "Milestone-linked payouts at crucial ages (18, 21, 24)",
        "Protection of child's aspirations against all odds"
      ],
      recommendedTypes: ["Children's Education & Marriage Plans", "Guaranteed Endowment"],
      whatsAppMessage: "Hello Guddu Baba, I want to plan my child's future education and financial security through LIC. Please guide me."
    },
    {
      id: "senior-citizens",
      title: "Senior Citizens",
      tagline: "Retirement and pension-related planning",
      ageRange: "Golden Years & Pre-Retirement",
      description: "Enjoy your golden years with self-respect and steady income. LIC annuity plans provide guaranteed lifelong monthly pension without stock market volatility.",
      benefits: [
        "Guaranteed monthly or quarterly lifelong pension",
        "Joint-life annuity option covering spouse",
        "Return of purchase price option for legal heirs",
        "Financial independence with zero market risk"
      ],
      recommendedTypes: ["Immediate & Deferred Annuity Plans", "Pension Solutions"],
      whatsAppMessage: "Hello Guddu Baba, I am interested in retirement and pension planning solutions from LIC. Please contact me."
    }
  ],

  // 8. Customer Trust Section ("Your Insurance Journey, Our Guidance")
  processSteps: [
    {
      stepNumber: "01",
      title: "Understand Your Needs",
      subtitle: "Personal Discovery",
      description: "We discuss your family size, current income, existing liabilities, and long-term milestones to calculate your ideal Human Life Value (HLV)."
    },
    {
      stepNumber: "02",
      title: "Explore Suitable LIC Plans",
      subtitle: "Unbiased Comparison",
      description: "We review suitable official LIC plans—explaining term, endowment, pension, or child future options in plain, simple language."
    },
    {
      stepNumber: "03",
      title: "Understand Policy Benefits & Conditions",
      subtitle: "Full Transparency",
      description: "Every clause, premium paying term, lock-in period, bonus history, and rider option is clearly explained with no hidden surprises."
    },
    {
      stepNumber: "04",
      title: "Complete the Application Process",
      subtitle: "Hassle-Free Processing",
      description: "We assist with KYC documentation, form filling, medical schedule coordination (if required), and prompt proposal clearance."
    },
    {
      stepNumber: "05",
      title: "Assistance with Policy Queries",
      subtitle: "Lifelong Relationship",
      description: "Continuous service support for premium receipts, address updates, nominee additions, policy revival, and dedicated claim facilitation."
    }
  ],

  // 9. Insurance Plans Portfolio (8 Categories)
  insurancePlans: [
    {
      id: "term-insurance",
      title: "Term Insurance",
      category: "Protection",
      badge: "High Life Cover",
      description: "High-value pure financial protection at affordable premiums to secure your loved ones against unforeseen contingencies.",
      keyFeatures: ["Comprehensive pure risk cover", "Affordable premium rates", "Tax benefits under Sec 80C"],
      whatsAppKey: "termInsurance"
    },
    {
      id: "endowment-plans",
      title: "Endowment Plans",
      category: "Savings",
      badge: "Guaranteed Savings",
      description: "Balanced plans that offer the dual benefit of life protection coupled with systematic savings and declared bonuses upon maturity.",
      keyFeatures: ["Protection + disciplined savings", "Lump sum on maturity with bonuses", "Loan facility available"],
      whatsAppKey: "endowmentPlans"
    },
    {
      id: "whole-life-insurance",
      title: "Whole Life Insurance",
      category: "Protection",
      badge: "Lifelong Security",
      description: "Lifelong financial safety covering you up to age 100, building an enduring financial legacy for future generations.",
      keyFeatures: ["Coverage up to 100 years of age", "Inheritance and legacy creation", "Maturity benefit at age 100"],
      whatsAppKey: "wholeLife"
    },
    {
      id: "money-back-plans",
      title: "Money Back Plans",
      category: "Savings",
      badge: "Periodic Payouts",
      description: "Liquidity at regular intervals to meet planned milestone expenses, alongside full life protection throughout the term.",
      keyFeatures: ["Periodic survival benefits", "Full sum assured on death irrespective of payouts", "Guaranteed liquidity"],
      whatsAppKey: "moneyBack"
    },
    {
      id: "children-future",
      title: "Children's Future Planning",
      category: "Children",
      badge: "Education & Dreams",
      description: "Structured plans designed to fund your child's higher education, professional degrees, and marriage milestones without compromise.",
      keyFeatures: ["Timely payouts for higher education", "Premium waiver benefit rider support", "Child's dreams stay protected"],
      whatsAppKey: "childrenPlanning"
    },
    {
      id: "retirement-pension",
      title: "Retirement and Pension Planning",
      category: "Retirement",
      badge: "Lifelong Pension",
      description: "Build a reliable retirement corpus that translates into a lifelong, guaranteed monthly income for dignified golden years.",
      keyFeatures: ["Guaranteed regular annuity/pension", "Choice of single or joint life annuity", "Inflation-hedged peace of mind"],
      whatsAppKey: "retirementPlanning"
    },
    {
      id: "ulip-plans",
      title: "ULIP Plans",
      category: "Investment",
      badge: "Market-Linked Growth",
      description: "Unit-linked insurance solutions combining market growth opportunities across diverse funds with built-in life insurance protection.",
      keyFeatures: ["Equity & debt fund options", "Fund switching flexibility", "Life cover + wealth accumulation"],
      whatsAppKey: "ulipPlans"
    },
    {
      id: "savings-protection",
      title: "Savings and Protection Plans",
      category: "Savings",
      badge: "Family Security",
      description: "Holistic financial security plans engineered to grow your hard-earned wealth while keeping family safety paramount.",
      keyFeatures: ["Capital protection", "Guaranteed additions & bonuses", "Flexible premium paying terms"],
      whatsAppKey: "savingsProtection"
    }
  ],

  // 10. Insurance Knowledge and Awareness Blog (8 Articles)
  blogPosts: [
    {
      id: "what-is-life-insurance",
      title: "What is Life Insurance?",
      category: "Insurance Fundamentals",
      readTime: "3 min read",
      summary: "A simple, non-technical explanation of how life insurance contracts function and what every policyholder should know.",
      content: "Life insurance is a legally binding contract between an individual and an insurer (such as LIC). In exchange for regular premium payments, the insurer guarantees to pay a specified lump sum (the Sum Assured) to designated beneficiaries in the event of the insured person's untimely demise. Certain plans also offer maturity payouts with declared bonuses if the policyholder survives the term.",
      keyTakeaways: [
        "Contract between policyholder and insurer",
        "Replaces lost income for dependents upon death",
        "Can offer savings/maturity payouts depending on the plan type",
        "Regulated by IRDAI under Indian law"
      ],
      whatsAppPrompt: "Hello Guddu Baba, I was reading your article 'What is Life Insurance?' and would like to ask a question:"
    },
    {
      id: "why-life-insurance-important",
      title: "Why is Life Insurance Important?",
      category: "Financial Planning",
      readTime: "4 min read",
      summary: "Examining the role of life insurance in safeguarding household stability, settling home loans, and funding children's aspirations.",
      content: "No family expects misfortune, but responsible financial management prepares for it. Life insurance ensures that debts like home loans, car loans, and credit balances do not force your family to sell their home. Furthermore, it guarantees that children's schooling, higher education, and marriage dreams continue uninterrupted even in the breadwinner's absence.",
      keyTakeaways: [
        "Prevents home distress sales and debt defaults",
        "Provides immediate liquidity to dependents",
        "Safeguards long-term family aspirations",
        "Provides profound psychological peace of mind"
      ],
      whatsAppPrompt: "Hello Guddu Baba, I would like to evaluate why and how much life insurance my family needs:"
    },
    {
      id: "term-vs-endowment",
      title: "Difference Between Term Insurance and Endowment Plans",
      category: "Policy Comparison",
      readTime: "5 min read",
      summary: "Comparing pure risk term protection with traditional endowment savings plans to help you choose the right balance.",
      content: "Term Insurance is pure protection: you pay a modest premium for very high coverage (e.g., ₹1 Crore cover for a small annual cost). If death occurs during the term, the nominee receives the sum assured; there is generally no maturity payout if you survive. In contrast, Endowment Plans combine life cover with disciplined savings, paying bonuses and a maturity sum at the end of the term. Many families choose term plans for high risk cover and endowment plans for milestone savings.",
      keyTakeaways: [
        "Term Insurance = High cover at low premium, pure risk protection",
        "Endowment Plans = Life cover + guaranteed savings & bonus at maturity",
        "Term is ideal for primary income replacement",
        "Endowment is ideal for disciplined wealth accumulation"
      ],
      whatsAppPrompt: "Hello Guddu Baba, could you help me compare LIC term insurance and endowment plans for my budget?"
    },
    {
      id: "how-to-choose-policy",
      title: "How to Choose an Insurance Policy",
      category: "Buyer Guide",
      readTime: "4 min read",
      summary: "Step-by-step framework to evaluate your age, family dependents, debt liabilities, and financial timeline.",
      content: "Choosing the right policy starts with calculating your Human Life Value (HLV)—typically 10 to 15 times your annual income. Next, consider your life stage: young singles should lock in term covers early; parents should combine term cover with education-linked endowment plans; and those near retirement should prioritize guaranteed annuity/pension solutions.",
      keyTakeaways: [
        "Calculate coverage as 10-15x annual income",
        "Add existing debts (home/personal loans) to required sum assured",
        "Match policy term with retirement or children's independence age",
        "Always review premium paying capacity to prevent policy lapse"
      ],
      whatsAppPrompt: "Hello Guddu Baba, I need help choosing the most suitable LIC policy for my current age and income:"
    },
    {
      id: "understanding-premiums",
      title: "Understanding Premium Payments",
      category: "Policy Management",
      readTime: "3 min read",
      summary: "A guide to payment modes (yearly, monthly, ECS), grace periods, and how to prevent costly policy lapses.",
      content: "LIC offers multiple premium payment frequencies: Yearly, Half-Yearly, Quarterly, and Monthly (NACH/ECS). Every policyholder is granted a grace period (typically 30 days for yearly/half-yearly, 15 days for monthly) to pay after the due date without penalty. Keeping contact details updated ensures you receive official premium reminders via SMS and email.",
      keyTakeaways: [
        "Modes: Yearly, Half-Yearly, Quarterly, and Monthly NACH",
        "Grace period protects your cover for 15-30 days post due date",
        "Revival options exist for lapsed policies within prescribed timelines",
        "Online payments can be made directly on the official LIC portal"
      ],
      whatsAppPrompt: "Hello Guddu Baba, I have a query regarding LIC premium payments or policy revival:"
    },
    {
      id: "early-financial-planning",
      title: "Importance of Early Financial Planning",
      category: "Wealth Building",
      readTime: "4 min read",
      summary: "Why purchasing life insurance in your 20s or early 30s locks in the lowest premiums and compounding advantage.",
      content: "Mortality risk is lowest when you are young and healthy. An individual taking a 25-year policy at age 25 pays significantly less premium than someone buying the same cover at age 40. Furthermore, early savings give compounding bonuses over decades to build substantial wealth for milestone expenses.",
      keyTakeaways: [
        "Premiums remain locked at younger, cheaper entry rates",
        "Medical check-up requirements are minimal for young buyers",
        "Compounding bonuses multiply over longer policy terms",
        "Builds strong financial discipline from your first salary"
      ],
      whatsAppPrompt: "Hello Guddu Baba, I want to start early financial planning through LIC. Please guide me:"
    },
    {
      id: "common-mistakes-insurance",
      title: "Common Mistakes When Purchasing Insurance",
      category: "Advisory Insights",
      readTime: "4 min read",
      summary: "Avoid under-insuring, hiding medical history, ignoring nominee details, or treating insurance solely as tax deduction.",
      content: "The most common mistake is treating insurance purely as an 80C tax-saving exercise at the end of March, leading to under-insurance. Another critical error is failing to disclose pre-existing medical conditions or smoking habits, which can cause claim disputes. Always ensure full disclosure and keep nominee details updated.",
      keyTakeaways: [
        "Never buy merely for tax savings—ensure adequate life cover first",
        "Always disclose complete health history honestly",
        "Keep nominee details updated (name, relationship, bank info)",
        "Review your coverage whenever life changes (marriage, child birth)"
      ],
      whatsAppPrompt: "Hello Guddu Baba, can you review my existing policies to check if I have adequate cover?"
    },
    {
      id: "understanding-nominees",
      title: "Understanding Nominees in Life Insurance",
      category: "Legal & Claims",
      readTime: "4 min read",
      summary: "The critical role of nominees, Beneficial Nominee laws under the Insurance Act, and smooth claim settlement.",
      content: "Under Section 39 of the Insurance Act (amended 2015), when you nominate immediate family members (spouse, children, or parents), they become 'Beneficial Nominees'. This gives them absolute rights to the claim proceeds without disputes from other legal heirs. You can update or change nominees anytime during the policy term.",
      keyTakeaways: [
        "Immediate family nominees (spouse, parents, children) are Beneficial Nominees",
        "Protects claim money from disputes among other legal heirs",
        "Nomination can be updated at any time at your servicing branch",
        "Ensure nominee contact details and KYC are readily available"
      ],
      whatsAppPrompt: "Hello Guddu Baba, I have a question about updating or checking nominee details in an LIC policy:"
    }
  ],

  // 11. Why Choose LIC Section
  whyChooseLic: [
    {
      id: "heritage",
      title: "Long-Standing Insurance Institution",
      description: "Founded in 1956, LIC carries an unblemished legacy of over 6 decades protecting countless Indian households with sovereign assurance."
    },
    {
      id: "range",
      title: "Wide Range of Life Insurance Solutions",
      description: "From low-cost pure term covers to pension, children's future, and endowment policies tailored to every life stage and income level."
    },
    {
      id: "protection",
      title: "Financial Protection & Long-Term Planning",
      description: "Disciplined wealth creation, tax efficiency under prevailing laws, and strong financial safety net against life's uncertainties."
    },
    {
      id: "personalized",
      title: "Personalized Policy Guidance",
      description: "Direct, one-on-one consultation with Sudip Kumar Pathak (Guddu Baba) ensuring you only invest in plans suited to your family needs."
    },
    {
      id: "support",
      title: "Support Throughout the Insurance Journey",
      description: "Continuous assistance from plan selection and documentation to premium servicing and claim settlement support."
    }
  ],

  // 12. Frequently Asked Questions
  faqs: [
    {
      question: "Why should I purchase life insurance?",
      answer: "Life insurance serves as the bedrock of your family's financial security. In the event of an unfortunate contingency, it replaces lost income, settles outstanding liabilities, and ensures your family continues to live with dignity and peace of mind without financial hardship."
    },
    {
      question: "Which LIC plan is suitable for me?",
      answer: "The ideal plan depends entirely on your current age, dependents, financial goals, time horizon, and budget. For maximum life cover at low cost, pure term insurance is recommended; for education and marriage milestones, children's or money back plans work best; for retirement, pension solutions are ideal. Contact Sudip Kumar Pathak (Guddu Baba) for a customized consultation."
    },
    {
      question: "How can I calculate my insurance requirements?",
      answer: "A widely accepted thumb rule is Human Life Value (HLV), which suggests a cover of at least 10 to 15 times your annual income, plus adequate provisions to clear existing loans (such as home or business loans) and future goals (like children's higher education). We can calculate your exact requirement together."
    },
    {
      question: "How can I check my policy details?",
      answer: "You can check your LIC policy status, premium due dates, and bonus updates directly through the official LIC Customer Portal (licindia.in), the LIC Mobile App, or by reaching out to Sudip Kumar Pathak with your policy number for guidance."
    },
    {
      question: "How can I get assistance with an existing policy?",
      answer: "Whether you need to update contact information, change nominees, check revival options for lapsed policies, or understand loan facilities on your policy, simply message or call Sudip Kumar Pathak (Guddu Baba) on 9801764651 for step-by-step assistance."
    },
    {
      question: "How do I contact Sudip Kumar Pathak?",
      answer: "You can directly call on +91 98017 64651 or tap any 'WhatsApp Now' button on this website to start a chat. You can also fill out the quick enquiry form below, and it will automatically generate a WhatsApp message to connect immediately."
    }
  ],

  // 13. Office Location & Google Maps Integration (Configurable)
  officeLocation: {
    title: "Office Location & Consultation Area",
    badge: "Service Coverage",
    addressLine1: "Independent Advisor Office / Consultation Desk",
    addressLine2: "Bihar, India (Full local branch office details available upon appointment)",
    city: "Bihar",
    country: "India",
    pinCode: "800001", // Placeholder
    serviceArea: "Serving clients across Bihar and digitally across India",
    // When actual office address / Google Maps URL is confirmed, enter it here:
    mapsEmbedUrl: "", 
    mapsDirectionsUrl: "", 
    isConfigured: false, // Set to true when verified Google Maps URL is available
    hours: "Monday – Sunday: 8:00 AM – 9:00 PM (Prior appointment recommended)"
  },

  // 14. Social Media Links
  socialLinks: {
    whatsapp: "https://wa.me/919801764651",
    phone: "tel:+919801764651",
    email: "mailto:sudip.licadvisor@gmail.com"
  },

  // 15. SEO Information & Metadata
  seo: {
    siteTitle: "SUDIP KUMAR PATHAK (GUDDU BABA) | LIC Insurance Advisor",
    metaDescription: "Personalized LIC life insurance guidance from Sudip Kumar Pathak (Guddu Baba). Term Insurance, Endowment, Child Future Planning, Retirement & Pension solutions.",
    keywords: [
      "LIC Insurance Advisor",
      "LIC Agent",
      "Life Insurance Guidance",
      "Insurance Advisor",
      "Sudip Kumar Pathak",
      "Guddu Baba LIC Advisor",
      "Term Insurance Bihar",
      "LIC Policy Consultant"
    ],
    canonicalUrl: "https://licadvisor-guddubaba.in"
  },

  // 16. Legal Disclaimers & Compliance
  website: {
    title: "SUDIP KUMAR PATHAK (GUDDU BABA) | LIC Insurance Advisor",
    disclaimerBadge: "Independent LIC Insurance Advisor Website",
    legalNotice: "This website is intended for informational and customer enquiry purposes. It is not the official website of Life Insurance Corporation of India (LIC). Policy details, eligibility, premiums, terms, and conditions are subject to official LIC documentation. Please verify all information through official LIC channels."
  }
};
