export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f34d934ce40a3c8b00f1b28',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-23hso7pi',
                  apiId: '0a37c600-dc63-4934-9520-b6e989c30f1b'
                },
                {
                  buildHookId: '5f34d934ce40a3e56c0f196c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-y5c77uof',
                  apiId: 'a42bdaa8-238b-4a16-9e24-0eacff508236'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rosnovsky/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-y5c77uof.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
