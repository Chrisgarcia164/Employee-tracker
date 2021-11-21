const inquirer = require("inquirer");
const mySql = require("mysql");
const cTable = require("console.table");

const connection = mySql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "abcd1234",
  database: "employee_db",
});
connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else begin();
});
function begin() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "what would you like to do?",
        name: "choice",
        choices: [
          "View all departments",
          "Add a department",
          "View all roles",
          "Add a role",
          "View all employees",
          "Add an employee",
        ],
      },
    ])
    .then(function (answer) {
      switch (answer.choice) {
        case "View all departments":
          viewDepartment();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "View all roles":
          viewRoles();
          break;
        default:
          break;
      }
    });
}
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's first name",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the employee's first name",
        name: "lastName",
      },
      {
        type: "list",
        message: "What is the employee's role",
        name: "role",
        choices: ["Software Engineer", "Salesperson", "Lawyer", "Accountant"],
      },
      {
        type: "list",
        message: "Who is the employee's manager",
        name: "manager",
        choices: [
          "John Doe",
          "Mike Chahn",
          "Ashley Rodriguez",
          "Kevin Tupik",
          "Kunal Singh",
          "Malia Brown",
        ],
      },
    ])
    .then(function (answer) {
      const query = `INSERT INTO employee (first_name, last_name, role, manager) VALUES ('${answer.firstName}', '${answer.lastName}', '${answer.role}', '${answer.manager}');`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("Employee successfully added");
        begin();
      });
    });
}
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the Department",
        name: "departmentName",
      },
    ])
    .then(function (answer) {
      const name = answer.departmentName;
      const query = `INSERT INTO department (name) VALUE ('${name}')`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("Department successfully added");
        begin();
      });
    });
}
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the role?",
        name: "roleName",
      },
      {
        type: "input",
        message: "What is the salary of the role?",
        name: "salary",
      },
      {
        type: "list",
        message: "What department does the role belong to?",
        name: "roleDepartment",
        choices: ["Finance", "Legal", "Engineering", "Sales"],
      },
    ])
    .then(function (answer) {
      const query = `INSERT INTO role (title, department, salary) VALUES ('${answer.roleName}', '${answer.roleDepartment}', '${answer.salary}');`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("Role has been successfully added");
        begin();
      });
    });
}
function viewRoles() {
  const query = "SELECT * FROM role";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    begin();
  });
}
function viewDepartment() {
  const query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    begin();
  });
}
function viewEmployees() {
  const query = "SELECT * FROM employee";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    begin();
  });
}
