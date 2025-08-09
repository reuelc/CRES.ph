import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const posts = [
  {
    slug: "ai-revolution-philippine-real-estate",
    title: "AI Revolution in Philippine Real Estate: What Agents Need to Know",
    excerpt: "From AI chat to predictive valuations—how technology is reshaping agent workflows in the Philippines.",
    date: "Aug 2025",
  },
  {
    slug: "top-5-crm-features-for-real-estate-teams",
    title: "Top 5 CRM Features Every Real Estate Team Should Use",
    excerpt: "The essential capabilities to streamline pipelines, nurture leads, and close more deals.",
    date: "Aug 2025",
  },
  {
    slug: "digital-marketing-trends-manila-property-market",
    title: "Digital Marketing Trends Shaping Manila's Property Market",
    excerpt: "What’s working across social, search, and content for property teams today.",
    date: "Jul 2025",
  },
  {
    slug: "how-automation-can-double-real-estate-sales",
    title: "How Automation Can Double Your Real Estate Sales",
    excerpt: "Proven automation scenarios that reduce manual work and increase conversion rates.",
    date: "Jul 2025",
  },
  {
    slug: "tech-stack-essentials-modern-real-estate",
    title: "Tech Stack Essentials for Modern Real Estate Businesses",
    excerpt: "Choosing the right tools for CRM, analytics, and collaboration.",
    date: "Jun 2025",
  },
  {
    slug: "data-analytics-better-property-valuations",
    title: "Data Analytics: The Secret to Better Property Valuations",
    excerpt: "How dashboards and KPIs can unlock more accurate valuations and insights.",
    date: "May 2025",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Latest Insights & Market Updates</h2>
          <Link href="/blog" className="hidden sm:inline-flex">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Card key={i} className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{p.title}</CardTitle>
                <p className="text-xs text-slate-500">{p.date}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-700">{p.excerpt}</p>
                <Link href={`/blog/${p.slug}`}>
                  <Button variant="link" className="mt-2 pl-0 text-blue-700">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link href="/blog">
            <Button className="w-full bg-transparent" variant="outline">
              View All
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
