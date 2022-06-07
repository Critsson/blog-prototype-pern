CREATE DATABASE blogprototype;

CREATE TABLE posts (
    pid SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT
);