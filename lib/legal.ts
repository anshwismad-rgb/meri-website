import type { Block } from "./blog";

// NOTE: These are starter texts. Replace them with the policies currently
// published on wismad.com (or reviewed by your legal advisor) before launch.
export type LegalPage = { slug: string; title: string; updated: string; intro: string; body: Block[] };

export const legalPages: LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy policy",
    updated: "2026-09-01",
    intro: "How WISMAD collects, uses and protects the information you share with us.",
    body: [
      { t: "h2", text: "Information we collect" },
      { t: "p", text: "When you fill in a form, call or email us, we collect details such as your name, phone number, email address and the information you choose to share about your project." },
      { t: "h2", text: "How we use it" },
      { t: "ul", items: ["To respond to your enquiry and provide our services", "To send quotes, invoices and project updates", "To improve our website and services", "To send marketing messages, only if you opt in"] },
      { t: "h2", text: "Cookies & analytics" },
      { t: "p", text: "Our website uses cookies and analytics tools to understand how visitors use it. You can control cookies through your browser settings." },
      { t: "h2", text: "Sharing your data" },
      { t: "p", text: "We do not sell your personal information. We share it only with service providers who help us run our business, and only as needed." },
      { t: "h2", text: "Your rights" },
      { t: "p", text: "You can ask to access, correct or delete your personal data at any time by emailing support@wismad.com." },
    ],
  },
  {
    slug: "terms-condition",
    title: "Terms & conditions",
    updated: "2026-09-01",
    intro: "The terms that apply when you use this website or engage WISMAD for services.",
    body: [
      { t: "h2", text: "Use of this website" },
      { t: "p", text: "By using this website you agree to these terms. WISMAD reserves the right to disable or terminate access for any user found in violation of them." },
      { t: "h2", text: "Services & proposals" },
      { t: "p", text: "The scope, timeline and cost of each project are set out in a written proposal. Work outside that scope is quoted separately." },
      { t: "h2", text: "Payments" },
      { t: "ul", items: ["Payments are due as per the milestones in your proposal", "Delays in payment may pause project work", "All prices are exclusive of applicable taxes unless stated"] },
      { t: "h2", text: "Intellectual property" },
      { t: "p", text: "On full payment, ownership of the final deliverables transfers to the client. Third-party assets remain subject to their own licences." },
      { t: "h2", text: "Limitation of liability" },
      { t: "p", text: "WISMAD is not liable for indirect or consequential losses arising from the use of this website or our services." },
    ],
  },
  {
    slug: "refund-policy",
    title: "Refund policy",
    updated: "2026-09-01",
    intro: "Our policy on payments, cancellations and refunds.",
    body: [
      { t: "h2", text: "Payments" },
      { t: "p", text: "Once payment is made for a service or milestone, it is non-refundable." },
      { t: "h2", text: "Postponed or cancelled projects" },
      { t: "p", text: "If a project is postponed or cancelled by the client, amounts already paid are retained. Where applicable, payment for work completed beyond what has been paid is due from the client." },
      { t: "h2", text: "Questions" },
      { t: "p", text: "If you have questions about a payment, contact us at support@wismad.com and we'll be happy to help." },
    ],
  },
  {
    slug: "legal-disclaimer",
    title: "Legal disclaimer",
    updated: "2026-09-01",
    intro: "Important information about the content published on this website.",
    body: [
      { t: "h2", text: "General information" },
      { t: "p", text: "The content on this website is provided for general information only. While we work to keep it accurate and up to date, we make no guarantees about its completeness or accuracy." },
      { t: "h2", text: "Results" },
      { t: "p", text: "Case studies and figures describe results achieved for specific clients. Results vary by business, market and budget, and are not guaranteed." },
      { t: "h2", text: "External links" },
      { t: "p", text: "This website may link to external sites. WISMAD is not responsible for the content or practices of those websites." },
    ],
  },
];

export const legalBySlug = (slug: string) => legalPages.find((l) => l.slug === slug);
