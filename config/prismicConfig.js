import fetch from 'node-fetch'
import * as prismic from '@prismicio/client'

const repoName = 'ilojo-bar'
const accessToken = ''

const routes = [
  {
    type: 'homepage',
    path: '/',
  },
  {
    type: 'discover',
    path: '/discover',
  },
  {
    type: 'story',
    path: '/discover/:uid',
  },
]

export const client = prismic.createClient(repoName, { 
  fetch, 
  accessToken,
  routes,
})