module.exports = {
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
      },
      schemas: {
        UserRegister: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'User name',
              example: 'Yorch',
              required: true,
            },
            surname: {
                type: 'string',
                description: 'User surname',
                example: 'Campo',
            },
            email: {
                type: 'string',
                description: 'User Email',
                example: 'yorch@gmail.com',
                required: true,
                unique: true,
            },
            confirmed: {
                type: 'boolean',
                description: 'Confirmed on the shop',
                example: 'true',
            },
            dni: {
                type: 'string',
                description: 'User ID',
                example: '11111111K',
            },
            role: {
                type: 'string',
                description: 'role in the shop',
                example: 'user/admin',
            },
            password: {
              type: 'string',
              description: 'User password',
              example: '123456',
              format: 'password',
            },            
            image_path: {
              type: 'file',
              description: 'User avatar',
              example: '1692442377403.jpg',
            },
          },
        },
        getAllUsers: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'User name',
                example: 'Yorch',
                required: true,
              },
              surname: {
                  type: 'string',
                  description: 'User surname',
                  example: 'Campo',
              },
              email: {
                  type: 'string',
                  description: 'User Email',
                  example: 'yorch@gmail.com',
                  required: true,
                  unique: true,
              },
              confirmed: {
                  type: 'boolean',
                  description: 'Confirmed on the shop',
                  example: 'true',
              },
              dni: {
                  type: 'string',
                  description: 'User ID',
                  example: '11111111K',
              },
              role: {
                  type: 'string',
                  description: 'role in the shop',
                  example: 'user/admin',
              },
              password: {
                type: 'string',
                description: 'User password',
                example: '123456',
                format: 'password',
              },            
              image_path: {
                type: 'file',
                description: 'User avatar',
                example: '1692442377403.jpg',
              },
            },
          },
      }
    }
}