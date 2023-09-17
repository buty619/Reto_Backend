const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("e-commerce");

const initDB = () => {
  // 2.1 utilizando el metodo `run` de la instancia creada **db** genera una tabla llamada products con los
  // siguientes parametros:
  // {
  //   id: INTEGER PRIMARY KEY AUTOINCREMENT,
  //   title: TEXT,
  //   price: INT,
  //   category: TEXT,
  //   description: TEXT,
  //   image: TEXT,
  //   stock: INT
  // }

  // 2.2 ahora se debe modificar nuestra `QUERY` de tal manera que solo se cree la tabla del punto uno si
  // aun no existe de esta manera evitaremos errores al momento de realizar algun cambio en nuestro proyecto.

  db.run(...);
};

const closeDB = () => db.close();

module.exports = { initDB, closeDB, db };
