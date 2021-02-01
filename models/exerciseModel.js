const mongoose = require('mongoose');
const slugify = require('slugify');

const exerciseSchema = new mongoose.Schema(
  {
    name: String,
    trainer: String,
    date: String,
    price: Number,
    location: String,
    description: String,
    imageCover: String,
    isHorizontal: {
      type: Boolean,
      default: true
    },
    slug: String
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

exerciseSchema.index({ slug: 1 });

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
exerciseSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
