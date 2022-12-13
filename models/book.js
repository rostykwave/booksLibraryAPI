const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleSaveErrors } = require('../helpers');

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

bookSchema.post('save', handleSaveErrors);

const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  year: Joi.number().required(),
});

const schemas = {
  addSchema,
};

const Book = model('book', bookSchema);

module.exports = {
  Book,
  schemas,
  bookSchema,
};
