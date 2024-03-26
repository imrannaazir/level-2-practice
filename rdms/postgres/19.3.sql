-- Active: 1711322280342@@127.0.0.1@5432@test
CREATE TABLE "user"(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(25) NOT NULL
)

CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES "user"(id)
)

-- insert data into table
INSERT INTO "user"(user_name) VALUES
    ('akash'),
    ('batas'),
    ('shagor'),
    ('nodi')


INSERT INTO post (title, user_id) VALUES
('Enjoying a sunny day with Akash! ☀️', 2),
('Batash just shared an amazing recipe! 🍲', 1),
('Exploring adventures with Sagor.🌟', 4),
('Nodi''s wisdom always leaves me inspired. 📚', 4)
;
SELECT * from "user";
SELECT * from post;

-- insert defining deletion behavior 
CREATE Table post(
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    user_id INTEGER REFERENCES "user"(id) ON DELETE CASCADE
)

CREATE Table post(
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    user_id INTEGER REFERENCES "user"(id) on delete set NULL
)
CREATE Table post(
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    user_id INTEGER REFERENCES "user"(id) on delete set DEFAULT DEFAULT 2 
)
CREATE Table post(
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    user_id INTEGER REFERENCES "user"(id)  
)

-- 19.6
SELECT title , user_name FROM post  
    JOIN "user" on post.user_id = "user".id;

INSERT INTO post (id,title,user_id) VALUES(5,'This is title',NULL);

DROP TABLE "user";
DROP TABLE post;

-- left join
SELECT * FROM post AS  p 
    LEFT OUTER JOIN "user" as u on p.user_id = u.id;
    
-- right join
SELECT * FROM post AS  p 
    RIGHT OUTER JOIN "user" as u on p.user_id = u.id;

-- 19.8 
SELECT * FROM post AS  p 
    FULL OUTER JOIN "user" as u on p.user_id = u.id;
