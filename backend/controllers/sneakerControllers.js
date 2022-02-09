const Sneakers = require("../models/sneakers");

const getProducts = async (req, res) => {
  try {
    const products = await Sneakers.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const sneaker = await Sneakers.findById(req.params.id);

    res.json(sneaker);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Yawgi Error" });
  }
};

module.exports = {
  getProducts,
  getProductById,
};
