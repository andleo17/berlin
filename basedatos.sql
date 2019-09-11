CREATE TABLE categoria ( id int primary key auto_increment,
                                            nombre VARCHAR(50) not NULL);


create table producto ( id int primary key auto_increment, id_categoria int not null REFERENCES categoria, nombre VARCHAR(50) not NULL);