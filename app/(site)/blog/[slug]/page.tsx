import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { client } from "@/lib/sanity"
import { Button } from "@/components/ui/button"
import { PortableText } from '@/components/portable-text'
import { urlFor } from "@/lib/sanity-image"

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{"slug": slug.current}`)
  return posts.map((p: { slug: string }) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{title, excerpt}`, { slug: params.slug })
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

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author->{name, image},
    mainImage,
    body
  }`
  const data = await client.fetch(query, { slug })
  return data
}

export default async function BlogArticlePage({ params }: Props) {
  const post = await getPost(params.slug)
  if (!post) return notFound()

  return (
    <article className="w-full">
      {/* Hero image */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-900/0 pointer-events-none" />
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).width(1280).height(560).url()}
            alt={`${post.title} hero image`}
            width={1280}
            height={560}
            className="w-full h-[260px] sm:h-[360px] object-cover"
            priority
          />
        )}
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-wide text-blue-700">CRES.PH Insights</p>
          <p className="text-xs text-slate-500">{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{post.title}</h1>
        <p className="mt-3 text-slate-600">{post.excerpt}</p>

        <div className="prose prose-slate max-w-none mt-6">
          <PortableText value={post.body} />
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
