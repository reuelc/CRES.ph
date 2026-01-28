import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { client } from "@/lib/sanity"

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt
  }`
  const data = await client.fetch(query)
  return data
}

export default async function BlogSection({ posts }: { posts?: any[] }) {
  const blogPosts = posts || await getPosts()

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
          {blogPosts.map((p) => (
            <Card key={p._id} className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{p.title}</CardTitle>
                <p className="text-xs text-slate-500">{new Date(p.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-700">{p.excerpt}</p>
                <Link href={`/blog/${p.slug.current}`}>
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
