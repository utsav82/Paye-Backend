const Group = require("../model/group");

const createGroup = async (req, res) => {
  try {
    const newGroup = await Group.create(req.body);
    res.status(201).json(newGroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGroupById = async (req, res) => {
  try {
    const group = await Group.findById(req.params.groupId);
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateGroupById = async (req, res) => {
  try {
    const updatedGroup = await Group.findByIdAndUpdate(
      req.params.groupId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedGroup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteGroupById = async (req, res) => {
  try {
    await Group.findByIdAndDelete(req.params.groupId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createGroup,
  getAllGroups,
  getGroupById,
  updateGroupById,
  deleteGroupById,
};
