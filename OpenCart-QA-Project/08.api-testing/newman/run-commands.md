# Newman Execution Commands

## Run Collection
newman run postman/collections/opencart-login.collection.json

## Run with Environment
newman run postman/collections/opencart-login.collection.json \
-e postman/environments/opencart-dev.environment.json

## Generate HTML Report (future)
newman run collection.json -r cli,htmlextra