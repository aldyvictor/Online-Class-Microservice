var express = require("express");
const { route } = require(".");
var router = express.Router();

const reviewsHandler = require("./handler/reviews");

router.post("/", reviewsHandler.create);
router.put("/:id", reviewsHandler.update);
router.delete("/:id", reviewsHandler.destroy);
module.exports = router;