const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('http://localhost:3001')
  .type('#username-input-signup', 'Jaredplus')
  .type('#password-input-signup', 'password123')
  .click('#signup-form')
  .wait(3000)
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })