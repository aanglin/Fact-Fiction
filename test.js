const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('http://localhost:3001')
  .type('#users', 'aanglin')
  .type('#password', 'password123')
  .click('#login')
  .wait(3000)
  .end()
  .then()
  .catch(error => {
    console.error('Search failed:', error)
  })
// plesaas