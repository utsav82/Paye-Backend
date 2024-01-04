const express = require("express");
const router = express.Router();
const expenseController = require("../controller/expenseController");
const {upload} = require('../utilities/middleware');

router
  .post("/", upload.single("file"), expenseController.createExpense)
  .get("/", expenseController.getAllExpenses)
  .get("/:expenseId", expenseController.getExpenseById)
  .put("/:expenseId", expenseController.updateExpenseById)
  .delete("/:expenseId", expenseController.deleteExpenseById);
module.exports = router;
