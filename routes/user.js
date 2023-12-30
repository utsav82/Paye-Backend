const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router
  .get("/", userController.getAllUsers)
  .get("/:userId", userController.getUserById)
  .get("/login", userController.login)
  .post("/signup", userController.createUser);

module.exports = router;
