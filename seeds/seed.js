const sequelize = require('../config/connection');
const { Laws, fakenews, userData } = require('./models');

const userData = require('./userData.json');
const lawsSeedData = require('./laws.json');
const fakeNewsSeedData = require('./fakenews.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const laws = await Laws.bulkCreate(lawsSeedData);
  const fakeNews = await fakenews.bulkCreate(fakeNewsSeedData);

  console.log(laws, fakeNews);
  process.exit(0);
};

seedDatabase();