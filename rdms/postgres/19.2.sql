-- Active: 1711322280342@@127.0.0.1@5432@test
SELECT * from student;

-- when we used GROUP BY , we only got data that returns single value so we can use aggregate function here
SELECT country ,count(*), avg(age) from student
    GROUP BY country;

-- if we want to filter grouped data we can use HAVING 
-- Filter groups using HAVING to show only show only countries avg age above 22
SELECT country ,count(*), avg(age) from student
    GROUP BY country
         HAVING avg(age) >22;

-- count student born in each yar
SELECT EXTRACT(YEAR FROM dob::DATE) as birth_year ,count(*) from student
    GROUP BY birth_year
        ORDER BY birth_year;
        ;

