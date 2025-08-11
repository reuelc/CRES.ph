import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'listingListSection',
  title: 'Listing List Section',
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
      name: 'listings',
      title: 'Listings',
      type: 'array',
      of: [{type: 'reference', to: {type: 'listing'}}],
    }),
  ],
})
