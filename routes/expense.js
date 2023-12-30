const express = require("express");
const router = express.Router();
const expenseController = require("../controller/expenseController");

router
  .post("/", expenseController.createExpense)
  .get("/", expenseController.getAllExpenses)
  .get("/:expenseId", expenseController.getExpenseById)
  .put("/:expenseId", expenseController.updateExpenseById)
  .delete("/:expenseId", expenseController.deleteExpenseById);

module.exports = router;
