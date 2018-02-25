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
 
INSERT INTO users (user_fname, user_lname)
    VALUES ("Mayra", "Jaimes"),
            ("Dennis", "Huh"),
            ("Madison", "Huh"),
            ("Vanessa", "Jaimes");

INSERT INTO userInfo (user_id, run_date, total_miles, total_min, calorie_intake)
    VALUES (1, "2018-01-03", 5, 310, 1000),
            (1, "2018-01-05", 3, 150, 1300),
            (1, "2018-01-07", 2, 120, 1400),
            (1, "2018-01-09", 5, 300, 1200),
			(1, "2018-01-09", 5, 350, 1200);

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