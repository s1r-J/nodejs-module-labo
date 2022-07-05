const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./photo-database.sqlite");

db.serialize(function () {
    db.all("select name from sqlite_master where type='table'", function (err, tables) {
        console.log(tables);
    });

    db.all("select * from sqlite_master", function (err, result) {
        console.error(err);
        console.log(result);
    });

    db.all("select * from photo", function (err, result) {
        console.error(err);
        console.log(result);
    });
});

db.close();
