CREATE TABLE contents(
    id INT(11) NOT NULL AUTO_INCREMENT,
    loc VARCHAR(50) NOT NULL,
    depo INT(10) NOT NULL,
    mon INT(10) NOT NULL,
    man INT(10) NOT NULL,
    ipath VARCHAR(50) NOT NULL,
    hp VARCHAR(20) NOT NULL,
    mark INT(2) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('우만동', 500, 87, 47, "/image/wooman/room1", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('우만동', 400, 40, 5, "/image/wooman/room2", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('우만동', 300, 55, 10, "/image/wooman/room3", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('우만동', 300, 15, 15, "/image/wooman/room4", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('우만동', 300, 50, 20, "/image/wooman/room5", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('원천동', 300, 50, 20, "/image/woncheon/room1", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('원천동', 400, 50, 20, "/image/woncheon/room2", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('원천동', 500, 50, 20, "/image/woncheon/room3", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('원천동', 700, 50, 20, "/image/woncheon/room4", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('원천동', 800, 50, 20, "/image/woncheon/room5", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('광교', 800, 50, 20, "/image/gwanggyo/room1", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('광교', 400, 50, 20, "/image/gwanggyo/room2", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('광교', 5000, 50, 20, "/image/gwanggyo/room3", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('광교', 4000, 50, 20, "/image/gwanggyo/room4", "010-0000-0000", 0); 
INSERT INTO contents(loc, depo, mon, man, ipath, hp, mark) VALUES ('광교', 8000, 50, 20, "/image/gwanggyo/room5", "010-0000-0000", 0); 

CREATE TABLE members(
    table_id INT(11) NOT NULL AUTO_INCREMENT,
    id VARCHAR(50) NOT NULL,
    pw VARCHAR(15) NOT NULL, 
    region VARCHAR(50) NOT NULL,
    PRIMARY KEY (table_id)
);

