const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

const users = [
  {
    username: "Samuel",
    email: "samuel@gmail.com",
    thought: [],
  },
];

console.log(connection);

// Server connect
connection.once("open", async () => {
  console.log("connected");

  //Delete all students
  await User.deleteMany({});

   await User.collection.insertMany(users);

  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});