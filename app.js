// Requires
import 'dotenv/config';
import express from 'express'
import { engine } from 'express-handlebars';
import * as prismicH from '@prismicio/helpers'
import { client } from './config/prismicConfig.js'

//Variabelen
const app = express();
const port = process.env.PORT || 3000;
// const apiKey = process.env.APIKEY;

// Aangeven waar onze statishce files zich bevinden  
app.use(express.static('static'));


// Templating engine
app.engine("hbs", engine({ 
    helpers:  {
        PrismicText: (data) => {
            return prismicH.RichText.asText(data, PrismicConfig.linkResolver)
        }
    },
    extname: ".hbs" }))
app.set('view engine', 'hbs');
app.set('views', './views');


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
    console.log(homepageData)

    let title = homepageData.title[0].text
    let subtitle = homepageData.subtitle[0].text
    res.render('home', { title, subtitle })
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
    let uid = req.params.id
    let story = await client.getByUID('story', uid)
    let storyData = story.data
    console.log(storyData)

    res.render('story', { storyData })
})

// Set server
app.listen(port, () => {
    console.log(`Gebruikte poort: localhost:${port} !`)
});