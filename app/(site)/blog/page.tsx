import BlogSection from "@/components/blog-section"
import { client } from "@/lib/sanity"

export const metadata = {
  title: "Blog — Latest Insights & Market Updates | CRES.PH",
}

export const revalidate = 60 // revalidate this page every 60 seconds

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt
  }`
  const data = await client.fetch(query)
  return data
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="w-full">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Latest Insights & Market Updates</h1>
        <p className="text-slate-600 mt-2">
          Ideas, playbooks, and research on real estate technology, marketing, and analytics.
        </p>
      </section>
      <BlogSection posts={posts} />
    </div>
  )
}
