const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('http://localhost:3001/gamepage')
   .click('#nightmare')
  .click('#logout')
  .wait(3000)
  .end()
  .then(nightmare
    .goto("http://localhost:3001")
    .type("#username-input-signup", "Jaredplus")
    .type("#password-input-signup", "password123")
    .click("#signup-form")
    .wait(3000)
    .end())
  .catch(error => {
    console.error('Search failed:', error)
  })