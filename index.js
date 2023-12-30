require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const server = express();
const userRoutes = require("./routes/user");
const groupRoutes = require("./routes/group");
const userGroupRoutes = require("./routes/userGroup");
const expenseRoutes = require("./routes/expense");
const expenseShareRoutes = require("./routes/expenseShare");
const auth = require("./utilities/middleware");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
}

server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.get("/", (req, res) => {
  res.send("okay");
});
server.use(auth);
server.use("/users", userRoutes);
server.use("/groups", groupRoutes);
server.use("/usergroup", userGroupRoutes);
server.use("/expenses", expenseRoutes);
server.use("/expenseshare", expenseShareRoutes);

server.listen(process.env.PORT || 3000, () => {
  console.log("server started");
});
