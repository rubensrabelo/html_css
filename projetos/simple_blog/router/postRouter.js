const express = require("express");

const PostController = require("../controllers/PostController");

const router = express.Router();

router.post("/delete", PostController.deletePost)
router.post("/edit", PostController.editPosts)
router.get("/edit/:id", PostController.editPostsGet)
router.post("/create", PostController.createPosts)
router.get("/create", PostController.createPostsGet)
router.get("/", PostController.showAllPosts);

module.exports = router;