по порту 3000 делать запросы в формате /свойствоВjson/:вложенное свойство,
post запросы в body в формате raw отсылать
post:http://localhost:3000/users
body -
{
    "name":"cocktail1"
}
response -
{
"name": "cocktail1",
"id": 6
}
get:http://localhost:3000/users/1
response - {
"id": 1,
"name": "stas"
}
