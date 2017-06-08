About
-----------------
A backend project I did that:
1.) First scrapes the content from the files in the /data directory
2.) Scores the content according to a set of rules
3.) Stores this data in a mySQL
4.) I created a restful API to access the data

To Run App
-----------------
* Naviate to the /vendor/cheerio/ directory & run `npm install`
* Naviate to the /src directory
* run `npm install`
* open new shell and run `mysql.server start --skip-grant-tables` to start db derver
* run `mysql`
* run `FLUSH PRIVILEGES;`
* run `ALTER USER 'root'@'localhost' IDENTIFIED BY '';`
* open new shell and run `npm run setSchema` within the src directory
* Back in mySQL shell run `use red_ventures;` and the `describe red_ventures.documents;` to view table
* run `npm start` in src directory to start Express Server

To shut down app
-----------------
* in mySQL shell `\q` to exit shell
* run `mysql.server stop` to stop db derver
* ctrl + c to kill Express Server

Function  URL                                 Action
READ      /api/getScores/:id                  Get score by id
READ      /api/dateRange/:startDate/:endDate  Get all scores between specified date
READ      /api/highScore                      Get high score
READ      /api/lowScore                       Get low score
READ      /api/averageScore                   Get average score