create table teams (
    id int not null auto_increment primary key,
    name varchar(255) not null,
    description varchar(255)

);


create table user (
    id int not null auto_increment primary key,
    name varchar(255) not null,
    password varchar(255),
    user_team int not null,
    foreign key fk_user_team (id)
    references teams(id)
    on update CASCADE
    on delete restrict

);

create table calendar (
    id int not null auto_increment primary key,
    date date not null,
    day varchar(255)

);

create table rota (
    id int not null auto_increment primary key,
    calendar_id int not null,
    foreign key fk_rota_calendar_id (id)
    references calendar(id)
    on update CASCADE
    on delete restrict,
    user_id int not null,
    foreign key fk_rota_user_id (id)
    references user(id)
    on update CASCADE
    on delete restrict
);

select 
    user.id, 
    user.name,
    user.password,
    teams.name 
    from user 
    join teams 
    on user.user_team = teams.id
;

select 
    rota.id,
    rota.calendar_id,
    rota.user_id, 
    calendar.date, 
    calendar.day,
    user.name,
    teams.name
    from rota 
    join calendar
    on rota.calendar_id = calendar.id 
    join user
    on rota.user_id = user.id
    join teams 
    on user.user_team = teams.id
;

select 
    calendar.id,
    calendar.date,
    calendar.day,
    user.name as 'User_Name', 
    teams.name as 'Team_Name'
    from calendar
    left join rota 
    on calendar.id = rota.calendar_id
    left join user 
    on rota.user_id = user.id 
    left join teams 
    on user.user_team = teams.id   
    where (teams.id = 1 OR teams.id is null) and month(date) = 9
;





insert into calendar (date, day) values 
    ('2019-08-30','Friday'),
    ('2019-08-31','Saturday'),
    ('2019-09-01','Sunday'),
    ('2019-09-02','Monday'),
    ('2019-09-03','Tuesday'),
    ('2019-09-04','Wednesday'),
    ('2019-09-05','Thursday'),
    ('2019-09-06','Friday'),
    ('2019-09-07','Saturday'),
    ('2019-09-08','Sunday'),
    ('2019-09-09','Monday'),
    ('2019-09-10','Tuesday'),
    ('2019-09-11','Wednesday'),
    ('2019-09-12','Thursday'),
    ('2019-09-13','Friday'),
    ('2019-09-14','Saturday'),
    ('2019-09-15','Sunday'),
    ('2019-09-16','Monday'),
    ('2019-09-17','Tuesday'),
    ('2019-09-18','Wednesday'),
    ('2019-09-19','Thursday'),
    ('2019-09-20','Friday'),
    ('2019-09-21','Saturday'),
    ('2019-09-22','Sunday'),
    ('2019-09-23','Monday'),
    ('2019-09-24','Tuesday'),
    ('2019-09-25','Wednesday'),
    ('2019-09-26','Thursday'),
    ('2019-09-27','Friday'),
    ('2019-09-28','Saturday'),
    ('2019-09-29','Sunday'),
    ('2019-09-30','Monday'),
    ('2019-10-01','Tuesday'),
    ('2019-10-02','Wednesday'),
    ('2019-10-03','Thursday'),
    ('2019-10-04','Friday'),
    ('2019-10-05','Saturday'),
    ('2019-10-06','Sunday'),
    ('2019-10-07','Monday'),
    ('2019-10-08','Tuesday'),
    ('2019-10-09','Wednesday'),
    ('2019-10-10','Thursday'),
    ('2019-10-11','Friday'),
    ('2019-10-12','Saturday'),
    ('2019-10-13','Sunday'),
    ('2019-10-14','Monday'),
    ('2019-10-15','Tuesday'),
    ('2019-10-16','Wednesday'),
    ('2019-10-17','Thursday'),
    ('2019-10-18','Friday'),
    ('2019-10-19','Saturday'),
    ('2019-10-20','Sunday'),
    ('2019-10-21','Monday'),
    ('2019-10-22','Tuesday'),
    ('2019-10-23','Wednesday'),
    ('2019-10-24','Thursday'),
    ('2019-10-25','Friday'),
    ('2019-10-26','Saturday'),
    ('2019-10-27','Sunday'),
    ('2019-10-28','Monday'),
    ('2019-10-29','Tuesday'),
    ('2019-10-30','Wednesday'),
    ('2019-10-31','Thursday')
;


insert into rota (calendar_id, user_id) values
    (2,2),
    (3,2),
    (4,2),
    (5,2),
    (6,2),
    (7,2),
    (8,2),
    (9,2)
;

insert into rota (calendar_id, user_id) values
    (2,1)
;