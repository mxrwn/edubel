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

     [x] Create react app
    - [ ] Create user class
      - email
      - password
    - [ ] Loading component
      - [ ] Check token
        - [ ] if token valid send to profile
        - [ ] if not valid send to login
    - [x] Register component
      - [x] Create form (email, password, confirm password)
      - [x] Get user input from submit event
      - [x] Check passwords
        - [x] error message if not equal
      - [ ] Send data to backend
      - [ ] Wait for token
        - [ ] Error if user already exists
        - [ ] Save token as cookie
        - [ ] Send user to profile
    - [x] Login component
      - [ ] Create form (email, password)
      - [ ] Get user input from submit event
      - [ ] send data to backend
      - [ ] Wait for token
        - [ ] Error if input does not match
        - [ ] Save token as cookie
        - [ ] Send user to profile
    - [ ] Profile component
      - [ ] Get Token from cookie
      - [ ] Send request to backend
      - [ ] Get user info
      - [ ] Show it

## Back-End

    - [ ] Create express app
    - [ ] Create user route
      - [ ] post request - check user with token
      - [ ] /register - save user to db and send token
      - [ ] /login - check user and send token
    - [ ] Create user model
      - email : string
      - password : string
      - admin : bool
      - Methods :
        - before save hash password with jwt
        - compare password
