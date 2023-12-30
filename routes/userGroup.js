const express = require("express");
const router = express.Router();
const userGroupController = require("../controller/userGroupController");

router
  .post("/", userGroupController.addUserToGroup)
  .delete("/:userId/:groupId", userGroupController.removeUserFromGroup);

module.exports = router;
