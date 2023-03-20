const EldadModel = require("../models/eldad");
const { getAll, getById, create, updateOne, deleteOne } = require("./main");

const getEldadInfo = async (req, res) => {
  await EldadModel.find({})
    .then((data) => {
      data.length == 0
        ? res.status(300).json({ success: false, message: "no data found" })
        : res.status(200).json({ success: true, data });
    })
    .catch((err) => res.status(400).json({ success: false, err }));
};



module.exports = {
  getEldadInfo
}