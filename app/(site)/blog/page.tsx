import BlogSection from "@/components/blog-section"

export const metadata = {
  title: "Blog — Latest Insights & Market Updates | CRES.PH",
}

export default function BlogPage() {
  return (
    <div className="w-full">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Latest Insights & Market Updates</h1>
        <p className="text-slate-600 mt-2">
          Ideas, playbooks, and research on real estate technology, marketing, and analytics.
        </p>
      </section>
      <BlogSection />
    </div>
  )
}
