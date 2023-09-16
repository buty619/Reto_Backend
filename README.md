# 🤓 Reto UBITS

Bienvenido a tu reto BACKEND para crear la API de un E-commerce, para nosotros es un gusto que puedas poner a prueba tus los conocimientos que vienes aprendiendo en nuestros curso de Backend en Javascript.

## ☑️ Requisitos para realizar el reto

- tener instalado node v16 o superior
- tener instalado npm 8 o superior
- tener un un powerShell, shell o terminal con el cual ejecutar lineas de comandos
- tener un editor de código donde realizar el reto (ej: visual studio code)
- tener cuenta de gitHub activa

## ⏲ Setup del reto

Para poder solucionar este reto de una manera correcta debes seguir los siguientes pasos:

### 1. Clonar el reto localmente

Primero debes clonar el reto en tu maquina para que puedas acceder a la información del reto y su estructura, para esto escribe el siguiente comando en tu shell:

**Si tienes configurada una llave SSH**

```bash
git clone git@github.com:buty619/Reto_Backend.git
```

**para clonarlo por HTTPS**

```bash
git clone https://github.com/buty619/Reto_Backend.git
```

### 2. Instalar dependencias

luego de clonarlo accede a la carpeta que acabas de clonar e instala las dependencias necesarias para el reto (si no conoces el concepto de dependencias no te preocupes no es necesario conocer su funcionamiento para resolver el reto) para esto escribe en tu shell:

```bash
cd Reto_Backend
```

```bash
npm install
```

✅ listo con estos pasos estas listo para iniciar tu reto mucha suerte ¡¡¡

### 🗒 Estructura del reto

En este repositorio encontraras una carpeta con el nombre [page](./page) esta contiene 3 archivos:

- **README.md**: este archivo contiene las instrucciones para resolver el reto por favor léelo cuidadosamente.
- **index.js**: en este archivo tendremos la configuración de nuestro servidor utilizando express como nuestra libreria principal.

también podrás encontrar las siguientes carpetas la cual detallaremos a continuación:

- **db**: en esta carpeta se realziara al configurción de la base de satos utilizando la libreria `sqlite3`.
- **models**: aca se debera configurar los modelos necesarios para el desarrollo del CRUD en nuestra API.
- **routes**: aca se debera configurar las rutas expuestas en nuestro servicio.
- **controllers**: aca se debera tiene la capa de control de nuestro backend que permitira comunicar las rutas y los modelos en nuestro servicio.

ademas de estas carpetas podrás ver otros archivos como:

- .gitignore
- package.json

no te preocupes por estos archivos ellos realizan un trabajo de configuración de nuestro reto y no es necesario profundizar en ellos.

### :gear: como hacer el setup del reto, correrlo y validar los cambios:

para poder correr este reto localmente debes correr en tu shell el comando

```bash
npm run start
```

esto inicia un nuestro servidor utilizando como compilador una libreria llamada [nodemon](https://nodemon.io/), que detectara los cambios que existan en nuestro servidor, para luego de detectar algun cambio se reinicia de esta manera no es necesario que apagues y prendas el servidor cada ves que quieras probar algun cambio en el servicio. Nuestro servidor correra en el puerto **8080**, de tal manera que las peticiones que hagamos a nuestro servidor se deben realziar apuntando a dicho puerto.

```bash
http://127.0.0.1:8080/
```

para los **test** solo debes correr

```bash
npm run test
```

### 🚀 ¿Como probar los servicios expuestos en mi API?

existen diferentes maneras de realizar peticiones a nuestro servidor local pero para este caso recomendaremos el uso de [postman](https://learning.postman.com/docs/getting-started/overview/) que es un software libre que permite el envio de peticiones a servideores remotos o locales, [acá](https://learning.postman.com/docs/sending-requests/requests/) podras ver algunos ejemplos de como realizar dichas peticiones. Como lo mencionamos anteriormente existen multiples maneras de realiar peticiones a nuestro servidor de tal manera que si conoces alguna forma distinta puedes utilizarla con toda libertad.

### 🎯 ¿Cuando completo el reto?

lee las instrucciones del reto disponibles en el archivo [INSTRUCTIONS.md](./instructions.md), en este archivo podras las instrucciones necesarias para completar el reto complemtamente donde el resultado final sera una API para un E-commerce utilizando, nodejs, express, SQLite.

# 🥳 ¡Buena suerte! 🥳
