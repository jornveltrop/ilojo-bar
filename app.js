// Requires
import 'dotenv/config';
import express from 'express'
import * as prismicH from '@prismicio/helpers'
import { client } from './config/prismicConfig.js'
import expressLayouts from 'express-ejs-layouts';
import compression from 'compression'


//Variabelen
const app = express();
const port = process.env.PORT || 3000;

// Compress alle responses
app.use(compression())

// Cached alles behalve HTML voor 1 jaar (see https://ashton.codes/set-cache-control-max-age-1-year/).
app.use(function(req, res, next) {
    if (req.method == "GET" && !(req.rawHeaders.toString().includes("text/html"))) {
        res.set("Cache-control", "public, max-age=31536000")
    }
    next()
})

// Aangeven waar onze statische files zich bevinden  
app.use(express.static('static'));

// Templating engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');

//Prismic helper for every route
app.use((req, res, next) => {
    res.locals.ctx = {
      prismicH,
    }
    next()
})

//Routing
app.get('/', async (req, res) => {
    res.render('home')
});

app.get('/3D_model', async (req, res) => {
    res.render('3D_model', {})
});

app.get('/offline', async (req, res) => {
    res.render('offline', {})
});

app.get('/discover', async (req, res) => {
    //Get all stories from Prismic
    let stories = await client.getAllByType('story', {
        orderings: {
          field: 'my.story.id',
          direction: 'asc'
        }
      })

    // Make list of all stories with needed data
    let discoverList = stories.map(story => {
        return {
            "url": story.url, 
            "collage_image": story.data.collage_image,
            "title": story.data.title[0].text
        }
    })
    
    res.render('discover', { discoverList })
});

app.get('/discover/:id', async (req, res) => {
    //Get all stories from Prismic
    let stories = await client.getAllByType('story', {
        orderings: {
          field: 'my.story.id',
          direction: 'asc'
        }
      })

    let uid = req.params.id
    // Get story from specific url id
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

// Get link for previous button in story
function getPreviousStory(id, stories){
    if(id < 0)
        return;
    
    let previousId = id - 1

    let previousStory = stories[previousId];
    return previousStory;
}

// Get link for next button in story
function getNextStory(id, stories){
    if(id > stories.length)
        return;
    
    let nextId = id + 1

    let nextStory = stories[nextId];
    return nextStory;
}