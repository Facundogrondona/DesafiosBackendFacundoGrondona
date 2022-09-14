use ecommerce

db.createCollection('productos')

db.createCollection('mensajes')

db.productos.insertMany([{id: 1, nombre:'Mouse', precio:110, thumbnail: 'mouse.img'},{id: 2, nombre:'Teclado', precio:230, thumbnail: 'teclado.img'},{id: 3, nombre:'Monitor', precio:310, thumbnail: 'monitor.img'},{id: 4, nombre:'Auriculares', precio:520, thumbnail: 'auriculares.img'},{id: 5, nombre:'Mouse Pad', precio:680, thumbnail: 'mousepad.img'},{id: 6, nombre:'Disco Duro', precio:790, thumbnail: 'discoduro.img'},{id: 7, nombre:'Disco Solido', precio:890, thumbnail: 'discosolido.img'},{id: 8, nombre:'Mother', precio:1100, thumbnail: 'mother.img'},{id: 9, nombre:'Fuente', precio:3120, thumbnail: 'fuente.img'},{id: 10, nombre:'Grafica', precio:4880, thumbnail: 'grafica.img'}])

db.productos.find()

db.mensajes.insertMany([{mail:'tomas@gmail.com', mensaje: 'hola'}, {mail:'juan@gmail.com', mensaje: 'hola hola'}, {mail:'sofia@gmail.com', mensaje: 'que onda'}, {mail:'lucas@gmail.com', mensaje: 'hola'}, {mail:'mariano@gmail.com', mensaje: 'todo bien'}, {mail:'camila@gmail.com', mensaje: 'todo mal'}, {mail:'barbara@gmail.com', mensaje: 'olas'}, {mail:'polo@gmail.com', mensaje: 'guauguau'}, {mail:'franco@gmail.com', mensaje: 'hola hola hola'}, {mail:'tobias@gmail.com', mensaje: 'como estan'}])

db.mensajes.find()

db.productos.estimatedDocumentCount()
db.mensajes.estimatedDocumentCount()

5) 
a)
db.productos.insertOne({id: 11, nombre:'Reloj', precio:4900, thumbnail: 'reloj.img'})

b)
    i)
    db.productos.find({precio: {$lt: 1000}})

    ii)
    db.productos.find({precio: {$gt: 1000, $lt:3000}})

    iii)
    db.productos.find({precio: {$gt: 3000}})

    iv)
    db.productos.find().sort({precio: 1}).limit(1).skip(2)

c)
db.productos.updateMany({},{$set: {stock: 100}})

d)
db.productos.updateMany({precio: {$gt: 4000}},{$set: {stock: 0}})

e)
db.productos.deleteMany({precio: {$lt: 1000}})


6)
use ecommerce

db.createUser({user: "pepe", pwd: "asd456", roles: [ { role: "read", db: "ecommerce" }] })

mongo -u pepe -p asd456 --authenticationDatabase ecommerce