import Link from "next/link"
import { X, Facebook, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
        <div>
          <div className="font-bold text-lg">
            <span className="text-blue-700">CRES</span>.PH
          </div>
          <p className="mt-2 text-sm text-slate-600">Empowering Real Estate Success Through Technology.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="X (Twitter)" className="text-slate-600 hover:text-slate-900">
              <X />
            </a>
            <a href="#" aria-label="Facebook" className="text-slate-600 hover:text-slate-900">
              <Facebook />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-slate-600 hover:text-slate-900">
              <Linkedin />
            </a>
            <a href="#" aria-label="YouTube" className="text-slate-600 hover:text-slate-900">
              <Youtube />
            </a>
          </div>
        </div>

        <div className="flex items-end md:justify-end gap-6 text-sm">
          <Link href="/listings" className="text-slate-600 hover:text-slate-900">
            Real Estate Listings
          </Link>
          <Link href="/careers" className="text-slate-600 hover:text-slate-900">
            Career Opportunities
          </Link>
          <Link href="/privacy" className="text-slate-600 hover:text-slate-900">
            Privacy
          </Link>
          <Link href="/terms" className="text-slate-600 hover:text-slate-900">
            Terms
          </Link>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 pb-6">
        &copy; {new Date().getFullYear()} CRES.PH. All rights reserved.
      </div>
    </footer>
  )
}
