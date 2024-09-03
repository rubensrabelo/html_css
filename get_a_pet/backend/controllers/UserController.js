const bcrypt = require("bcrypt");

const User = require("../models/User");
const createUserToken = require("../helpers/create-user-token");

module.exports = class UserController {
    
    static async register(req, res) {
        const { name, email, phone, password, confirmpassword } = req.body;

        if(!name) {
            res.status(422).json({ message: "Enter name!" });
            return;
        }

        if(!email) {
            res.status(422).json({ message: "Enter email! "});
            return;
        }

        if(!phone) {
            res.status(422).json({ message: "Enter phone! "});
            return;
        }

        if(!password) {
            res.status(422).json({ message: "Enter password! "});
            return;
        }

        if(!confirmpasswordpassword) {
            res.status(422).json({ message: "Enter confirm password! "});
            return;
        }

        if(password !== confirmpassword) {
            res.status(422).json({ message: "Both passwords must be the same!" });
            return;
        }

        const userExists = await User.findOne({ email: email });

        if(userExists) {
            res.status(422).json({ message: "User already exists, please register another one!" });
            return;
        }

        const salt = await bcrypt.salt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            email,
            phone,
            password: passwordHash
        });

        try {
            const newUser = await user.save();

            await createUserToken(newUser, req, res);
            
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}