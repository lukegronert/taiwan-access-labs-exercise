# GitHub User List

GitHub User List is a project that uses the Github API to create a list of Github users, along with a detail page to view more user information. [View the live demo](https://github.com/lukegronert/taiwan-access-labs-exercise)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the project dependencies:

```bash
npm install
```

Once all of the dependencies have been installed, go to the project directory and enter this command:

```bash
npm run start
```

A development server will start. Your browser should open after a few moments and load the webpage. If it does not, ensure there are no errors and go to the Local url shown in your terminal to see your project. (Example: http://localhost:3000)

## API

This project uses the GitHub API. It uses two different endpoints to fetch the necessary data.

```js
// Get all user data
"https://api.github.com/users"

// Get specific user data  
"https://api.github.com/users/{SPECIFIC_USERNAME}"
```

## Technlogies Used

This project was created with npm v8.11.0, create-react-app v5.0.1, and Material UI for React.

Other packages include:
 - redux v4.2.0
 - react-redux v8.0.2
 - react-router-dom v6.3.0
 - @mui/material v5.9.1
 - @emotion/react v11.9.3
 - @emotion/styled v5.9.1

## Requirements met

My task was to create a website which shows GitHub users in a list.

I used React hooks to design my components and Redux to manage my state. I chose to design the UI with Material UI for React in order to focus more on component design and data flow as instructed.

The List page includes these for all users:
 - avatar_url
 - login
 - site_admin (only shows on users that are site admins)

The List page includes the number of items on the page, it is non-paginated, and it is limited to 100 users.

I chose to complete the "Bonus Stage" of the exercise as well, which was creating a Detail page that the user is redirected to when they click on a user on the List page.

The Detail UI page contains:
 - avatar_url (user's photo)
 - name (real name)
 - bio
 - login (username)
 - site_admin (only shows on users that are site admins)
 - location
 - blog (url to user's blog)

 All of this information is only shown if it is available from the user.

## Authors
This project was created solely by [Luke Gronert](https://www.lukegronert.com)
