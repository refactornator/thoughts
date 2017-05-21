create table THOUGHT (
    ID int not null AUTO_INCREMENT,
    CREATION_TIME_UTC timestamp not null,
    TEXT blob,
    CATEGORY varchar(20)
);