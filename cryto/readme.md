# CrytoV

CryptoV will get you real-time information about the price and current market cap for multiple **CryptoCurrencies**.

This project is build in AureliaJS querying the API from www.cryptocompare.com.

# Instructions to Install

- You will need to install node (https://nodejs.org/es/) and get access to the npm comand in your terminal / console.
- You need to install Git (https://git-scm.com/) to clone this project or you can copy or download the files.
- You need to install Aurelia CLI with the command **npm install aurelia-cli -g**.

Once you have the required programs and files the follow the next steps.

- Go to the main folder of the project and execute **npm install** to get all the needed dependencies.
- Execute the command **au run**.
- Go to your http://localhost:8080/ to see the project.

If you need to change the port of the project you can search in the aurelia.json for the line "port": 8080, inside the platform attribute and change it. 

If you have plans to continue using this project, you need to change the API key in the file **cryptocompare.js**
If you want to add more cryptocurrencies to get info, you need to add it to the array inside the file **currencies.js**.
 
 