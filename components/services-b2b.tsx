import { Bot, Sparkles, Laptop, BarChart3 } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import TechBg from "./tech-bg"
import FadeIn from "./fade-in"
import { urlFor } from '@/lib/sanity-image'

const icons: { [key: string]: React.ComponentType<any> } = {
  Bot,
  Sparkles,
  Laptop,
  BarChart3,
}

export default function ServicesB2B({ data }: { data: any }) {
  return (
    <section id="services-b2b" className="relative overflow-hidden">
      {/* Tech-inspired, minimalist background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <TechBg tone="blue" />
      <div className="relative container mx-auto px-4 py-20">
        <FadeIn className="max-w-4xl">
          <p className="text-blue-700 font-semibold tracking-tight">{data.title}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
            {data.subtitle}
          </h2>
        </FadeIn>

        <FadeIn delay={120} className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {data.services.map((it: any, i: number) => {
            const Icon = icons[it.icon]
            return (
              <Card key={i} className="overflow-hidden transition transform hover:shadow-lg hover:-translate-y-0.5">
                {/* Colored header with title inside */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                  <div className="flex items-center gap-3 px-5 py-4">
                    <div className="p-2 rounded-md bg-white/10 ring-1 ring-white/20">
                      {Icon && <Icon className="text-white" />}
                    </div>
                    <h3 className="text-base font-semibold tracking-tight leading-none">
                      {it.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="text-sm text-slate-700 pt-4">
                  {it.image && (
                    <img
                      src={urlFor(it.image).width(560).height(140).url()}
                      alt={`${it.title} illustration`}
                      className="w-full h-36 object-cover rounded-lg border mb-3"
                    />
                  )}
                  <ul className="list-disc pl-5 space-y-1">
                    {it.bullets.map((b: string, idx: number) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </FadeIn>
      </div>
    </section>
  )
}
