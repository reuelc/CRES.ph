import Hero from "@/components/hero"
import ServicesB2B from "@/components/services-b2b"
import ServicesB2C from "@/components/services-b2c"
import BlogSection from "@/components/blog-section"
import CtaSection from "@/components/cta-section"

export default function Page() {
  return (
    <>
      <Hero />
      <ServicesB2B />
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-6"
        aria-hidden="true"
      />
      <ServicesB2C />
      <BlogSection />
      <CtaSection />
    </>
  )
}
