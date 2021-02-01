const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema(
  {
    name: String,
    slug: String,
    futureCentre: Number,
    centerQuatity: String,
    description: String,
    cityList: [String],
    regionName: String,
    imageCover: String,
    imgList: [String],
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point']
        },
        coordinates: [Number],
        description: String
      }
    ],
    exercises: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Exercise'
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

regionSchema.index({ slug: 1 });
regionSchema.index({ location: '2dsphere' });

regionSchema.pre(/^findOne/, function(next) {
  this.populate({
    path: 'exercises',
    select: 'name imageCover slug'
  });
  next();
});

const Region = mongoose.model('Region', regionSchema);

module.exports = Region;
