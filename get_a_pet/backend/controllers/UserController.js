const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const createUserToken = require("../helpers/create-user-token");
const getToken = require("../helpers/get-token");

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

    static async login(req, res) {
        const {email, password} = req.body;

        if(!email) {
            res.status(422).json({message: "Enter email!"});
            return;
        }

        if(!password) {
            res.status(422).json({message: "Enter password!"});
            return;
        }

        const user = await User.findOne({email: email});

        if(!user) {
            res.status(422).json({ message: "There is no registered user with this email!"});
            return;
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if(!checkPassword) {
            res.status(422).json({ message: "Invalid Password"});
            return;
        }
        
        await createUserToken(user, req, res);
    }

    static async checkUser(req, res) {
        let currentUser;

        if(req.headers.authorization) {
            const token = getToken(req);
            const decoded = jwt.verify(token, "nossosecret");

            currentUser = await User.findById(decoded.id);

            currentUser.password = undefined;
        } else {
            currentUser = null;
        }

        res.status(200).send(currentUser);
    }

    static async getUserById(req, res) {
        const id = req.params.id;

        const user = await User.findById(id).select("-password");

        if(!user){
            res.status(422).json({message: "User not found!"});
            return;
        }

        res.status(200).json({ user });
    }
}