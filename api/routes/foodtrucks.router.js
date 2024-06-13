const router = require("express").Router();

const { foodtrucksController } = require("../controller/foodtrucks.controller")

router.get("/", foodtrucksController);

module.exports = router;

