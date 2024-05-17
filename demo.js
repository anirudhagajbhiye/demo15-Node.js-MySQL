var mysql = require("mysql");

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pass@123",
  database: "anirudha",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  insertTable();
});

const createDatabase = () => {
  con.query("CREATE DATABASE Anirudha", function (err, result) {
    if (err) throw err;
    console.log("Database created");
    useDatabase();
  });
};

const useDatabase = () => {
  con.query("use anirudha", function (err, result) {
    if (err) throw err;
    createTable();
  });
};

const createTable = () => {
  con.query(
    "CREATE table users (name VARCHAR(255), address VARCHAR(255))",
    function (err, result) {
      if (err) throw err;
      console.log("Table created");
    }
  );
};

const insertTable = () => {
  con.query(
    "insert into users (name, address) values('Anirudha','Nagpur')",
    function (err, result) {
      if (err) throw err;
      console.log("Table created");
    }
  );
};
