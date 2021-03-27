
<h1 align="center">Country quiz</h1>

<div align="center">
  <h3>
    <a href="https://country-quiz-daniel.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://{your-url-to-the-solution}">
      Solution
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [Overview](#overview)
    -   [Built With](#built-with)
-   [Features](#features)
-   [How to use](#how-to-use)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![home](./images/home.webp);

-   Click this link to see my app [country-quiz](https://country-quiz-daniel.netlify.app/) :
  
1. I fetched all the countries from the [API](https://restcountries.eu/) and I created an object that stores all four random capital of cities, then I mapped them inside a button.

1. I created an array of questions so and displayed them randomly by using `Math.floor()` and `Math.random()`.

1. I grabbed all buttons and set conditions to see the correct answer and the wrong one by changing their background color if one of them is clicked.

1. `Counter` is used in order to get the score everytime the user clicks the right answer.

1. To display the score card, I used condition as below: if a user clicked the wrong answer the card appear with the score. The card disappears once the user clicks the retry button.
------------------------------------------------------------------------------

-   When I did this project, I faced different challenge especially on changing the background color of the button when it is true or not.
-   If you want to make any modification to an element that we grabed by using `querySelectorAll`, don't forget to use `forEach()`.
-   If you do a project, it is better to enlist a few plan before start doing it.

### Built With

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
-   [React](https://reactjs.org/)

## Features

- [Country API](https://restcountries.eu/)
- [Material design icon](https://google.github.io/material-design-icons/)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Contact

-   Website [h-fabrice-daniel.com](https://daniel-fabrice-website.netlify.app/)
-   GitHub [voromahery](https://github.com/voromahery/country-quiz)