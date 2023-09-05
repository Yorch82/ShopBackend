module.exports = {
  '/users': {
    post: {
      tags: ['Users'],
      summary: 'Register new user',
      description: 'Register a new user with username, email and password',
      operationId: 'registerUser',
      parameters: [],
      requestBody: {
        content: {
          'multipart/form-data': {
            schema: { $ref: '#/components/schemas/UserRegister' }
          }
        }
      },
      responses: {
        201: { description: 'User successfully registered' },
        400: { description: 'Data required: name, email, password' },
        500: { description: 'Internal server error' }
      }
    },
    get: {
      tags: ['Users'],
      summary: 'Get all users data',
      description: 'Get all users data',
      operationId: 'getAllUsers',
      parameters: [],
      responses: {
        200: { description: "All User's data was obtained" },
        500: { description: 'Internal server error' }
      }
    },
    put: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Users'],
      summary: 'Update User avatar',
      description: 'Update User avatar',
      operationId: 'updateUser',
      parameters: [],
      responses: {
        200: { description: "User updated successfully" },
        500: { description: 'Can\'t update user' }
      }
    }
  },
  '/users/login': {
    post: {
      tags: ['Users'],
      description: 'Connect the user',
      summary: 'User Log In',
      operationId: 'userLogin',
      parameters: [],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/userLogin'
            }
          }
        }
      },
      responses: {
        201: { description: 'User connected successfully' },
        404: { description: 'User not found' },
        500: { description: 'Server error' }
      }
    }
  },
  '/users/logout': {
    delete: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Users'],
      description: 'Disconnect the user',
      summary: 'User Log Out',
      operationId: 'userLogout',
      parameters: [],
      responses: {
        200: { description: 'User disconnected...' },
        404: { description: 'User not found' },
        500: { description: 'Server error' }
      }
    }
  },
  '/users/info': {
    get: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Users'],
      description: 'Get users info with products and orders',
      summary: 'User Info',
      operationId: 'getUserInfo',
      parameters: [],
      responses: {
        200: { description: 'User find' },
        404: { description: 'User or Password incorrect' },
        500: { description: 'We had an issue searching the user...' }
      }
    }
  },
  '/users/userorder': {
    get: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Users'],
      description: 'Get users info with orders',
      summary: 'User Info',
      operationId: 'getUserOrderProduct',
      parameters: [],
      responses: {
        201: { description: 'Show Users with Orders' },
        500: { description: 'We had an issue searching the user...' }
      }
    }
  }
}
