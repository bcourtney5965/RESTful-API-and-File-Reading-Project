MarkupProject
=============

About
-----------------
A backend cooding challenge I completed that:
1. Reads the content from the files in the /data directory
2. Scores the content according to a set of rules
3. Stores this data in mySQL
4. I created a restful API to access the data

The API includes the following endpoints:
-----------------
| Function  | URL                                 | Action                                |
| --------- |-------------------------------------|:--------------------------------------|
| READ      | /api/getScores/:id                  | Get score by id                       |
| READ      | /api/dateRange/:startDate/:endDate  | Get all scores between specified date |
| READ      | /api/highScore                      | Get high score                        |
| READ      | /api/lowScore                       | Get low score                         |
| READ      | /api/averageScore                   | Get average score                     |

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

Scoring Rules
-------------
Each starting tag below has been assigned a score. Each tag in the content should be added to or subtracted from the total score.

(We will assume for this project our html code creator created valid html)

| TagName | Score Modifier | TagName | Score Modifier |
| ------- | :------------: | ------- | -------------- |
| div     | 3              | font    | -1             |
| p       | 1              | center  | -2             |
| h1      | 3              | big     | -2             |
| h2      | 2              | strike  | -1             |
| html    | 5              | tt      | -2             |
| body    | 5              | frameset| -5             |
| header  | 10             | frame   | -5             |
| footer  | 10             |

example:

````
<html>
    <body>
      <p>foo</p>
      <p>bar</p>
      <div text-align='center'>
        <big>hello world</big>
      </div>
    </body>
</html>
````

2 p tags = 2 x 1 <br>
1 body tag = 1 x 5 <br>
1 html tag = 1 x 5 <br>
1 div tag = 1 x 3 <br>
1 big tag = 1 x -2 <br>
**Total Score: 13**


Project Layout
--------------
#### /data

* Contains the HTML content data to parse, format: (keyname_yyyy_mm_dd)

ie:
* dougs_2012_02_04.html
* dougs_2012_04_01.html
* dougs_2012_07_01.html

#### /src

* My code is located here

#### /schema

* The create table statements for MySQL.
* My query to find the average score across each key.

ie:

| key | avgScore |
|---|--------|
| dougs | 10.35 |
| bobs  | 8.03 |

#### /vendor

* Where I included external libraries not written by me (Cheerio).
