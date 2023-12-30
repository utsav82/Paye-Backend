const express = require("express");
const router = express.Router();
const expenseShareController = require("../controller/expenseShareController");

router
  .post("/", expenseShareController.addExpenseShare)
  .delete("/:userId/:expenseId", expenseShareController.removeExpenseShare);

module.exports = router;
