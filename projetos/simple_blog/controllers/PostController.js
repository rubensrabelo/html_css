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

    static async editPostsGet(req, res) {
        const id = req.params.id;

        const post = await Post.findOne({where: {id}, raw: true});

        res.render("posts/edit", {post});
    }

    static async editPosts(req, res) {
        const id = req.body.id;

        const post = {
            title: req.body.title,
            comment: req.body.comment
        };

        await Post.update(post, {where: {id}});

        res.redirect("/posts");
    }

    static async deletePost(req, res) {
        const id = req.body.id;

        await Post.destroy({where: {id}});

        res.redirect("/posts");
    }
}