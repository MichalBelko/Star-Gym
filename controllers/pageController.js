const Exercise = require('../models/exerciseModel');
const Region = require('../models/regionModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOne = Model =>
  catchAsync(async (req, res, next) => {
    res.status(200).render(`${Model}`);
  });

exports.getGroupExercises = catchAsync(async (req, res) => {
  // 1) Get tour data from collection
  const exercises = await Exercise.find();

  res.status(200).render('groupExercise', {
    title: 'Skupinové cvičenia',
    exercises
  });
});

exports.getExercise = catchAsync(async (req, res, next) => {
  const exercise = await Exercise.findOne({ slug: req.params.slug });

  if (!exercise) {
    return next(new AppError('There is no exercise with that name.', 404));
  }

  res.status(200).render('exercise', {
    title: `${exercise.name}`,
    exercise
  });
});

exports.getRegion = catchAsync(async (req, res, next) => {
  const region = await Region.findOne({ slug: req.params.slug });

  if (!region) {
    return next(new AppError('There is no region with that name.', 404));
  }

  res
    .status(200)
    .set(
      'Content-Security-Policy',
      'connect-src https://*.tiles.mapbox.com https://api.mapbox.com https://events.mapbox.com'
    )
    .render('region', {
      status: 'success',
      title: `${region.name}`,
      region
    });
});
