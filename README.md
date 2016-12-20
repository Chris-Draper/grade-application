# grades-app
A node application for tracking grades across semesters built for Georgia Tech students

Commands Cheat Sheet

"webpack" : for building once for development 
"webpack -p" : for building once for production (minification) 
"webpack --watch" : for continuous incremental build 
"webpack -d" : to include source maps 
"webpack --colors" : for making things pretty
"npm run start" : for opening index.html at localhost:8080 using http-server

Steps to get initial development up and running - for future reference

1. Pull the .gitignore, bundle.js, index.html, package.json, server.js, styles.css, and webpack.config.js files from another project
2. Run the command "npm install" from cmder in the project file to install all of the dependencies
3. Run "npm install webpack -g" to make sure webpack is installed globally
4. Look to see which dependencies have been upgraded and should be updated in the package.json
5. Create the js folder and hook into the index.html "content" tag with the first React file using "ReactDOM.render" method
6. Go through and make sure that you update the file paths so "webpack" and "webpack --watch" can run and compile stuff
7. Get developing! :D