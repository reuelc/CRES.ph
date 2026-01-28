import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedBg from "./animated-bg"
import { urlFor } from "@/lib/sanity-image"

export default function Hero({ data }: { data: any }) {
  return (
    <section className="relative overflow-hidden">
      <AnimatedBg />

      <div className="relative container mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-700 font-semibold">{data.pretitle}</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            {data.title}
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            {data.subtitle}
          </p>
          <div className="mt-8">
            <Link href={data.button.link}>
              <Button className="h-11 px-6 bg-blue-600 hover:bg-blue-700">
                {data.button.text}
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            {data.secondaryText}
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/10 to-blue-300/10 rounded-2xl blur" />
          {data.image && (
            <Image
              src={urlFor(data.image).width(640).height(520).url()}
              alt={data.title}
              width={640}
              height={520}
              className="relative rounded-xl border shadow-lg object-cover w-full h-auto"
            />
          )}
        </div>
      </div>
    </section>
  )
}
