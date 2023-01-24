docker run --name mongo-dev \
-v /Users/chaiyasittayabovorn/Desktop/Training/VueJS/vuejs-core/vuejs_mevn_stack_dist/workshops/vuestack_2023/mongo-dev/db:/data/db \
-v /Users/chaiyasittayabovorn/Desktop/Training/VueJS/vuejs-core/vuejs_mevn_stack_dist/workshops/vuestack_2023/data/dummy_db_cmpos:/script \
-p 27018:27017 -d --rm mongo
mongorestore -d demopos /script/

mongo -p 27018

# mongo shell

https://www.mongodb.com/try/download/shell

# mongosh commands

- mongosh
- show dbs
- use test
- show collections
- db.user.find()
- db.user.insertOne({name: "Lek", age: 44})
- cls
- exit

# mongo db tools

- https://www.mongodb.com/try/download/database-tools

# mongorestore example

- mongorestore -d demopos .../vue_nov_2022/rvpPOS/backend/dummy_db_cmpos

# search with reg expression

- db.products.find( { name: { $in: [ /^Node/i,] } })

# mongo url connection

```
mongodb://localhost:27017
```

# mongo vscode extension

- mongodb://localhost:27017
