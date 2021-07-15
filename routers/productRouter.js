const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

router.get("/products",controller.getAll)

router.get("/products/getAll",controller.getAll)

router.get("/products/getById",controller.getById)

module.exports=router;
