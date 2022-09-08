const knexProducts = require('./knexProducts.js');
const knexChat = require('./knexChat.js');

function createTables() {

    knexProducts.schema.hasTable('products').then((exists) => {
        if (!exists) {
            return knexProducts.schema.createTable('products', (table) => {
                table.increments('id').primary();
                table.string('title');
                table.string('thumbnail');
                table.float('price');
            }).then(() => {
                console.log('Table products created');
            }).catch((error) => {
                console.log(error);
                throw new Error(error);
            })
        } else {
            console.log('Table products already exists');
        }
    })

    knexChat.schema.hasTable('messages').then((exists) => {
        if (!exists) {
            return knexChat.schema.createTable('messages', (table) => {
                table.increments('id').primary();
                table.string('email');
                table.date('date');
                table.string('message');
            }).then(() => {
                console.log('Table messages created');
            }).catch((error) => {
                console.log(error);
                throw new Error(error);
            })
        } else {
            console.log('Table messages already exists');
        }
    })
}

module.exports = createTables;