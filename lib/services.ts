export type Visual =
  | "browser"
  | "shop"
  | "code"
  | "wordpress"
  | "webapp"
  | "phone"
  | "hosting"
  | "dashboard"
  | "serp"
  | "mobileSerp"
  | "social"
  | "ads"
  | "content"
  | "graphic"
  | "logo";

export type Category = "development" | "marketing" | "design";

export type Service = {
  slug: string;
  title: string;
  category: Category;
  icon: string;
  gradient: [string, string];
  visual: Visual;
  image: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  highlights: { v: string; l: string }[];
  features: { icon: string; title: string; body: string }[];
  why: string[];
  tools: string[];
  faqs: { q: string; a: string }[];
};

export const categories: Record<Category, { label: string; blurb: string }> = {
  development: { label: "Development", blurb: "Websites, stores, apps & hosting" },
  marketing: { label: "Digital marketing", blurb: "SEO, social, ads & content" },
  design: { label: "Design & branding", blurb: "Logos, graphics & identity" },
};

export const services: Service[] = [
  // ── Development ────────────────────────────────────────────────────────
  {
    slug: "design-development",
    title: "Web design & development",
    category: "development",
    icon: "Palette",
    gradient: ["#3b82f6", "#1a5fdb"],
    visual: "browser",
    image: "/images/web-dev.jpg",
    metaTitle: "Web Design & Development Services",
    metaDescription:
      "Tailor-made websites designed for an excellent user experience — clear design, clear structure and easy navigation. Web design and development by WISMAD, Lucknow.",
    headline: "Websites designed to be used — and built to perform.",
    intro:
      "We design with an excellent user experience in mind: a clear design, a clear structure and easy navigation. Then we build it fast, responsive and ready to grow with your business.",
    highlights: [
      { v: "98", l: "PageSpeed target" },
      { v: "2–4 wk", l: "Typical launch" },
      { v: "100%", l: "Responsive" },
    ],
    features: [
      { icon: "LayoutTemplate", title: "Custom UI design", body: "Unique layouts in Figma, shaped around your brand and your customers — never a stock template." },
      { icon: "MonitorSmartphone", title: "Responsive on every screen", body: "Pixel-checked on phones, tablets, laptops and large displays before launch." },
      { icon: "Gauge", title: "Built for speed", body: "Optimised images, clean code and caching so pages load in under two seconds." },
      { icon: "SearchCheck", title: "SEO-ready structure", body: "Semantic markup, meta tags, schema and sitemaps set up from day one." },
      { icon: "ShieldCheck", title: "Secure by default", body: "SSL, hardened hosting, regular backups and malware scanning." },
      { icon: "PenLine", title: "Easy to update", body: "A simple CMS so your team can edit pages, blogs and offers without a developer." },
    ],
    why: [
      "One team for design, development, SEO and marketing",
      "Fixed quote and timeline before any code is written",
      "Weekly staging links so you see progress as it happens",
      "Free support period after launch",
    ],
    tools: ["Figma", "WordPress", "React", "Next.js", "Laravel", "Tailwind CSS"],
    faqs: [
      { q: "Do you design from scratch or use templates?", a: "Every project starts with a custom design in Figma based on your brand. We can also refresh an existing site if you prefer." },
      { q: "Will I be able to update the website myself?", a: "Yes. We build on a CMS and give you a short training session and a video walkthrough." },
      { q: "Can you redesign my existing website?", a: "Yes — we audit what works today, keep your SEO value, and rebuild with a modern design." },
    ],
  },
  {
    slug: "website-development",
    title: "Website development",
    category: "development",
    icon: "CodeXml",
    gradient: ["#3b82f6", "#1a5fdb"],
    visual: "code",
    image: "/images/step-develop.jpg",
    metaTitle: "Website Development Company in Lucknow",
    metaDescription:
      "Bespoke website development in WordPress, PHP, Laravel and modern frameworks. WISMAD is a website development company in Lucknow serving clients worldwide.",
    headline: "Bespoke websites that turn visitors into customers.",
    intro:
      "We use modern technology to craft bespoke websites that combine good looks with real functionality — in WordPress, PHP, Laravel or modern JavaScript frameworks.",
    highlights: [
      { v: "500+", l: "Projects delivered" },
      { v: "10+ yrs", l: "Experience" },
      { v: "24×7", l: "Support" },
    ],
    features: [
      { icon: "CodeXml", title: "Clean, maintainable code", body: "Structured, documented code that any developer can pick up later." },
      { icon: "Layers", title: "CMS integration", body: "WordPress or a custom admin panel to manage content, users and media." },
      { icon: "Workflow", title: "Third-party integrations", body: "Payment gateways, CRMs, WhatsApp, email marketing and analytics." },
      { icon: "Gauge", title: "Performance tuning", body: "Core Web Vitals optimised for better rankings and conversions." },
      { icon: "ShieldCheck", title: "Security hardening", body: "Protection against common attacks, with SSL and daily backups." },
      { icon: "RefreshCcw", title: "Maintenance plans", body: "Updates, fixes and content changes handled by our support team." },
    ],
    why: [
      "Expertise in PHP, JavaScript, jQuery, Angular, React and more",
      "Websites that are SEO-friendly from launch",
      "Transparent pricing — hourly, fixed or dedicated",
      "Video calls across time zones, even after office hours",
    ],
    tools: ["PHP", "Laravel", "WordPress", "React", "Node.js", "MySQL"],
    faqs: [
      { q: "Which technology will you use for my website?", a: "We recommend one after understanding your goals: WordPress for content-led sites, Laravel or React for custom features." },
      { q: "Do you provide hosting and domain?", a: "Yes. We offer managed hosting with 99.9% uptime, or we can deploy to your existing server." },
      { q: "Is the website mine after launch?", a: "Yes. You own the code, content and design once the project is complete." },
    ],
  },
  {
    slug: "dynamic-website-development",
    title: "Dynamic website development",
    category: "development",
    icon: "Database",
    gradient: ["#6366f1", "#1a5fdb"],
    visual: "dashboard",
    image: "/images/team-work.jpg",
    metaTitle: "Dynamic Website Development Services",
    metaDescription:
      "Database-driven dynamic websites with admin panels, user accounts and real-time content. Dynamic website development by WISMAD.",
    headline: "Dynamic websites that update themselves.",
    intro:
      "Database-driven websites with admin panels, user logins, search and real-time content — so your site grows with your business instead of holding it back.",
    highlights: [
      { v: "Custom", l: "Admin panel" },
      { v: "Real-time", l: "Content" },
      { v: "Scalable", l: "Architecture" },
    ],
    features: [
      { icon: "LayoutDashboard", title: "Admin dashboard", body: "Manage products, listings, users and enquiries from one secure panel." },
      { icon: "Users", title: "User accounts", body: "Registration, logins, roles and member-only areas." },
      { icon: "Search", title: "Search & filters", body: "Fast search and filtering over large catalogues and listings." },
      { icon: "Database", title: "Robust databases", body: "Well-designed MySQL or PostgreSQL schemas built to scale." },
      { icon: "Workflow", title: "Automations", body: "Email notifications, reports and workflows that save your team hours." },
      { icon: "Lock", title: "Secure data", body: "Encrypted passwords, role-based access and audit logs." },
    ],
    why: [
      "Built on proven frameworks like Laravel",
      "Designed for thousands of records and users",
      "Documented APIs for future apps",
      "Ongoing feature development available",
    ],
    tools: ["Laravel", "PHP", "MySQL", "PostgreSQL", "Vue", "React"],
    faqs: [
      { q: "What is the difference between static and dynamic websites?", a: "A static site shows the same content to everyone. A dynamic site pulls content from a database, so it can have logins, listings, search and an admin panel." },
      { q: "Can you add features later?", a: "Yes. We build in modules so new features can be added without rebuilding." },
      { q: "Do you migrate data from my old system?", a: "Yes, we can import data from spreadsheets, old databases or other platforms." },
    ],
  },
  {
    slug: "wordpress-website-development",
    title: "WordPress development",
    category: "development",
    icon: "Globe",
    gradient: ["#21759b", "#1a5fdb"],
    visual: "wordpress",
    image: "/images/web-dev.jpg",
    metaTitle: "WordPress Website Designing & Development",
    metaDescription:
      "Custom WordPress themes, plugin development, customisation and fixes. WISMAD builds fast, secure WordPress websites.",
    headline: "WordPress websites that are fast, secure and easy to run.",
    intro:
      "From custom themes to plugin development and fixes, we help you get the best out of WordPress — without the slow, bloated sites it's often known for.",
    highlights: [
      { v: "Custom", l: "Themes" },
      { v: "Plugin", l: "Development" },
      { v: "Fast", l: "Fixes & support" },
    ],
    features: [
      { icon: "LayoutTemplate", title: "Custom theme development", body: "Lightweight, hand-built themes matched to your design." },
      { icon: "Wrench", title: "Plugin development", body: "Custom plugins for booking, listings, calculators and integrations." },
      { icon: "ShoppingCart", title: "WooCommerce stores", body: "Complete online stores with payments, shipping and inventory." },
      { icon: "Gauge", title: "Speed optimisation", body: "Caching, image optimisation and clean-up of heavy plugins." },
      { icon: "ShieldCheck", title: "Security & backups", body: "Firewalls, malware removal, updates and daily backups." },
      { icon: "RefreshCcw", title: "Migration & fixes", body: "Move to WordPress, change hosts, or fix what's broken." },
    ],
    why: [
      "Help with customisation and plugin issues",
      "No page-builder bloat unless you want it",
      "Gutenberg blocks your team can actually use",
      "Care plans for updates and monitoring",
    ],
    tools: ["WordPress", "WooCommerce", "PHP", "ACF", "Elementor", "Gutenberg"],
    faqs: [
      { q: "Can you fix my existing WordPress site?", a: "Yes. We regularly fix errors, speed issues, hacked sites and plugin conflicts." },
      { q: "Do you use page builders?", a: "Only if you want one. Custom themes are usually faster and easier to manage." },
      { q: "Will my site be secure?", a: "We harden every install, keep plugins updated and set up backups and monitoring." },
    ],
  },
  {
    slug: "web-application",
    title: "Web application development",
    category: "development",
    icon: "Cpu",
    gradient: ["#0ea5e9", "#1a5fdb"],
    visual: "webapp",
    image: "/images/team-work.jpg",
    metaTitle: "Web Application Development Services",
    metaDescription:
      "Feature-rich web applications, portals and CMS platforms built on Laravel, Symfony, React and ASP.NET. Web application development by WISMAD.",
    headline: "Web applications that run your business better.",
    intro:
      "Feature-rich web applications that cut costs and save time — built on open-source frameworks such as Laravel and Symfony, or closed-source technology such as Microsoft ASP.NET.",
    highlights: [
      { v: "SaaS", l: "Ready" },
      { v: "API", l: "First" },
      { v: "Cloud", l: "Deployed" },
    ],
    features: [
      { icon: "LayoutDashboard", title: "Portals & dashboards", body: "Customer, vendor and staff portals with the data they need." },
      { icon: "Workflow", title: "Business automation", body: "Replace spreadsheets and manual steps with reliable software." },
      { icon: "Link2", title: "APIs & integrations", body: "Connect ERPs, CRMs, payment gateways and third-party services." },
      { icon: "Cloud", title: "Cloud deployment", body: "Scalable hosting on AWS, DigitalOcean or your own servers." },
      { icon: "Users", title: "Multi-user & roles", body: "Granular permissions for teams, branches and clients." },
      { icon: "ChartLine", title: "Reports & analytics", body: "Live reports and exports so decisions are based on data." },
    ],
    why: [
      "Agile sprints with demos every week",
      "Scalable architecture from day one",
      "Clear documentation and handover",
      "Dedicated developers available from $800/month",
    ],
    tools: ["Laravel", "Symfony", "ASP.NET", "React", "Node.js", "AWS"],
    faqs: [
      { q: "How long does a web application take?", a: "A focused first version usually takes 6–12 weeks. We can release in phases so you start using it sooner." },
      { q: "Can you work with our in-house team?", a: "Yes. We regularly work alongside in-house developers and product managers." },
      { q: "Do you sign NDAs?", a: "Yes, we're happy to sign an NDA before discussing your idea." },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce development",
    category: "development",
    icon: "ShoppingCart",
    gradient: ["#8b5cf6", "#1a5fdb"],
    visual: "shop",
    image: "/images/case-ecommerce.jpg",
    metaTitle: "eCommerce Web Designing & Development Company",
    metaDescription:
      "E-commerce web design, plug-in and module development. WISMAD builds online stores with secure payments and full control over your catalogue.",
    headline: "Online stores that sell — on every device.",
    intro:
      "Powerful and efficient e-commerce web design, plug-in and module development. You get total control and full functionality over your online business.",
    highlights: [
      { v: "Secure", l: "Payments" },
      { v: "Mobile", l: "First" },
      { v: "Full", l: "Control" },
    ],
    features: [
      { icon: "ShoppingBag", title: "Beautiful storefronts", body: "Product pages designed to showcase and convert." },
      { icon: "Wallet", title: "Payment gateways", body: "Razorpay, Stripe, PayPal, UPI and cash on delivery." },
      { icon: "Layers", title: "Inventory & orders", body: "Manage stock, variants, orders and returns in one place." },
      { icon: "Plane", title: "Shipping integrations", body: "Automated shipping rates and tracking with major couriers." },
      { icon: "Percent", title: "Offers & coupons", body: "Discounts, bundles and loyalty rewards to lift order value." },
      { icon: "ChartBar", title: "Sales analytics", body: "Understand what sells, who buys and where they come from." },
    ],
    why: [
      "Shopify, WooCommerce, Magento or custom",
      "Custom plug-ins and modules",
      "Conversion-focused checkout",
      "Marketing and SEO under one roof",
    ],
    tools: ["Shopify", "WooCommerce", "Magento", "Razorpay", "Stripe", "Laravel"],
    faqs: [
      { q: "Which platform is best for my store?", a: "Shopify is great for getting started fast, WooCommerce for flexibility, and a custom build for unique requirements. We'll advise after a short call." },
      { q: "Can you migrate my existing store?", a: "Yes. We migrate products, customers and orders while keeping your SEO rankings." },
      { q: "Do you help with marketing the store?", a: "Yes — SEO, Google Shopping, Meta ads and social media are all in-house." },
    ],
  },
  {
    slug: "e-commerce-website-development",
    title: "E-commerce website development",
    category: "development",
    icon: "Store",
    gradient: ["#ec4899", "#8b5cf6"],
    visual: "shop",
    image: "/images/shop-hero.jpg",
    metaTitle: "E-commerce Website Development Company",
    metaDescription:
      "Custom e-commerce websites with CMS, secure checkout and marketplace features. E-commerce website development by WISMAD.",
    headline: "Custom e-commerce websites built around your products.",
    intro:
      "Customised e-commerce solutions and content management that fit the way you sell — from a boutique catalogue to a multi-vendor marketplace.",
    highlights: [
      { v: "B2C", l: "& B2B" },
      { v: "Multi", l: "Vendor" },
      { v: "Custom", l: "Features" },
    ],
    features: [
      { icon: "Store", title: "Multi-vendor marketplaces", body: "Seller onboarding, commissions and payouts." },
      { icon: "Receipt", title: "B2B ordering", body: "Tiered pricing, bulk orders, quotes and GST invoices." },
      { icon: "Smartphone", title: "App-ready", body: "APIs that power a companion Android and iOS app." },
      { icon: "Globe", title: "Multi-currency", body: "Sell internationally with local currencies and taxes." },
      { icon: "Sparkles", title: "Personalisation", body: "Recommendations, recently viewed and wishlists." },
      { icon: "ShieldCheck", title: "PCI-friendly security", body: "Hosted payments, SSL and fraud protection." },
    ],
    why: [
      "Customised e-commerce and CMS solutions",
      "Scales from 10 to 10,000+ products",
      "Speed-optimised product and category pages",
      "Training for your store team",
    ],
    tools: ["Laravel", "WooCommerce", "Shopify Plus", "Next.js", "Razorpay", "Algolia"],
    faqs: [
      { q: "Can customers pay in different currencies?", a: "Yes. We set up multi-currency pricing and region-specific payment methods." },
      { q: "Can I add sellers to my store?", a: "Yes. We build multi-vendor marketplaces with seller dashboards and commissions." },
      { q: "Will my store work on mobile?", a: "Every store is designed mobile-first, and we can also build a companion app." },
    ],
  },
  {
    slug: "android-ios-app",
    title: "Android & iOS app development",
    category: "development",
    icon: "Smartphone",
    gradient: ["#0ea5e9", "#0284c7"],
    visual: "phone",
    image: "/images/fitness-app.jpg",
    metaTitle: "Android App Development | iOS App Development",
    metaDescription:
      "Android and iOS app development from India for clients worldwide. Native and cross-platform Flutter apps by WISMAD.",
    headline: "Mobile apps your customers will love to use.",
    intro:
      "We're an Android and iOS app development company building native and cross-platform apps from India for clients all around the world.",
    highlights: [
      { v: "Android", l: "& iOS" },
      { v: "Flutter", l: "Cross-platform" },
      { v: "Store", l: "Launch support" },
    ],
    features: [
      { icon: "Smartphone", title: "Native apps", body: "Kotlin and Swift apps for the best performance and platform feel." },
      { icon: "Layers", title: "Cross-platform", body: "One Flutter codebase for Android and iOS — faster and cheaper." },
      { icon: "Palette", title: "App UI/UX design", body: "Intuitive screens designed and prototyped before development." },
      { icon: "Cloud", title: "Backend & APIs", body: "Secure APIs, admin panels and push notifications." },
      { icon: "Rocket", title: "Store publishing", body: "Google Play and App Store submission handled end to end." },
      { icon: "RefreshCcw", title: "Updates & support", body: "OS updates, crash monitoring and new features." },
    ],
    why: [
      "Experienced Android and iOS developers",
      "Clickable prototypes before development",
      "Beta builds every sprint",
      "Hire a dedicated app developer",
    ],
    tools: ["Flutter", "Kotlin", "Swift", "Firebase", "React Native", "Laravel API"],
    faqs: [
      { q: "Should I build native or cross-platform?", a: "Cross-platform (Flutter) suits most businesses. Native makes sense for heavy graphics or deep device features." },
      { q: "Do you publish the app to the stores?", a: "Yes, we handle Play Store and App Store listings, screenshots and submission." },
      { q: "How much does an app cost?", a: "It depends on screens and features. We share a fixed quote after a short discovery call." },
    ],
  },
  {
    slug: "web-hosting",
    title: "Web hosting",
    category: "development",
    icon: "Server",
    gradient: ["#22c55e", "#16a34a"],
    visual: "hosting",
    image: "/images/step-launch.jpg",
    metaTitle: "Website Hosting Service at the Best Price",
    metaDescription:
      "Fast, secure managed web hosting with 99.9% uptime, SSL, daily backups and 24×7 support. Web hosting by WISMAD.",
    headline: "Hosting that keeps your website fast and online.",
    intro:
      "Top-class managed web hosting with 99.9% uptime, free SSL, daily backups and real humans on support 24×7.",
    highlights: [
      { v: "99.9%", l: "Uptime" },
      { v: "Free", l: "SSL" },
      { v: "Daily", l: "Backups" },
    ],
    features: [
      { icon: "Zap", title: "SSD & caching", body: "Fast NVMe storage and server caching for quick page loads." },
      { icon: "Lock", title: "Free SSL", body: "HTTPS on every site, renewed automatically." },
      { icon: "Database", title: "Daily backups", body: "Automatic backups with one-click restore." },
      { icon: "ShieldCheck", title: "Security scanning", body: "Firewall, malware scanning and DDoS protection." },
      { icon: "Mail", title: "Business email", body: "Professional email on your own domain." },
      { icon: "Headphones", title: "24×7 support", body: "Our team monitors your site and responds around the clock." },
    ],
    why: [
      "Managed for you — no technical knowledge needed",
      "Free migration from your current host",
      "Monitoring with instant alerts",
      "Affordable plans for every size",
    ],
    tools: ["cPanel", "Cloudflare", "AWS", "DigitalOcean", "LiteSpeed", "Let's Encrypt"],
    faqs: [
      { q: "Can you move my site from another host?", a: "Yes, migration is free and usually done with zero downtime." },
      { q: "What happens if my site goes down?", a: "We're alerted automatically and our team starts fixing it immediately, 24×7." },
      { q: "Do you provide email hosting?", a: "Yes, we set up professional email on your domain." },
    ],
  },

  // ── Marketing ──────────────────────────────────────────────────────────
  {
    slug: "digital-marketing",
    title: "Digital marketing",
    category: "marketing",
    icon: "Megaphone",
    gradient: ["#8b5cf6", "#6d28d9"],
    visual: "dashboard",
    image: "/images/client-meeting.jpg",
    metaTitle: "Digital Marketing Agency in Lucknow | SEO, SMO",
    metaDescription:
      "Results-driven digital marketing — SEO, social media, PPC and content marketing. WISMAD is a digital marketing agency in Lucknow.",
    headline: "Digital marketing that brings measurable growth.",
    intro:
      "Results-driven campaigns covering everything from SEO and social media to paid ads and content — planned, run and reported by one team.",
    highlights: [
      { v: "+180%", l: "Organic traffic" },
      { v: "3×", l: "Engagement" },
      { v: "Monthly", l: "ROI reports" },
    ],
    features: [
      { icon: "SearchCheck", title: "Search engine optimisation", body: "Rank higher on Google and attract quality traffic." },
      { icon: "MousePointerClick", title: "Google Ads / PPC", body: "Paid campaigns optimised for leads and sales." },
      { icon: "Heart", title: "Social media marketing", body: "Grow your community on Instagram, Facebook and LinkedIn." },
      { icon: "PenLine", title: "Content marketing", body: "Blogs, copy and visuals that tell your brand's story." },
      { icon: "Mail", title: "Email & WhatsApp", body: "Nurture leads and bring customers back." },
      { icon: "ChartLine", title: "Analytics & reporting", body: "Clear monthly reports tied to business results." },
    ],
    why: [
      "Strategy built around your business goals",
      "Transparent reporting — no vanity metrics",
      "Google Ads and Meta ads specialists in-house",
      "Flexible monthly plans",
    ],
    tools: ["Google Ads", "Meta Ads", "Google Analytics", "Search Console", "SEMrush", "Canva"],
    faqs: [
      { q: "How soon will I see results?", a: "Paid campaigns can generate leads within days. SEO typically shows strong movement in 3–6 months." },
      { q: "Do you lock me into a long contract?", a: "No. Plans are monthly, and you can scale up or down." },
      { q: "What do your reports include?", a: "Traffic, rankings, leads, cost per lead and clear next steps." },
    ],
  },
  {
    slug: "search-engine-optimization",
    title: "Search engine optimization",
    category: "marketing",
    icon: "SearchCheck",
    gradient: ["#22c55e", "#16a34a"],
    visual: "serp",
    image: "/images/case-realestate.jpg",
    metaTitle: "SEO Services in the USA, UK and India",
    metaDescription:
      "Professional SEO services that increase organic rankings, traffic and leads. WISMAD provides SEO for clients in the USA, UK and India.",
    headline: "Get found on Google by customers ready to buy.",
    intro:
      "Comprehensive SEO that significantly increases your organic search visibility, so you compete for the top rankings in search results.",
    highlights: [
      { v: "+180%", l: "Organic traffic" },
      { v: "Top 3", l: "Target rankings" },
      { v: "White-hat", l: "Only" },
    ],
    features: [
      { icon: "Search", title: "Keyword research", body: "Find the searches your customers actually make." },
      { icon: "Wrench", title: "Technical SEO", body: "Site speed, crawlability, schema and Core Web Vitals." },
      { icon: "FileText", title: "On-page optimisation", body: "Titles, headings, content and internal links." },
      { icon: "Link2", title: "Link building", body: "Quality backlinks from relevant, trusted websites." },
      { icon: "MapPin", title: "Local SEO", body: "Google Business Profile and local map rankings." },
      { icon: "ChartLine", title: "Rank tracking", body: "Keyword positions and traffic reported every month." },
    ],
    why: [
      "Clients across the USA, UK and India",
      "Ethical, white-hat techniques only",
      "Content and development in-house",
      "Clear monthly reports",
    ],
    tools: ["Search Console", "Google Analytics", "SEMrush", "Ahrefs", "Screaming Frog", "Schema"],
    faqs: [
      { q: "How long does SEO take?", a: "Most sites see meaningful gains in 3–6 months, depending on competition and the site's history." },
      { q: "Can you guarantee a #1 ranking?", a: "No honest agency can guarantee positions. We commit to a clear plan, transparent work and measurable growth." },
      { q: "Do you do local SEO?", a: "Yes. We optimise your Google Business Profile and local listings." },
    ],
  },
  {
    slug: "mobile-seo",
    title: "Mobile SEO",
    category: "marketing",
    icon: "MonitorSmartphone",
    gradient: ["#0ea5e9", "#22c55e"],
    visual: "mobileSerp",
    image: "/images/fitness-app.jpg",
    metaTitle: "Mobile SEO Services Company in India",
    metaDescription:
      "Mobile SEO services for a fast, engaging browsing experience on phones and better mobile-first rankings. Mobile SEO by WISMAD.",
    headline: "Win the searches that happen on phones.",
    intro:
      "Google ranks your site based on its mobile version. Our mobile SEO gives users a fast, engaging browsing experience on their phones — and gives you better rankings.",
    highlights: [
      { v: "Mobile", l: "First index" },
      { v: "<2.5s", l: "LCP target" },
      { v: "Local", l: "Near-me search" },
    ],
    features: [
      { icon: "Gauge", title: "Core Web Vitals", body: "Improve LCP, INP and CLS on real mobile devices." },
      { icon: "MonitorSmartphone", title: "Responsive audit", body: "Fix layouts, tap targets and font sizes on small screens." },
      { icon: "MapPin", title: "Near-me searches", body: "Rank for local, on-the-go searches." },
      { icon: "Zap", title: "Speed optimisation", body: "Compress images, defer scripts and cache smartly." },
      { icon: "Search", title: "Voice search", body: "Structure content for spoken questions." },
      { icon: "ChartBar", title: "Mobile analytics", body: "Track how mobile visitors behave and convert." },
    ],
    why: [
      "Developers and SEOs in the same team",
      "Real-device testing",
      "Fixes implemented, not just reported",
      "Measurable speed improvements",
    ],
    tools: ["PageSpeed Insights", "Lighthouse", "Search Console", "GA4", "WebPageTest", "Schema"],
    faqs: [
      { q: "Why does mobile SEO matter?", a: "Google uses mobile-first indexing, and most searches now happen on phones." },
      { q: "Will you fix the issues or only report them?", a: "We implement the fixes — our developers and SEO team work together." },
      { q: "Does speed affect sales?", a: "Yes. Faster pages keep visitors longer and convert better." },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social media marketing",
    category: "marketing",
    icon: "Heart",
    gradient: ["#ec4899", "#8b5cf6"],
    visual: "social",
    image: "/images/case-ecommerce.jpg",
    metaTitle: "Social Media Marketing Company | SMM Services",
    metaDescription:
      "Social media marketing, management and growth on Instagram, Facebook, LinkedIn and YouTube. SMM services by WISMAD.",
    headline: "Build your brand and grow a real community.",
    intro:
      "High-end social media marketing with dedicated management and growth optimisation — content, community and paid campaigns that move the needle.",
    highlights: [
      { v: "3×", l: "Engagement" },
      { v: "Daily", l: "Management" },
      { v: "Paid", l: "+ organic" },
    ],
    features: [
      { icon: "Calendar", title: "Content calendar", body: "A monthly plan of posts, reels and stories." },
      { icon: "Image", title: "Creative design", body: "Scroll-stopping graphics, carousels and short videos." },
      { icon: "MessageCircle", title: "Community management", body: "Replies, comments and DMs handled promptly." },
      { icon: "Target", title: "Paid social ads", body: "Targeted Meta and LinkedIn campaigns." },
      { icon: "Users", title: "Influencer outreach", body: "Partner with creators who fit your brand." },
      { icon: "ChartLine", title: "Growth reports", body: "Reach, engagement and leads — reported monthly." },
    ],
    why: [
      "Dedicated social media manager",
      "In-house designers and video editors",
      "Content approved by you before posting",
      "Strategy tied to sales, not just likes",
    ],
    tools: ["Instagram", "Facebook", "LinkedIn", "YouTube", "Meta Business Suite", "Canva"],
    faqs: [
      { q: "Which platforms should my business be on?", a: "It depends on your audience. We'll recommend the two or three platforms that matter most." },
      { q: "Do I approve posts before they go live?", a: "Yes. You receive the monthly calendar for approval." },
      { q: "Is ad spend included?", a: "Management fees and ad budgets are separate so you keep full control of spend." },
    ],
  },
  {
    slug: "social-media-optimization",
    title: "Social media optimization",
    category: "marketing",
    icon: "Hash",
    gradient: ["#f59e0b", "#ec4899"],
    visual: "social",
    image: "/images/social-post.jpg",
    metaTitle: "SMO Services | Social Media Optimization",
    metaDescription:
      "Social media optimisation for Facebook, Instagram, X, Reddit and more — profiles, hashtags and posts optimised for reach. SMO by WISMAD.",
    headline: "Profiles and posts optimised for maximum reach.",
    intro:
      "SMO means properly optimising your social profiles and posts — on Facebook, Instagram, X, Reddit and more — so more of the right people discover you.",
    highlights: [
      { v: "#", l: "Hashtag strategy" },
      { v: "Profile", l: "Optimisation" },
      { v: "Organic", l: "Reach" },
    ],
    features: [
      { icon: "BadgeCheck", title: "Profile optimisation", body: "Bios, highlights, links and branding that convert." },
      { icon: "Hash", title: "Hashtag research", body: "The right tags for discovery in your niche." },
      { icon: "Share2", title: "Share-worthy content", body: "Posts designed to be saved and shared." },
      { icon: "Clock", title: "Posting schedule", body: "Publish when your audience is most active." },
      { icon: "Link2", title: "Website integration", body: "Social sharing, pixels and Open Graph tags." },
      { icon: "Eye", title: "Competitor tracking", body: "Learn from what works in your market." },
    ],
    why: [
      "SMO and SEO working together",
      "Platform-specific strategies",
      "Monthly audits and insights",
      "Affordable starter plans",
    ],
    tools: ["Instagram", "Facebook", "X", "Reddit", "Pinterest", "Buffer"],
    faqs: [
      { q: "What's the difference between SMO and SMM?", a: "SMO improves your organic presence — profiles, content and hashtags. SMM adds paid promotion and campaigns." },
      { q: "Do hashtags really help?", a: "Used well, yes. They help new audiences find your content and support search visibility." },
      { q: "Can SMO help my SEO?", a: "Indirectly, yes — more shares and branded searches support your overall visibility." },
    ],
  },
  {
    slug: "pay-per-click",
    title: "Google Ads / PPC",
    category: "marketing",
    icon: "MousePointerClick",
    gradient: ["#f59e0b", "#ea580c"],
    visual: "ads",
    image: "/images/step-launch.jpg",
    metaTitle: "Pay Per Click Advertising | PPC Services in India",
    metaDescription:
      "Google Ads and PPC management that improves your return on ad spend. Search, Shopping, Display and YouTube campaigns by WISMAD.",
    headline: "Paid campaigns that pay for themselves.",
    intro:
      "We manage your Google Ads account to improve your return on investment — and you can take PPC on its own if that's the only service you need.",
    highlights: [
      { v: "ROI", l: "Focused" },
      { v: "Weekly", l: "Optimisation" },
      { v: "Monthly", l: "Reports" },
    ],
    features: [
      { icon: "Search", title: "Search campaigns", body: "Appear at the top of Google for high-intent keywords." },
      { icon: "ShoppingBag", title: "Shopping ads", body: "Product listings with price and image on Google." },
      { icon: "Monitor", title: "Display & YouTube", body: "Visual ads and remarketing across the web." },
      { icon: "Target", title: "Conversion tracking", body: "Know exactly which clicks become leads and sales." },
      { icon: "LayoutTemplate", title: "Landing pages", body: "Dedicated pages built to convert paid traffic." },
      { icon: "TrendingUp", title: "Bid optimisation", body: "Continuous tuning to lower cost per lead." },
    ],
    why: [
      "PPC-only engagement available",
      "Transparent — you own the ad account",
      "Negative keywords and waste control",
      "Landing pages built in-house",
    ],
    tools: ["Google Ads", "Microsoft Ads", "Meta Ads", "GA4", "Tag Manager", "Looker Studio"],
    faqs: [
      { q: "How much should I spend on ads?", a: "We recommend a starting budget after researching keyword costs in your market." },
      { q: "Who owns the ad account?", a: "You do. We manage it with access you grant, so data always stays yours." },
      { q: "Can I hire you only for PPC?", a: "Yes, PPC can be taken as a standalone service." },
    ],
  },
  {
    slug: "content-marketing-branding",
    title: "Content writing & marketing",
    category: "marketing",
    icon: "PenLine",
    gradient: ["#6366f1", "#8b5cf6"],
    visual: "content",
    image: "/images/client-meeting.jpg",
    metaTitle: "Content Writing Agency | Website Content Writing",
    metaDescription:
      "Website content, blogs and brand storytelling that deliver results. Content writing and content marketing services by WISMAD.",
    headline: "Words that tell your story — and rank on Google.",
    intro:
      "We help companies tell their brand's story through strategic content. Blogs, website copy and campaigns that build trust and bring in the right visitors.",
    highlights: [
      { v: "SEO", l: "Optimised" },
      { v: "Original", l: "Plagiarism-free" },
      { v: "On-brand", l: "Voice" },
    ],
    features: [
      { icon: "FileText", title: "Website copy", body: "Clear, persuasive copy for every page of your site." },
      { icon: "Newspaper", title: "Blog writing", body: "Regular, researched articles that build authority." },
      { icon: "BookOpen", title: "Brand storytelling", body: "Your story, mission and voice — put into words." },
      { icon: "Mail", title: "Email copy", body: "Newsletters and sequences that get opened and clicked." },
      { icon: "Megaphone", title: "Ad copy", body: "Headlines and descriptions that earn the click." },
      { icon: "Video", title: "Video scripts", body: "Scripts for explainer videos and animations." },
    ],
    why: [
      "Writers who understand SEO",
      "Research-backed, original content",
      "Revisions until you're happy",
      "Content calendar planned monthly",
    ],
    tools: ["Google Docs", "SEMrush", "Grammarly", "Surfer SEO", "WordPress", "Canva"],
    faqs: [
      { q: "Will the content be original?", a: "Yes. Every piece is written from scratch and checked for plagiarism." },
      { q: "Can you write in our brand voice?", a: "Yes. We create a short voice guide first and follow it for every piece." },
      { q: "Do you publish blogs as well?", a: "Yes, we can format, optimise and publish directly to your website." },
    ],
  },

  // ── Design ─────────────────────────────────────────────────────────────
  {
    slug: "graphic-design",
    title: "Graphic design",
    category: "design",
    icon: "Brush",
    gradient: ["#ec4899", "#f59e0b"],
    visual: "graphic",
    image: "/images/step-design.jpg",
    metaTitle: "Graphic Design Services",
    metaDescription:
      "Brochures, social media creatives, packaging, banners and video animation. Professional graphic design services by WISMAD.",
    headline: "Design that makes people stop and look.",
    intro:
      "From social creatives and brochures to packaging and animated videos — clean, on-brand design that makes your business look as good as it is.",
    highlights: [
      { v: "Print", l: "& digital" },
      { v: "Motion", l: "Graphics" },
      { v: "Fast", l: "Turnaround" },
    ],
    features: [
      { icon: "Image", title: "Social media creatives", body: "Posts, stories, carousels and ad banners." },
      { icon: "BookOpen", title: "Brochures & catalogues", body: "Print-ready layouts for sales and events." },
      { icon: "ShoppingBag", title: "Packaging design", body: "Labels and boxes that stand out on the shelf." },
      { icon: "Film", title: "Video animation", body: "Explainer videos and motion graphics." },
      { icon: "Monitor", title: "Web & UI graphics", body: "Banners, icons and illustrations for your site." },
      { icon: "Palette", title: "Brand guidelines", body: "Colours, typography and rules for consistency." },
    ],
    why: [
      "In-house designers and animators",
      "Source files included",
      "Unlimited minor revisions",
      "Consistent with your brand",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "After Effects", "InDesign", "Canva"],
    faqs: [
      { q: "Do I get the source files?", a: "Yes. You receive print-ready files and editable source files." },
      { q: "Do you make animated videos?", a: "Yes, including explainer videos, logo animations and social reels." },
      { q: "How fast is turnaround?", a: "Most social creatives are delivered within 24–48 hours." },
    ],
  },
  {
    slug: "logo-designing",
    title: "Logo design & branding",
    category: "design",
    icon: "PenTool",
    gradient: ["#1a5fdb", "#8b5cf6"],
    visual: "logo",
    image: "/images/step-design.jpg",
    metaTitle: "Logo Designing Company in Lucknow",
    metaDescription:
      "Memorable, custom logo design and brand identity for startups and businesses. Logo designing by WISMAD, Lucknow.",
    headline: "A logo people remember — and a brand they trust.",
    intro:
      "Custom logos and brand identities crafted from scratch — researched, sketched, refined and delivered in every format you'll need.",
    highlights: [
      { v: "3+", l: "Initial concepts" },
      { v: "Vector", l: "Files" },
      { v: "Full", l: "Brand kit" },
    ],
    features: [
      { icon: "Lightbulb", title: "Brand discovery", body: "We learn your story, audience and competitors first." },
      { icon: "PenTool", title: "Multiple concepts", body: "Several distinct directions to choose from." },
      { icon: "Palette", title: "Colour & typography", body: "A palette and fonts that express your personality." },
      { icon: "Layers", title: "Logo variations", body: "Primary, stacked, icon and monochrome versions." },
      { icon: "Briefcase", title: "Stationery", body: "Business cards, letterheads and email signatures." },
      { icon: "BookOpen", title: "Brand guidelines", body: "A simple guide so your brand stays consistent." },
    ],
    why: [
      "100% original, custom designs",
      "Full ownership and copyright",
      "Files for print, web and social",
      "Revisions until it's right",
    ],
    tools: ["Illustrator", "Figma", "Photoshop", "Procreate", "InDesign", "After Effects"],
    faqs: [
      { q: "How many logo options will I get?", a: "We usually present three or more concepts, then refine your favourite." },
      { q: "Will I own the logo?", a: "Yes. Full copyright is transferred to you on completion." },
      { q: "What file formats do I receive?", a: "AI, SVG, PDF, PNG and JPG — for print, web and social media." },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const servicesIn = (c: Category) => services.filter((s) => s.category === c);
