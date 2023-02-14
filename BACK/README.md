# Documentación (Español)

## Contenido:

1. Configuración de **variables de entorno**
2. Comandos de **ejecución**
3. Uso de **Rutas**
4. **Borrado lógico**
5. **Login**

---

### 1. Configuración de **variables de entorno**

Es necesario crear un archivo llamado .env como se muestra en la imagen:

![ejemplo1](ejemplo1.png "ejemplo1")

El cual debe contener lo siguiente:

```JavaScript
URL = "mongodb+srv://Erick:87SvnmsMkJagagKm@cluster0.g3htyhe.mongodb.net/?retryWrites=true&w=majority"

SECRET = "MongoDB"

CLOUDINARY_CLOUD_NAME = "dfaxzahb0"
CLOUDINARY_API_SECRET = "477279579552534"
CLOUDINARY_API_KEY = "8H7ZfZznu35WQ3bMH46QEXgWvLg"

CLIENT_ID ="1077631869308-iui2hkd43nicvuqrih4jj54jv4bfqbbg.apps.googleusercontent.com"
CLIENT_SECRET = "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"
REDIRECT_URI = "https://developers.google.com/oauthplayground"
REFRESH_TOKEN = "1//04OtQpsXU8ZfQCgYIARAAGAQSNwF-L9IrC_2Vd8jjazwbZl83YxQtyeLkuLfHhjoKdBpB8UcdaKlyufWxrSAYj-c5kp1ZyxtE4xk"

PAYPAL_API = "https://api-m.sandbox.paypal.com"
PAYPAL_API_CLIENT = "AdnJQyg6JjZw8Nes6-8ZLubBZtx-KgtfuqMvjPCNyhF-B2cg8qrcR6c5jwgo05QOhFnHrnMLHwV1wYpb"
PAYPAL_API_SECRET = "EMYbVa99AGaaI4mETE0Uk1GsE43g_RwurN_3_pjCWcz9dWiSms2Tnfd823XyhzTkQmWprMA0WXbcUJ5G"

GOOGLE_API = "327874418838-9lum1l34s28h1d2v5i5j0mc9oe9evl1h.apps.googleusercontent.com" //AGREGAR ESTO EN DEPLOY
```

---

### 2. Comandos de **ejecución**

- Para iniciar el servidor en un entorno de desarrollo, ejecutar en consola:

```
$ npm run dev
```

- Para iniciar el servidor en producción, ejecutar en consola:

```
$ npm start
```

---

### 3. Uso de **Rutas**

- POST /users

Esta ruta es utilizada para guardar en la base de datos un usuario, es necesario mandar en el body un _name_, un _email_ y un _password_. Se muestra un ejemplo a continuación:

URL en un servidor local

```
http://localhost:3001/users
```

Contenido del body

```JSON
{
  "name":"erick",
  "email":"erick@gmail.com",
  "password":"123456"
}
```

- GET /users

La petición a esta ruta da como resultado un arreglo con los usuarios almacenados en la base de datos.

URL en un servidor local

```
http://localhost:3001/users
```

- GET /users?name=name

Para hacer una busqueda de usuario por nombre o coincidencia de nombre es necesario enviar por query dicha información a está ruta.

URL en un servidor local

```
http://localhost:3001/users?name=name
```

- GET /users/:id

Esta ruta requiere de un id de usuario enviado por params para dar como resultado los datos de dicho usuario.

URL en un servidor local

```
http://localhost:3001/users/id
```

- PUT /users/:id

Esta ruta tiene como función la actualización de datos de un usuario registrado en la base de datos, requiere de un id enviado por params y los datos correspondientes enviados por body.

URL en un servidor local

```
http://localhost:3001/users/id
```

Ejemplo de como se puede actualizar una propiedad del usuario:

```JSON
{
  "name":"Erick Monterrubio"
}
```

- DELETE /users/:id

Para borrar a un usuario de forma permanente en la base de datos basta con hacer una petición a está ruta enviando por params el id del usuario que se desea eliminar

URL en un servidor local

```
http://localhost:3001/users/id
```

- POST /services

Para crear un nuevo servicio es necesario enviar por body un **name**, una **image**, una **description**, una propiedad **online** y el **id** del usuario que lo esta creando.

Contenido del body

```JSON
{
    "name":"Paseador de perros",
    "image":"https://img.chilango.com/2019/12/Cotidiana_Polanco_-1-1024x683.jpg",
    "description":"Se ofrece servicio como paseador de perros en CDMX",
    "online":true,
    "id":"639147857129763ba20113eb"
}
```

URL en un servidor local

```
http://localhost:3001/services
```

- GET /services

La petición a esta ruta da como resultado un arreglo con los servicios almacenados en la base de datos.

URL en un servidor local

```
http://localhost:3001/services
```

- GET /services?name=name

Para hacer una busqueda de servicio por nombre o coincidencia de nombre es necesario enviar por query dicha información a está ruta.

URL en un servidor local

```
http://localhost:3001/services?name=name
```

- GET /services/:id

Para hacer una busqueda de un servicio por id es necesario enviar por params el id de dicho usuario.

URL en un servidor local

```
http://localhost:3001/services/id
```

- PUT /services/:id

Para hacer una actualización a un servicio es necesario enviar por params el id de dicho servicio y por body los datos que se deseén actualizar.

Contenido del body

```JSON
{
    "name":"Paseador de perritos"
}
```

URL en un servidor local

```
http://localhost:3001/services/id
```

- DELETE /services/:id

Para borrar un servicio de forma permanente en la base de datos se necesita hacer una petición a está ruta enviando por params el id del usuario que se desea eliminar.

URL en un servidor local

```
http://localhost:3001/services/id
```

---

### 4.**Borrado lógico**

- DELETE /users/:id?deletelogic=true

Para hacer un borrado lógico de un usuario además de enviar por params el id de éste, es necesario enviar por query la propiedad deletelogic con un valor de true.

URL en un servidor local

```
http://localhost:3001/users/id?deletelogic=true
```

- GET /deletelogic

Al realizar una petición a esta ruta se obtiene la información de los usuarios con esta condición.

URL en un servidor local

```
http://localhost:3001/deletelogic
```

- PUT /users/:id

Por último, el borrado lógico se puede anular al enviar una actualización a la información del usuario.

Contenido del body

```JSON
{
    "deleteLogic": false
}
```

URL en un servidor local

```
http://localhost:3001/users/id
```

---

### 5. **Login**

- POST /login

Una petición a esta ruta responde con el **name** y **id** del usuario que esta iniciando sesión, además de un **token** que garantiza la seguridad de dicha sesión.

Contenido del body

```JSON
{
  "email":"salvador@gmail.com",
  "password":"123456"
}
```

URL en un servidor local

```
http://localhost:3001/users/id
```

Ejemplo de la respuesta optenida:

```JSON
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2FsdmFkb3IiLCJpZCI6IjYzOTI0NWYwMmQ0ZmY1MjVjNjkwZGUwNCIsImlhdCI6MTY3MDUzMDY5MX0.7IjlMKpU7icomMYhSiuPBDKqWSRxfjkj4dUCDlka41I",
  "name": "Salvador",
  "id": "639245f02d4ff525c690de04"
}
```

---
