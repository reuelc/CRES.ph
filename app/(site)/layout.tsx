import type { Metadata } from "next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Nav from "@/components/nav"
import Footer from "@/components/footer"
import GA from "@/components/ga"

export const metadata: Metadata = {
  title: "CRES.PH by Cuello — Empowering Real Estate Success Through Technology",
  description:
    "CRES.PH provides comprehensive real estate technology and marketing services in the Philippines: automation, analytics, training, documentation, and appraisal.",
  keywords: [
    "CRES.PH",
    "Cuello Real Estate Services",
    "real estate marketing Philippines",
    "real estate technology",
    "CRM for real estate",
    "marketing automation",
    "data analytics",
    "real estate training",
    "title documentation",
    "real estate appraisal",
  ],
  openGraph: {
    title: "CRES.PH — Empowering Real Estate Success Through Technology",
    description:
      "Premier technology partner for real estate professionals in the Philippines.",
    url: "https://cres.ph",
    siteName: "CRES.PH",
  },
  metadataBase: new URL("https://cres.ph"),
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const status = cookieStore.get("site-status")?.value ?? "live"
  if (status !== "live") {
    redirect("/coming-soon")
  }

  // Organization JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CRES.PH by Cuello",
    url: "https://cres.ph",
    slogan: "Empowering Real Estate Success Through Technology",
    sameAs: [
      "https://facebook.com/",
      "https://linkedin.com/",
      "https://youtube.com/",
    ],
  }

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <GA />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
