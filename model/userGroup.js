const mongoose = require('mongoose');

const userGroupSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  group_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
});

const UserGroup = mongoose.model('UserGroup', userGroupSchema);

module.exports = UserGroup;
