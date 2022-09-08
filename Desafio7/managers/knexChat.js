const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './managers/DB/ecommerce.sqlite'
    },
    useNullAsDefault: true,
})

module.exports = knex ;