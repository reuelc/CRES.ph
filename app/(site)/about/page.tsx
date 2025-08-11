import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Users2, Cpu, LineChart } from 'lucide-react'
import Image from "next/image"
import { client } from "@/lib/sanity"
import { urlFor } from "@/lib/sanity-image"

export const revalidate = 60 // revalidate this page every 60 seconds

async function getAboutPageData() {
  const query = `*[_type == "page" && slug.current == "about"][0] {
    ...,
    pageBuilder[]{
      ...,
      features[]{
        ...
      }
    }
  }`
  const data = await client.fetch(query)
  return data
}

const icons: { [key: string]: React.ComponentType<any> } = {
  CheckCircle2,
  Users2,
  Cpu,
  LineChart,
}

export default async function AboutPage() {
  const data = await getAboutPageData()

  return (
    <div className="w-full">
      {data.pageBuilder.map((section: any) => {
        if (section._type === 'heroSection') {
          return (
            <section key={section._key} className="container mx-auto px-4 py-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <Badge className="bg-blue-600 hover:bg-blue-700">{section.badge}</Badge>
                  <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
                    {section.title}
                  </h1>
                  <p className="mt-4 text-slate-600">
                    {section.subtitle}
                  </p>
                  <ul className="mt-6 space-y-3 text-slate-700">
                    {section.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  {section.image && (
                    <Image
                      src={urlFor(section.image).width(720).height(560).url()}
                      alt={section.title}
                      width={720}
                      height={560}
                      className="rounded-xl border shadow-sm object-cover w-full h-auto"
                    />
                  )}
                </div>
              </div>
            </section>
          )
        }
        if (section._type === 'featureGridSection') {
          return (
            <section key={section._key} className="bg-slate-50 py-14">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <p className="mt-3 text-slate-600 max-w-3xl">
                  {section.subtitle}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  {section.features.map((feature: any, i: number) => {
                    const Icon = icons[feature.icon]
                    return (
                      <div key={i} className="p-5 rounded-lg bg-white border">
                        {Icon && <Icon className="text-blue-600" />}
                        <h3 className="mt-3 font-semibold">{feature.title}</h3>
                        <p className="text-sm text-slate-600">
                          {feature.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          )
        }
        return null
      })}
    </div>
  )
}
