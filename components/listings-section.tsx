import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin } from 'lucide-react'
import Link from "next/link"

const listings = [
  {
    title: "Luxury Condo in BGC",
    price: "₱28,500,000",
    location: "BGC, Taguig",
    features: ["95 sqm", "3 BR", "2 Bath", "High-floor"],
    img: "/placeholder.svg?height=220&width=400",
  },
  {
    title: "Modern Townhouse in Alabang",
    price: "₱18,900,000",
    location: "Alabang, Muntinlupa",
    features: ["180 sqm", "4 BR", "2 Car Garage", "Gated village"],
    img: "/placeholder.svg?height=220&width=400",
  },
  {
    title: "Commercial Space in Makati CBD",
    price: "₱250,000 / mo",
    location: "Makati, Metro Manila",
    features: ["120 sqm", "Corner unit", "High foot traffic"],
    img: "/placeholder.svg?height=220&width=400",
  },
  {
    title: "Residential Lot in Laguna",
    price: "₱6,500,000",
    location: "Sta. Rosa, Laguna",
    features: ["300 sqm", "Clean title", "Near schools and malls"],
    img: "/placeholder.svg?height=220&width=400",
  },
]

export default function ListingsSection() {
  return (
    <section id="listings" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Properties</h2>
          <Link href="/listings" className="hidden sm:inline-flex">
            <Button variant="outline">View All Listings</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((l, i) => (
            <Card key={i} className="overflow-hidden">
              <img
                src={l.img || "/placeholder.svg"}
                alt={`${l.title} photo`}
                className="w-full h-44 object-cover"
              />
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
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link href="/listings">
            <Button className="w-full" variant="outline">View All Listings</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
