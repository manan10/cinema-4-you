const User = require("../models/User");
const bcrypt = require("bcryptjs");
const validateRegistration = require("../validation/register");

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.json({ status: "fail", message: "User not found" });
        } else {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                  return res.json({
                    id: user._id,
                    username: user.username,
                    status: "ok",
                  });
                } else {
                  return res.json({ status: "fail", message: "Incorrect Password" });
                }
              });
        } 
    } catch(err) {
        console.log(err)
        return res.json({ status: "fail", message: err });
    }
}

const userRegister = async (req, res) => {
    const { errors, isValid } = validateRegistration(req.body);
    if (!isValid) {
        return res.json({ status: "fail", errors: errors });
    }
    const user = await User.findOne({ email: req.body.email })
    const username = await User.findOne({ username: req.body.username }) 
    if (user) {
      res.json({ status: "fail", message: "An account with the same name already exits" });
    } else if (username) {
      res.json({ status: "fail", message: "Username already exists. Pick another" })
    } 
    else {
      const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.pwd,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, async (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          try {
            await newUser.save()
            res.json({ status: 'ok' })  
          } catch (err) {
            console.log(err)
          }
        });
      });
    }
};

const updateUsername = async (req, res) => {
  const id = req.params.id
  try {
    await User.updateOne({ _id: id }, { username: req.body.username })
  } catch(err) {
    res.json({ status: 'fail', message: 'Something went wrong' })
  }
}

const updatePassword = async (req, res) => {
  const id = req.params.id
  try {
    await User.updateOne({ _id: id }, { password: req.body.pwd })
  } catch(err) {
    res.json({ status: 'fail', message: 'Something went wrong' })
  }
}

module.exports.userLogin = userLogin;
module.exports.userRegister = userRegister;
module.exports.updateUsername = updateUsername;
module.exports.updatePassword = updatePassword;
