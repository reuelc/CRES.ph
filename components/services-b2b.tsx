import { Bot, Sparkles, Laptop, BarChart3 } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import TechBg from "./tech-bg"
import FadeIn from "./fade-in"

type Item = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  bullets: string[]
  imgSrc: string
}

const items: Item[] = [
  {
    icon: Bot,
    title: "Marketing Automation",
    bullets: [
      "CRM integration and setup",
      "AI-powered lead generation",
      "Email & social automation",
      "Property listing optimization",
    ],
    imgSrc: "/placeholder.svg?height=140&width=560",
  },
  {
    icon: Sparkles,
    title: "AI Implementation",
    bullets: [
      "Custom AIChat integrations",
      "AI-powered property valuations",
      "Automated lead qualification",
      "Smart document processing",
      "Predictive market analytics",
      "AI chatbot development",
    ],
    imgSrc: "/placeholder.svg?height=140&width=560",
  },
  {
    icon: Laptop,
    title: "Tech Stack Review",
    bullets: [
      "Current stack assessment",
      "Software recommendations",
      "Integration planning",
      "Implementation roadmap",
    ],
    imgSrc: "/placeholder.svg?height=140&width=560",
  },
  {
    icon: BarChart3,
    title: "Data Analytics Setup",
    bullets: [
      "Market analysis dashboards",
      "Lead tracking systems",
      "ROI measurement tools",
      "Predictive analytics",
    ],
    imgSrc: "/placeholder.svg?height=140&width=560",
  },
]

export default function ServicesB2B() {
  return (
    <section id="services-b2b" className="relative overflow-hidden">
      {/* Tech-inspired, minimalist background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <TechBg tone="blue" />
      <div className="relative container mx-auto px-4 py-20">
        <FadeIn className="max-w-4xl">
          <p className="text-blue-700 font-semibold tracking-tight">For Real Estate Professionals</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
            Empowering Real Estate with Technology
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Professional services designed for brokers, developers, and property teams.
          </p>
        </FadeIn>

        <FadeIn delay={120} className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <Card key={i} className="overflow-hidden transition transform hover:shadow-lg hover:-translate-y-0.5">
                {/* Colored header with title inside */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                  <div className="flex items-center gap-3 px-5 py-4">
                    <div className="p-2 rounded-md bg-white/10 ring-1 ring-white/20">
                      <Icon className="text-white" />
                    </div>
                    <h3 className="text-base font-semibold tracking-tight leading-none">
                      {it.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="text-sm text-slate-700 pt-4">
                  <img
                    src={it.imgSrc || "/placeholder.svg"}
                    alt={`${it.title} illustration`}
                    className="w-full h-36 object-cover rounded-lg border mb-3"
                  />
                  <ul className="list-disc pl-5 space-y-1">
                    {it.bullets.map((b, idx) => (
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
