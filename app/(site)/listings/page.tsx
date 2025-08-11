import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import Link from "next/link"
import { client } from "@/lib/sanity"
import { urlFor } from "@/lib/sanity-image"

export const metadata = {
  title: "Featured Properties | CRES.PH",
  description: "Discover featured properties across Metro Manila and nearby provinces.",
}

export const revalidate = 60 // revalidate this page every 60 seconds

async function getListingsPageData() {
  const query = `*[_type == "page" && slug.current == "listings"][0] {
    ...,
    pageBuilder[]{
      ...,
      listings[]->
    }
  }`
  const data = await client.fetch(query)
  return data
}

export default async function ListingsPage() {
  const data = await getListingsPageData()

  return (
    <div className="w-full">
      {data.pageBuilder.map((section: any) => {
        if (section._type === 'listingListSection') {
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
                      <Button className="bg-blue-600 hover:bg-blue-700">Talk to an Advisor</Button>
                    </Link>
                  </div>
                </div>
              </section>

              <section className="container mx-auto px-4 py-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.listings.map((l: any, i: number) => (
                    <Card key={i} className="overflow-hidden">
                      {l.image && (
                        <img src={urlFor(l.image).width(720).height(360).url()} alt={`${l.title} photo`} className="w-full h-48 object-cover" />
                      )}
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{l.title}</CardTitle>
                          <Badge className="bg-blue-600 hover:bg-blue-700">{l.price}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <MapPin className="h-3.5 w-3.5" />
                          {l.location}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                          {l.features.map((f: string, idx: number) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                        <div className="mt-3">
                          <Button variant="outline" className="w-full bg-transparent">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700">Schedule Viewing</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">List Your Property</Button>
                  </Link>
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
