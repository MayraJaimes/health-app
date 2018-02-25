CREATE DATABASE health;
USE health;

CREATE TABLE users (
    user_id INT(100) AUTO_INCREMENT,
    user_fname VARCHAR(40) NOT NULL,
    user_lname VARCHAR(40) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE runs (
    run_id INT(100) AUTO_INCREMENT,
    user_id INT(100) NOT NULL,
    total_minutes VARCHAR(40) NOT NULL,
    run_date DATE,
    PRIMARY KEY (run_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE daily_nutrition (
    daily_nutrition_id INT(100) AUTO_INCREMENT,
    user_id INT(100) NOT NULL,
    calorie_intake INT(100) NOT NULL,
    log_date DATE,
    PRIMARY KEY (daily_nutrition_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
 
INSERT INTO users (user_fname, user_lname)
    VALUES ("Mayra", "Jaimes"),
            ("Dennis", "Huh"),
            ("Madison", "Huh"),
            ("Vanessa", "Jaimes");


INSERT INTO runs (user_id, total_minutes, run_date)
    VALUES (1, 60, "2018-01-03"),
                (1, 45, "2018-01-05"),
                (1, 30, "2018-01-07"),
                (1, 120, "2018-01-09");

INSERT INTO daily_nutrition (user_id, calorie_intake, log_date)
    VALUES (1, "1000", "2018-01-03"),
            (1, "13000", "2018-01-05"),
            (1, "1400", "2018-01-07"),
            (1, "1200", "2018-01-09");






              