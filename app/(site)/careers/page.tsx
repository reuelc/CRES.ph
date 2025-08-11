import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { client } from "@/lib/sanity"

export const metadata = {
  title: "Careers — Join Our Growing Team | CRES.PH",
  description: "Build the future of real estate technology and client services with CRES.PH.",
}

export const revalidate = 60 // revalidate this page every 60 seconds

async function getCareersPageData() {
  const query = `*[_type == "page" && slug.current == "careers"][0] {
    ...,
    pageBuilder[]{
      ...,
      jobs[]->
    }
  }`
  const data = await client.fetch(query)
  return data
}

export default async function CareersPage() {
  const data = await getCareersPageData()

  return (
    <div className="w-full">
      {data.pageBuilder.map((section: any) => {
        if (section._type === 'jobListSection') {
          return (
            <div key={section._key}>
              <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
                <div className="container mx-auto px-4 py-12 relative">
                  <h1 className="text-3xl font-bold tracking-tight">{section.title}</h1>
                  <p className="text-slate-600 mt-2 max-w-2xl">
                    {section.subtitle}
                  </p>
                  <div className="mt-6">
                    <Link href="/contact">
                      <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                    </Link>
                  </div>
                </div>
              </section>

              <section className="container mx-auto px-4 py-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.jobs.map((r: any, i: number) => (
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
        return null
      })}
    </div>
  )
}
