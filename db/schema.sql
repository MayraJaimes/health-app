DROP TABLE users;
DROP TABLE userInfo;

DROP DATABASE health;

CREATE DATABASE health;
USE health;

CREATE TABLE users (
    user_id INT(100) AUTO_INCREMENT,
    user_fname VARCHAR(40) NOT NULL,
    user_lname VARCHAR(40) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE userInfo (
    event_id INT(100) AUTO_INCREMENT,
    user_id INT(100) NOT NULL,
    run_date DATE,
    total_miles INT(100) NOT NULL,
    total_min INT(100) NOT NULL,
    calorie_intake INT(100) NOT NULL,
    PRIMARY KEY (event_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

SELECT *  FROM users
LEFT JOIN userInfo
ON userInfo.user_id = users.user_id;

SELECT AVG(calorie_intake) 
FROM userInfo;

SELECT total_miles/(total_min/60) AS mile_per_hour 
FROM userInfo;

SELECT total_miles/(total_min/60) AS mile_per_hour 
FROM userInfo ORDER BY mile_per_hour LIMIT 5;

SELECT total_miles/(total_min/60) AS mile_per_hour 
FROM userInfo ORDER BY mile_per_hour DESC LIMIT 5;

SELECT total_miles/(total_min/60) AS mile_per_hour 
FROM userInfo ORDER BY mile_per_hour LIMIT 1;

SELECT total_miles/(total_min/60) AS mile_per_hour 
FROM userInfo ORDER BY mile_per_hour DESC LIMIT 1;