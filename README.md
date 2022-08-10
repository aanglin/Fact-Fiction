# Fact or Fiction
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Deployed Website
[Deployed Website](herokuLinkWillGoHere)

## Description
Fact or fiction is a full-stack application that allows users to play an interactive game, determining whether or not presented laws or headlines are real or fake.

## Table of Contents
- [Installation](#Installation)  
- [Usage](#Usage)
- [Future](#Future)
- [Contributing](#Contributing)
- [Questions](#Questions)

## Installation
- [Node.js](https://nodejs.org/en/)
- [Nightmare](https://www.npmjs.com/package/nightmare)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Handlebars.js](https://www.npmjs.com/package/handlebars)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [node.bcrypt.js](https://www.npmjs.com/package/bcrypt)
- [Express](https://www.npmjs.com/package/bcrypt)
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Bootstrap](https://getbootstrap.com/)
- [Kaggle](https://www.kaggle.com/)


## Usage
This full-stack JavaScript program can be enjoyed by anyone who would like to test their skills and determine outrageous laws and/or news headlines as real or fake. If the user would like to run this program locally, the above packages must first be installed.
<br>
Note: Bootstrap was used for styling and Kaggle was used to get fake new headlines.
<br><br>
To access the game, the user will first be directed to the homepage where a user can sign in if they have an existing login.
![Homepage Screenshot](./assets/step-1.png)
<br><br>
If users do not have a current account, they can click 'Sign Up' and will be asked to enter new account information.
![Homepage Screenshot](./assets/step-2.png)
<br><br>
Once logged in, the user will be directed to the game page. The navigation menu to the left offers options for the user to logout, view high scores or play the game. To start the game, the user will click 'Play Game' button located on the game card.
![GamePage Screenshot](./assets/step-3.png)
<br><br>
Once the game starts, the user will have 60 seconds to answer as many prompts correctly as possible. Each correct answer will add 50 points to the final score
![Gameplay Screenshot](./assets/step-4.png)
<br><br>
The game will end once the timer runs out or if the user clicks the 'End Game' button. 
![Point to timer/endgame button Screenshot](./assets/step-5.png)
<br><br>
Once the game is over, the final score will be presented to the user and they will be given the option to play the game again, view high scores, or logout.
![Game Over Screenshot](./assets/step-6.png)
<br><br>
As a developer wanting to test functionality and authorization of login credentials, the Nightmare package can be utilized. Simply start your server, enter credentials you would like to test and type 'node test.js'. <br>
![Nightmare Demo](./assets/nightmaredemo.gif)

## Future Directions
- Include option to login with Google credentials
- Require email address to sign up
- Add sound while game program is running
- Post top 5 high scores
- Display Username in nav bar when logged in


## Contributing
[Aaron Anglin](https://github.com/aanglin)<br>
[Sara Baqla](https://github.com/missatrox44) <br>
[Matthew Castoreno](https://github.com/Castoreno05)<br>
[Victor Guiterrez](https://github.com/VictorGutierrez25)<br>
[Angel Meza](https://github.com/amezabla)

## Questions
Feel free to contact any contributing developer with suggestions for improvements, questions or concerns.
<br>
[Email: Aaron Anglin](mailto:aaron.anglin101@gmail.com)<br>
[Email: Sara Baqla](mailto:missatrox44@gmail.com) <br>
[Email: Matthew Castoreno](mailto:matthew.castoreno@yahoo.com)<br>
[Email: Victor Guiterrez](mailto:gutriv4@gmail.com)<br>
[Email: Angel Meza](mailto:mezatx@gmail.com)
