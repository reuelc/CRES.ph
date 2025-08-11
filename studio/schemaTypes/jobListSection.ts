import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'jobListSection',
  title: 'Job List Section',
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
      type: 'text',
    }),
    defineField({
      name: 'jobs',
      title: 'Jobs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'jobOpening'}}],
    }),
  ],
})
