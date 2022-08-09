const RandomFacts = require("./RandomFacts");
const User = require("./User");
const ResultsPage = require("./ResultsPage")

User.hasMany(ResultsPage, {
  foreignKey: 'id'
})

ResultsPage.belongsTo(User, {
  foreignKey: 'id',
});

module.exports = { RandomFacts, User, ResultsPage };