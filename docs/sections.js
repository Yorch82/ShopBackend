module.exports = {
    '/sections': {
      post: {
        tags: ['Sections'],
        summary: 'Create new section',
        description: 'Create new section',
        operationId: 'create',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/createSection' }
            }
          }
        },
        responses: {
          201: { description: 'Product added...' },
          500: { description: 'We had an issue creating the section...' }
        }
      },
      get: {
        tags: ['Sections'],
        summary: 'Get all sections',
        description: 'Get all sections',
        operationId: 'getAllSections',
        parameters: [],
        responses: {
          200: { description: 'Search completed...' },
          500: { description: 'We had an issue searching the sections...' }
        }
      }
    },    
  }
  