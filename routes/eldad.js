const {
getEldadInfo
} = require("../controllers/eldad");

const router = require("express").Router();

router.get("/getInfo", getEldadInfo);

module.exports = router;