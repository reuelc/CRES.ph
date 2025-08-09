import PropertyChat from "@/components/property-chat"

export const metadata = {
  title: "Virtual Sales Assistant | CRES.PH",
  description:
    "Explore units, pricing, location, and schedule a visit with our interactive assistant. No dead ends and full visuals.",
}

export default function ChatPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PropertyChat />
    </div>
  )
}
