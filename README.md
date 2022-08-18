# JavaScript-Week3
# Week 3 Challenge: Password Generator

## Challenge

A new starter code was created to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It is a clean and polished, responsive user interface that adapts to multiple screen sizes.

## User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security


## Deployed Website

[Link to Github] https://github.com/bmevada/JavaScript-Week3.git

[Link to Website] https://bmevada.github.io/JavaScript-Week3

The Password Generator includes Heading, a read only password generated text, and a Generate Password button.

<link rel="Final Look" href="Password Generator Mock up-image.png">

## Acceptance Criteria

GIVEN a new, secure password is required to be generated
WHEN user clicks on the "Generate Random PAssword" button.
THEN the user is presented with a series of prompts for the desired password criteria

THEN the user will be required to enter the number of characters desired for their website - required input is between 8 to 128 charcters.

<link rel="Number of characters" href=".images/Password Length.png">

IF the number of characters is selected is not between 8 to 128 characters, the user will be prompted that the number of characters required for the random password generator is between 8 to 128.

<link rel="Character Error" href=".images/Character Error.png">

THEN the user will confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN the user will answer each prompt
THEN the user's input should be validated and at least one character type should be selected

<link rel="Lowercase Characters" href=".images/Lowercase.png">
<link rel="Uppercase Characters" href=".images/Numeric.png">
<link rel="Special Characters" href=".images/Symbols.png">
<link rel="Numberical Characters" href=".images/Numeric.png">

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is written to the page

<link rel="Output - Random Password" href=".images/Password Generated.png">



