const { connect, connection } = require("mongoose");

// Creates database
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studentsDB";

// for Mongoose and MongoDB connections
connect(connectionString);

module.exports = connection;