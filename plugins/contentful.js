// ./plugins/contentful.js

if (process.env.NODE_ENV !== 'production'){
  const CMSKEYS = require('../.contentful.json')
  process.env.CTF_SPACE_ID = CMSKEYS.CTF_SPACE_ID
  process.env.CTF_CDA_ACCESS_TOKEN = CMSKEYS.CTF_CDA_ACCESS_TOKEN
}

const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
}

// export `createClient` to use it in page components
module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}