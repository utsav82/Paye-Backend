const UserGroup = require("../model/userGroup");
const Group = require("../models/Group");

const getUserGroups = async (req, res) => {
  const userId = req.params.userId;
  try {
    const userGroups = await UserGroup.find({ user_id: userId }).populate(
      "group_id"
    );
    const groups = userGroups.map((userGroup) => userGroup.group_id);

    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllMembersInGroup = async (req, res) => {
  const groupId = req.params.groupId;

  try {
    const members = await UserGroup.find({ group_id: groupId }).populate(
      "user_id"
    );
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addUserToGroup = async (req, res) => {
  try {
    const newUserGroup = await UserGroup.create(req.body);
    res.status(201).json(newUserGroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeUserFromGroup = async (req, res) => {
  try {
    await UserGroup.findOneAndDelete({
      user_id: req.params.userId,
      group_id: req.params.groupId,
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserGroups,
  addUserToGroup,
  getAllMembersInGroup,
  removeUserFromGroup,
};
