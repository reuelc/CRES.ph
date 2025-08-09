import { ClipboardList, FileText, Home } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import FadeIn from "./fade-in"

type Item = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  bullets: string[]
  imgSrc: string
}

const items: Item[] = [
  {
    icon: ClipboardList,
    title: "Documentation Processing",
    bullets: [
      "Title verification and validation",
      "Document preparation and review",
      "Transfer processing assistance",
      "Legal compliance checking",
      "Workflow optimization & records",
      "Coordination with agencies",
      "Digital document processing",
    ],
    imgSrc: "/placeholder.svg?height=140&width=560",
  },
  {
    icon: FileText,
    title: "Appraisal Services",
    bullets: [
      "Residential, Commercial, Office, Industrial",
      "Market value assessment",
      "Investment analysis",
      "Insurance and tax reports",
      "Due diligence valuations",
    ],
    imgSrc: "/placeholder.svg?height=140&width=560",
  },
]

export default function ServicesB2C() {
  return (
    <section id="services-b2c" className="relative overflow-hidden">
      {/* Warm, welcoming background (soft greens + warm blues, gentle gradients) */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-sky-50" />
      {/* Soft depth glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      {/* Subtle dotted pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="dots-soft" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(16,185,129,.25)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-soft)" />
      </svg>

      <div className="relative container mx-auto px-4 py-20">
        <FadeIn className="max-w-4xl">
          <p className="text-emerald-700 font-semibold tracking-tight">For Property Owners & Buyers</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
            Complete Real Estate Solutions
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Friendly, reliable services that simplify every step of your property journey.
          </p>
        </FadeIn>

        <FadeIn delay={120} className="mt-12 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon || Home
            return (
              <Card key={i} className="overflow-hidden transition transform hover:shadow-lg hover:-translate-y-0.5">
                {/* Colored header with title inside (soft greens) */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
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
