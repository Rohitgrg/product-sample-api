curl -H "Authorization: eclipxtest" https://product-api-app-eclipx.herokuapp.com/api/products/

curl -d '{"name": "test","description": "test product","price": 5}' -H "Authorization: eclipxtest" -H "Content-Type: application/json" https://product-api-app-eclipx.herokuapp.com/api/products/

curl -d '{"name": "test","description": "new description happened","price": 5}' -H "Authorization: eclipxtest" -H "Content-Type: application/json" -X PUT https://product-api-app-eclipx.herokuapp.com/api/products/60b8a70f72eae40ba0ad6ccc

curl -H "Authorization: eclipxtest" https://product-api-app-eclipx.herokuapp.com/api/products/60b8a70f72eae40ba0ad6ccc

curl -H "Authorization: eclipxtest" -X DELETE https://product-api-app-eclipx.herokuapp.com/api/products/60b8a70f72eae40ba0ad6ccc