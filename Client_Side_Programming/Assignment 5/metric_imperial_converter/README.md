Braden P.  
Assignment 5  

Backend Logic Check

What (onclick="add()") does: The onclick attribute tells the browser to run the JavaScript add function when the button is clicked. This connects the button on the webpage to the JavaScript logic.

What (document.getElementById("a")).value returns: This command gets the current value that the user typed into the input field with the ID "a". The value is returned as a string.

Why we use (Number(...)): Input values are read as strings by default. Using Number() converts the string into a numeric value so JavaScript performs math instead of string concatenation.

Where the result is displayed and how it appears: The result is displayed by setting the innerText of an HTML element, such as paragraph or a div. When the function runs, the page updates instantly to show the calculated total.

One improvement I would add: I would add input validation so that if one or both inputs are empty or not numbers, an error message is shown instead of displaying an incorrect result.