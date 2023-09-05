module.exports = {
  '/products': {
    post: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Products'],
      summary: 'Register new product',
      description: 'Register a new user with username, email and password',
      operationId: 'createProduct',
      parameters: [],
      requestBody: {
        content: {
          'multipart/form-data': {
            schema: { $ref: '#/components/schemas/createProduct' }
          }
        }
      },
      responses: {
        201: { description: 'Product added...' },
        500: { description: 'Internal server error' }
      }
    },
    get: {
      tags: ['Products'],
      summary: 'Get all products',
      description: 'Get all products',
      operationId: 'getAllproducts',
      parameters: [],
      responses: {
        200: { description: 'Search completed...' },
        500: { description: 'We had an issue searching the products...' }
      }
    }
  },
  '/products/id/{id}': {
    put: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Products'],
      summary: 'Update product',
      description: 'Update a product',
      operationId: 'updateProduct',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Id of product',
          required: true,
          schema: {
            type: 'integer',
            example: 1
          }
        }
      ],
      requestBody: {
        content: {
          'multipart/form-data': {
            schema: { $ref: '#/components/schemas/updateProduct' }
          }
        }
      },
      responses: {
        200: { description: 'Product updated...' },
        500: { description: 'We had a problem updating the product...' }
      }
    },
    delete: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Products'],
      summary: 'delete product',
      description: 'delete a product',
      operationId: 'deleteProduct',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Id of product',
          required: true,
          schema: {
            type: 'integer',
            example: 1
          }
        }
      ],
      responses: {
        200: { description: 'Product deleted...' },
        500: { description: 'We had a problem deleting the product...' }
      }
    },
    get: {
      tags: ['Products'],
      summary: 'find product by id',
      description: 'Search a product by its ID',
      operationId: 'getProductById',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Id of product',
          required: true,
          schema: {
            type: 'integer',
            example: 1
          }
        }
      ],
      responses: {
        200: { description: 'Product found...' },
        500: { description: 'We had a problem searching the product...' }
      }
    }
  },
  '/products/productcategorysection': {
    get: {
      tags: ['Products'],
      summary: 'Show the product, category and section',
      description: 'Show the product next to the category and section',
      operationId: 'getProductCategorySection',
      parameters: [],
      responses: {
        200: { description: 'Search completed...' },
        500: { description: 'We had an issue searching the products...' }
      }
    }
  }
}
