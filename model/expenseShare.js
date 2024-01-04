const mongoose = require("mongoose");

const expenseShareSchema = new mongoose.Schema({
  expense_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Expense",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  share_amount: { type: Number, required: true },
  status: {
    type: string,
    enum: ["paid", "unpaid", "pending"],
    default: "unpaid",
  },
});

const ExpenseShare = mongoose.model("ExpenseShare", expenseShareSchema);

module.exports = ExpenseShare;
