/*
Program Info
Program Name: Student Access & Activity Tracker
Course: Client-Side Programming
Author: Braden Pelley
Date: January 21, 2026
Description:
This program collects student information, validates input,
determines access level, tracks assignment progress,
and displays a summary using JavaScript logic.
*/



//Part 1: Declare Variables and Collect Data
let studentName = "Braden Pelley";
let age = 19;
const program = "IT Programming";
let completedAssignments = 3;
let isLoggedIn = true;


//Part 2: Validate Input Using Conditionals

//Age validation
if (age < 18) {
  console.log("Access denied: Student must be 18 or older");
} else {
  console.log("Access granted");
}

//Login validation
if (!isLoggedIn) {
  console.log("Please log in to continue");
}


// Part 3: Use switch to Check Program Type

switch (program) {
  case "IT Programming":
    console.log("Welcome to the IT Programming program");
    break;
  case "Networking":
    console.log("Welcome to the Networking program");
    break;
  case "Cybersecurity":
    console.log("Welcome to the Cybersecurity program");
    break;
  default:
    console.log("Program not recognized");
}


//Part 4: Use Loops to Track Assignment Progress

//for loop to show completed assignments
for (let i = 1; i <= completedAssignments; i++) {
  console.log("Assignment " + i + " completed");
}

//while loop to show remaining assignments
let totalAssignments = 5;
let remaining = totalAssignments - completedAssignments;

while (remaining > 0) {
  console.log("Remaining assignments: " + remaining);
  remaining--;
}


//Part 5: Write and Call Functions

//Function to display student summary
function displaySummary(name, program) {
  console.log("Student Name: " + name);
  console.log("Program: " + program);
}

//Call the function
displaySummary(studentName, program);

//Function with return value to calculate progress
function calculateProgress(completed, total) {
  return (completed / total) * 100;
}

let progress = calculateProgress(completedAssignments, totalAssignments);
console.log("Progress: " + progress + "%");


//Part 6: Arrow Function for Validation

//Arrow function to check pass status
const hasPassed = completed => completed >= 3;

if (hasPassed(completedAssignments)) {
  console.log("Status: Passed");
} else {
  console.log("Status: Not Passed");
}


// Bonus Validation

//Validate student name is not empty
if (studentName === "") {
  console.log("Error: Student name cannot be empty");
}

//Check data types
console.log("Type of age:", typeof age);
console.log("Type of program:", typeof program);
console.log("Type of isLoggedIn:", typeof isLoggedIn);
