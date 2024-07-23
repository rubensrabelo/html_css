const Tought = require("../models/Tought");
const User = require("../models/User");

module.exports = class ToughtController {
    static async showToughts(req, res) {
        res.render("toughts/home");
    }

    static async dashboard(req, res) {
        const userId = req.session.userid;

        const user = await Tought.findOne({
            where: {id: userId},
            include: tought,
            plain: true,
        });

        if(user) {
            res.redirect("/login");
            return;
        }

        const toughts = user.Tought.map((result) => result.dataValues);

        res.render("toughts/dashboard", {toughts});
    }

    static createTought(req, res) {
        res.render("toughts/create");    
    }

    static async createToughtsSave(req, res) {
        const tought = {
            title: req.body.title,
            userId: req.session.userid
        }

        try {
            await Tought.create(title);

            req.flash("message", "Thought created successfully!");

            req.session.save(() => {
                res.redirect("/toughts/dashboard");
            });
        } catch (error) {
            console.log(error);
        }
    }
}