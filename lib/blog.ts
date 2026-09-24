export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Web development" | "Digital marketing" | "SEO" | "Content";
  date: string;
  read: number;
  image: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "best-digital-marketing-company-in-lucknow-to-grow-your-business",
    title: "Best Digital Marketing Company in Lucknow to Grow Your Business",
    excerpt: "What to look for in a digital marketing partner — and how the right one turns online visibility into real revenue.",
    category: "Digital marketing",
    date: "2026-08-18",
    read: 6,
    image: "/images/client-meeting.jpg",
    body: [
      { t: "p", text: "Customers in Lucknow — and everywhere else — start their buying journey online. They search Google, scroll Instagram and compare reviews before they ever call you. A strong digital marketing partner makes sure they find you first." },
      { t: "h2", text: "What a good digital marketing company does" },
      { t: "ul", items: ["Builds a strategy around your business goals, not vanity metrics", "Combines SEO, social media, paid ads and content", "Tracks leads and sales, not just clicks", "Reports clearly every month with next steps"] },
      { t: "h2", text: "Questions to ask before you hire" },
      { t: "p", text: "Ask to see results for similar businesses, how they report, who owns the ad accounts, and what happens if you want to leave. A trustworthy agency answers all of these without hesitation." },
      { t: "h2", text: "How WISMAD approaches growth" },
      { t: "p", text: "We start with a short audit of your website, rankings and competitors. Then we build a plan that mixes quick wins from paid ads with long-term growth from SEO and content — all run by one team so nothing falls through the cracks." },
    ],
  },
  {
    slug: "best-web-development-company-in-lucknow",
    title: "Best Web Development Company in Lucknow",
    excerpt: "Your website is your hardest-working salesperson. Here's how to choose a development partner that builds it right.",
    category: "Web development",
    date: "2026-07-30",
    read: 5,
    image: "/images/web-dev.jpg",
    body: [
      { t: "p", text: "A website is often the first impression a customer has of your business. It needs to load fast, look great on phones and make it easy to take the next step." },
      { t: "h2", text: "Signs of a strong web development company" },
      { t: "ul", items: ["A portfolio with live, working websites", "A clear process with design approval before development", "Fixed quotes and realistic timelines", "Support and maintenance after launch"] },
      { t: "h2", text: "Technology matters less than you think" },
      { t: "p", text: "WordPress, Laravel, React — each has its place. A good partner recommends technology based on your goals and budget, not on what they happen to prefer." },
      { t: "h2", text: "Building for growth" },
      { t: "p", text: "The best websites are built with SEO, speed and conversion in mind from day one, so marketing works better once you launch." },
    ],
  },
  {
    slug: "wismad-best-website-development-lucknow",
    title: "Why WISMAD Is the Best Website Development Company in Lucknow",
    excerpt: "Ten years, 500+ projects and clients across five countries — here's what makes working with WISMAD different.",
    category: "Web development",
    date: "2026-07-12",
    read: 4,
    image: "/images/team-work.jpg",
    body: [
      { t: "p", text: "Over the past decade we've delivered more than 500 projects for businesses in India, the UK, USA, Canada and Australia. Here's what our clients tell us keeps them coming back." },
      { t: "h2", text: "One team for everything digital" },
      { t: "p", text: "Design, development, hosting, SEO and marketing all happen under one roof. You get one point of contact and a website that's built to be marketed." },
      { t: "h2", text: "Available when you need us" },
      { t: "ul", items: ["24×7 technical support", "Video calls scheduled around your time zone", "Regular progress updates and staging links", "Flexible hourly, fixed-price and dedicated models"] },
      { t: "h2", text: "Part of the WISMAD family" },
      { t: "p", text: "We treat every client as part of the WISMAD family. That means honest advice, clear pricing and long-term relationships rather than one-off projects." },
    ],
  },
  {
    slug: "optimization-an-integral-part-of-website-development-services",
    title: "Optimization — An Integral Part of Website Development Services",
    excerpt: "Speed, SEO and conversion optimisation aren't extras. They're what separate websites that work from websites that just exist.",
    category: "Web development",
    date: "2026-06-24",
    read: 5,
    image: "/images/step-develop.jpg",
    body: [
      { t: "p", text: "A beautiful website that loads slowly or can't be found on Google won't grow your business. Optimisation needs to be part of development, not an afterthought." },
      { t: "h2", text: "Performance optimisation" },
      { t: "ul", items: ["Compress and lazy-load images", "Minimise JavaScript and CSS", "Use caching and a CDN", "Monitor Core Web Vitals"] },
      { t: "h2", text: "Search optimisation" },
      { t: "p", text: "Clean URLs, semantic headings, meta tags, structured data and an XML sitemap help search engines understand and rank your pages." },
      { t: "h2", text: "Conversion optimisation" },
      { t: "p", text: "Clear calls to action, short forms, trust signals and fast checkout turn more visitors into enquiries and sales." },
    ],
  },
  {
    slug: "the-complete-guide-to-seo-copywriting",
    title: "The Complete Guide to SEO Copywriting",
    excerpt: "How to write content that ranks on Google and persuades real people — without sacrificing either.",
    category: "SEO",
    date: "2026-06-02",
    read: 7,
    image: "/images/step-discovery.jpg",
    body: [
      { t: "p", text: "SEO copywriting is the craft of writing content that search engines can understand and people actually want to read. The best content does both." },
      { t: "h2", text: "Start with search intent" },
      { t: "p", text: "Before you write, look at what already ranks. Is the searcher looking to learn, compare or buy? Match your content to that intent." },
      { t: "h2", text: "Structure for scanners" },
      { t: "ul", items: ["One clear H1 with your main keyword", "Descriptive subheadings", "Short paragraphs and bullet lists", "A clear call to action"] },
      { t: "h2", text: "Write for humans first" },
      { t: "p", text: "Use keywords naturally, answer questions directly and add examples. Content that keeps readers engaged sends positive signals to search engines." },
    ],
  },
  {
    slug: "boost-your-content-marketing-strategy-with-visual-storytelling",
    title: "Boost Your Content Marketing Strategy with Visual Storytelling",
    excerpt: "Images, video and design help your message land faster and stick longer. Here's how to use them well.",
    category: "Content",
    date: "2026-05-15",
    read: 5,
    image: "/images/step-design.jpg",
    body: [
      { t: "p", text: "People process visuals far faster than text. Visual storytelling uses images, video, illustration and data graphics to make your message clear and memorable." },
      { t: "h2", text: "Ways to tell stories visually" },
      { t: "ul", items: ["Behind-the-scenes photos of your team", "Short explainer videos and reels", "Infographics that simplify data", "Customer before-and-after stories"] },
      { t: "h2", text: "Keep it on-brand" },
      { t: "p", text: "Consistent colours, fonts and style make your content instantly recognisable in a busy feed." },
    ],
  },
  {
    slug: "5-powerful-tools-in-digital-marketing",
    title: "5 Powerful Tools in Digital Marketing",
    excerpt: "The tools we use every day to research, run and report on campaigns that deliver.",
    category: "Digital marketing",
    date: "2026-04-28",
    read: 4,
    image: "/images/step-launch.jpg",
    body: [
      { t: "p", text: "The right tools make digital marketing faster, smarter and easier to measure. These five are part of our everyday toolkit." },
      { t: "h2", text: "Our top five" },
      { t: "ul", items: ["Google Analytics 4 — understand visitors and conversions", "Google Search Console — monitor search performance", "Google Ads — reach high-intent searchers", "Meta Business Suite — manage Facebook and Instagram", "SEMrush — research keywords and competitors"] },
      { t: "h2", text: "Tools are only half the story" },
      { t: "p", text: "Tools give you data. Strategy and experience turn that data into decisions that grow your business." },
    ],
  },
  {
    slug: "importance-of-hashtag-in-seo-and-smo",
    title: "Social Media Optimization and Hashtags Go Hand in Hand",
    excerpt: "How the right hashtags boost discovery on social platforms and support your wider SEO.",
    category: "SEO",
    date: "2026-04-06",
    read: 4,
    image: "/images/social-post.jpg",
    body: [
      { t: "p", text: "Hashtags help organise content so new audiences can find it. Used strategically, they're one of the simplest ways to grow organic reach." },
      { t: "h2", text: "Hashtag best practices" },
      { t: "ul", items: ["Mix broad, niche and branded hashtags", "Research what your audience follows", "Avoid banned or spammy tags", "Track which tags drive reach"] },
      { t: "h2", text: "Where SMO meets SEO" },
      { t: "p", text: "More shares, mentions and branded searches strengthen your online presence and support visibility in search engines too." },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (d: string) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
