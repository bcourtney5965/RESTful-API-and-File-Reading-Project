DROP DATABASE IF EXISTS red_ventures;
CREATE DATABASE red_ventures;

USE red_ventures;

DROP TABLE IF EXISTS documents;
CREATE TABLE documents (
  ID INT NOT NULL AUTO_INCREMENT, 
  name VARCHAR(30) NULL,
  date DATE NULL,
  time TIME NULL,
  score INT NULL,
  PRIMARY KEY (ID),
  UNIQUE KEY NAMEDATE (name, date)
);
