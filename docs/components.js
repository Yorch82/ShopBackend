module.exports = {
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    },
    schemas: {
      UserRegister: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yorch',
            required: true
          },
          surname: {
            type: 'string',
            description: 'User surname',
            example: 'Campo'
          },
          email: {
            type: 'string',
            description: 'User Email',
            example: 'yorch@gmail.com',
            required: true,
            unique: true
          },
          confirmed: {
            type: 'boolean',
            description: 'Confirmed on the shop',
            example: 'true'
          },
          dni: {
            type: 'string',
            description: 'User ID',
            example: '11111111K'
          },
          role: {
            type: 'string',
            description: 'role in the shop',
            example: 'user/admin'
          },
          password: {
            type: 'string',
            description: 'User password',
            example: '123456',
            format: 'password'
          },
          image_path: {
            type: 'file',
            description: 'User avatar',
            example: '1692442377403.jpg'
          }
        }
      },
      getAllUsers: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'User ID',
            example: 1,
            required: true
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yorch',
            required: true
          },
          surname: {
            type: 'string',
            description: 'User surname',
            example: 'Campo'
          },
          email: {
            type: 'string',
            description: 'User Email',
            example: 'yorch@gmail.com',
            required: true,
            unique: true
          },
          dni: {
            type: 'string',
            description: 'User ID',
            example: '11111111K'
          },
          role: {
            type: 'string',
            description: 'role in the shop',
            example: 'user/admin'
          },
          password: {
            type: 'string',
            description: 'User password',
            example:
              '$2a$10$s8fVYjnOetb4Qg2if1efTOg8cc6t1m1jAWDwjBrbL.4eNMmSESOhC',
            format: 'password'
          },
          image_path: {
            type: 'file',
            description: 'User avatar',
            example: '1692442377403.jpg'
          }
        }
      },
      updateUser: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'User ID',
            example: 1,
            required: true
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yorch',
            required: true
          },
          surname: {
            type: 'string',
            description: 'User surname',
            example: 'Campo'
          },
          email: {
            type: 'string',
            description: 'User Email',
            example: 'yorch@gmail.com',
            required: true,
            unique: true
          },
          dni: {
            type: 'string',
            description: 'User ID',
            example: '11111111K'
          },
          role: {
            type: 'string',
            description: 'role in the shop',
            example: 'user/admin'
          },
          password: {
            type: 'string',
            description: 'User password',
            example:
              '$2a$10$s8fVYjnOetb4Qg2if1efTOg8cc6t1m1jAWDwjBrbL.4eNMmSESOhC',
            format: 'password'
          },
          image_path: {
            type: 'file',
            description: 'User avatar',
            example: '1692442377403.jpg'
          }
        }
      },
      userLogin: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'User ID',
            example: 1,
            required: true
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yorch',
            required: true
          },
          surname: {
            type: 'string',
            description: 'User surname',
            example: 'Campo'
          },
          email: {
            type: 'string',
            description: 'User Email',
            example: 'yorch@gmail.com',
            required: true,
            unique: true
          },
          confirmed: {
            type: 'boolean',
            description: 'User confirmation',
            example: true
          },
          dni: {
            type: 'string',
            description: 'User ID',
            example: '11111111K'
          },
          role: {
            type: 'string',
            description: 'role in the shop',
            example: 'user/admin'
          },
          password: {
            type: 'string',
            description: 'User password',
            example:
              '$2a$10$s8fVYjnOetb4Qg2if1efTOg8cc6t1m1jAWDwjBrbL.4eNMmSESOhC',
            format: 'password'
          },
          image_path: {
            type: 'file',
            description: 'User avatar',
            example: '1692442377403.jpg'
          },
          createdAt: {
            type: 'string',
            description: 'creation date',
            example: '2023-09-02T09:57:34.000Z'
          },
          updatedAt: {
            type: 'string',
            description: 'update date',
            example: '2023-09-02T09:57:34.000Z'
          }
        }
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
            required: true
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yorch',
            required: true
          },
          surname: {
            type: 'string',
            description: 'User surname',
            example: 'Campo'
          },
          email: {
            type: 'string',
            description: 'User Email',
            example: 'yorch@gmail.com',
            required: true,
            unique: true
          },
          confirmed: {
            type: 'boolean',
            description: 'User confirmation',
            example: true
          },
          dni: {
            type: 'string',
            description: 'User ID',
            example: '11111111K'
          },
          role: {
            type: 'string',
            description: 'role in the shop',
            example: 'user/admin'
          },
          password: {
            type: 'string',
            description: 'User password',
            example:
              '$2a$10$s8fVYjnOetb4Qg2if1efTOg8cc6t1m1jAWDwjBrbL.4eNMmSESOhC',
            format: 'password'
          },
          image_path: {
            type: 'file',
            description: 'User avatar',
            example: '1692442377403.jpg'
          },
          createdAt: {
            type: 'string',
            description: 'creation date',
            example: '2023-09-02T09:57:34.000Z'
          },
          updatedAt: {
            type: 'string',
            description: 'update date',
            example: '2023-09-02T09:57:34.000Z'
          },
          Orders: {
            type: 'array',
            description: 'User Orders',
            example: [
              {
                order_num: 1,
                date: '1987-07-25T00:00:00.000Z'
              }
            ]
          }
        }
      },
      getUserOrderProduct: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'User ID',
            example: 1,
            required: true
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yorch',
            required: true
          },
          surname: {
            type: 'string',
            description: 'User surname',
            example: 'Campo'
          },
          email: {
            type: 'string',
            description: 'User Email',
            example: 'yorch@gmail.com',
            required: true,
            unique: true
          },
          confirmed: {
            type: 'boolean',
            description: 'User confirmation',
            example: true
          },
          dni: {
            type: 'string',
            description: 'User ID',
            example: '11111111K'
          },
          role: {
            type: 'string',
            description: 'role in the shop',
            example: 'user/admin'
          },
          password: {
            type: 'string',
            description: 'User password',
            example:
              '$2a$10$s8fVYjnOetb4Qg2if1efTOg8cc6t1m1jAWDwjBrbL.4eNMmSESOhC',
            format: 'password'
          },
          image_path: {
            type: 'file',
            description: 'User avatar',
            example: '1692442377403.jpg'
          },
          createdAt: {
            type: 'string',
            description: 'creation date',
            example: '2023-09-02T09:57:34.000Z'
          },
          updatedAt: {
            type: 'string',
            description: 'update date',
            example: '2023-09-02T09:57:34.000Z'
          },
          Orders: {
            type: 'array',
            description: 'User Orders',
            example: [
              {
                order_num: 1,
                Order_Products: [
                  {
                    OrderId: 74021,
                    productId: 2,
                    quantity: 2
                  }
                ]
              }
            ]
          }
        }
      },
      createProduct: {
        type: 'object',
        properties: {
          product: {
            type: 'string',
            description: 'Product name',
            example: 'Yorch',
            required: true
          },
          price: {
            type: 'integer',
            description: 'Product price',
            example: 125,
            required: true,
          },
          description: {
            type: 'string',
            description: 'Product description',
            example: 'Phasellus dui ipsum, tempor sed odio pretium, consectetur malesuada quam.',
            required: true,
            unique: true
          },
          image_path: {
            type: 'file',
            description: 'Confirmed on the shop',
            example: 'oneplus10.png'
          },
          sectionId: {
            type: 'string',
            description: 'Section of the product',
            example: 1,
            required: true,
          },
          categoryId: {
            type: 'integer',
            description: 'Category of the product',
            example: 1,
            required: true,
          },          
        }
      },
      getAllproducts: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'Product ID',
            example: 1,
          },
          product: {
            type: 'string',
            description: 'Product name',
            example: 'Yorch',
          },
          price: {
            type: 'integer',
            description: 'Product price',
            example: 123
          },
          description: {
            type: 'string',
            description: 'Product description',
            example: 'Phasellus dui ipsum, tempor sed odio pretium, consectetur malesuada quam.',
          },
          image_path: {
            type: 'string',
            description: 'Product image path',
            example: '/assets/products/oneplus10.png'
          },
          sectionId: {
            type: 'integer',
            description: 'Product section',
            example: 1
          },
          categoryId: {
            type: 'integer',
            description: 'Product category',
            example: 2

          },
        }
      },
      updateProduct: {
        type: 'object',
        properties: {
          product: {
            type: 'string',
            description: 'Product name',
            example: 'Samsung',
            required: true
          },
          price: {
            type: 'integer',
            description: 'Product price',
            example: 125,
            required: true,
          },
          description: {
            type: 'string',
            description: 'Product description',
            example: 'Phasellus dui ipsum, tempor sed odio pretium, consectetur malesuada quam.',
            required: true,
            unique: true
          },
          image_path: {
            type: 'file',
            description: 'Confirmed on the shop',
            example: 'oneplus10.png'
          },
          sectionId: {
            type: 'string',
            description: 'Section of the product',
            example: 1,
            required: true,
          },
          categoryId: {
            type: 'integer',
            description: 'Category of the product',
            example: 1,
            required: true,
          },          
        }
      },
      deleteProduct: {
        type: 'array',
        properties: {
          message: {
            type: 'string',
            description: 'delete message',
            example: 'Product has been deleted...'
          }
        }
      },
      getProductById: {
        type: 'object',
        properties: {
          product: {
            type: 'string',
            description: 'Product name',
            example: 'Samsung',
            required: true
          },
          price: {
            type: 'integer',
            description: 'Product price',
            example: 125,
            required: true,
          },
          description: {
            type: 'string',
            description: 'Product description',
            example: 'Phasellus dui ipsum, tempor sed odio pretium, consectetur malesuada quam.',
            required: true,
            unique: true
          },
          image_path: {
            type: 'file',
            description: 'Confirmed on the shop',
            example: 'oneplus10.png'
          },
          sectionId: {
            type: 'string',
            description: 'Section of the product',
            example: 1,
            required: true,
          },
          categoryId: {
            type: 'integer',
            description: 'Category of the product',
            example: 1,
            required: true,
          },
          Reviews: {
            type: 'array',
            description: 'review of the product',
            example: [
              {
                review: "Las fotos son fantásticas y el sistema muy fluido",
                rating: 5
              }
            ]
          },
          Catgeory: {
            type: 'array',
            description: 'Categroy of the product',
            example: [
              {
                category: 1,
                date: 'Premium'
              }
            ]
          }
        }
      },
      getProductCategorySection: {
        type: 'object',
        properties: {
          product: {
            type: 'string',
            description: 'Product name',
            example: 'Samsung',
            required: true
          },
          price: {
            type: 'integer',
            description: 'Product price',
            example: 125,
            required: true,
          },
          description: {
            type: 'string',
            description: 'Product description',
            example: 'Phasellus dui ipsum, tempor sed odio pretium, consectetur malesuada quam.',
            required: true,
            unique: true
          },
          image_path: {
            type: 'file',
            description: 'Confirmed on the shop',
            example: 'oneplus10.png'
          },
          sectionId: {
            type: 'string',
            description: 'Section of the product',
            example: 1,
            required: true,
          },
          categoryId: {
            type: 'integer',
            description: 'Category of the product',
            example: 1,
            required: true,
          },
          Section: {
            type: 'array',
            description: 'review of the product',
            example: [
              {
                section: "Mobile",
              }
            ]
          },
          Catgeory: {
            type: 'array',
            description: 'Categroy of the product',
            example: [
              {
               date: 'Premium'
              }
            ]
          }
        }
      },
    }
  }
}
