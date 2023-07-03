# My-employee-tracker

This command-line application allows business owners to view and manage departments, roles, and employees in their company, providing an organized and efficient way to plan and organize their business.

##Installation
To use this application, you need to have Node.js installed on your machine. Clone this repository and run the following command to install the required dependencies:
npm install

##Usage
To start the application, run the following command in your terminal:
node index.js

You will be presented with a menu of options to choose from:

View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee role
Choose the desired option by entering the corresponding number and follow the prompts.

View all departments
Selecting this option will display a formatted table showing the department names and department IDs.

View all roles
Selecting this option will display a formatted table showing the job titles, role IDs, the corresponding departments, and the salaries for each role.

View all employees
Selecting this option will display a formatted table showing employee data, including employee IDs, first names, last names, job titles, departments, salaries, and the managers they report to.

Add a department
Selecting this option will prompt you to enter the name of the department you want to add. Once entered, the new department will be added to the database.

Add a role
Selecting this option will prompt you to enter the name, salary, and department for the role you want to add. Once entered, the new role will be added to the database.

Add an employee
Selecting this option will prompt you to enter the employee's first name, last name, role, and manager. Once entered, the new employee will be added to the database.

Update an employee role
Selecting this option will prompt you to select an employee to update and their new role. Once selected, the employee's role will be updated in the database.

##Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.
