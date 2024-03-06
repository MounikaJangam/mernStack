# mernStack

MERN - MERN is multiple technologies <br />
M - Stands for mongoDB <br />
E - Stands for Express JS <br />
R - Stands for React JS <br />
N - Stands for Node JS <br /> 

What is Stack?
----------------------------------------
-> Stack is collection of three technologies <br />
1. Frontend technologies (ExpressJS, React JS, Node JS)<br />
2. Backend technologies (React JS) <br />
3. Database <br />

Installations
-----------------------------------------
`npm init` - This utility will walk you through creating a package.json file. <br />

`npm i express mongoose cors` - express to connect to the server, mongoose to connect DB in the local, cors to access API esaily in front-end. 

`npm i nodemon concurrently` - These are the devDependencies.<br />
-> `nodemon` - `nodemon` is a tool that helps in development by automatically restarting the Node.js application <br />
-> This eliminates the manual restart the server every time changes are made to the codebase, which can significatly speed up the development process. <br /> 

`concurrently` - `concurrently` is utility tool that allows you to run multiple commands concurrently in your terminal.
-> It's often used in conjuction with `nodemon` to run both the Node.js server and other necessary process, sunch as frontend build tools or additional servers, simultaneously.

==============================================

Express Connection Implimentation
--------------------------------------------
-> First we have to connect with express to server the code is there in the server.js file. <br />

// This helps in importing express <br />
`const express = require('express'); `

// this helps in connect to the app. <br />
`const app = express(); `

this helps in getting response from the browser to view the data. <br />
`app.get('/', (req, res) => {  
    res.send('Hello World!');
}) `

// This helps to check wether the server in running on the particular port. <br />
`app.listen(5000,()=> console.log('server is running'));`

Mongoose Connection 
----------------------------------------------
-> To create connect to the mongoDB we have to open a account in the mongoDB atlas there we have to create a user. In the cluster we have a option called connect there we have to copy the script and paste in the mongoose.connect(). <br />

//import the mongoose<br />
`const mongoose = require('mongoose');`

//Create a connection with mongoDB <br />
`mongoose.connect('mongodb+srv://jangammounika:mounika123@cluster0.vfgdnky.mongodb.net/').then(
    ()=> console.log("DB Connected")
)`

