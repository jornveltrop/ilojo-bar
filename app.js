// Requires
require('dotenv').config()

const express = require('express');
const hbs  = require('express-handlebars');
const handlebars = hbs.engine;
const compression = require('compression')
const fetch = require('node-fetch')

const path = require('path');
const { fileURLToPath } = require('url');
const prismicH = require('@prismicio/helpers');
const { client } = require('./config/prismicConfig.js')


//Variabelen
const app = express();
const apiKey = process.env.APIKEY;
const port = process.env.PORT || 3000;

// Compress alle responses
app.use(compression())

// Aangeven waar onze statishce files zich bevinden  
app.use(express.static('static'));


// Templating engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');


app.use((req, res, next) => {
    res.locals.ctx = {
        prismicH,
    }
    next()
})

const ref = 'Yo8xXBMAACEAdDDP'

//Routing
app.get('/', async (req, res) => {
    const document = await fetch(`https://ilojo-bar.prismic.io/api/v2/documents/`)
    console.log(document)
    res.render('home', { document })
});

//Routing
app.get('/discover', (req, res) => {
    res.render('discover', {
        title: 'discover'})
});

app.get('/discover/:id', (req, res) => {
    res.render('detail', {
        title: 'home'})
})

// Set server
app.listen(port, () => {
    console.log(`Gebruikte poort: localhost:${port} !`)
});