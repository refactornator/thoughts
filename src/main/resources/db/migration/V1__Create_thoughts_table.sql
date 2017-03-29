create table THOUGHT (
    ID int not null,
    CREATION_TIME_UTC timestamp not null,
    TEXT blob,
    CATEGORY varchar(20)
);