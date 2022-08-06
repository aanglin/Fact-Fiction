const sequelize = require('../config/connection');
const { RandomFacts, User } = require('../models');

// const userData = require('./userData.json');
const randomSeedData = require('./randomFacts.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const randomFacts = await RandomFacts.bulkCreate(randomSeedData);


  console.log(randomFacts);
  process.exit(0);
};

seedDatabase();