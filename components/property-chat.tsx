"use client"

import type React from "react"

import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calculator, Send, PhoneCall, Home } from "lucide-react"

type Role = "bot" | "user"

type Message = {
  id: string
  role: Role
  text?: string
  images?: string[] // image URLs
  render?: "property-cards" | "pricing" | "calculator" | "contact-form" | "amenities" | "map-block" | "aerials"
  options?: string[]
}

function uid() {
  return Math.random().toString(36).slice(2, 9)
}

const IMG = {
  exterior: "/api/placeholder/400/300",
  interior: "/api/placeholder/400/250",
  floor: "/api/placeholder/300/200",
  map: "/api/placeholder/400/250",
  amenity: "/api/placeholder/300/200",
}

const START_OPTIONS = ["See available units", "Check pricing", "Explore location", "Talk to an agent"]

export default function PropertyChat() {
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: uid(),
      role: "bot",
      text: "Hi! I’m your virtual sales assistant. What would you like to explore today?",
      images: [IMG.exterior, IMG.interior],
      options: START_OPTIONS,
    },
  ])
  const [pending, setPending] = useState<string | null>(null)
  const chatRef = useRef<HTMLDivElement | null>(null)

  // Auto-scroll after every interaction
  useEffect(() => {
    document.getElementById("chat-window")?.scrollTo({
      top: document.getElementById("chat-window")!.scrollHeight,
      behavior: "smooth",
    })
  }, [messages])

  // Handlers
  const handleOption = (label: string) => {
    // push user message
    setMessages((prev) => [...prev, { id: uid(), role: "user", text: label }])
    setPending(label)
  }

  useEffect(() => {
    if (!pending) return
    const action = pending
    setPending(null)

    const respond = (msg: Message) => setMessages((prev) => [...prev, { ...msg, id: uid(), role: "bot" }])

    // Route actions
    switch (action) {
      // Top-level
      case "See available units": {
        respond({
          text: "Here are sample units available. Tap a unit to schedule a viewing.",
          render: "property-cards",
          images: [IMG.exterior, IMG.interior, IMG.floor],
          options: ["Schedule viewing", "Check pricing", "Explore location", "Talk to an agent"],
        })
        break
      }
      case "Check pricing": {
        respond({
          text: "Here’s our pricing overview and model home photos. You can also try our quick monthly calculator.",
          render: "pricing",
          images: [IMG.interior, IMG.interior, IMG.floor],
          options: ["Open calculator", "See available units", "Talk to an agent", "Explore location"],
        })
        break
      }
      case "Explore location": {
        respond({
          text: "We’re in a prime area with convenient access to business districts and leisure spots.",
          render: "map-block",
          images: [IMG.map],
          options: ["View location map", "See amenity photos", "Virtual tour", "Schedule visit"],
        })
        break
      }
      case "Talk to an agent": {
        respond({
          text: "Our agents are ready to help. Share a few details and we’ll reach out shortly.",
          render: "contact-form",
          images: [IMG.interior, IMG.exterior],
          options: ["Back to start", "See available units", "Explore location", "Check pricing"],
        })
        break
      }

      // Unit flow → Viewing → Contact
      case "Schedule viewing": {
        respond({
          text: "Great! Let’s book your viewing. Please complete the contact form below.",
          render: "contact-form",
          images: [IMG.exterior],
          options: ["Back to start", "Check pricing", "Explore location"],
        })
        break
      }

      // Pricing flow → Calculator → Contact
      case "Open calculator": {
        respond({
          text: "Estimate your monthly payments with a quick calculator. For exact computation, we’ll follow up.",
          render: "calculator",
          images: [IMG.interior],
          options: ["Contact an advisor", "See available units", "Explore location"],
        })
        break
      }
      case "Contact an advisor": {
        respond({
          text: "Please complete the form and our advisor will contact you.",
          render: "contact-form",
          images: [IMG.interior, IMG.exterior],
          options: ["Back to start", "See available units", "Explore location"],
        })
        break
      }

      // Location specifics (MANDATORY branches)
      case "View location map": {
        respond({
          text: "Here's our prime location with easy beach access",
          images: [IMG.map],
          render: "map-block",
          options: ["See nearby attractions", "Transportation info", "Schedule visit", "Virtual tour"],
        })
        break
      }
      case "See amenity photos": {
        respond({
          text: "Our world-class amenities are designed for luxury living",
          images: [IMG.amenity, IMG.amenity, IMG.amenity],
          render: "amenities",
          options: ["Pool details", "Fitness center tour", "Restaurant info", "Book facilities"],
        })
        break
      }

      // Amenity follow-ups (always offer next steps)
      case "Pool details": {
        respond({
          text: "Infinity lap pool with cabanas and a kids’ play area. Lifeguards on duty weekends.",
          images: [IMG.amenity],
          options: ["Book facilities", "Fitness center tour", "Schedule visit", "Back to start"],
        })
        break
      }
      case "Fitness center tour": {
        respond({
          text: "24/7 access, cardio and strength zones, with certified trainers on select hours.",
          images: [IMG.amenity],
          options: ["Book facilities", "Restaurant info", "Schedule visit", "Back to start"],
        })
        break
      }
      case "Restaurant info": {
        respond({
          text: "On-site bistro with local and international cuisine. Resident discounts available.",
          images: [IMG.amenity],
          options: ["Book facilities", "Schedule visit", "Back to start", "Talk to an agent"],
        })
        break
      }

      // Map follow-ups (always offer next steps)
      case "See nearby attractions": {
        respond({
          text: "Close to beaches, shopping, and business hubs. Ideal for work-life balance.",
          images: [IMG.map, IMG.exterior],
          options: ["Transportation info", "Schedule visit", "Back to start", "Talk to an agent"],
        })
        break
      }
      case "Transportation info": {
        respond({
          text: "Multiple transit options: shuttle stops, UV express, ride-hailing pickup, and secure parking.",
          images: [IMG.map],
          options: ["Schedule visit", "Virtual tour", "Back to start", "Talk to an agent"],
        })
        break
      }
      case "Virtual tour": {
        respond({
          text: "Here’s a preview still from our virtual tour. We can send you the full link after you share your details.",
          images: [IMG.interior, IMG.exterior],
          options: ["Schedule visit", "Contact an advisor", "Back to start", "See available units"],
        })
        break
      }

      // Facility booking & visits lead to contact
      case "Book facilities":
      case "Schedule visit": {
        respond({
          text: "Please complete the booking form and we’ll confirm your schedule.",
          render: "contact-form",
          images: [IMG.amenity],
          options: ["Back to start", "See available units", "Check pricing"],
        })
        break
      }

      // Global option
      case "Back to start": {
        respond({
          text: "What would you like to explore next?",
          images: [IMG.exterior, IMG.interior],
          options: START_OPTIONS,
        })
        break
      }

      default: {
        // Fallback with options to avoid dead ends
        respond({
          text: "I’m here to help with units, pricing, and tours. What would you like to do next?",
          images: [IMG.interior],
          options: START_OPTIONS,
        })
      }
    }
  }, [pending])

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="pb-0">
        <div className="flex items-center gap-3">
          <Home className="text-blue-600" />
          <CardTitle className="text-xl">Virtual Sales Assistant</CardTitle>
        </div>
        <p className="text-sm text-slate-600 mt-2">
          Explore units, pricing, location, and book a visit. Every step offers next actions.
        </p>
      </CardHeader>
      <CardContent>
        <div id="chat-window" ref={chatRef} className="h-[560px] overflow-y-auto pr-1" role="log" aria-live="polite">
          <div className="space-y-6 pt-4">
            {messages.map((m) => (
              <ChatBubble key={m.id} message={m} onOption={handleOption} />
            ))}
          </div>
        </div>

        {/* Quick actions row to avoid dead ends */}
        <div className="mt-4 flex flex-wrap gap-2">
          {START_OPTIONS.map((opt) => (
            <Button key={opt} variant="outline" size="sm" onClick={() => handleOption(opt)}>
              {opt}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ChatBubble({
  message,
  onOption,
}: {
  message: Message
  onOption: (o: string) => void
}) {
  const isBot = message.role === "bot"

  return (
    <div className={`flex ${isBot ? "" : "justify-end"}`}>
      <div
        className={`max-w-[92%] md:max-w-[80%] rounded-2xl p-4 border ${
          isBot ? "bg-white" : "bg-blue-600 text-white border-blue-600"
        }`}
      >
        {!!message.text && (
          <p className={`${isBot ? "text-slate-800" : "text-white"} leading-relaxed`}>{message.text}</p>
        )}

        {/* Visuals for every bot response */}
        {isBot && message.images && message.images.length > 0 && (
          <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
            {message.images.map((src, i) => (
              <img
                key={`${message.id}-img-${i}`}
                src={src || "/placeholder.svg"}
                alt="Preview"
                className="w-full h-28 md:h-32 object-cover rounded-lg border"
              />
            ))}
          </div>
        )}

        {/* Special renders */}
        {isBot && message.render === "property-cards" && <PropertyCards />}
        {isBot && message.render === "pricing" && <PricingBlock />}
        {isBot && message.render === "calculator" && <CalculatorBlock />}
        {isBot && message.render === "contact-form" && <ContactFormInline />}
        {isBot && message.render === "map-block" && <MapBlock />}
        {isBot && message.render === "amenities" && <AmenitiesStrip />}

        {/* Options */}
        {message.options && message.options.length > 0 && (
          <div className={`mt-3 flex flex-wrap gap-2 ${isBot ? "" : "justify-end"}`}>
            {message.options.map((opt) => (
              <Button key={opt} variant={isBot ? "outline" : "secondary"} size="sm" onClick={() => onOption(opt)}>
                {opt}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function PropertyCards() {
  const items = [
    {
      title: "Premium 3BR — BGC View",
      price: "₱28.5M",
      features: ["95 sqm", "3 BR • 2 Bath", "High-floor • Balcony"],
      img: IMG.exterior,
    },
    {
      title: "Modern Townhouse — Alabang",
      price: "₱18.9M",
      features: ["180 sqm", "4 BR • 2 Car Garage", "Gated Village"],
      img: IMG.exterior,
    },
    {
      title: "Commercial — Makati CBD",
      price: "₱250K / mo",
      features: ["120 sqm", "Corner unit", "High foot traffic"],
      img: IMG.exterior,
    },
  ]
  return (
    <div className="mt-4 grid md:grid-cols-2 gap-4">
      {items.map((it, idx) => (
        <Card key={idx} className="overflow-hidden">
          <img src={it.img || "/placeholder.svg"} alt={`${it.title} photo`} className="w-full h-36 object-cover" />
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{it.title}</CardTitle>
              <Badge className="bg-blue-600">{it.price}</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
              {it.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function PricingBlock() {
  return (
    <div className="mt-4">
      <div className="overflow-hidden rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr className="text-left">
              <th className="p-3">Model</th>
              <th className="p-3">Area</th>
              <th className="p-3">Price</th>
              <th className="p-3">Promo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">2BR City</td>
              <td className="p-3">65 sqm</td>
              <td className="p-3">₱12.9M</td>
              <td className="p-3">Free AC units</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">3BR Premier</td>
              <td className="p-3">95 sqm</td>
              <td className="p-3">₱28.5M</td>
              <td className="p-3">Low DP option</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Townhouse Alabang</td>
              <td className="p-3">180 sqm</td>
              <td className="p-3">₱18.9M</td>
              <td className="p-3">Free appraisal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <img
          src={IMG.interior || "/placeholder.svg"}
          alt="Model home"
          className="w-full h-28 object-cover rounded-lg border"
        />
        <img
          src={IMG.interior || "/placeholder.svg"}
          alt="Model home"
          className="w-full h-28 object-cover rounded-lg border"
        />
      </div>
    </div>
  )
}

function CalculatorBlock() {
  const [price, setPrice] = useState(12000000)
  const [dp, setDp] = useState(20) // %
  const [years, setYears] = useState(15)
  const [rate, setRate] = useState(7) // %

  const monthly = useMemo(() => {
    // Amortization formula
    const principal = price * (1 - dp / 100)
    const r = rate / 100 / 12
    const n = years * 12
    if (r === 0) return principal / n
    return (principal * r) / (1 - Math.pow(1 + r, -n))
  }, [price, dp, years, rate])

  return (
    <div className="mt-4 border rounded-lg p-3 bg-slate-50">
      <div className="grid sm:grid-cols-4 gap-3">
        <div>
          <Label htmlFor="price">Price (₱)</Label>
          <Input id="price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        </div>
        <div>
          <Label htmlFor="dp">Down Payment (%)</Label>
          <Input id="dp" type="number" value={dp} onChange={(e) => setDp(Number(e.target.value))} />
        </div>
        <div>
          <Label htmlFor="years">Years</Label>
          <Input id="years" type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
        </div>
        <div>
          <Label htmlFor="rate">Interest (%)</Label>
          <Input id="rate" type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 text-slate-700">
        <Calculator className="text-blue-600" />
        Estimated Monthly: <span className="font-semibold">₱{Math.round(monthly).toLocaleString()}</span>
      </div>
    </div>
  )
}

function MapBlock() {
  return (
    <div className="mt-3 grid md:grid-cols-3 gap-3">
      <img
        src={IMG.map || "/placeholder.svg"}
        alt="Map"
        className="w-full h-28 object-cover rounded-lg border md:col-span-2"
      />
      <img
        src={IMG.exterior || "/placeholder.svg"}
        alt="Aerial"
        className="w-full h-28 object-cover rounded-lg border"
      />
      <img
        src={IMG.amenity || "/placeholder.svg"}
        alt="Amenity"
        className="w-full h-28 object-cover rounded-lg border"
      />
      <img
        src={IMG.exterior || "/placeholder.svg"}
        alt="Surroundings"
        className="w-full h-28 object-cover rounded-lg border"
      />
      <img
        src={IMG.amenity || "/placeholder.svg"}
        alt="Lifestyle"
        className="w-full h-28 object-cover rounded-lg border"
      />
    </div>
  )
}

function AmenitiesStrip() {
  return (
    <div className="mt-3 grid grid-cols-3 gap-3">
      <img
        src={IMG.amenity || "/placeholder.svg"}
        alt="Amenity"
        className="w-full h-28 object-cover rounded-lg border"
      />
      <img
        src={IMG.amenity || "/placeholder.svg"}
        alt="Amenity"
        className="w-full h-28 object-cover rounded-lg border"
      />
      <img
        src={IMG.amenity || "/placeholder.svg"}
        alt="Amenity"
        className="w-full h-28 object-cover rounded-lg border"
      />
    </div>
  )
}

function ContactFormInline() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<boolean | null>(null)

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
      })
      setOk(res.ok)
      if (res.ok) {
        ;(e.target as HTMLFormElement).reset()
      }
    } catch {
      setOk(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="mt-3 grid sm:grid-cols-2 gap-3">
      <div className="sm:col-span-2">
        <Label htmlFor="intent">I’m interested in</Label>
        <Input id="intent" name="intent" placeholder="Viewing / Pricing / Facilities / Consultation" />
      </div>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Juan Dela Cruz" required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="you@email.com" required />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" placeholder="+63 9XX XXX XXXX" />
      </div>
      <div>
        <Label htmlFor="schedule">Preferred date</Label>
        <Input id="schedule" name="schedule" type="date" />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={3} placeholder="Tell us your goals..." />
      </div>
      <div className="sm:col-span-2 flex gap-3">
        <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700">
          <Send className="mr-2 h-4 w-4" />
          {loading ? "Submitting..." : "Submit"}
        </Button>
        <Button variant="outline">
          <PhoneCall className="mr-2 h-4 w-4" />
          Request a call
        </Button>
      </div>
      {ok === true && (
        <p className="sm:col-span-2 text-sm text-green-600">
          Thanks! We’ve received your details. Would you like to see available units or explore the location?
        </p>
      )}
      {ok === false && <p className="sm:col-span-2 text-sm text-red-600">Something went wrong. Please try again.</p>}
    </form>
  )
}
