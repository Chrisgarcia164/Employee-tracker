DROP DATABASE IF EXISTS employee_db

CREATE DATABASE employee_db

USE employee_db

CREATE TABLE department(
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30);
)
CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(60),
    last_name VARCHAR(60),
    role VARCHAR(60)
    manager VARCHAR(60)
)


CREATE TABLE role (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(60),
    salary DECIMAL, 
    department VARCHAR(60), 
);