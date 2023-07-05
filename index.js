const db = require("./config/connection");
const inquirer = require("inquirer");

db.connect( function (err) {
    if(err) throw err;
    startApp();
})

function startApp() {
    // ask questions here in regards to where to go next
    inquirer.prompt([
        {
            message: "What would you like to do?",
            name: "choice",
            type: "list",
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Employee", "Add role", "Quit"]
        }
    ]).then(answer => {
        if(answer.choice == "View All Departments") {
            viewAllDept()
        }else if (answer.choice == "View All Roles") {
            viewAllRoles()
        }else if (answer.choice == "View All Employees") {
            viewAllEmployees()
        }else if (answer.choice == "Add Department") {
            addDepartment()
        }else if (answer.choice == "Add Employee") {
            addEmployee()
        }else if (answer.choice =="Add Role"){
    }       addRole()
})
}

function viewAllDept() {
    const sqlString = `
    SELECT *
    FROM department`

    db.query(sqlString, (err, data) => {
        if(err) throw err;

        console.table(data)
        console.log('\n')

        startApp()
    })
}

function viewAllRoles() {
    const sqlString = `
    SELECT title, salary, department.name
    FROM role
    JOIN department
    ON department_id = department.id`
    
    db.query(sqlString, (err, data) => {
        if(err) throw err;
        console.table(data)
        console.log('\n')
        
        startApp()
    })
}

function viewAllEmployees() {
    const sqlString = 
    `SELECT employees.id, employees.first_name, employees.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
     FROM employees
     LEFT JOIN role ON employees.role_id = role.id
     LEFT JOIN department ON role.department_id = department.id
     LEFT JOIN employees manager ON employees.manager_id = manager.id`;
  
    db.query(sqlString, (err, data) => {
      if (err) throw err;
      console.table(data);
      console.log("\n");
  
      startApp();
    })
  }
  
async function addDepartment() {
    inquirer.prompt([
      {
        message: "Enter the name of the new department:",
        name: "departmentName"
      }
    ]).then(answer => {
      const sqlString = "INSERT INTO department (name) VALUES (?)";
      db.query(sqlString, [answer.departmentName], (err, data) => {
        if (err) throw err;
        console.log("New department added successfully!");
        startApp();
      });
    });
  }
function loadDepartments() {
    return db.promise().query('SELECT * FROM department');
}


async function addRole() {
    const [rows] = await loadDepartments();

    const structuredDepts = rows.map((department) => {
        return {
            name: department.name,
            value: department.id
        }
    })

    inquirer.prompt([
        {
            message: "What title?",
            name: "newTitle"
        },
        {
            message: "What salary?",
            name: "newSalary"
        },
        {
            type: "list",
            message: "What department?",
            name: "deptId",
            choices: structuredDepts
        },
    ]).then(roleAnswer => {
        const sqlString = `
        INSERT INTO role(title, salary, department_id)
        VALUES (?, ?, ?)`

        db.query(sqlString, [roleAnswer.newTitle, roleAnswer.newSalary, roleAnswer.deptId], (err, data) => {
            if (err) throw err;
            console.log(data);

            startApp()
        })
    })
}

function loadRoles() {
    return db.promise().query('SELECT * FROM role');
}

function loadManagers() {
    return db.promise().query('SELECT * FROM employees');
  }

async function addEmployee() {
    const [rolesData, managersData] = await Promise.all([loadRoles(), loadManagers()]);
  
    const roles = rolesData.map((role) => ({
      name: role.title,
      value: role.id
    }));
  
    const managers = managersData.map((manager) => ({
      name: `${manager.first_name} ${manager.last_name}`,
      value: manager.id
    }));
  
    inquirer.prompt([
      {
        message: "Enter the first name of the new employee:",
        name: "firstName"
      },
      {
        message: "Enter the last name of the new employee:",
        name: "lastName"
      },
      {
        type: "list",
        message: "Select the role of the new employee:",
        name: "roleId",
        choices: roles
      },
      {
        type: "list",
        message: "Select the manager of the new employee:",
        name: "managerId",
        choices: managers
      }
    ]).then(answer => {
      const sqlString = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
      db.query(sqlString, [answer.firstName, answer.lastName, answer.roleId, answer.managerId], (err, data) => {
        if (err) throw err;
        console.log("New employee added successfully!");
        startApp();
      });
    });
  }
  