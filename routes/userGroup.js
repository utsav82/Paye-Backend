const express = require("express");
const router = express.Router();
const userGroupController = require("../controller/userGroupController");

router
  .get("/user/:userId", userGroupController.getUserGroups)
  .get("/group/:groupId", userGroupController.getAllMembersInGroup)
  .post("/", userGroupController.addUserToGroup)
  .delete("/:userId/:groupId", userGroupController.removeUserFromGroup);

module.exports = router;
