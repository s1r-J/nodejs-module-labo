# mysql-test-timestamp

## Docker

```bash
$ docker pull mysql:latest
$ docker run -it --name mysql -e MYSQL_ROOT_PASSWORD=mysql -p 3306:3306 -d mysql:latest
$ docker exec -it mysql bash -p
$ mysql -u root -h 127.0.0.1 -p
```

## MySQL

```sql
create database mydb;
use mydb;
create table mydb.mytable (
    id int unsigned primary key,
    created_at timestamp
);
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'mysql';
```
