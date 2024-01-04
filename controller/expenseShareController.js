const ExpenseShare = require("../model/expenseShare");

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

const  updateExpenseShare  = async (req, res) => {
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
  removeExpenseShare,
};
