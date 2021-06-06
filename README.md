# product-sample-api

**Hosted At:** `https://product-api-app-eclipx.herokuapp.com/`

## Description:

A simple application written in typescript which provides create,read, update and delete api for a simple product with id, name, description and price.

```js
{
    'id' : 123,
    'name' : 'Sample Product',
    'description' : 'Sample Product Description',
    'price': 123
}
```

## APIs:

`All Apis are secured with a authorization token except the base Url.`

- **base API:** `GET` https://product-api-app-eclipx.herokuapp.com/

  - This api will return a home page with this readme page as its content.

- **get all products:** `GET` https://product-api-app-eclipx.herokuapp.com/api/products
  - This api will return all the available products in the database.
  - response will be an array of products.
- **get a product** `GET` https://product-api-app-eclipx.herokuapp.com/api/products/:id
  - This api will require id of the product to be passed as a request param to get the product details.
- **create a product** `POST` https://product-api-app-eclipx.herokuapp.com/api/products
  - This api will need a request body which has name, description and price to create the product.
  - example:
  ```js
  {
      'name' : 'Sample Product',
      'description' : 'Sample Product Description',
      'price': 123
  }
  ```
- **update a product** `PUT` https://product-api-app-eclipx.herokuapp.com/api/products/:id

  - This api will require id of the product to be passed as a request param to find the product.
  - Request body will also be required where the desired attribute's new value should be passed such as:

  ```js
  // there is no constraint on the number of available attributes that can be updated at once
  {
      'description' : 'NEW Product Description',
  }

  // another example:
  {
      'name': 'New name of the product'
      'description' : 'NEW Product Description',
  }
  ```

- **delete a product** `DELETE` https://product-api-app-eclipx.herokuapp.com/api/products/:id
  - This api will require id of the product to be passed as a request param to find the product and delete the product.

## Curl script:

A curl script file is provided in the repo named **test-curl.sh**,
which tests all the above mentioned apis.

```
curl -H "Authorization: eclipxtest" https://product-api-app-eclipx.herokuapp.com/api/products/

curl -d '{"name": "test","description": "test product","price": 5}' -H "Authorization: eclipxtest" -H "Content-Type: application/json" https://product-api-app-eclipx.herokuapp.com/api/products/

curl -d '{"name": "test","description": "new description happened","price": 5}' -H "Authorization: eclipxtest" -H "Content-Type: application/json" -X PUT https://product-api-app-eclipx.herokuapp.com/api/products/60b8a70f72eae40ba0ad6ccc

curl -H "Authorization: eclipxtest" https://product-api-app-eclipx.herokuapp.com/api/products/60b8a70f72eae40ba0ad6ccc

curl -H "Authorization: eclipxtest" -X DELETE https://product-api-app-eclipx.herokuapp.com/api/products/60b8a70f72eae40ba0ad6ccc
```

## Installations and Setup Instructions

### Pre-requisites

- **node** and **npm** installed globally in your machine

You can download node from :
`https://nodejs.org/en/download/current/`

### Installation guide:

1. `npm i`
2. `npm start` or `npm run dev`
3. Visit application: `localhost:5000`

## Code Setup:

Clean architecture was kept in mind while creating this layout. **Scalability** was the main focus.

```
├── dist (or build)
├── node_modules
├── src
    ├── config : contains all the configuration required for the application
    ├── controller : controller for each of the apis of the application
    ├── db : database setup for the application, it is used so that changing database in the future is easier.
    ├── interface : contains all the global interfaces that will be used througout the application
    ├── middleware : contains middleware for the application such as authentication middleware
    ├── plugins : contains function that can be shared by the application such as error handler
    ├── requests : contains all the request interfaces that will shape up the body of the requests when required
        such as while updating and creating a product
    ├── router : contains all the routes to the products apis
    ├── schema : contains schemas for the database
    ├── service : contains services which will communicate with the database
    └── index.ts

├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── test-curl.sh
└── tsconfig.json

```

## Dependencies:

1. **Express**: This framework was used for the effective handling of requests through the help of its predefined utility methods and its ease of use.
2. **dotenv**: This library was used to load the environment varibles from ".env" file.
3. **markdown-it**: This was used to convert this readme.md file to a html page which was then used as a home page.
4. **mongoose**: This Object Data Modeling library was used to communicate with mongoDB from this node application.

## Pipeline:

    Built in heroku pipeline is used to deploy the application when the master brach is updated.
