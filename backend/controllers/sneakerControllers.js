import Sneaker from "../models/sneakerModel.js";

const getAllSneakers = async (req, res) => {
  const pageSize = 15;
  const page = Number(req.query.pageNumber) || 1;
  try {
    const count = await Sneaker.countDocuments();

    const sneakers = await Sneaker.find()
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    res.json({ sneakers, page, pages: Math.ceil(count / pageSize) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getSneakerById = async (req, res) => {
  try {
    const sneaker = await Sneaker.findById(req.params.id);

    res.json(sneaker);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Yawgi Error" });
  }
};

export { getAllSneakers, getSneakerById };
