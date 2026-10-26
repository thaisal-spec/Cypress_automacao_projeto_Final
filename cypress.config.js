const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // Bloqueia os anúncios do Google que travam a tela após o cadastro
    blockHosts: [
      '*googlesyndication.com',
      '*doubleclick.net',
      '*google-analytics.com',
      '*://googlesyndication.com'
    ]
  },
});