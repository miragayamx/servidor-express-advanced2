const express = require('express');
const productRouter = require('./productRouter');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use('/api', productRouter);

const server = app.listen(PORT, () => console.log(`El servidor esta corriendo en el puerto: ${server.address().port}`));

server.on('error', (err) => console.log(`Error de servidor: ${err}`));
