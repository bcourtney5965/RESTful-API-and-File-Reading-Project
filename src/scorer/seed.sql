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
  PRIMARY KEY (ID)
);

INSERT INTO documents (name, date, time, score) VALUES ('dougs', CURDATE(), CURTIME(), 4);
INSERT INTO documents (name, date, time, score) VALUES ('Bob', CURDATE(), CURTIME(), 6);
INSERT INTO documents (name, date, time, score) VALUES ('John', CURDATE(), CURTIME(), 9);
