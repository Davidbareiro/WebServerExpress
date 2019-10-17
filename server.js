

const express = require('express')
const app = express()

const hbs = require('hbs');

const port = process.env.PORT || 3000;
 
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {

    res.render ('home.hbs', {
            nombre: 'David', 
            anio: new Date().getFullYear()
        });
})
 
app.get('/about', function (req, res) {

    res.render ('about.hbs', {
            nombre: 'Enzito', 
            anio: new Date().getFullYear() - 10
        });
})


app.listen(port, () => {
    console.log( `Escuchando el puerto ${port}` )
})