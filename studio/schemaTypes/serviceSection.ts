import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceSection',
  title: 'Service Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'reference', to: {type: 'service'}}],
    }),
  ],
})
