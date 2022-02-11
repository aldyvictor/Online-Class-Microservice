var express = require("express");
var router = express.Router();

const chaptersHandler = require("./handler/chapters");

router.post("/", chaptersHandler.create);
router.put("/:id", chaptersHandler.update);
router.delete("/:id", chaptersHandler.destroy);
module.exports = router;