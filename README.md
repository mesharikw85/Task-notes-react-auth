# React Authentication Task

## Instructions

1. Read the following steps in full before writing any code.
1. Most of the code for the UI has already been built, but is missing functionality with the backend.
1. Go through the code in the `src folder` to get an idea of the task and project structure.
1. Once you are ready, go ahead and solve the following steps.

## Task Part 1

## Register

1. npm install `jsonwebtoken` [docs link](https://www.npmjs.com/package/jsonwebtoken)
1. Open `Register.js` component in the pages folder.
1. import the `register` function from the `api/auth.js`.
1. Use the `useMutation` hook with the `register` function by passing `userInfo`.
1. Console log the response from the backend. Ensure that your response has the key of `access` followed by an encoded string. Remove it when its working.

## Login

1. Open `Login.js` component in the pages folder.
2. import the `login` function found in the `api/auth.js` to retrieve a token with axios and react query to send a request to the backend.

## Maintaining Login (Local storage)

1. In `auth.js` file create a function setUser that saves your token in the `localStorage`

## Logout

1. go to `auth.js` in the api folder
2. create a function `logout` that resets the user to null and deletes the token from the instance header.

## Continuing the Task Part 2

## Sending requests with the auth token attached

## Protected Routes (aka cant add a new pet if not logged in ‘if going to use the pet api’)

## Continuing the Task Part 3
