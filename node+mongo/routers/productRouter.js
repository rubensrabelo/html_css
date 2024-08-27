const express = require("express");

const ProductController = require("../controllers/ProductController");

const router = express.Router();

router.get("/:id", ProductController.getProduct);
router.get("/", ProductController.showProducts);
router.get("/create", ProductController.createProduct);
router.post("/create", ProductController.createProductPost);

module.exports = router;