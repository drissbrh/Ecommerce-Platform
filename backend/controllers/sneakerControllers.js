import Sneakers from "../models/sneakers.js";

const getProducts = async (req, res) => {
  const pageSize = 15;
  const page = Number(req.query.pageNumber) || 1;
  try {
    const count = await Sneakers.countDocuments();

    const products = await Sneakers.find()
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
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

export { getProducts, getProductById };
