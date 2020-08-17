GRANT ALL ON *.* TO 'admin'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;
GRANT ALL ON *.* TO 'admin'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;
GRANT ALL ON *.* TO 'admin'@'127.0.0.1' IDENTIFIED BY 'password' WITH GRANT OPTION;

CREATE DATABASE code_share;

USE code_share;

CREATE TABLE shares (
    share_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    code TEXT NOT NULL DEFAULT '',
    mutable BOOLEAN NOT NULL DEFAULT FALSE
) ENGINE=InnoDB CHARSET=utf8mb4 COMMENT='Stores code shares';

INSERT shares (code) VALUES ('printf()');
INSERT shares (code) VALUES ('[SELECT Name FROM Contact WHERE id=4]');