const { db } = require("../db");

const createProduct = (
  { title, price, category, description, image, stock },
  callback
) => {
  // 3.1 dentro de la función `createProduct` utiliza el metodo `.run` de `sqlite3` para
  // crear un producto nuevo, recuerda que dicha funcion espera 3 parametros la query
  // que sera ejecutada, el arreglo de valores a introducir en la query y una fucion
  // callback que sera ejecutada una ves termine de manera exitoso o fallido.
  db.run(
    "...QUERY...",
    [...],
    function (err) {
      if (err) {
        return callback(err);
      }
      callback(null, this.lastID);
    }
  );
};

const getAllProducts = (callback) => {
  // 3.2 dentro de la función `getAllProducts` utiliza el metodo `.all` de `sqlite3`
  //   para obtener todos los productos de la tabla `products`, ten encuenta que dicho
  //   metodo espera dos parametros, el primero es la query que llama a todos los productos
  //   y el segundo una función callback que se ejecuta una ves se complete el request,
  //   retornando la data solicitada o un mensaje en caso de error en la ejecución del query.
};

const getProduct = (id, callback) => {
  // 3.3 dentro de la funcion `getProduct` utiliza el metodo `.get` de `sqlite3` para obtener
  //   un producto dado un `id`, ten encuenta que dicho metodo espera 3 parametros la query que sera
  //   ejecutada, el arreglo de valores a introducir en la query y una fucion callback que sera ejecutada
  //   una ves termine de manera exitoso o fallido, retornando la data solicitada o un mensaje en caso de
  //   error en la ejecución del query  .
  db.get("...QUERY...", [...], (...) => {
    ...
  });
};

const deleteProduct = (id, callback) => {
  // 3.4 dentro de la funcion `deleteProduct` utiliza el metodo `.run` de `sqlite3` para eliminar
  // un producto dado un `id`, ten encuenta que dicho metodo espera 3 parametros la query que sera
  // ejecutada, el arreglo de valores a introducir en la query y una fucion callback que sera
  // ejecutada una ves termine de manera exitoso o fallido, en la funcion callback retorna el error
  // o un mensaje de eliminación completa.
};

const updateProduct = (
  id,
  { title, price, category, description, image, stock },
  callback
) => {
  //   3.5 por ultimo dentro de la funcion `updateProduct` utiliza el metodo `.each` de `sqlite3` para obtener
  //   y modificar un producto dado el `id` y la información que vamos a actualizar del producto, ten encuenta
  //   que dicho metodo espera 3 parametros la query que sera ejecutada, el arreglo de valores a introducir en
  //   la query y una fucion callback que sera ejecutada una ves termine de manera exitoso o fallido.
  db.run(
    "...QUERY...",
    [...],
    (err) => {
      if (err) {
        return callback(err);
      }
      //   3.5.1 al terminar la query para actualizar la información del producto retornar el producto con toda
      //   la información actualizada para esto puedes utilizar el metodo `.get` de `sqlite3`.
      db.get(
        "...QUERY...",
        [...],
        (err, updatedProduct) => {
          if (err) {
            return callback(err, null);
          }
          callback(null, updatedProduct);
        }
      );
    }
  );
};

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
