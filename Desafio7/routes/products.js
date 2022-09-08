// MODULOS //

const express = require('express');
const Contenedor = require('../managers/contenedor');
const knexProducts = require('../managers/knexProducts.js');

// ROUTER //

const router = express.Router();


// MIDDLEWARE //

router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));
// CONTENEDOR //

let products = new Contenedor(knexProducts, 'products');

// ROUTES //

router.get('/', async (req, res, next) => {
    try {
        let productsArray = await products.getAll();
        if (productsArray.length > 0) {
            res.render('main', {
                products: productsArray,
                productsExist: true
            });
        } else {
            res.render('main', {
                productsExist: false
            });
        }
    } catch (error) {
        next(error);
    }
}).post('/', async (req, res, next) => {
    try {
        if (!req.body.title || !req.body.price || !req.body.thumbnail) {
            throw new Error("El producto no tiene todos los campos");
        }
        await products.save(req.body).then(() => {
            res.redirect('/');
        });
    } catch (err) {
        next(err);
    }
});

// HANDLE ERRORS //
function handleErrors(err, req, res, next) {
    console.log(err.message);
    res.status(500).send({ error: err.message });
}
router.use(handleErrors);

module.exports = router;