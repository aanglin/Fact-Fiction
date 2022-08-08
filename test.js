const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://youtube.com')
  .type('#search-input', 'github nightmare')
  .click('#search-icon-legacy')
  .wait('#r1-0 a.result__a')
  .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
  .end()
  .then(console.log ('it ran'))
  .catch(error => {
    console.error('Search failed:', error)
  })