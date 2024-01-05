const express = require("express");
const router = express.Router();
const expenseController = require("../controller/expenseController");
const { upload } = require("../utilities/middleware");

router
  .post("/", upload.single("file"), expenseController.createExpense)
  .post("/instant", expenseController.createInstantExpense)
  .get("/", expenseController.getAllExpenses)
  .get("/user/:userId/", expenseController.getAllExpensesByUser)
  .get("/group/:groupId", expenseController.getAllExpensesInGroup)
  .get("/:expenseId", expenseController.getExpenseById)
  .put("/:expenseId", expenseController.updateExpenseById)
  .delete("/:expenseId", expenseController.deleteExpenseById);

module.exports = router;
