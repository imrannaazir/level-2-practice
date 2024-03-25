-- Active: 1711322280342@@127.0.0.1@5432@test


--19

-- 19.1
-- to see my time zone
SHOW TIMEZONE;

-- timestamp : combination of date , time and time zone
-- see current timezone
SELECT now()

-- create a table with time without timezone and with time zone
CREATE TABLE timeStamp(ts TIMESTAMP without TIME zone, tsz TIMESTAMP with time zone);

INSERT into timeStamp VALUES('2024-03-25','2024-03-25')

SELECT * FROM timeStamp;

/* {
    "ts": "2024-03-25 00:00:00",
    "tsz": "2024-03-25 00:00:00+06"
  } */


-- to see current date and time 
SELECT CURRENT_DATE;
SELECT CURRENT_TIME;

-- get time and date by casting now()
SELECT now()::DATE;
SELECT now()::TIME;

-- to_char() method in postgres search on google
-- to customize timestamp
SELECT to_char(now(),'dd/mm/yyyy');
-- result : 25/03/2024

-- INTERVAL : Date comparing date and how many time string
SELECT CURRENT_DATE - INTERVAL '1 year 2 month';
--result : 2023-01-25 00:00:00 (provide before 1 year and 2 month from current date timestamp)

-- to see gap between two timestamp
SELECT age('2024-01-25 00:00:00','2023-01-28 00:00:00');
-- { "months": 11, "days": 28 }

-- select student with calculating their age
SELECT *,age(CURRENT_DATE,dob) FROM student;

-- to extract day , month , year from a Date
SELECT extract(DAY FROM '2023-3-3'::date);
SELECT extract(MONTH FROM '2023-3-23'::date);
SELECT extract( FROM '2023-3-23'::date);


-- casting / converting type -> :: it convert a type into another type if it is possible
SELECT '12/2/2002'::TIMESTAMP;
-- 2002-12-02 00:00:00


-- 19-2
-- GROUP BY : Split -> apply -> combine