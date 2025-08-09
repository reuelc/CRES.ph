import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const roles = [
  {
    title: "Real Estate Technology Consultant",
    location: "Makati • Hybrid",
    blurb: "Guide clients through CRM, automation, and analytics transformation.",
  },
  {
    title: "Digital Marketing Specialist",
    location: "Taguig • Hybrid",
    blurb: "Plan and launch performance campaigns for acquisition and lead growth.",
  },
  {
    title: "CRM Implementation Expert",
    location: "Remote • PH",
    blurb: "Integrate, migrate, and optimize CRMs for real estate teams.",
  },
  {
    title: "Property Appraisal Analyst",
    location: "Makati • On-site",
    blurb: "Support valuation projects with market data and reporting.",
  },
]

export default function CareersSection() {
  return (
    <section id="careers" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Join Our Growing Team</h2>
          <Link href="/careers" className="hidden sm:inline-flex">
            <Button variant="outline">Explore Roles</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((r, i) => (
            <Card key={i} className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{r.title}</CardTitle>
                <p className="text-xs text-slate-600">{r.location}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-700">{r.blurb}</p>
                <Link href="/careers">
                  <Button variant="link" className="mt-2 pl-0 text-blue-700">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link href="/careers">
            <Button className="w-full" variant="outline">Explore Roles</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
