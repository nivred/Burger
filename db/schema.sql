-- create database burgers_db and utilize
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers
CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(30) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
	date_added TIMESTAMP,
    PRIMARY KEY(id)
);