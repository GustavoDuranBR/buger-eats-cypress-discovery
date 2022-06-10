const { defineConfig } = require('cypress')

projectId: "fh4ost"

module.exports = defineConfig({
  projectId: "fh4ost",
  viewportWidth: 1440,
  viewportHeight: 900,
  
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://buger-eats-qa.vercel.app',
  },
  
})
