# Edubel Login system

Système de connexion pour Edubel.

## TECH

### Front End

      - React (ext useCookies)

### Back End

      - Express
        - JWT
        - Mongoose
        - Cors
        - Morgan
        - Helmet

### Database

      - MongoDB (DEV)

## TODOS

## Front-End

* [x] Create react app
  * [ ] Loading component
    * [ ] Check token
      * [ ] if token valid send to profile
        * [ ] if not valid send to login
    * [x] Register component
      * [x] Create form (email, password, confirm password)
      * [x] Get user input from submit event
      * [x] Check passwords
        * [x] error message if not equal
      * [ ] Send data to backend
      * [ ] Wait for token
        * [ ] Error if user already exists
        * [ ] Save token as cookie
        * [ ] Send user to profile
    * [x] Login component
      * [x] Create form (email, password)
      * [x] Get user input from submit event
      * [ ] send data to backend
      * [ ] Wait for token
        * [ ] Error if input does not match
        * [ ] Save token as cookie
        * [ ] Send user to profile
    * [ ] Profile component
      * [ ] Get Token from cookie
      * [ ] Send request to backend
      * [ ] Get user info
      * [ ] Show it

## Back-End

    - [x] Create express app
    - [x] Create user route
      - [x] post request - check user with token
      - [x] /register - save user to db and send token
      - [x] /login - check user and send token
    - [x] Create user model
      - email : string
      - password : string
      - admin : bool
      - (Methods :
        - before save hash password with bcrypt
        - compare password)
