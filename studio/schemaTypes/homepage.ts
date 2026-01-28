import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'pretitle', title: 'Pre-title', type: 'string'},
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {
          name: 'button',
          title: 'Button',
          type: 'object',
          fields: [
            {name: 'text', title: 'Text', type: 'string'},
            {name: 'link', title: 'Link', type: 'string'},
          ],
        },
        {name: 'image', title: 'Image', type: 'image'},
        {name: 'secondaryText', title: 'Secondary Text', type: 'string'},
      ],
    }),
    defineField({
      name: 'servicesB2B',
      title: 'Services B2B',
      type: 'serviceSection',
    }),
    defineField({
      name: 'servicesB2C',
      title: 'Services B2C',
      type: 'serviceSection',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
