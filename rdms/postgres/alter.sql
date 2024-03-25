-- Active: 1711322280342@@127.0.0.1@5432@test

-- Select table data
SELECT * FROM person;

-- insert row value
INSERT INTO person VALUES(1,'Doe2');

-- add new column in table
ALTER TABLE person
    ADD COLUMN user_age INT;
ALTER TABLE person
    ADD COLUMN email VARCHAR(50) NOT NULL DEFAULT  'default@gmail.com';

-- delete column from table
ALTER TABLE person
    DROP COLUMN email;

-- update column name
ALTER TABLE person
    RENAME COLUMN first_name to user_name;

-- change type of a column
ALTER TABLE person
    ALTER COLUMN user_name TYPE VARCHAR(50);

-- add constrain to a column
ALTER TABLE person
    ALTER COLUMN user_age SET   DEFAULT(1);

-- remove constrain from column
ALTER TABLE person
    ALTER COLUMN user_age DROP DEFAULT;


-- video - 3
-- to add unique constrain for a column : provide a name
ALTER TABLE person
    ADD CONSTRAINT unique_person_name UNIQUE(name);

-- drop constrain by provided name
ALTER TABLE person
    DROP CONSTRAINT unique_person_name;


-- delete all data but table structure will remain 
TRUNCATE TABLE person;

DROP TABLE person;

 CREATE TABLE person (
    id SERIAL PRIMARY KEY UNIQUE ,
    name VARCHAR(50) ,
    age INT DEFAULT 18,
    email VARCHAR(50) 
 )