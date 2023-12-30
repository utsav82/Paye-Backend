const express = require("express");
const router = express.Router();
const groupController = require("../controller/groupController");

router
  .post("/", groupController.createGroup)
  .get("/", groupController.getAllGroups)
  .get("/:groupId", groupController.getGroupById)
  .put("/:groupId", groupController.updateGroupById)
  .delete("/:groupId", groupController.deleteGroupById);

module.exports = router;
