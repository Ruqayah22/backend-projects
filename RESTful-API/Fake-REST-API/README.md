# Create a Fake REST API with JSON-Server 
- [video](https://www.youtube.com/watch?v=1zkgdLZEdwM)
    - [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)
    - [github](https://github.com/typicode/json-server)
    - [json-server](https://github.com/JHotterbeekx/json-server)

## package 
- npm init 
> create a package.json file which is basically like a manifest file for nodejs applications it has the the application name the version the dependencies all that stuff. 
- npm install -g json-server

> in the package.json file in the "scripts": put this: 
 
```
"scripts": {
    "json:server": "json-server --watch db.json"
  },
```

## to run the project 
- npm run json:server

### to run remote URLs 
- curl https://jsonplaceholder.typicode.com/db -o db.json  (to make the db json file to have the all remote data)
- in package.json 
```
"scripts": {
    "json:server": "json-server --watch db.json"
  },
  ```
  - in the terminal run this 
  ` npm run json:server `