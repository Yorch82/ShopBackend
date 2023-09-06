module.exports = {
    '/reviews': {
        post: {
        security: [{ ApiKeyAuth: [] }],
        tags: ['Reviews'],
        summary: 'Create new review',
        description: 'Create new review',
        operationId: 'createReview',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/createReview' }
            }
          }
        },
        responses: {
          201: { description: 'Review added...' },
          500: { description: 'We had an issue creating the review...' }
        }
      },
      get: {
        tags: ['Reviews'],
        summary: 'Get all reviews',
        description: 'Get all reviews',
        operationId: 'getAllReviews',
        parameters: [],
        responses: {
          200: { description: 'Search completed...' },
          500: { description: 'We had an issue searching the reviews...' }
        }
      }
    },
    '/reviews/{id}': {
        delete: {
          security: [{ ApiKeyAuth: [] }],
          tags: ['Reviews'],
          summary: 'Create new review',
          description: 'Create new review',
          operationId: 'createReview',
          parameters: [],
          requestBody: {
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/createReview' }
              }
            }
          },
          responses: {
            201: { description: 'Review added...' },
            500: { description: 'We had an issue creating the review...' }
          }
        },
        put: {
          security: [{ ApiKeyAuth: [] }],
          tags: ['Reviews'],
          summary: 'Get all reviews',
          description: 'Get all reviews',
          operationId: 'getAllReviews',
          parameters: [],
          responses: {
            200: { description: 'Search completed...' },
            500: { description: 'We had an issue searching the reviews...' }
          }
        }
      },  
  }