const {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../models/models");

const create = (req, res) => {
  // 4.1 crea una función `create` que reciba como parametros el request y response de una petición,
  // luego utilice el modelo `createProduct` para crear un nuevo producto en la base de datos y
  // retornar el **id** del nuevo producto con un codigo **200** y un codigo **500** si ocurrio un
  // error en la creación del producto, al momento de utilizar el modelo `createProduct` recuerda
  // que dicho modelo espera dos parametros uno es la información del producto nuevo la cual va a
  // venir del `request` de la petición y función callback donde realizaremos la respuesta de
  // nuestro controlador.
  const { body } = req;
  createProduct(body, (error, id) => {
    if (error) {
      res.status(501).json(error);
    }
    res.status(201).json({ id });
  });
};

const getAll = (req, res) => {
  // 4.2 crea una función `getAll` que reciba como parametros el request y response de una petición,
  // luego utilice el modelo `getAllProducts` para llamar todos los productos de la base de datos y
  // retornarlos con un codigo **200** en caso que la consulta sea exitosa y un codigo **500** si
  // ocurrio un error en la consulta de los productos, al momento de utilizar el modelo `getAllProducts`
  // ten en cuenta que estamos usando funciones callback para obtener el resultado de la consulta.
  getAllProducts((error, products) => {
    if (error) {
      res.status(501).json(error);
    }
    res.status(201).json(products);
  });
};

const getById = (req, res) => {
  // 4.3 crea una función `getById` que reciba como parametros el request y response de una petición,
  // luego utilice el modelo `getProduct` para obtener la información del producto con **id** en la
  // base de datos y retornar un objeto con la información de dicho producto con un codigo **200**
  // y un codigo **500** si ocurrio un error en la consulta del producto, al momento de utilizar el
  // modelo `getProduct` recuerda que dicho modelo espera dos parametros uno es el **id** del producto
  // que seva a consultar en la DB la cual va a venir en los params del `request` y función callback
  // donde realizaremos la respuesta de nuestro controlador.
  const { params } = req;
  getProduct(params.id, (error, product) => {
    if (error) {
      res.status(501).json(error);
    }
    res.status(201).json(product);
  });
};

const deleteById = (req, res) => {
  // 4.4 crea una función `deleteById` que reciba como parametros el request y response de una petición,
  // luego utilice el modelo `deleteProduct` para eliminar la información del producto con **id** de la
  // base de datos y retornar un mensaje que exito (`string`) con un codigo **200** y un codigo **500**
  // si ocurrio un error en la eliminación del producto, al momento de utilizar el modelo `deleteProduct`
  // recuerda que dicho modelo espera dos parametros uno es el **id** del producto que se va a eliminar
  // en la DB la cual va a venir en los **params** del `request` y función callback donde realizaremos
  // la respuesta de nuestro controlador.
  const { params } = req;
  deleteProduct(params.id, (error, deleteMessage) => {
    if (error) {
      res.status(501).json(error);
    }
    res.status(201).json(deleteMessage);
  });
};

const update = (req, res) => {
  // 4.5 crea una función `update` que reciba como parametros el request y response de una petición, luego
  // utilice el modelo `updateProduct` para crear modificar un producto existente en la base de datos y retornar
  // el producto con la información modificada con un codigo **200** y un codigo **500** si ocurrio un error en
  // la actualización del producto, al momento de utilizar el modelo `updateProduct` recuerda que dicho modelo
  // espera tres parametros uno es la información del producto que se va actualizar la cual va a venir
  // en el **body** del `request`, la segunda el **id** del producto la cual va a venir en los **params**
  // del `request` y una función callback donde realizaremos la respuesta de nuestro controlador.

  const { body, params } = req;
  updateProduct(params.id, body, (error, product) => {
    if (error) {
      res.status(501).json(error);
    }
    res.status(201).json(product);
  });
};

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  update,
};
