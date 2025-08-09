export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  hero: string
  content: Array<{ kind: "p"; text: string } | { kind: "h2"; text: string } | { kind: "ul"; items: string[] }>
}

export const posts: Post[] = [
  {
    slug: "ai-revolution-philippine-real-estate",
    title: "AI Revolution in Philippine Real Estate: What Agents Need to Know",
    excerpt: "From AI chat to predictive valuations—how technology is reshaping agent workflows in the Philippines.",
    date: "Aug 2025",
    hero: "/placeholder.svg?height=560&width=1280",
    content: [
      { kind: "p", text: "Artificial intelligence is transforming the real estate industry across the Philippines." },
      { kind: "h2", text: "Key Opportunities" },
      {
        kind: "ul",
        items: [
          "AI chat assistants for faster lead qualification",
          "Predictive pricing and valuation models",
          "Automated marketing and content generation",
        ],
      },
      {
        kind: "p",
        text: "Teams that adopt AI responsibly gain a decisive advantage in speed-to-lead and conversion.",
      },
    ],
  },
  {
    slug: "top-5-crm-features-for-real-estate-teams",
    title: "Top 5 CRM Features Every Real Estate Team Should Use",
    excerpt: "The essential capabilities to streamline pipelines, nurture leads, and close more deals.",
    date: "Aug 2025",
    hero: "/placeholder.svg?height=560&width=1280",
    content: [
      { kind: "p", text: "CRMs remain the backbone of modern real estate operations." },
      { kind: "h2", text: "Must-Have Features" },
      {
        kind: "ul",
        items: ["Pipeline stages", "Automations", "Integrations", "Reporting", "Mobile accessibility"],
      },
    ],
  },
  {
    slug: "digital-marketing-trends-manila-property-market",
    title: "Digital Marketing Trends Shaping Manila's Property Market",
    excerpt: "What’s working across social, search, and content for property teams today.",
    date: "Jul 2025",
    hero: "/placeholder.svg?height=560&width=1280",
    content: [
      { kind: "p", text: "Manila’s fast-moving market rewards teams who iterate quickly." },
      { kind: "h2", text: "Trends" },
      { kind: "ul", items: ["Short-form video", "SEO for long-tail neighborhoods", "Lead magnets & webinars"] },
    ],
  },
  {
    slug: "how-automation-can-double-real-estate-sales",
    title: "How Automation Can Double Your Real Estate Sales",
    excerpt: "Proven automation scenarios that reduce manual work and increase conversion rates.",
    date: "Jul 2025",
    hero: "/placeholder.svg?height=560&width=1280",
    content: [
      { kind: "p", text: "Automation multiplies your team’s output without adding headcount." },
      {
        kind: "ul",
        items: ["Instant lead response", "Smart drip campaigns", "Auto-SLA escalations to agents"],
      },
    ],
  },
  {
    slug: "tech-stack-essentials-modern-real-estate",
    title: "Tech Stack Essentials for Modern Real Estate Businesses",
    excerpt: "Choosing the right tools for CRM, analytics, and collaboration.",
    date: "Jun 2025",
    hero: "/placeholder.svg?height=560&width=1280",
    content: [
      { kind: "p", text: "A cohesive stack keeps teams aligned and data consistent." },
      {
        kind: "ul",
        items: ["CRM", "Marketing automation", "Analytics", "Document workflows", "Collaboration tools"],
      },
    ],
  },
  {
    slug: "data-analytics-better-property-valuations",
    title: "Data Analytics: The Secret to Better Property Valuations",
    excerpt: "How dashboards and KPIs can unlock more accurate valuations and insights.",
    date: "May 2025",
    hero: "/placeholder.svg?height=560&width=1280",
    content: [
      { kind: "p", text: "Data-driven valuations improve confidence for buyers and sellers." },
      { kind: "h2", text: "What to Track" },
      { kind: "ul", items: ["Comps", "Absorption rates", "Lead sources", "Marketing ROI"] },
    ],
  },
]
