const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('http://localhost:3001/gamepage')
  .click('#nightmare')
  .click('#logout')
//   .type('#users', 'aanglin')
//   .type('#password', 'password123')
//   .click('#login')
  .wait(3000)
  .end()
  .then(nightmare.goto('http://google.com'))
  .catch(error => {
    console.error('Search failed:', error)
  })