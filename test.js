const { initDB, closeDB, db } = require("./db");
const {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("./models/models");

describe("Base de Datos E-commerce", () => {
  beforeAll(() => {
    initDB(); // Crea la tabla antes de las pruebas
  });

  afterEach(() => {
    db.run("DELETE FROM products"); // Borra todos los registros después de cada prueba
  });

  afterAll(() => {
    closeDB(); // Cierra la base de datos después de las pruebas
  });

  it("Crear un producto nuevo y buscalo en la base de datos", (done) => {
    // 6.1 utiliza el metodo `createProduct` para crear un nuevo producto, luego
    // verifica que el producto nuevo existe en la base de datos utilizando el
    // metodo `getProduct` si es de esta manera el test debe pasar

    const newProduct = {
      title: "PRODUCTO NUEVO",
      price: 12,
      category: "category",
      description: "description",
      image: "image",
      stock: 13,
    };
  });

  it("Crear un dos productos y llama todos los productos creados", (done) => {
    // 6.2 utiliza el metodo `createProduct` para crear dos nuevos productos, luego
    // verifica que todos los productos nuevos existe en la base de datos utilizando
    // el metodo `getAllProducts` si es de esta manera el test debe pasar

    const newProduct1 = {
      title: "PRODUCTO NUEVO",
      price: 12,
      category: "category",
      description: "description",
      image: "image",
      stock: 13,
    };

    const newProduct2 = {
      title: "PRODUCTO NUEVO",
      price: 12,
      category: "category",
      description: "description",
      image: "image",
      stock: 13,
    };
  });

  it("Crear un dos productos y elimina el segundo producto creado", (done) => {
    // 6.3 utiliza el metodo `createProduct` para crear dos nuevos productos, luego
    // elimina el segundo producto creado utilizando el metodo `deleteProduct` si es
    // de esta manera el test debe pasar

    const newProduct1 = {
      title: "PRODUCTO NUEVO",
      price: 12,
      category: "category",
      description: "description",
      image: "image",
      stock: 13,
    };

    const newProduct2 = {
      title: "PRODUCTO NUEVO",
      price: 12,
      category: "category",
      description: "description",
      image: "image",
      stock: 13,
    };
  });

  it("Crear un producto y actualiza su información", (done) => {
    // 6.4 utiliza el metodo `createProduct` para crear un nuevo producto,
    // luego modifica el nuevo product utilizando el metodo `updateProduct`
    // si es de esta manera el test debe pasar
    const newProduct = {
      title: "PRODUCTO NUEVO",
      price: 12,
      category: "category",
      description: "description",
      image: "image",
      stock: 13,
    };
    const newProductUpdated = {
      title: "PRODUCTO NUEVO",
      price: 12,
      category: "category",
      description: "description",
      image: "image",
      stock: 13,
    };
  });
});
