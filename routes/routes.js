const router = require("express").Router();
const {
  create,
  getAll,
  getById,
  deleteById,
  update,
} = require("../controllers/controllers");

// 1. crear una ruta `POST /product` para la creación de productos con los parametros dados en el punto **2.1**.
router.post("/product", create);
// 2. crear una ruta `GET /product` para obtener todos los productos almacenados en nuestra DB.
router.get("/product", getAll);
// 3. crear una ruta `GET /product/:id` para obtener un producto solicitado (`id`) almacenado en nuestra DB.
router.get("/product/:id", getById);
// 4. crear una ruta `DELETE /product/:id` para eliminar un producto dado (`id`).
router.delete("/product/:id", deleteById);
// 5. crear una ruta `PUT /product/:id` para modificar un producto dado (`id`).
router.put("/product/:id", update);

module.exports = router;
