CREATE DATABASE if NOT EXISTS customer;

USE customer;

CREATE TABLE customer (
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    document VARCHAR(255)
);

SELECT * FROM customer;