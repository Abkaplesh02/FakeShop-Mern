# FakeShop-Mern

### -Create a repository
### -Initilaze the repository
### -node_modules , package.json , package-lock.json
### -install express
### -create server
### -Listen to port 7777
### -Create a User schema Model
### -Create user route for registering new user
### -Create validate signup for this route
### -Then create new instance of user and add data to it
### -Send response back and return user added
### -add route to main app.js
### -test route using postman

### -Creaet a user login route for sign in
### -extract email and password 
### -find user from database using that email
### -then match the password and validate password
### -then create jwt token 
### -send the token back in cookie and also send the user back with this

### -Create a logout route for logout
### -Send a empty response back on the way in token and exppire it instant

### -Create a user auth middleware to authenticate jwt token every time any request is made by user
### -Here we will take jwt token from client which is sent along server
### -Then verify the jwt token and find the id in it and find user with the help of that id and attach that user to the req.body.


### -Create a profile router and make 3 apis in it for viewing profile , editing profile and editing password.
### -for editing password create a function first to check it values are allowed to update or not 
### -then update the data 
### -password update first take psassword from user and validate if it is strong or not  then convert it into hash and update the password then.


### -Changed the login and register from json server to my mongodb database for authentication and authorization







