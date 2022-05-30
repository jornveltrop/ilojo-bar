// node-fetch is used to make network requests to the Prismic Rest API. 
// In Node.js Prismic projects, you must provide a fetch method to the
// Prismic client.
const fetch = require('node-fetch');
const prismic = require('@prismicio/client');

const repoName = 'ilojo-bar'
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6Imlsb2pvLWJhci1kNjc5NWZiOS1kNTVhLTQzYTgtOTcwNi05MDE2YTA5MWU5ZWJfNCIsImRhdGUiOjE2NTM1NTI3OTIsImRvbWFpbiI6Imlsb2pvLWJhciIsImlhdCI6MTY1MzU1Mjc5Mn0.zfpnmq3iDkiRUGFImM5EtA7YeSOszOZWxumzb5HPHzY' // If your repository is private, add an access token.

// The `routes` property is your Route Resolver. It defines how you will 
// structure URLs in your project. Update the types to match the Custom 
// Types in your project, and edit the paths to match the routing in your 
// project.
const routes = [
  {
    type: 'Home-page',
    path: '/',
  },
  {
    type: 'Discover',
    path: '/discover',
  },
  {
    type: 'Story',
    path: '/discover/:uid',
  },
]

const client = prismic.createClient(repoName, { 
  fetch, 
  accessToken,
  routes,
})