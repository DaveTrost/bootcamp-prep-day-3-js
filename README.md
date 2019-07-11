# bootcamp-prep-day-3-js

## JavaScript in the browser

We will learn more "later" (tomorrow or next week) about scoping and why we do type="module" in the script declaration from HTML

## Setup ESLint

Lint gives instant feedback on warnings and errors.
The .eslintrc file is required and without it, there will be no syntax or style checking in JS!

## Control Flow

Debugging is possible directly in the browser (Dev Tools) for JS.

1. Refresh web page
2. Create a breakpoint (on the first line)
3. Refresh the page again
4. Set the focus to the Dev Tools pane and use F9 to step through JS code
5. If you need to find a file, use ctrl-p with the name of the file (in the "sources" tab)

## JS Does Browser

The built-in object "document" represents the web page from which the js was loaded

## Handling Events

We needed a quick way to get rid of the Lint error for the unused variable that was our callback function. We used "disable [error] for this line"
First we made a container to hold the result of out js function/callback. We used a span because it was in-line with other text.
Then we ensured that the callback was activated from html. Put a console.log call into the callback function.
Then, use the function to change the value in the container

Why did I get so many errors when I tried to use document.getelementbyid inside the callback function??
