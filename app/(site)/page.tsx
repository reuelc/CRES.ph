import Hero from "@/components/hero"
import ServicesB2B from "@/components/services-b2b"
import ServicesB2C from "@/components/services-b2c"
import BlogSection from "@/components/blog-section"
import CtaSection from "@/components/cta-section"
import { client } from "@/lib/sanity"

export const revalidate = 60 // revalidate this page every 60 seconds

async function getHomepageData() {
  const query = `*[_type == "homepage" && _id == "homepage"][0] {
    hero,
    servicesB2B {
      ...,
      services[]->
    },
    servicesB2C {
      ...,
      services[]->
    }
  }`
  const data = await client.fetch(query)
  return data
}

export default async function Page() {
  const data = await getHomepageData()

  return (
    <>
      <Hero data={data.hero} />
      <ServicesB2B data={data.servicesB2B} />
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-6"
        aria-hidden="true"
      />
      <ServicesB2C data={data.servicesB2C} />
      <BlogSection />
      <CtaSection />
    </>
  )
}
