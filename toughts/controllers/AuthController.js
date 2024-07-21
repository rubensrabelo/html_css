const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {
    static login(req, res) {
        res.render("auth/login");
    }

    static register(req, res) {
        res.render("auth/register");
    }

    static async registerPost(res, req) {
        const {name, email, password, confirmPassword} = req.body;

        if(password != confirmPassword){
            req.flash("message", "The passwords don't match, try again!");
            res.render("auth/register");
            return;
        }

        const checkIfUserExists = await User.findOne({where: {email: email}});

        if(checkIfUserExists) {
            req.flash("message", "The email is already in use");
            res.render("auth/register");
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = {
            name,
            email,
            password: hashedPassword
        };

        try {
            const createUser = await User.create(user);
            req.flash("message", "Registration completed successfully");

            req.session.userid = createUser.id;

            req.session.save(() => {
                res.redirect("/");
            });

        } catch (err) {
            console.log(err);
        }
    }
}