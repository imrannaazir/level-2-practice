-- Active: 1711322280342@@127.0.0.1@5432@test
SELECT * FROM employees;

-- create view
CREATE VIEW test_view
AS SELECT employee_name, salary, department_name
FROM employees
WHERE department_name IN
(SELECT department_name FROM employees WHERE department_name LIKE '%R%');

-- select data using view
SELECT * from test_view;