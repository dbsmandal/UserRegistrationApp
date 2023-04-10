const router = require("express").Router();
const User = require("../modals/User");
const bcrypt = require('bcrypt')


//register

router.post("/register", async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,

        })
        //save user and send responce 
        const user = await newUser.save();
        if (user) {
            return res.status(200).json(user._id)
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

//login

router.post("/login", async (req, res) => {
    try {
        //find user
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json("wrong username")
        }

        //validate passowrd

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json("wrong Password")
        }

        //send responce
        if (user && validPassword) {
            return res.status(200).json({
                _id: user._id,
                email: user.email
            })
        }

    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;
