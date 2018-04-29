### Schema

DROP DATABASE IF EXISTS sequelizeburger_db;
CREATE DATABASE sequelizeburger_db;
USE sequelizeburger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
