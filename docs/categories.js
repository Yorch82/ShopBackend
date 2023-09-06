module.exports = {
    '/categories': {
        post: {
        security: [{ ApiKeyAuth: [] }],
        tags: ['Categories'],
        summary: 'Create new category',
        description: 'Create new category',
        operationId: 'createcategory',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/createCategory' }
            }
          }
        },
        responses: {
          201: { description: 'Category added...' },
          500: { description: 'We had an issue creating the category...' }
        }
      },
      get: {
        tags: ['Categories'],
        summary: 'Get all categories',
        description: 'Get all categories',
        operationId: 'getAllCategories',
        parameters: [],
        responses: {
          200: { description: 'Search completed...' },
          500: { description: 'We had an issue searching the categories...' }
        }
      }
    },
    '/categories/id/{id}': {
        put: {
          security: [{ ApiKeyAuth: [] }],
          tags: ['Categories'],
          summary: 'Update category',
          description: 'Update a category',
          operationId: 'updateCategory',
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'Id of category',
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
                schema: { $ref: '#/components/schemas/updateCategory' }
              }
            }
          },
          responses: {
            200: { description: 'category updated...' },
            500: { description: 'We had a problem updating the category...' }
          }
        },
        delete: {
          security: [{ ApiKeyAuth: [] }],
          tags: ['Categories'],
          summary: 'delete category',
          description: 'delete a category',
          operationId: 'deleteCategory',
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'Id of category',
              required: true,
              schema: {
                type: 'integer',
                example: 1
              }
            }
          ],
          responses: {
            200: { description: 'category deleted...' },
            500: { description: 'We had a problem deleting the category...' }
          }
        },
        get: {
          tags: ['Categories'],
          summary: 'find category by id',
          description: 'Search a category by its ID',
          operationId: 'getCategoryById',
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'Id of category',
              required: true,
              schema: {
                type: 'integer',
                example: 1
              }
            }
          ],
          responses: {
            200: { description: 'category found...' },
            500: { description: 'We had a problem searching the category...' }
          }
        }
      },
  }
  