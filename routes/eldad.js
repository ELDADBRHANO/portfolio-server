const {
getEldadInfo,
createInfo
} = require("../controllers/eldad");

const router = require("express").Router();

router.get("/getInfo", getEldadInfo);
router.post("/post", createInfo);

module.exports = router;