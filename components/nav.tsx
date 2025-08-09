"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const links = [
  { href: "/#services-b2b", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight" aria-label="CRES.PH Home">
          <span className="text-blue-700">CRES</span>.PH
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={cn("text-sm font-medium text-slate-700 hover:text-slate-900")}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button className="ml-2 bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </Link>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
