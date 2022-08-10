const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })



nightmare
    .goto("http://localhost:3001")
    .click('Sign up')
    .type("#username-input-signup", "Larry")
    .type("#password-input-signup", "password123")
    .click("#signup-form")
    .wait()
    .end()
    .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })