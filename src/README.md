To Run App
-----------------
* Naviate to the /src directory
* run `npm install`
* open new shell and run `mysql.server start --skip-grant-tables` to start db derver
* run `mysql`
* run `FLUSH PRIVILEGES;`
* run `ALTER USER 'root'@'localhost' IDENTIFIED BY '';`
* open new shell and run `mysql -u root < schema.sql` within the db directory
* Back in mySQL shell run `use red_ventures;` and the `describe red_ventures.documents;` to view table
* run `npm start` in src directory to start Express Server

To shut down app
-----------------
* in mySQL shell `\q` to exit shell
* run `mysql.server stop` to stop db derver
* ctrl + c to kill Express Server