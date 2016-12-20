# grades-app
A node application for tracking grades across semesters built for Georgia Tech students

Steps to get initial development up and running - for future reference
1. Pull the .gitignore, bundle.js, index.html, package.json, server.js, styles.css, and webpack.config.js files
2. Run the command "npm install" from cmder in the project file to install all of the dependencies
3. Look to see which dependencies have been upgraded and should be updated in the package.json
4. Create the js folder and hook into the index.html "content" tag with the first React file using "ReactDOM.render" method
5. Get developing! :D

"webpack" : for building once for development 
"webpack -p" : for building once for production (minification) 
"webpack --watch" : for continuous incremental build 
"webpack -d" : to include source maps 
"webpack --colors" : for making things pretty
"npm run start" : for opening index.html at localhost:8080 using http-server