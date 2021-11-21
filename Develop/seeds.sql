USE employee_db;

INSERT INTO department (name) VALUES ('Engineering')
INSERT INTO department (name) VALUES ('Finance')
INSERT INTO department (name) VALUES ('Legal')
INSERT INTO department (name) VALUES ('Sales')

INSERT INTO role (title, department, salary) VALUES ('Salesperson', 'Sales', 100000 )
INSERT INTO role (title, department, salary) VALUES ('Software Engineer', 'Sales', 120000 )
INSERT INTO role (title, department, salary) VALUES ('Lawyer', 'Legal', 190000 )
INSERT INTO role (title, department, salary) VALUES ('Accountant', 'Finance', 1250000 )

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 'Software Engineer', 'Mike Chan', )
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Tom', 'Allen', 'Salesperson', 'Sarah Lourd', )
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Doe', 'Accountant', 'Kunal Singh', )
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Malia', 'Brown', 'Lawyer', 'Ashley Rodriguez', )