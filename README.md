# Coolbet Cypress TEST

# INSTRUCTIONS FOR CYPRESS.IO
 Guide for installing Cypress:
    Getting started:
    Install your personal favorite code editor ( ex: VS code, IntelliJ, Atom etc).
    Install Node.js (https://nodejs.org/en/).
    Install Git (https://git-scm.com/downloads).


* Open your code editor.
* Open Terminal / cmd
* Navigate where your project will be.
* Clone Coolbet Cypress TEST from github( https://github.com/Reemet/CBCypress.git ).
* git fetch all
* git checkout master
* git pull 
* Navigate to project root directory ( where package.json is )
* run npm install
* Wait for Cypress to finish installing.

* Run tests with: npm run webCli ( web CLI will open up Cypress UI and you can visually observe tests.)
 Cypress IO will open up and click "Run all tests"
  For mobile tests: npm run mobile ( might run through but have not tested right now )
 
 * to run tests headless run : npm run headless

* Mobile tests will run in headless mode and save recording in project/cypress/videos/testname.mp4.

* For different browsers you can use - cypress run --browser BROWSERNAME
* To write new tests, create a new .js file in intergration folder with .spec.js extention.