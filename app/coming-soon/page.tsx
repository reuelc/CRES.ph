import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

async function subscribe(formData: FormData) {
  "use server"
  const email = String(formData.get("email") || "")
  await fetch("/api/notify", {
    method: "POST",
    body: JSON.stringify({ email }),
  })
}

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white flex items-center">
      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Badge variant="secondary" className="text-blue-800">CRES.PH</Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
            We&apos;re preparing something great.
          </h1>
          <p className="mt-4 text-blue-100 max-w-xl">
            Empowering Real Estate Success Through Technology. Join the waitlist
            and we&apos;ll notify you when we go live.
          </p>
          <form action={subscribe} className="mt-6 flex gap-2 max-w-md">
            <Input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="bg-white/95 text-slate-900"
              aria-label="Email for launch notification"
            />
            <Button type="submit" variant="secondary" className="text-blue-900">
              Notify Me
            </Button>
          </form>
          <p className="mt-3 text-blue-100">
            Estimated launch: Q4 2025 • For urgent inquiries:{" "}
            <a className="underline" href="mailto:hello@cres.ph">
              hello@cres.ph
            </a>
          </p>
          <div className="mt-8">
            <Link href="/admin" className="underline text-blue-100">
              Admin Panel
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src="/placeholder.svg?height=520&width=640"
            alt="Modern real estate technology illustration"
            className="rounded-xl border-white/20 border shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
