const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Exercise = require('../models/exerciseModel');
const Region = require('../models/regionModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const exercises = JSON.parse(
  fs.readFileSync(`${__dirname}/cvicenia.json`, 'utf-8')
);
const regiony = JSON.parse(
  fs.readFileSync(`${__dirname}/regiony.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Exercise.create(exercises);
    await Region.create(regiony);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Exercise.deleteMany();
    await Region.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
