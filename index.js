var express = require("express");
var app = express();
const PORT = 8080;
const db = require("./db");
const router = require("./routes/routes");

db.initDB();

// 1.1 para iniciar nuestro reto debemos realizar la configuración de un middlaware que nos permita
// enviar y recibir información en el formato universalmente usado JSON, por favor agregar middlaware
// necesario.

app.use(...);
app.use("/", router);

// 1.2 ahora configura el puerto `PORT` dado para que nuestro API reciva y envie peticiones por dicho puerto
// recuerda inyectar una funcion callback que  imprima en consola que el puerto en el cual el servicio esta
// recibiendo peticiones.

app.listen(...);

process.on("SIGINT", function () {
  db.closeDB();
  console.log("About to close");
});
