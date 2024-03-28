-- Active: 1711322280342@@127.0.0.1@5432@test

SELECT * FROM employees;
-- create function
CREATE Function emp_count()
RETURNS INT
LANGUAGE SQL
as 
$$
    SELECT count(*) FROM employees
$$;

SELECT emp_count();

-- function with parameter
CREATE OR REPLACE FUNCTION delete_count_by_id(p_emp_id INT)
RETURNS void
LANGUAGE SQL
as 
$$
    DELETE FROM employees WHERE employee_id = p_emp_id
$$

SELECT delete_count_by_id(30);

-- Create Procedure 
 CREATE Procedure remove_emp_by_id(p_emp_id int)
LANGUAGE plpgsql
AS
$$
    DECLARE
    test_var int;
    BEGIN
        SELECT employee_id INTO test_var from employees WHERE employee_id = p_emp_id;
        DELETE FROM employees WHERE employee_id = test_var;

        RAISE NOTICE 'Employee removed successfully!';
    END
$$;


CALL remove_emp_by_id(25)