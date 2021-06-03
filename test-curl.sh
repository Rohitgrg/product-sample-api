curl -H "Authorization: eclipxtest" http://localhost:5000/api/products/

curl -d '{"name": "test","description": "test product","price": 5}' -H "Authorization: eclipxtest" -H "Content-Type: application/json" http://localhost:5000/api/products/

curl -d '{"name": "test","description": "new description happened","price": 5}' -H "Authorization: eclipxtest" -H "Content-Type: application/json" -X PUT http://localhost:5000/api/products/60b8a70f72eae40ba0ad6ccc

curl -H "Authorization: eclipxtest" http://localhost:5000/api/products/60b8a70f72eae40ba0ad6ccc

curl -H "Authorization: eclipxtest" -X DELETE http://localhost:5000/api/products/60b8a70f72eae40ba0ad6ccc