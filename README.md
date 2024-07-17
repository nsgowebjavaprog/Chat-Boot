First we Open VS-Code then open/create a folder then create 2-new folder are frontend and backend.

In terminal/ open new terminal--{Execute some commands/commands-lines like as following:

-------------------------****************************-----------------------------****************************-------------------------*****************************--------------------------
PS E:\ALL IN ONE\Socket-io> cd backend
PS E:\ALL IN ONE\Socket-io\backend> npm init -y
Wrote to E:\ALL IN ONE\Socket-io\backend\package.json:

{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}


PS E:\ALL IN ONE\Socket-io\backend> npm install express socket.io nanoid nodemon

added 117 packages, and audited 118 packages in 6s

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS E:\ALL IN ONE\Socket-io\backend>

****************************---------------------------------*********************************----------------------------------------**********************************--------------------


COMES TO BACKEND FOLDER
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Then in Backend folder having the file like package-lock.json & package.json

After that we create a file server.js in Backend Folder.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
COMES TO FRONDEND FOLDER
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
PS E:\ALL IN ONE\Socket-io> cd frontend


PS E:\ALL IN ONE\Socket-io\frontend> npx create-react-app chatty

Creating a new React app in E:\ALL IN ONE\Socket-io\frontend\chatty.  

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...   


added 1483 packages in 1m

261 packages are looking for funding
  run `npm fund` for details

Initialized a git repository.

Installing template dependencies using npm...

added 63 packages, and changed 1 package in 18s

261 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1546 packages in 7s

261 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Created git commit.

Success! Created chatty at E:\ALL IN ONE\Socket-io\frontend\chatty    
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd chatty
  npm start

Happy hacking!
PS E:\ALL IN ONE\Socket-io\frontend> 


PS E:\ALL IN ONE\Socket-io\frontend> dir


    Directory: E:\ALL IN ONE\Socket-io\frontend


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        17-07-2024     12:30                chatty


PS E:\ALL IN ONE\Socket-io\frontend> cd chatty

------------------------------------------------------------

PS E:\ALL IN ONE\Socket-io\frontend\chatty> npm install socket.io-client nanoid

added 1 package, changed 1 package, and audited 1554 packages in 5s

262 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

------------------------------------------------------------
PS E:\ALL IN ONE\Socket-io\frontend> cd chatty
PS E:\ALL IN ONE\Socket-io\frontend\chatty>
PS E:\ALL IN ONE\Socket-io\frontend\chatty> 
PS E:\ALL IN ONE\Socket-io\frontend\chatty> npm install socket.io-client

added 7 packages, and audited 1553 packages in 7s

261 packages are looking for funding
  run `npm fund` for details

Compiled successfully!
Compiled successfully!
Compiled successfully!
Compiled successfully!

Compiled successfully!

Compiled successfully!

Compiled successfully!

Compiled successfully!
Compiled successfully!
Compiled successfully!

You can now view chatty in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.29.4:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully

----------------------------------------------------------------

Then App.js modify then run all localhost:3000 we get output screen what you written in App.js file

Get start Code available in GitHub

THANK YOU

                               
