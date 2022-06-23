# Ilojo Bar

![Banner Ilojo Bar](https://user-images.githubusercontent.com/74248007/175300137-1d406f5c-963d-4eb5-9f68-42d601644fa2.jpg)


## Table of contents
  * [Introduction](#Introduction)
  * [Debriefing](#Debriefing)
  * [Problem Definition](#ProblemDefinition)
  * [Product](#Product)
  * [Next steps](#Next)
  * [License](#License)

## Introduction <a name="Introduction"> 
Ilojo Bar of Casa do Fernandez was a national monument in Lagos, Nigeria, that was illegaly demolished in 2016. Ilojo bar was designed and build by Africans in the 19th century who returned from slavery in Brazil. Legacy wanted us to build a site that gives a remembrance of the building with it's many stories plus a visualisation of how it once was. 

This was our end assignment for the minor web development. Here you can read our design rationale where we explain the problem and explain our solutions plus how we made them. 
 
## Debriefing <a name="Debriefing">

### Contact information

Client: Legacy 

Contact: Femke van Zeijl, femke@fvz-journaliste.nl

Inquiry: 23-05-22

Deadline: 23-06-22

### Background information

Legacy | The Historical and Environmental Group of Nigeria, with in person Femky van Zijel, head of the research.
 
### Job description

Legacy want all the stories brought together and have a visual representation of the building with the stories included.
#### User stories
**1 Reading, listening and look at stories about Ilojo bar**  
As a resident from Lagos, member of the Nigerian diaspora of interested world citizen, I want to read listen and see stories online about Ilojo bar. This is because I want to know more about the meaning of the building for the metropolis Lagos and the cosmopolitan history of it, that lead from Spain to Brazil. 
 
**2 Adding stories about Ilojo bar**  
As an artist/visitor I want to be able to add a story to the website, so that I can add and propagate meaning to the building. 
 
**3 Experience Ilojo bar**   
 As a resident from Lagos, member of the Nigerian diaspora of interested world citizen, I want to get a virtual impression of the building, so that I can see how it was in the earlier days. This way it will become a virtual monument of the vanished piece of Nigerian heritage

### Motive

The reason of making this, is that the building was destroyed since 2016. Alosians will never know the amazing stories from withing the building. It was once a national monument which is now forgotten. That's why legacy want to let people know how special that building was and why. 

### Objective

The purpose is to let people know the stories of the building of how it once was. See how beautiful it all was. 

### Produce

Our product will be a visualisation of the building and it's history. You can go through the stories with a fun visualisation. We will make multiple prototypes and present them to Legacy.  
 
### Conditions

The deadline of the first sprint is on the third of june at 13:00. We want to make a working prototype to show what we have envisioned. It is necessary that you can go through the stories of Ilojo bar, that is something Legacy explicitly want. We have to apply this with our own working API on the website. Legacy also wants a visualisation of the building. 

### Target audience

The target audience of the project are the lagosians. Legacy wants them to know their culture and history. A thing that is good to know about these people is that they use their phones a lot and most of them are older versions. That's why we need good support. Beside that they also have bad internet, which is why we also need to take into account that our website should not be that heavy. The most used browser are these in Nigeria:
 
<img src="https://user-images.githubusercontent.com/44086608/170000883-ad26c145-7519-4990-ae5c-0eda60a75d83.png" width="800">
  
Legacy also wants to reach out the Lagosians abroad. At last some people can visit who are interested in history, but these people are not the main focus. 
 
 
### Relationship with other projects
It falls under Legacy. Legacy keeps busy with other heritages in Nigeria. Sadly we don't have any examples. 

### Problem Definition <a name="ProblemDefinition">
The problem Legacy is struggling with, is the remambrance of Ilojo bar. It has been illegally demolished and no sign anymore of it existing. They want to have a visualisation of the building and a display of all the stories from Ilojo bar. They want to make this in a site, where it will run mostly on mobile. Another problem is performance. Most of the people in Nigeria have old phones and the internet is unreliable. 
 
## Product <a name="Product">
 
You can look at our final product using this link:

### [Ilojo Bar live demo]()

[foto home + gevels]

For our product we chose a Brazilian style. The bar is namely build by slaves who came back from Brazil. They brought this building style to Nigeria. 

We chose to use the windows of the building as a metaphor for the 9 stories. Behind each window is a story of Ilojo bar.

### Gekozen user stories
We hebben voor de volgende user stories gekozen om aan te werken:

**1. Reading, listening and look at stories about Ilojo bar** <br>
 We made a visualisation of the with the windows of the building for the 9 stories. You can read these stories and look at the photo's that were added for each of them. 

**2. Experience Ilojo bar** <br>
On the homepage we made a visual impression on how the building used to look like in the early days. We added the scenery around the building in Lagos. We also added a 3D model so people can have a 360 look of the building. 

### Homepage
We designed the homepage in a way that it gives a feeling of coming into the building. By combing a picture of earlier with the 3D building of how the building would have looked like, it comes alive and you get a good impression of Ilojo bar and it's surrounding. 

We gave the user control to let the building slowly come to live by letting the scrolling animate the page. If you scroll, it zooms into the Ilojo bar. 
 
We did this using a combination of the library from GSAP and a Javascript animation library. By giving the surrounding and the building multiple layers of photo's overlapping each other, you have the ability to animate it nicely with opacity and scale. 

***HTML***

```html
<div class="scroll_cont">
    <picture>
        <source srcset="/images/ilojo_bar_bw_2.webp" type="image/webp">
        <source srcset="/images/ilojo_bar_bw_2.png" type="image/png">
        <img src="/images/ilojo_bar_bw_2.png" alt="Colored Ilojo bar" width="1772px" height="1772px">
    </picture>
    <picture>
        <source srcset="/images/ilojo_bar_bw_1.webp" type="image/webp">
        <source srcset="/images/ilojo_bar_bw_1.jpg" type="image/jpeg">
        <img id="background" src="/images/ilojo_bar_bw_1.jpg" alt="Ilojo bar old with environment" width="1772px" height="1772px">
    </picture>
    <picture>
        <source srcset="/images/ilojo_bar_bw_2.webp" type="image/webp">
        <source srcset="/images/ilojo_bar_bw_2.png" type="image/png">
        <img id="color_building" src="/images/ilojo_bar_bw_2.png" alt="Colored Ilojo bar" width="1772px" height="1772px">
    </picture>
    <picture>
        <source srcset="/images/ilojo_bar_bw_3.webp" type="image/webp">
        <source srcset="/images/ilojo_bar_bw_3.png" type="image/png">
        <img id="overlay" src="/images/ilojo_bar_bw_3.png" alt="Ilojo bar old with environment" width="1772px" height="1772px">
    </picture>
</div>

```

***GSAP JavaScript*** <br>
With GSAP you animate the HTML elemnents and CSS properties by looking at the amount of 'scroll'. This is possible with the GSAP plugin *scrollTrigger*. 

```javascript
let scrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.img_cont',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      pin: true,
      snap: 1
    }
});

scrollTL
 .fromTo('.scroll_btn', {opacity: 1, duration: .3}, {opacity: 0} )
 .from('.scroll_cont', {scale: 1},'<')
 .fromTo('#color_building', {opacity: 0}, {opacity: 1},'<')
 .fromTo('#background', {opacity: 1}, {opacity: 0},'-=50%')
 .fromTo('#overlay', {opacity: 1, scale: 1}, {opacity: 0, scale: 1.05}, '<25%')
 .fromTo('.discover_cont',{opacity: 0, zIndex: 0, scale: 0.9, rotation:-3}, {opacity: 1, zIndex: 2, scale: 1, rotation:0}, '<')
 .from('.see_model_cont',{ translateX: "100%", opacity: "0"}, '<')
 .addLabel('end')


```
 
### 3D model with Three.js
Legacy wanted a visualisation of the building of how it used to be. A great way to show the building was in a 3D visualisation on the web. 

We used Three.js to load in our 3D model on the web. To use Three.js we first imported it to the project with npm install, plus we added modules to our static folder (Three.js works client side). 

After that it was coding time. The first thing is to create a scene. This is where we display our elements. Here we set a camera perspective camera. This projection mode is designed to mimic the way the human eye sees. It is the most common projection mode used for rendering a 3D scene. After that we added some lighting to make the scene more realistic. 

But we now have an empty scene with some lighting. The next step is loading the model. We used a fbs loader, because fbx was a known export in maya and blender. We made the materials double sided, because some materials weren't loading correctly. We added it to the scene and added the canvas to a container in HTML. 

```javascript
fbxLoader.load(
        'models/building.fbx',
        (object) => {
            object.traverse(function (child) {
                if ( child.isMesh ) {
                    if(child.material)
                        child.material.side = THREE.DoubleSide;
                }
            })
            object.scale.set(.02, .02, .02)
            buildingObj = object;
            controls.enablePan = false;
            scene.add(object)
            progressBar.style.display = "none";
```

After that we wanted some animation. We simply rotated the y rotation of the object in the animate function. We only wanted to users to be able to grab the model and turn it horizontally. So we added orbitcontrols and disabled vertical movement and zooming. 
```javascript
    //disable vertical movement plus zooming
    controls.minPolarAngle = Math.PI/2;
    controls.maxPolarAngle = Math.PI/2;
    controls.enableZoom = false;
```

https://user-images.githubusercontent.com/44086608/174762203-3fd11331-3024-4b24-8d45-dd0efb79a4c2.mp4
 
### Discover stories
We coupled every story to a window in the discover stories page. You can look at the inside of the window, which shows a moment from Ilojo bar. By placing photo's behind the window and letting them open when their are in view (or on hover on desktop), will get people curious about the stories. You get people be triggered to explore the stories. 

The different stories are being pulled from a Headless CMS. With server side templating they will be converted to html. 

```ejs
<ol class="storiesList">
    <% discoverList.forEach(story => { %>
        <li class="in-view"> 
            <div class="window_wrap">
                <div class="window_img_cont">
                    <div class="window_img_inner">
                        <img src="<%- story.collage_image.url %>" alt="<%- story.collage_image.alt %>" loading="lazy" width="350px" height="300px">
                    </div>
                </div>
                <img class="window door window_L" srcset="/images/window_L.webp" src="/images/window_L.png" alt="window left side Ilojo bar" width="354px" height="525px" draggable="false" />
                <img class="window door window_R" srcset="/images/window_R.webp" src="/images/window_R.png" alt="window right side Ilojo bar" width="354px" height="525px" draggable="false"/>
                <img class="window window_bg" srcset="/images/window_bg.webp" src="/images/window_bg.png" alt="window Ilojo bar" width="354px" height="525px" draggable="false" />
            </div>
            <h3><%- story.title %></h3>
            <a href="<%- story.url %>" aria-label="<%- story.title %>" class="btn_a">Discover</a>
        </li>
   <% }); %>
</ol>
```

The windows are made using different layers of photo's on top of each other. There are all made responsive using CSS. 

```css
.discover li {
    scroll-snap-align: center;
    height: 100%;
    display: flex;
    color: var(--light);
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: .5em;
}

.discover li .window_wrap {
    height: 60vh;
    position: relative;
    display: flex;
    justify-content: center;
}

.discover li img {
    object-fit: contain;
    height: 90%;
    width: auto;
}

.window {
    position: absolute;
}

.door {
    z-index: 2;
    transition: transform 1s ease, filter 1s ease;
}

.window_L {
    transform-origin: 16.28%;
}

.window_R {
    transform-origin: 86.04%;
}

.window_bg {
    -webkit-filter: drop-shadow(0px 0px 10px rgba(0,0,0,.4));
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,.4));
}

.window_img_cont {
    height: 90%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    mask-image: url(/images/windows.webp);
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: bottom;
    -webkit-mask-image: url(/images/windows.webp);
    -webkit-mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: bottom;
}

.window_img_inner {
    height: 56%;
    width: 39vh;
    -webkit-filter: drop-shadow(0px 0px 10px rgba(0,0,0,.4));
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,.4));
}

.discover .window_img_inner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

The animating of the windows is also done by using CSS:
[gifje windows]

```css
li:hover .window_L {
    transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-110deg);
    -webkit-filter: drop-shadow(10px 6px 5px rgba(0,0,0,.2));
    filter: drop-shadow(10px 6px 5px rgba(0,0,0,.2));
}

li:hover .window_R {
    transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(110deg);
    -webkit-filter: drop-shadow(-10px 6px 5px rgba(0,0,0,.2));
    filter: drop-shadow(-10px 6px 5px rgba(0,0,0,.2));
}

@media only screen and (max-width: 1220px) {
    .in-view .window_L {
        transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-110deg);
        -webkit-filter: drop-shadow(10px 6px 5px rgba(0,0,0,.2));
        filter: drop-shadow(10px 6px 5px rgba(0,0,0,.2));
    }

    .in-view .window_R {
        transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(110deg);
        -webkit-filter: drop-shadow(-10px 6px 5px rgba(0,0,0,.2));
        filter: drop-shadow(-10px 6px 5px rgba(0,0,0,.2));
    }
}
```
         
### Story pages
The story pages are dynamically being loaded in with the server with the API. This gets the title, body text and the photo's of each story. The photo's give an visualisation of the story. 

The API is made in a the Headless CMS Primic. The stories are written in Prismic, as well as the photo's being added. 

[Foto prismic]

Every story is based on an id that is being retrieved from the server.
      
```javascript
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
```

The story pages are made responsive by using CSS:

```css
@media only screen and (max-width: 756px) {    
    .story section, .story section:nth-child(2n) { 
        flex-direction: column-reverse;
    }
}

```

 
### Performance 
The site is for the people in Lagos where sadly the internet connection is poorly and many people do not have the newest phones. To still make our site working, we made some changes to optimise our performance. 

 ![image](https://user-images.githubusercontent.com/44086608/175268890-d8382546-316c-4185-b5be-7222ca17056d.png)

 
#### Images
The first thing we did was optimise our images. Some images took a lot of loading time, where one was even 2mb. This was drastic for our loading time. So we made all our images webp, which create smaller, richer images that make the web faster. Sadly webp is not always supported so we added a fallback. 
```html
<picture>
   <source srcset="/images/close.webp" type="image/webp" >
   <source srcset="/images/close.png" type="image/png">
   <img src="/images/close.png" width="477px" height="478px" alt="Close button">
</picture>
```

#### Compression
We use the compression middleware to improve our performance as well. The middleware will attempt to compress response bodies for all request that traverse through the middleware, based on the given options.

```javascript
// Compress alle responses
app.use(compression())
```

#### Caching
Caching is a great way to improve the performance if you visit the site repeatedly. If you visit the site it caches the core, which is our JS, images, fonts and css, plus it caches the HTML pages you have visited. For the caching strategy we chose 'stale while revalidate'. This strategy means that if a request can be loaded from the caching it will be done this way. Otherwise it will run a fetch in the background to save it in the cache, this way your site wil be up to date with a delay of 1 refresh. This way it will load almost instant if you have visited the page before. Another great thing about caching is that if you are offline, but you have visited a page beforehand when you were online, it will still load. This is because it is cached in your local storage. 

```javascript
self.addEventListener('fetch', function(event) {

    if (isCoreGetRequest(event.request)) {
        //Pakt meteen de cache versie
        event.respondWith(
          caches.open(CORE)
            .then(cache => cache.match(event.request.url))
        )
    } else if (isHtmlGetRequest(event.request)) {
        //Pakt cache als die er is, ondertussen nieuwe versie in cache opslaan
        event.respondWith(
        caches.match(event.request.url)
            .then(response => {
                if (response) {
                    event.waitUntil(
                        fetchAndCache(event.request.url, 'html-cache')
                    )
                    return response
                } else {
                    return fetchAndCache(event.request.url, 'html-cache')
                }
            })
            .catch(e => {
            return caches.open(CORE)
                .then(cache => cache.match('/offline'))
            })
        )
    } else if (isOtherGetRequest(event.request)) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    return response;
                })
                .catch(e => {
                    return caches.open(CORE)
                        .then(cache => cache.match('/offline'))
                })
        )

    }
});
``` 

We also cache everything besides the HTML pages for a year. This is great for our images or other elements on the site, that do not change often. It does not have to load everytime we load the page again. Plus why not cache it if it doesn't change that often. 

```javascript
app.use(function(req, res, next) {
    if (req.method == "GET" && !(req.rawHeaders.toString().includes("text/html"))) {
        res.set("Cache-control", "public, max-age=31536000")
    }
    next()
})
```
 
## Next steps <a name="Next">
Sadly we only had a limited time for this project, so their are still features/elements we want to add to this project. Here is a list of them: 
- [ ] Styling of the story pages
- [ ] Make the 3D model responsive
- [ ] Routes in modules
- [ ] The option to add stories
 
## License <a name="License">

This work is licensed under [MIT](./LICENSE).
