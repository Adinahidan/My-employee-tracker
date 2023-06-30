-- use fb employee_manager
USE employee_db;

-- inserts multiple rows into each table
INSERT INTO department(id, name) VALUES 
  (1, 'Management'),
  (2, 'Engineering'),
  (3, 'Accounting'),
  (4, 'Marketing'),
  (5, 'Human Resources');


INSERT INTO role(id, title, salary, department_id) VALUES
  (1, 'Senior Project Manager', 150000, 1),
  (2, 'Software Engineer', 75000, 2),
  (3, 'Financial Analyst', 80000, 3),
  (4, ' Grapfic Designer', 50000, 4),
  (5, 'Administrative Assistant', 28000, 5);

  INSERT INTO employees(id, first_name, last_name, role_id, manager_id) VALUES
  (1, 'Oliver', 'Smith', 1, NULL),
  (2, 'Emily', 'Johnson', 2, 1),
  (3, 'Georgina', 'Alvarez', 4, 1),
  (4, 'Grace', 'Evans', 3, 1),
  (5, 'Belinda', 'Rodrigues', 5, 1),
  (6, 'Serena', 'Brown', 2, 1),
  (7, 'Gemma', 'Roberts', 3, 1),
  (8, 'Anthony', 'Bailey', 1, 1),
  (9, 'Simon', 'Jones', 1, 1);