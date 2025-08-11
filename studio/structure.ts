import { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Singleton Homepage
      S.listItem()
        .title('Homepage')
        .id('homepage')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
        ),

      // Divider
      S.divider(),

      // List of Pages
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('About Page')
                .child(S.document().schemaType('page').documentId('page-about')),
              S.listItem()
                .title('Careers Page')
                .child(S.document().schemaType('page').documentId('page-careers')),
              S.listItem()
                .title('Listings Page')
                .child(S.document().schemaType('page').documentId('page-listings')),
            ])
        ),

      // List of Blog Posts
      S.documentTypeListItem('post').title('Blog Posts'),

      // Divider
      S.divider(),

      // Other content types
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('jobOpening').title('Job Openings'),
      S.documentTypeListItem('listing').title('Listings'),

      // Divider
      S.divider(),

      // Blog authors and categories
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('category').title('Categories'),
    ])
