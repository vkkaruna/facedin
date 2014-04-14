facedin
=======

#Setup
  1. Download or clone this repo
  2. Make sure you have node and npm installed on your local machine. You can get tme here http://nodejs.org/.
  3. Using Node commad prompt, go to the project folder where you have cloned this project.
  4. Type "npm install". It will download all the dependancies. Wait for complete download.

#Running app  
  1. Type "grunt serve". The system will strtup a http server that runs at localhost:9000
  2. You will see a facebook login button. Press the button.
  3. You will be taken to facebook authentication and authorization page.
  4. Once approved, the page will disply the facebook user's name and other details.
  
#Troubleshooting 
  1. If you see the server is running with 127.0.0.1 instead of localhost, the facebook cannot recognise the app. In this case, goto the browser address bar, type "http://localhost:9000/" and repeat the steps 2 to 4 in Running app section. This will allow the facbook login successful.
  
  
