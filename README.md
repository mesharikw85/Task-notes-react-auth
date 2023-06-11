# React Authentication Task

## Instructions

1. Read the following steps in full before writing any code.
1. Most of the code for the UI has already been built, but is missing functionality with the backend.
1. Go through the code in the `src folder` to get an idea of the task and project structure.
1. Once you are ready, go ahead and solve the following steps.

## Task Part 1

## Register

1. Open `Register.js` component in the pages folder.
1. import the `register` function from the `api/auth.js`.
1. Use the `useMutation` hook with the `register` function by passing `userInfo`.
1. go to the `api/auth.js` file and inside the `register` function add the formData.

```js
const formData = new FormData();
for (const key in userInfo) formData.append(key, userInfo[key]);
```

- then pass the `formData` instead of userInfo to the api request
- check that the register is working by going to the users tap

## Login

1. Open `Login.js` component in the pages folder.
2. import the `login` found in the `api/auth.js` Use the `useMutation` hook with the `login` function and pass it the user info.

- you should see the token in the response

## Maintaining Login (Local storage)

1. In `auth.js` file create a function setUser that saves your token in the `localStorage`
1. In your `api/index.js`, use your `instance` to create an interceptor using the `interceptors.request.use()` method with an anonymous function. We will check if the response has a property called `token`. Save the the data with to a variable called `token`. Save the token using `localStorage.setItem` with the key `token` and the value `token`

## Logout

1. go to `auth.js` in the api folder
2. create a function `logout` that resets the user to null and deletes the token from the instance header.

## Sending requests with the auth token attached

## Protected Routes (aka cant add a new pet if not logged in ‘if going to use the pet api’)
