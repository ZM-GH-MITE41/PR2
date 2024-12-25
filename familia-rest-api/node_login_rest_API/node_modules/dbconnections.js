const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "127.0.0.1", 
    user: "pma", 
    database: "group_familia", 
    password: "password",
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;
