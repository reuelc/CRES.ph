import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4 rounded-2xl border bg-gradient-to-br from-blue-600 to-blue-700 text-white p-10">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Ready to transform your real estate business?
        </h2>
        <p className="mt-2 text-blue-100">
          Get your Tech Stack Audit and a practical roadmap tailored to your goals.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/contact">
            <Button variant="secondary" className="text-blue-900">
              Get Your Tech Stack Audit
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-blue-900 hover:bg-blue-950">
              Transform Your Real Estate Business
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
