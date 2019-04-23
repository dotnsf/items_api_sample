# items_api_sample

Simple API with Sample application.

- POST /item : Create

- GET /items : Read

- DELETE /item/:_id : Delete


## How to test API

- `$ curl -X GET 'http://localhost:3000/items'`

- `$ curl -X POST -H 'Content-Type: application/json' 'http://localhost:3000/item' -d '{"name":"A.Suzuki","age":30}'`

- `$ curl -X POST -H 'Content-Type: application/json' 'http://localhost:3000/item' -d '{"name":"B.Tanaka","age":40}'`

- `$ curl -X GET 'http://localhost:3000/items'`

- `$ curl -X DELETE 'http://localhost:3000/item/XXXXX'`

- `$ curl -X GET 'http://localhost:3000/items'`



## Copyright

2019 [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.


