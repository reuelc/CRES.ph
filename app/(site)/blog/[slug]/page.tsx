import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { posts } from "@/content/posts"
import { Button } from "@/components/ui/button"

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | CRES.PH`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default function BlogArticlePage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <article className="w-full">
      {/* Hero image */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-900/0 pointer-events-none" />
        <Image
          src={post.hero || "/placeholder.svg"}
          alt={`${post.title} hero image`}
          width={1280}
          height={560}
          className="w-full h-[260px] sm:h-[360px] object-cover"
          priority
        />
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-wide text-blue-700">CRES.PH Insights</p>
          <p className="text-xs text-slate-500">{post.date}</p>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{post.title}</h1>
        <p className="mt-3 text-slate-600">{post.excerpt}</p>

        <div className="prose prose-slate max-w-none mt-6">
          {post.content.map((block, i) => {
            if (block.kind === "p") {
              return (
                <p key={i} className="text-slate-800 leading-relaxed">
                  {block.text}
                </p>
              )
            }
            if (block.kind === "h2") {
              return (
                <h2 key={i} className="text-xl font-semibold tracking-tight mt-6">
                  {block.text}
                </h2>
              )
            }
            if (block.kind === "ul") {
              return (
                <ul key={i} className="list-disc pl-5 space-y-1 text-slate-700">
                  {block.items.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              )
            }
            return null
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/blog">
            <Button variant="outline">Back to Blog</Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700">Schedule Free Consultation</Button>
          </Link>
        </div>
      </section>
    </article>
  )
}
