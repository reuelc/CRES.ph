import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Laptop, GraduationCap, ClipboardList, BarChart3, FileText, Building2 } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: "Marketing Campaign Automation",
    bullets: [
      "CRM integration and setup",
      "Real estate website development",
      "AI-powered lead generation",
      "Email marketing automation",
      "Social media campaign management",
      "Property listing optimization",
    ],
  },
  {
    icon: GraduationCap,
    title: "Real Estate Sales & Marketing Training",
    bullets: [
      "Digital marketing strategies for agents",
      "CRM utilization workshops",
      "Lead conversion techniques",
      "Social media marketing for real estate",
      "Technology adoption training",
      "Sales funnel optimization",
    ],
  },
  {
    icon: Laptop,
    title: "Technology Stack Review & Evaluation",
    bullets: [
      "Current tech stack assessment",
      "Software recommendations",
      "Integration planning",
      "Performance optimization",
      "Cost-benefit analysis",
      "Implementation roadmap",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics Setup",
    bullets: [
      "Market analysis dashboards",
      "Lead tracking systems",
      "ROI measurement tools",
      "Performance reporting",
      "Predictive analytics",
      "Custom KPI tracking",
    ],
  },
  {
    icon: ClipboardList,
    title: "Title Documentation Processing",
    bullets: [
      "Title verification and validation",
      "Document preparation and review",
      "Transfer processing assistance",
      "Legal compliance checking",
      "Documentation workflow optimization",
      "Record management systems",
      "Coordination with government agencies",
      "Digital document processing",
    ],
  },
  {
    icon: FileText,
    title: "Real Estate Appraisal Services",
    bullets: [
      "Residential: homes, condos, townhouses",
      "Commercial: retail, hotels, restaurants",
      "Office: corporate, co-working, mixed-use",
      "Industrial: warehouses, logistics centers",
      "Market value assessment",
      "Investment property analysis",
      "Insurance appraisal reports",
      "Tax assessment support",
      "Due diligence valuations",
    ],
  },
]

export default function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {services.map((s, idx) => {
        const Icon = s.icon || Building2
        return (
          <Card key={idx} className="h-full">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Icon className="text-blue-600" />
                <CardTitle className="text-lg">{s.title}</CardTitle>
              </div>
              {idx === 0 && (
                <div className="mt-2">
                  <Badge className="bg-blue-600 hover:bg-blue-700">
                    Preferred Partner: Vernext
                  </Badge>
                </div>
              )}
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              <ul className="list-none pl-0 space-y-2" role="list">
                {s.bullets.map((b, i) => (
                  <li key={i} className="relative pl-6 leading-relaxed text-slate-700">
                    <span
                      className="absolute left-0 top-2 size-2 rounded-full bg-[#2563eb]"
                      aria-hidden="true"
                    />
                    <span>{typeof b === "string" ? b : b.label}</span>
                    {typeof b === "object" && Array.isArray((b as any).subs) && (b as any).subs.length > 0 && (
                      <ul className="mt-2 ml-4 list-disc pl-4 space-y-1 text-[0.92rem] text-slate-600">
                        {(b as any).subs.map((sb: string, si: number) => (
                          <li key={si}>{sb}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
