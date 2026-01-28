import { PortableText as BasePortableText, PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/lib/sanity-image'
import Image from 'next/image'

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-2xl font-bold my-4">{children}</h2>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 my-4 space-y-2">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : ''} className="text-blue-600 hover:underline">
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || ' '}
          width={800}
          height={600}
          className="my-6 rounded-lg"
          loading="lazy"
        />
      )
    },
  },
}

export function PortableText({ value }: { value: any }) {
  return <BasePortableText value={value} components={components} />
}
