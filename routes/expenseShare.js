const express = require("express");
const router = express.Router();
const expenseShareController = require("../controller/expenseShareController");

router
  .post("/", expenseShareController.addExpenseShare)
  .get("/expense/:expenseId", expenseShareController.getAllExpenseSharesForExpense)
  .get('/user/:userId', expenseShareController.getAllExpenseSharesByUser)
  .put("/:userId/:expenseId", expenseShareController.updateExpenseShare)
  .delete("/:userId/:expenseId", expenseShareController.removeExpenseShare);

module.exports = router;
