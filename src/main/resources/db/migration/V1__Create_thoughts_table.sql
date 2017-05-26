create table THOUGHT (
    ID bigint not null auto_increment,
    CREATION_TIME_UTC timestamp not null,
    TEXT longtext,
    CATEGORY varchar(20),
    primary key (ID)
);