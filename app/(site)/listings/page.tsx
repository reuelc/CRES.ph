import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import Link from "next/link"

const listings = [
  {
    title: "Luxury Condo in BGC",
    price: "₱28,500,000",
    location: "BGC, Taguig",
    features: ["95 sqm", "3 BR", "2 Bath", "High-floor"],
    img: "/placeholder.svg?height=360&width=720",
  },
  {
    title: "Modern Townhouse in Alabang",
    price: "₱18,900,000",
    location: "Alabang, Muntinlupa",
    features: ["180 sqm", "4 BR", "2 Car Garage", "Gated village"],
    img: "/placeholder.svg?height=360&width=720",
  },
  {
    title: "Commercial Space in Makati CBD",
    price: "₱250,000 / mo",
    location: "Makati, Metro Manila",
    features: ["120 sqm", "Corner unit", "High foot traffic"],
    img: "/placeholder.svg?height=360&width=720",
  },
  {
    title: "Residential Lot in Laguna",
    price: "₱6,500,000",
    location: "Sta. Rosa, Laguna",
    features: ["300 sqm", "Clean title", "Near schools and malls"],
    img: "/placeholder.svg?height=360&width=720",
  },
]

export const metadata = {
  title: "Featured Properties | CRES.PH",
  description: "Discover featured properties across Metro Manila and nearby provinces.",
}

export default function ListingsPage() {
  return (
    <div className="w-full">
      {/* Page header similar to Get Started */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="container mx-auto px-4 py-12 relative">
          <h1 className="text-3xl font-bold tracking-tight">Featured Properties</h1>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Explore a curated selection of properties across Metro Manila and nearby provinces.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Talk to an Advisor</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Listings grid */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((l, i) => (
            <Card key={i} className="overflow-hidden">
              <img src={l.img || "/placeholder.svg"} alt={`${l.title} photo`} className="w-full h-48 object-cover" />
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
                  {l.features.map((f, idx) => (
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
