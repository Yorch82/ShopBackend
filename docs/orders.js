module.exports = {
  '/orders': {
    post: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Orders'],
      summary: 'Create new order',
      description: 'Create new order',
      operationId: 'createOrder',
      parameters: [],
      requestBody: {
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/createOrder' }
          }
        }
      },
      responses: {
        201: { description: 'order added...' },
        500: { description: 'We had an issue creating the order...' }
      }
    },
    get: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Orders'],
      summary: 'Get all orders',
      description: 'Get all orders',
      operationId: 'getAllOrders',
      parameters: [],
      responses: {
        201: { description: 'Show all Orders' },
        500: { description: 'We had a problem looking for all Orders' }
      }
    }
  },
  '/orderuser': {
    get: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Orders'],
      summary: 'Order and his user',
      description: 'Shows the order and its user',
      operationId: 'getOrderUser',
      parameters: [],
      responses: {
        201: { description: 'Show Orders with Users' },
        500: { description: 'We had a problem looking for Orders with Users ' }
      }
    }
  },
  
}
