const sequelize = require('../config/connection');
const { Laws, FakeNews, User } = require('../models');

// const userData = require('./userData.json');
const lawsSeedData = require('./laws.json');
const fakeNewsSeedData = require('./fakenews.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const laws = await Laws.bulkCreate(lawsSeedData);
  const fakenews = await FakeNews.bulkCreate(fakeNewsSeedData);

  console.log(laws, fakenews);
  process.exit(0);
};

seedDatabase();