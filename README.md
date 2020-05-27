# Student Success v2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Run json-server to serve a sample data-db.json file

```bash
npx json-server --watch ./data/completion-rate-db.json -i id --port 9999 --routes ./data/completion-rate-db-routes.json
browse to http://localhost:9999/api/v1/completion-rates?sd=005
```
