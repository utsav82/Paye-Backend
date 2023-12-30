const UserGroup = require("../model/userGroup");

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
  addUserToGroup,
  removeUserFromGroup,
};
