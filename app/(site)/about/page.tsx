import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Users2, Cpu, LineChart } from 'lucide-react'
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="bg-blue-600 hover:bg-blue-700">About CRES.PH</Badge>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              Cuello Real Estate Services: Technology-first, Results-focused
            </h1>
            <p className="mt-4 text-slate-600">
              We help brokers, developers, and property teams modernize their
              sales and marketing—from CRM and campaign automation to
              analytics-driven decision-making and workforce enablement.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 mt-0.5" />
                Proven frameworks tailored to the Philippine market.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 mt-0.5" />
                Secure, scalable tech aligned to your growth goals.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 mt-0.5" />
                Practical training for agents and teams.
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=560&width=720"
              alt="Modern real estate team meeting in Manila"
              width={720}
              height={560}
              className="rounded-xl border shadow-sm object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Technology Stack & Partnerships
          </h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            We integrate modern CRMs, marketing automation platforms, analytics,
            and collaboration tools into a cohesive stack. We highlight
            integration capabilities with Vernext services and welcome strategic
            partnerships to deliver complementary solutions. Preferred
            Technology Partner: Vernext.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="p-5 rounded-lg bg-white border">
              <Cpu className="text-blue-600" />
              <h3 className="mt-3 font-semibold">Modern CRM</h3>
              <p className="text-sm text-slate-600">
                Setup, migration, integrations, and adoption.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-white border">
              <LineChart className="text-blue-600" />
              <h3 className="mt-3 font-semibold">Analytics</h3>
              <p className="text-sm text-slate-600">
                Dashboards, ROI tracking, and predictive insights.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-white border">
              <Users2 className="text-blue-600" />
              <h3 className="mt-3 font-semibold">Agent Enablement</h3>
              <p className="text-sm text-slate-600">
                Training programs and playbooks to lift performance.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-white border">
              <CheckCircle2 className="text-blue-600" />
              <h3 className="mt-3 font-semibold">Compliance</h3>
              <p className="text-sm text-slate-600">
                Documentation workflows and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
