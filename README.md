# Parcel JS example

## Steps
1. create project folder
2. cd into project folder & ```npm init -y```
3. ```npm --save-dev parcel-bundler```
4. ```npm --save react react-dom```
5. ```mkdir src```
6. ```touch src/index{.html,.js}```
7. add html to html page
8. add script tag <script defer src="./index.js"/>
9. add run script to package.js ```"start": "parcel ./src/index.html",```
10. create a react app and run ```npm run start```