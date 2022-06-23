# Ilojo Bar

![174823571-a708bbf2-4e10-48c0-aef2-89aa51717668](https://user-images.githubusercontent.com/44086608/175252176-13084c5e-dc35-4b4d-a8c2-986ad0e68d2a.jpg)

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
**1 Reading, listening and look at stories about Iloja bar**  
As a resident from Lagos, member of the Nigerian diaspora of interested world citizen, I want to read listen and see stories online about Iloja bar. This is because I want to know more about the meaning of the building for the metropolis Lagos and the cosmopolitan history of it, that lead from Spain to Brazil. 
 
**2 Adding stories about Iloja bar**  
As an artist/visitor I want to be able to add a story to the website, so that I can add and propagate meaning to the building. 
 
**3 Experience Iloja bar**   
 As a resident from Lagos, member of the Nigerian diaspora of interested world citizen, I want to get a virtual impression of the building, so that I can see how it was in the earlier days. This way it will become a virtual monument of the vanished piece of Nigerian heritage

### Motive

The reason of making this, is that the building was destroyed since 2016. Alosians will never know the amazing stories from withing the building. It was once a national monument which is now forgotten. That's why legacy want to let people know how special that building was and why. 

### Objective

The purpose is to let people know the stories of the building of how it once was. See how beautiful it all was. 

### Produce

Our product will be a visualisation of the building and it's history. You can go through the stories with a fun visualisation. We will make multiple prototypes and present them to Legacy.  
 
### Conditions

The deadline of the first sprint is on the third of june at 13:00. We want to make a working prototype to show what we have envisioned. It is necessary that you can go through the stories of Iloja bar, that is something Legacy explicitly want. We have to apply this with our own working API on the website. Legacy also wants a visualisation of the building. 

### Target audience

The target audience of the project are the lagosians. Legacy wants them to know their culture and history. A thing that is good to know about these people is that they use their phones a lot and most of them are older versions. That's why we need good support. Beside that they also have bad internet, which is why we also need to take into account that our website should not be that heavy. The most used browser are these in Nigeria:
 
<img src="https://user-images.githubusercontent.com/44086608/170000883-ad26c145-7519-4990-ae5c-0eda60a75d83.png" width="800">
  
Legacy also wants to reach out the Lagosians abroad. At last some people can visit who are interested in history, but these people are not the main focus. 
 
 
### Relationship with other projects
It falls under Legacy. Legacy keeps busy with other heritages in Nigeria. Sadly we don't have any examples. 

### Problem Definition <a name="ProblemDefinition">
The problem Legacy is struggling with, is the remambrance of Iloja bar. It has been illegally demolished and no sign anymore of it existing. They want to have a visualisation of the building and a display of all the stories from Iloja bar. They want to make this in a site, where it will run mostly on mobile. Another problem is performance. Most of the people in Nigeria have old phones and the internet is unreliable. 
 
## Product <a name="Product">
 
Het uiteindelijk product kun je hier bekijken:

### [Ilojo Bar live demo]()

[foto home + gevels]

We hebben voor ons product gekozen voor een Braziliaanse stijl. De bar is namelijk ooit gebouwd door uit Brazilië teruggekeerde tot slaafgemaakten. Deze bouwstijl brachten ze mee terug naar Nigeria. 

We hebben ervoor gekozen om de gevels als beeldspraak te nemen voor de 9 verhalen. 
Achter elke gevel zit een ander verhaal van de Ilojo Bar.

### Gekozen user stories
We hebben voor de volgende user stories gekozen om aan te werken:

**1. Reading, listening and look at stories about Ilojo bar** <br>
We hebben met de gevels een visualisatie gemaakt van de negen verhalen. Deze verhalen kun je lezen en bekijk met foto's die bij elk verhaal zijn toegevoegd. 

**2. Experience Ilojo bar** <br>
We hebben op de homepagina een visuele indruk gegeven van hoe het gebouw er vroeger uitzag in de omgeving van Lagos. Ook hebben we een 3D model toegevoegd aan het eindproduct.


### Homepage
We hebben de homepagina zo ontworpen dat je een gevoel van binnenkomen hebt. Door een foto van vroeger te combineren met een 3D model van hoe het gebouw er ooit echt uit heeft gezien, komt het tot leven en krijg je een goede indruk van de Ilojo bar in haar omgeving.

We hebben de gebruiker de controle gegeven om het gebouw langzaam tot leven te laten komen door het te animeren op het scrollen van de pagina. Als je scrolt zoomt je in op de Ilojo Bar. 

Dit hebben we gedaan in combinatie met een library van GSAP. Een JavaScript animatie library. Door de omgeving en het gebouw in verschillende lagen als foto over elkaar heen te leggen, kun je dit met opacity en scale mooi animeren.

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
Met GSAP animeer je HTML elementen met CSS properties door te kijken naar de hoeveelheid 'scroll'. Dit kan met de GSAP plugin *scrollTrigger*. 

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
 
### Three.js
Legacy wanted a visualisation of the building of how it used to be. A great way to show the building was in a 3D visualisation on the web. 

We used Three.js to load in our 3D model on the web. To use Three.js we first imported it to the project with npm install, plus we added modules to our static folder (Three.js works client side). 

After that it was coding time. The first thing is to create a scene. This is where we display our elements. Here we set a camera perspective camera. This projection mode is designed to mimic the way the human eye sees. It is the most common projection mode used for rendering a 3D scene. After that we added some lighting to make the scene more realistic. 

But we now have an empty scene with some lighting. The next step is loading the model. We used a fbs loader, because fbx was a known export in maya and blender. We made the materials double sided, because some materials weren't loading correctly. We added it to the scene and added the canvas to a container in HTML. 

```
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
```
    //disable vertical movement plus zooming
    controls.minPolarAngle = Math.PI/2;
    controls.maxPolarAngle = Math.PI/2;
    controls.enableZoom = false;
```

https://user-images.githubusercontent.com/44086608/174762203-3fd11331-3024-4b24-8d45-dd0efb79a4c2.mp4
 
### Performance 
The site is for the people in Lagos where sadly the internet connection is poorly and many people do not have the newest phones. To still make our site working, we made some changes to optimise our performance. 

 ![image](https://user-images.githubusercontent.com/44086608/175268890-d8382546-316c-4185-b5be-7222ca17056d.png)

 
#### Images
The first thing we did was optimise our images. Some images took a lot of loading time, where one was even 2mb. This was drastic for our loading time. So we made all our images webp, which create smaller, richer images that make the web faster. Sadly webp is not always supported so we added a fallback. 
```
<picture>
   <source srcset="/images/close.webp" type="image/webp" >
   <source srcset="/images/close.png" type="image/png">
   <img src="/images/close.png" width="477px" height="478px" alt="Close button">
</picture>
```

#### Compression
We use the compression middleware to improve our performance as well. The middleware will attempt to compress response bodies for all request that traverse through the middleware, based on the given options.

```
// Compress alle responses
app.use(compression())
```

#### Caching
Caching is a great way to improve the performance if you visit the site repeatedly. If you visit the site it caches the core, which is our JS, images, fonts and css, plus it caches the HTML pages you have visited. For the caching strategy we chose 'stale while revalidate'. This strategy means that if a request can be loaded from the caching it will be done this way. Otherwise it will run a fetch in the background to save it in the cache, this way your site wil be up to date with a delay of 1 refresh. This way it will load almost instant if you have visited the page before. Another great thing about caching is that if you are offline, but you have visited a page beforehand when you were online, it will still load. This is because it is cached in your local storage. 

```
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

```
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
