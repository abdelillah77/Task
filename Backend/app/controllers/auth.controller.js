const config = require("../config/auth.config");
const db = require("../users");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    });
    /*try {
        const savedUser = await user.save();
        res.send(savedUser)
    } catch (err) {
        res.status(400).send(err);
    }*/

    user.save((err, user) => {
        if (err) {
            console.log("ggggggg1010gggggggg")
            res.status(500).send({ message: err });

            return;
        }

        else {
            // res.send({ message: " successfully!" });
            console.log("ggggggggggggggg")
            console.log(req.body.username);


            res.send({ message: "User was registered successfully!" });

        }


    });
}


exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username
    })

        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });


            res.status(200).send({
                id: user._id,
                username: user.username,
                accessToken: token
            });
        });
};
