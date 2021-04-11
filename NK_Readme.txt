https://www.youtube.com/watch?v=W5j0dpHxCj4

> npx create-react-app amazon-clone-official
> cd
> npm start

> npm i styled-components
> npm i @material-ui/core && npm i @material-ui/icons

# Reference: https://reactrouter.com/web/guides/quick-start
> npm i react-router-dom

> npm install firebase-tools
> npm install firebase


Commands:
rfce : reactFunctionalExportComponent

Extensions to be installed:
	ES7 React/Redux

Firebase:
	1. Add Project: amazon-clone-official
	2. Click on <> icon (i.e. Web)
		Register app. App nickname : amazon-clone-official-app
		Close.
	3. Project settings >> Config >> Copy all text.
	4. Create firebase.js in /src folder >> Paste text.
	5. > npm install firebase-tools
	6. > npm install firebase
	7. Click 'Firestore' >> Create Database
	8. CLick '+Start collection' 
		>> Collection ID: products 
		>> Document ID: Click 'Auto ID'
		>> string : New Apple iPad Pro
		>> price : 1449
		>> string : 5
		>> image : string : abc.com/def.png
		
	
	
	
-- ----------------------------------------------------------------------------	
Adding project to Git:

# git config --get remote.origin.url
git remote add origin https://github.com/nikhil2050/amazon-clone-official.git
# git remote -v
git branch -M main
git push -u origin main
-- ----------------------------------------------------------------------------	
