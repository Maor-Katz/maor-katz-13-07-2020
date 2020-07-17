--CREATE TABLE tasks (
--    id int auto_increment,
--    title varchar(255),
--    description varchar(255),
--    date datetime default now(),
--    username varchar(255),
--    phone varchar(255),
--    email varchar(255),
--    primary key(id)
--);
--
--INSERT INTO tasks (title, description, username, phone, email)
--VALUES ("this is title", "description of task", "maor-katz", "054888888", "maorkatz1990@gmail.com"),
--("this also title", "description too", "manor-kop", "05265656", "koko@gmail.com");

CREATE TABLE usersProp (
    id int auto_increment,
    firstname varchar(255),
    lastname varchar(255),
    username varchar(255),
    email varchar(255),
    password varchar(255),
    city varchar(255),
    phone varchar(255),
    isAdmin boolean default 0,
    primary key(id)
);
--password for users below is 123
INSERT INTO usersProp (firstname, lastname, username , email, password, city, phone)
VALUES ("maor", "katz", 'maor-katz', 'maor@gmail.com' ,"$2a$10$jn86lR6PAD6wd6Wrb8KuS.tUh.8cBetYIAfwF5mUR9BpZScie5qKu", 'hod hasharon',"05456454"),
("avi", "nim", 'avi-n', 'avi@gmail.com' ,"$2a$10$jn86lR6PAD6wd6Wrb8KuS.tUh.8cBetYIAfwF5mUR9BpZScie5qKu", 'Tel Aviv', "056454654")

--CREATE TABLE tasksProp (
--    id int auto_increment,
--    user_id int,
--    title varchar(255),
--    description varchar(255),
--    date datetime default now(),
--    username varchar(255),
--    phone varchar(255),
--    email varchar(255),
--    FOREIGN KEY (user_id) REFERENCES usersProp(id),
--    primary key(id)
--);
--INSERT INTO tasksProp (user_id, title, description, username, phone, email)
--VALUES (1,"this is title", "description of task", "maor-katz", "054888888", "maorkatz1990@gmail.com"),
--(1, "this also title", "description too", "manor-kop", "05265656", "koko@gmail.com");

CREATE TABLE tasksProp (
    id int auto_increment,
    user_id int,
    title varchar(255),
    description varchar(255),
    date datetime default now(),
    FOREIGN KEY (user_id) REFERENCES usersProp(id),
    primary key(id)
);
INSERT INTO tasksProp (user_id, title, description)
VALUES (1,"this is title", "description of task"),
(1, "this also title", "description too");


