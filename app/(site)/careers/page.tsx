import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

export const metadata = {
  title: "Careers — Join Our Growing Team | CRES.PH",
  description: "Build the future of real estate technology and client services with CRES.PH.",
}

export default function CareersPage() {
  return (
    <div className="w-full">
      {/* Page header similar to Get Started */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="container mx-auto px-4 py-12 relative">
          <h1 className="text-3xl font-bold tracking-tight">Join Our Growing Team</h1>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Help real estate professionals succeed with cutting-edge technology, training, and analytics.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Roles grid */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r, i) => (
            <Card key={i} className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{r.title}</CardTitle>
                <p className="text-xs text-slate-600">{r.location}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-700">{r.blurb}</p>
                <div className="mt-3 flex gap-3">
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">Refer a Friend</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
