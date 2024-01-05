const Expense = require("../model/expense");
const ExpenseShare = require("../model/expenseShare");
const path = require("path");

const createExpense = async (req, res) => {
  const { group_id, payer_id, amount, description, category, date, shares } =
    req.body;
  try {
    let image = path.join("/static/img/", `${req.file.filename}`);
    const newExpense = await Expense.create({
      group_id,
      payer_id,
      amount,
      description,
      category,
      date,
      image,
    });

    const expenseShares = shares.map((share) => ({
      expense_id: newExpense._id,
      payer_id,
      user_id: share.user_id,
      share_amount: share.share_amount,
    }));

    await ExpenseShare.create(expenseShares);

    res.status(201).json({ expense: newExpense, expenseShares });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const createInstantExpense = async (req, res) => {
  const { payer_id, amount, description, category, date, shares } = req.body;

  try {
    let image = path.join("/static/img/", `${req.file.filename}`);
    const newExpense = await Expense.create({
      payer_id,
      amount,
      description,
      category,
      date,
      image,
    });

    const expenseShares = shares.map((share) => ({
      expense_id: newExpense._id,
      payer_id,
      user_id: share.user_id,
      share_amount: share.share_amount,
    }));

    await ExpenseShare.create(expenseShares);

    res.status(201).json({ expense: newExpense, expenseShares });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.expenseId);
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllExpensesInGroup = async (req, res) => {
  const groupId = req.params.groupId;

  try {
    const expenses = await Expense.find({ group_id: groupId });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllExpensesByUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const expenses = await Expense.find({ payer_id: userId });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const updateExpenseById = async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.expenseId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteExpenseById = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.expenseId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createExpense,
  createInstantExpense,
  getAllExpenses,
  getExpenseById,
  getAllExpensesByUser,
  getAllExpensesInGroup,
  updateExpenseById,
  deleteExpenseById,
};
