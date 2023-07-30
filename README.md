# rko-spa

# comands
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run GIGABUILD
```
### Run Production build

```sh
npm run preview
```

#### Для запуска проекта через Docker:
```sh
npm run dockerize
```
### или
```sh 
npm run GIGABUILD
docker-compose -f docker-compose.develop.yml up --build -d
```

### запускается по-умолчанию на порту 5173

