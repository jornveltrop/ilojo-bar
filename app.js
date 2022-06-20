// Requires
import 'dotenv/config';
import express from 'express'
import * as prismicH from '@prismicio/helpers'
import { client } from './config/prismicConfig.js'
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import {fileURLToPath} from 'url';
import compression from 'compression'

//Variabelen
const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const apiKey = process.env.APIKEY;

// Aangeven waar onze statishce files zich bevinden  
app.use(express.static('static'));
// compress all responses
app.use(compression())

// Templating engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/static/views'));


app.use((req, res, next) => {
    res.locals.ctx = {
      prismicH,
    }
    next()
})

//Routing
app.get('/', async (req, res) => {
    let homepage = await client.getSingle('homepage')
    let homepageData = homepage.data

    let title = homepageData.title[0].text
    let subtitle = homepageData.subtitle[0].text
    res.render('home', { title, subtitle })
});

app.get('/3D_model', async (req, res) => {
    res.render('3D_model', {})
});

app.get('/offline', async (req, res) => {
    res.render('offline', {})
});

//Routing
app.get('/discover', async (req, res) => {
    let stories = await client.getAllByType('story', {
        orderings: {
          field: 'my.story.id',
          direction: 'asc'
        }
      })

    let discoverList = stories.map(story => {
        return {
            "url": story.url, 
            "title": story.data.title[0].text
        }
    })
    
    res.render('discover', { discoverList })
});

app.get('/discover/:id', async (req, res) => {
    let stories = await client.getAllByType('story', {
        orderings: {
          field: 'my.story.id',
          direction: 'asc'
        }
      })

    let uid = req.params.id
    let story = await client.getByUID('story', uid)
    let storyData = story.data
    let alineas = storyData.body[0].items
    let id = storyData.id - 1;

    let previous = getPreviousStory(id, stories);
    let next = getNextStory(id, stories);

    res.render('story', { 
        storyData,
        alineas,
        previous,
        next
    })
})

// Set server
app.listen(port, () => {
    console.log(`Gebruikte poort: localhost:${port} !`)
});

function getPreviousStory(id, stories){
    if(id < 0)
        return;
    
    let previousId = id - 1

    let previousStory = stories[previousId];
    return previousStory;
}

function getNextStory(id, stories){
    if(id > stories.length)
        return;
    
    let nextId = id + 1

    let nextStory = stories[nextId];
    return nextStory;
}