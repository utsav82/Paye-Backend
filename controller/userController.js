const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const user = new User(req.body);
  var token = jwt.sign({ email: req.body.email }, process.env.SECRET);
  const hash = bcrypt.hashSync(req.body.password, 10);
  user.token = token;
  user.password = hash;
  user.save((err, doc) => {
    console.log({ err, doc });
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json({ doc, token });
    }
  });
};

const login = async (req, res) => {
  try {
    const doc = await User.findOne({ email: req.body.email });
    const isAuth = bcrypt.compareSync(req.body.password, doc.password);
    if (isAuth) {
      var token = jwt.sign({ email: req.body.email }, process.env.SECRET);
      doc.token = token;
      doc.save(() => {
        res.json({ token });
      });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.status(401).json(err);
  }
};

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  login,
  getAllUsers,
  getUserById,
};
