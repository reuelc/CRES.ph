import ContactForm from "@/components/contact-form"
import { Building2, Mail, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="w-full">
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Schedule a Consultation
            </h1>
            <p className="mt-3 text-slate-600">
              Tell us about your current sales and marketing setup. We’ll tailor
              a roadmap that aligns with your goals and budget.
            </p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p className="flex items-center gap-3">
                <Phone className="text-blue-600" /> +63 (000) 000 0000
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-blue-600" /> hello@cres.ph
              </p>
              <p className="flex items-center gap-3">
                <Building2 className="text-blue-600" /> Makati, Metro Manila, Philippines
              </p>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden border">
              <iframe
                title="CRES.PH Location Map"
                src="https://www.google.com/maps?q=Ayala%20Avenue%2C%20Makati%20City&output=embed"
                className="w-full h-64"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
