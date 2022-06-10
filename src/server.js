import express from 'express';
import morgan from 'morgan';
import routeProductos from './routes/productos';
const app = express();
/** DB */
import {options} from '../configDB.js';
import knex from 'knex';


/** Middleware */
app.use(express.static( '/public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/products', routeProductos)

const PORT = process.env.PORT || 8080;

/** queries */
// knex(options).schema.createTable('carrito', (table) => {
//     table.increments('id').primary().unique();
//     table.string('nombre').notNullable();
//     table.string('descripcion');
//     table.integer('precio').notNullable();
//     table.integer('cantidad').notNullable();
// }).then(() => {
//     console.log('Tabla creada');
// }
// ).catch((err) => {
//     console.log(err);
// }
// );

/** CONNECTION SERVER */

try {
    app.listen(PORT);
    console.log(`Server on port ${PORT}...`)
} catch (error) {
    console.log('Error de conexión con el servidor...', error)
}