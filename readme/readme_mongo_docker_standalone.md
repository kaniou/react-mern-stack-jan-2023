# Run mongo on docker container (mac)

```
export CURRENT_FOLDER="/Users/chaiyasittayabovorn/Desktop/react-mern-stack-jan-2023"

docker run --name mongo-dev \
-v $CURRENT_FOLDER/mongo-dev/db:/data/db \
-v $CURRENT_FOLDER/dummy_db_cmpos:/script \
-p 27018:27017 -d --rm mongo


docker run --name mongo-dev \
-v $(pwd)/mongo-dev/db:/data/db \
-v $(pwd)/dummy_db_cmpos:/script \
-p 27018:27017 -d --rm mongo
```

# Run mongo on docker container (win)

```
set CURRENT_FOLDER="/Users/chaiyasittayabovorn/Desktop/Training/VueJS/vuejs-core/vuejs_mevn_stack_dist/workshops/vuestack_2023"

docker run --name mongo-dev ^
-v %CURRENT_FOLDER%/mongo-dev/db:/data/db ^
-v %CURRENT_FOLDER%/data/dummy_db_cmpos:/script ^
-p 27018:27017 -d --rm mongo
```

- mongorestore -d demopos /script/
- mongo -p 27018
