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

Helpful Links

These links were used to create the Tabs

Create Tabs in React - https://toddmotto.com/creating-a-tabs-component-with-react/

Default Props and PropTypes in ES6+ - https://babeljs.io/blog/2015/06/07/react-on-es6-plus

How to fix the error "Warning: React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components). Check the render method of (.jsx file)"
https://codereviewvideos.com/blog/warning-react-createelement/
http://stackoverflow.com/questions/31852933/why-es6-react-component-works-only-with-export-default