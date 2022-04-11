import mongoose from "mongoose";

const sneakerSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  colorway: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  retailPrice: {
    type: String,
    required: true,
  },
  shoe: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  media: {
    type: String,
    required: true,
  },
});

const Sneakers = mongoose.model("sneakers", sneakerSchema);

export default Sneakers;
