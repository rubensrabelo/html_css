const Post = require("../models/Post");

module.exports = class PostController {
    static async showAllPosts(req, res) {
        const posts = await Post.findAll({raw: true});

        res.render("posts/home", {posts});
    }

    static async createPostsGet(req, res) {
        res.render("posts/create");
    }

    static async createPosts(req, res) {
        const post = {
            title: req.body.title,
            comment: req.body.comment
        };

        await Post.create(post);

        res.redirect("/posts");
    }
}