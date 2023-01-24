# Run mongo on docker container (mac)

```
docker run --name mongo-dev \
-v $(pwd)/mongo-dev/db:/data/db \
-v $(pwd)/dummy_db_cmpos:/script \
-p 27018:27017 -d --rm mongo
```

# Run mongo on docker container (win)

```
docker run --name mongo-dev ^
-v "%cd%/mongo-dev/db":/data/db ^
-v "%cd%/data/dummy_db_cmpos":/script ^
-p 27018:27017 -d --rm mongo
```

- mongorestore -d demopos /script/
- mongo -p 27018
