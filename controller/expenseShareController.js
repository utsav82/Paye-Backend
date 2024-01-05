const ExpenseShare = require("../model/expenseShare");

const getAllExpenseSharesForExpense = async (req, res) => {
  const expenseId = req.params.expenseId;
  try {
    const expenseShares = await ExpenseShare.find({ expense_id: expenseId });
    res.status(200).json(expenseShares);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllExpenseSharesByUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const expenseShares = await ExpenseShare.find({
      $or: [{ payer_id: userId }, { user_id: userId }],
    });

    res.status(200).json(expenseShares);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const addExpenseShare = async (req, res) => {
  try {
    const newExpenseShare = await ExpenseShare.create(req.body);
    res.status(201).json(newExpenseShare);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeExpenseShare = async (req, res) => {
  try {
    await ExpenseShare.findOneAndDelete({
      user_id: req.params.userId,
      expense_id: req.params.expenseId,
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateExpenseShare = async (req, res) => {
  try {
    await ExpenseShare.findOneAndUpdate({
      user_id: req.params.userId,
      expense_id: req.params.expenseId,
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addExpenseShare,
  getAllExpenseSharesForExpense,
  getAllExpenseSharesByUser,
  updateExpenseShare,
  removeExpenseShare,
};
