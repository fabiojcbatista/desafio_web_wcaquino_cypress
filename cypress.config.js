const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://seubarriga.wcaquino.me/login',
   // defaultCommandTimeout: 1000000,
   // responseTimeout: 1000000,
   defaultCommandTimeout: 1000,
   responseTimeout: 1000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
