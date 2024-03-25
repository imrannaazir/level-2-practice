-- Active: 1711322280342@@127.0.0.1@5432@test
-- crete student table
CREATE TABLE student(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age int,
    grade CHAR(2),
    course VARCHAR(50),
    email VARCHAR(50),
    dob DATE,
    blood_group VARCHAR(5),
    country VARCHAR(50)
)

INSERT INTO student (first_name,last_name, age, grade, course, email, dob, blood_group, country)
VALUES
   ('John', 'Doe', 20, 'A', 'Math', 'john.doe@example.com', '2004-01-15', 'O+', 'USA'),
    ('Jane', 'Smith', 21, 'B', 'History', 'jane.smith@example.com', '2003-05-20', 'A-', 'Canada'),
    ('Alice', 'Johnson', 19, 'A', 'Physics', 'alice.johnson@example.com', '2002-11-08', 'B+', 'UK'),
    ('Bob', 'Williams', 22, 'C', 'Chemistry', 'bob.williams@example.com', '2001-07-03', 'AB-', 'Australia'),
    ('Charlie', 'Brown', 20, 'B', 'English', NULL, '2004-03-30', 'A+', 'New Zealand'),
    ('Emman', 'Jones', 23, 'B', 'Biology', 'emma.jones@example.com', '2000-09-12', 'A-', 'USA'),
    ('Michael', 'Johnson', 22, 'C', 'Physics', 'michael.johnson@example.com', '2002-04-05', 'O-', 'Canada'),
    ('Olivia', 'Davis', 21, 'A', 'Math', 'olivia.davis@example.com', '2003-12-18', 'B-', 'UK'),
    ('William', 'Taylor', 20, 'B', 'Chemistry', NULL, '2004-08-30', 'A+', 'Australia'),
    ('Sophia', 'Brown', 24, 'A', 'English', 'sophia.brown@example.com', '1999-06-25', 'AB+', 'New Zealand'),
    ('Liam', 'Miller', 19, 'C', 'History', 'liam.miller@example.com', '2002-02-10', 'A-', 'USA'),
    ('Ava', 'Anderson', 22, 'B', 'Biology', 'ava.anderson@example.com', '2000-11-15', 'B+', 'Canada'),
    ('Noah', 'Martinez', 21, 'A', 'Physics', NULL, '2001-04-28', 'O+', 'UK'),
    ('Isabella', 'Clark', 20, 'C', 'Chemistry', 'isabella.clark@example.com', '2003-10-03', 'A-', 'Australia'),
    ('Ethan', 'Garcia', 23, 'B', 'Math', 'ethan.garcia@example.com', '2000-07-22', 'B-', 'New Zealand'),
    ('Sophie', 'Moore', 22, 'A', 'English', 'sophie.moore@example.com', '2002-12-05', 'A+', 'USA'),
    ('Mia', 'Hernandez', 20, 'C', 'History', 'mia.hernandez@example.com', '2004-05-18', 'AB-', 'Canada'),
    ('James', 'Young', 21, 'B', 'Biology', 'james.young@example.com', '2003-02-08', 'O-', 'UK'),
    ('Emma', 'Gonzalez', 24, 'A', 'Physics', NULL, '1999-09-30', 'B+', 'Australia'),
    ('Miam', 'Wright', 19, 'C', 'Math', 'liam.wright@example.com', '2002-06-14', 'A+', 'New Zealand');

-- select all columns
SELECT * FROM  student;

-- select one field
SELECT first_name FROM student;

-- select more than one field 
SELECT first_name, last_name from student;

-- rename column name when selecting
SELECT email as student_email from student;

-- for column name used double quotation and for string use single quotation 
SELECT email as "Student Email",age from student;

-- select data based on column asc or dsc
SELECT * from student ORDER BY first_name ASC;
SELECT * from student ORDER BY first_name DESC;


--------
-- distinct is used to select column , if there are many multiple value it will select single time
SELECT DISTINCT country from student;

-- data filtering

-- select student from the country 'USA'
SELECT * FROM student
    WHERE country = 'USA';

-- select student with 'A' grade in Physics
SELECT * FROM student
    WHERE grade = 'A' AND course ='Physics';

-- select student with specified blood group ('A+')
SELECT * FROM student
    WHERE blood_group = 'A+';

-- select student from 'Australia
SELECT * FROM student
    WHERE country = 'Australia' OR country = 'USA';

-- select student from 'Australia' or 'USA' and age is 20
SELECT * FROM student
    WHERE (country = 'Australia' OR country = 'USA') AND age = 20;
-- select student with grade 'A' or 'B' in Math or Physics
SELECT * FROM student
    WHERE (grade = 'A' OR grade = 'B') and (course = 'Math' OR course = 'Physics');

-- sorting 

-- select students older than 20
SELECT * FROM student
    WHERE age > 20; 


-- select student whose email is not null
SELECT * FROM student
    WHERE email IS NOT NULL;

-- select student email and if it is null set a default value
SELECT COALESCE(email,'Email not provided.') FROM student;

-- IN : operator is used for multiple OR operator
SELECT * from student
    WHERE country IN ('USA','UK','Canada');

-- BETWEEN : Operator is used to select value between two value
SELECT * FROM student
    WHERE dob BETWEEN '2001-01-01' and '2005-01-01' ORDER BY dob;

-- LIKE : Operator is used for searching like using regex
-- select students those first name end with 'am' and before 'am' whatever it have does not matter
SELECT * FROM student
    WHERE first_name LIKE '%am';
-- select students those first name end with 'A' and  after that whatever it have does not matter : LIKE operator is case sensitive
SELECT * FROM student
    WHERE first_name LIKE 'A%';

-- in LIKE operator _ means one character. Select students whose 3rd number letter of first_name is a and after that whatever it have does not matter.
SELECT * FROM student
    WHERE first_name LIKE '__a%';

-- select students whose 3rd number letter of first_name is 'a' and after that there will be another one character
SELECT * FROM student 
    WHERE first_name LIKE '__a_'

-- for case insensitiveness we can use ILIKE
SELECT * FROM student 
    WHERE first_name ILIKE 'a%';


-- LIMIT and 
SELECT * FROM student LIMIT 5 OFFSET 3;

-- delete all data of the table 
DELETE FROM student;

-- delete specifies data from the table 
DELETE from student
    WHERE age = 19;

--UPDATE, SET : update 
UPDATE student ADD
    set email = 'hello@gmail.com' , first_name = 'Hello'
        WHERE id = 1;


# ▶️**18-7 Logical Negation NOT, Understanding NULL And The Null-Coalescing Operator In PostgreSQL**

- NOT :  If we have a large logical statement and we want to reverse the statement we can use NOT.
- NULL: Null is a very special type in postgres. Whatever we do with NULL it return null. So in case of filtering with NULL we should use IS Operator.

```sql
SELECT * FROM student
    WHERE email IS NOT NULL;
```

- COALESCE:
    
    ```sql
    -- select student email and if it is null set a default value
    SELECT COALESCE(email,'Email not provided.') FROM student;
    ```
    

# ▶️**18-8 Exploring IN, BETWEEN, LIKE, And ILIKE Operators In PostgreSQL.**

```sql
-- IN : operator is used for multiple OR operator
SELECT * from student
    WHERE country IN ('USA','UK','Canada');

-- BETWEEN : Operator is used to select value between two value
SELECT * FROM student
    WHERE dob BETWEEN '2001-01-01' and '2005-01-01' ORDER BY dob;

-- LIKE : Operator is used for searching like using regex
-- select students those first name end with 'am' and before 'am' whatever it have does not matter
SELECT * FROM student
    WHERE first_name LIKE '%am';
-- select students those first name end with 'A' and  after that whatever it have does not matter : LIKE operator is case sensitive
SELECT * FROM student
    WHERE first_name LIKE 'A%';

-- in LIKE operator _ means one character. Select students whose 3rd number letter of first_name is a and after that whatever it have does not matter.
SELECT * FROM student
    WHERE first_name LIKE '__a%';

-- select students whose 3rd number letter of first_name is 'a' and after that there will be another one character
SELECT * FROM student 
    WHERE first_name LIKE '__a_'

-- for case insensitiveness we can use ILIKE
SELECT * FROM student 
    WHERE first_name ILIKE 'a%';
```

# ▶️18-9 Pagination with Limit Offset and Data Deletion in PostgresSQL

```sql
-- LIMIT and 
SELECT * FROM student LIMIT 5 OFFSET 3;

-- delete all data of the table 
DELETE FROM student;

-- delete specifies data from the table 
DELETE from student
    WHERE age = 19;
```

# ▶️18-10 Understanding and using the UPDATE  Operator in PostgresSQL

```sql
--UPDATE, SET : update 
UPDATE student ADD
    set email = 'hello@gmail.com' , first_name = 'Hello'
        WHERE id = 1;
```



