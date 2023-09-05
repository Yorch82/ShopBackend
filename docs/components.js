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
          id: {
            type: 'integer',
            description: 'User ID',
            example: 1,
            required: true,
          },
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
            example:
              '$2a$10$s8fVYjnOetb4Qg2if1efTOg8cc6t1m1jAWDwjBrbL.4eNMmSESOhC',
            format: 'password',
          },
          image_path: {
            type: 'file',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
        },
      },
      userLogin: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'User ID',
            example: 1,
            required: true,
          },
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
            description: 'User confirmation',
            example: true,
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
            example:
              '$2a$10$s8fVYjnOetb4Qg2if1efTOg8cc6t1m1jAWDwjBrbL.4eNMmSESOhC',
            format: 'password',
          },
          image_path: {
            type: 'file',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          createdAt: {
            type: 'string',
            description: 'creation date',
            example: '2023-09-02T09:57:34.000Z',
          },
          updatedAt: {
            type: 'string',
            description: 'update date',
            example: '2023-09-02T09:57:34.000Z',
          },
        },
      },
      userLogout: {
        type: 'array',
        properties: {
          message: {
            type: 'string',
            description: 'Logout message',
            example: 'User disconnected...'
          }
        }
      },
      getUserInfo: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'User ID',
            example: 1,
            required: true,
          },
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
            description: 'User confirmation',
            example: true,
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
            example:
              '$2a$10$s8fVYjnOetb4Qg2if1efTOg8cc6t1m1jAWDwjBrbL.4eNMmSESOhC',
            format: 'password',
          },
          image_path: {
            type: 'file',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          createdAt: {
            type: 'string',
            description: 'creation date',
            example: '2023-09-02T09:57:34.000Z',
          },
          updatedAt: {
            type: 'string',
            description: 'update date',
            example: '2023-09-02T09:57:34.000Z',
          },
          Orders: {
            type: 'array',
            description: 'User Orders',
            example: [{
              order_num : 1,
              date : '1987-07-25T00:00:00.000Z'
            }]
          }
        },
      },
    },
  },
};
