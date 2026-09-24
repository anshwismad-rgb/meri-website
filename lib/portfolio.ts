// Sample case studies. Swap in real client projects, screenshots and numbers.
export type Case = {
  title: string;
  body: string;
  img: string;
  metric: string;
  metricLabel: string;
  filter: "Websites" | "E-commerce" | "Apps" | "Marketing";
  service: string;
  tag: [label: string, bg: string, fg: string];
};

const T = {
  web: ["Web development", "#e6eeff", "#1449b0"],
  mkt: ["Digital marketing", "#f3e8ff", "#6d28d9"],
  seo: ["SEO", "#dcfce7", "#15803d"],
  shop: ["E-commerce", "#fce7f3", "#be185d"],
  app: ["Mobile app", "#e0f2fe", "#0369a1"],
  ppc: ["Google Ads", "#ffedd5", "#c2410c"],
} satisfies Record<string, [string, string, string]>;

export const cases: Case[] = [
  { title: "Corporate website for a healthcare brand", body: "Modern, responsive and performance-driven website with clean UI.", img: "/images/case-healthcare.jpg", metric: "2.4×", metricLabel: "more enquiries", filter: "Websites", service: "website-development", tag: T.web },
  { title: "Social campaign for an e-commerce brand", body: "Increased engagement by 3× in 2 months with targeted campaigns.", img: "/images/case-ecommerce.jpg", metric: "3×", metricLabel: "engagement", filter: "Marketing", service: "social-media-marketing", tag: T.mkt },
  { title: "SEO for a real estate company", body: "Improved organic traffic by 180% in 4 months with strategic SEO.", img: "/images/case-realestate.jpg", metric: "+180%", metricLabel: "organic traffic", filter: "Marketing", service: "search-engine-optimization", tag: T.seo },
  { title: "Ayurvedic skincare online store", body: "A fast Shopify store with bundles, reviews and one-page checkout.", img: "/images/shop-hero.jpg", metric: "+62%", metricLabel: "conversion rate", filter: "E-commerce", service: "ecommerce-development", tag: T.shop },
  { title: "Food delivery app for a restaurant group", body: "Flutter app for Android and iOS with live order tracking.", img: "/images/food-hero.jpg", metric: "25 min", metricLabel: "avg. delivery", filter: "Apps", service: "android-ios-app", tag: T.app },
  { title: "Fitness tracking app", body: "Step tracking, workouts and progress charts in a clean, friendly UI.", img: "/images/fitness-app.jpg", metric: "4.8★", metricLabel: "store rating", filter: "Apps", service: "android-ios-app", tag: T.app },
  { title: "Lead-gen campaigns for an education brand", body: "Search and Performance Max campaigns with dedicated landing pages.", img: "/images/step-launch.jpg", metric: "−38%", metricLabel: "cost per lead", filter: "Marketing", service: "pay-per-click", tag: T.ppc },
  { title: "WordPress site for a consulting firm", body: "Custom theme, blog and case-study library their team edits daily.", img: "/images/web-dev.jpg", metric: "98", metricLabel: "PageSpeed", filter: "Websites", service: "wordpress-website-development", tag: T.web },
  { title: "Multi-vendor marketplace", body: "Seller dashboards, commissions and payouts on a custom Laravel build.", img: "/images/step-develop.jpg", metric: "120+", metricLabel: "sellers onboarded", filter: "E-commerce", service: "e-commerce-website-development", tag: T.shop },
];

export const caseFilters = ["All", "Websites", "E-commerce", "Apps", "Marketing"] as const;
