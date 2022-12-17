/*
VS CODE - CONFIGURE WITH PRETTIER
Prettier is an opinionated code formatter. It makes assumptions about how 
a good code should look like. It makes sure your code is nicely formatted.

We have to define prettier as the default formatter

Go to preferences - Settings
search for default formattor
Go to default formatter and choose esbenp.prettier.vscode
search for format on save and check the checkbox

Arrow function

The prettier tool doesn't influence how the code works but it is just a visual
tool. We want to also avoid always writing console.log repeatedly(DRY).

We do this by configuring a code snippet.

Go to preference - user snippet - New global snippet file-akonnor

We need live server to do this
There are two ways to get live server

1. VS Code Extension
2. NodeJs and NPM (Node Package Manager) - Professional / way 

Let's start with the first step
- check on the extension button
- search for live server and install it

2ND STEP
Download NodeJs - according to your OS
After, go to File Menu - Terminal - New Terminal
Type "node" - v in the terminal

*/

"use strict";

//if (x === 23) console.log(23);

// const xenaphone = "51";

// const calcAge = birthYear => 2037 - birthYear;
// console.log(xenaphone);
// console.log("hellooo yess");
// console.log();
// console.log("world");

/*

INSTALLING NODEJS AND SETTING UP DEVELOPERMENT ENVIRONMENT

LEARNING HOW TO CODE
1. Have a clear goal in mind
2. Don't watch a tutorial video or just copy paste code without understanding
or caring how they work.
3. Reinforce what you learn by taking small changes or taking note 
4. Practice coding while learming and come up with your own project idea
5. Don't become frustrated when your code isn't perfectly clean, efficient oe sometimes
doesn't work at all
6. Don't lose motivation because you think you can't /don't know everything.
7.Don't learn in isolation
8. After funishing a couple of courses, don't think you are a web developer and start applying for jobs. 
Build your own apps before.

NO CLEAR GOAL FIX
-Set specific, measurable , realistic time-based goals
-know exactly why you are learning to code : startting up your own thing, switching careers? 
Finding a better job?
-Imagine a big project you want to build
-Research technology you need to learn

COPY AND PASTE
1. Understand the code that you are studyimg and typing ( Don't move on if you don't understand)
2. Always type the code, don't copy-paste!

REINFORCING FIX
1. After you learn a new thing(feature/concept) use it immediately
2. Take notes
3. Challenge yourself and practice with small coding exercises and challenges
4. Don't be in a hurry to complete the course fast

NOT PRACTICING CODE OUTSIDE OF ENVIRONMENT FIX
1. Practicing on your own is the most important thing to do
2. Without coding practice outside the course, you won't go anywhere
3. Come up with your own project ideas or copy popular sites or applications, or just
parts of them at the beginning
4. Don't be stuck in the tutorials or your comfort zone

FRUSTRATE ABOUT QUALITY OF CODE FIX
1. Don't get stuck trying to write the perfect code.
2. Just write tons of code no matter the quality
3. Clean and efficient code will come with time
4. You can always refactor code later (imorive code later)

LOST MOTIVATION FIX
1. Embrace the fact that you will never know everything
2. Just focus on what you need to achieve your goals
   Best teachers and developers have no problem admitting they don't know everything.
   A well  defined goal helps you to focus and have a great achievements. Everything else
   is unneccessary.
   For eg. If you don't need a backend in your app, the you don't need nodeJs or php.

LEARNING IN ISOLATION FIX
1. Explain new concepts to other people. If you can explain it, you truly undertand it.
2. Share your learnijg progress with web developer community on social network for accountability.
  Twitter - #100daysofcode #codeNewBie #webdev


THINKING YOU ARE A WEB DEVELOPER FIX
1. The biggest misconception people have is thinking they are web developers after a few courses
2. Courses are an amazing starting point, but are only the beginnig of your journey.

EVERYTHING AWESOME
Study Courses - Understand code, take challenges and notes
=> Stay motivated, keep writing lots of code on your own, no matter how nad

PIT OF DESPAIR
Learn with other people, dev, beginners and share progress
Keep challenging yourself, run into lots of problems and fix them
Learning to code is really a difficult thing to do so beat yourself up if you are finding it
difficult to code.

BACK TO AWESOME
1. Round up your skillset with best practices and tools (git,testing)

JOB READY
But the learning never stops

HOW TO THINK LIKE A DEVELOPER (BECOME A PROBLEM SOLVER);

Example: In an array of GPS Cordinates, find the closest points. This problems is not 
straight forward.

- Don't jump at problems without doing much thinking
-Don't implement solutions in an unstructured way (This causes stress when things don't work right away)
- Don't feel too proud to research solutions.

FIX
- Stay calm and slow down, and don't just jump at a propblem without a plan
- Take a very logical and rational approach (programming is just logic)

4 STEP FRAMEWORK TO SOLVE ANY PROBLEM

1. Make sure you 100% understand the problem. Ask the right quations to get a clear picture.

Example: Project Manager " We need a function that reverses whatever we pass into it"

Question to Ask
-What does "whatever" even mean in this context?
-what should be reversed?
 Answer: only strings, numbers and arrays make sense to reverse. Objects do not have a well
 defined structure. so we cannot reverse them.

 We won't reverse undefined, null or boolean.
-What should we do if something else is passed into it that is not a string, a number or an array?
-What should be returned? Should it always be a dtring, or should the type be the same as the one passed in?
-How to recognize whether the argument is a number, string or an array

-what should be returned? Should it always be a string, or should the type be the same as passed in?
-How to recognise whether the argument is a number, string or an array.

2. Divide and conquer (Essential method of problem solving in any field). Break up the big
problems into smaller sub problems.

- Sub problems
  check if argument  is a number, a string or and array
  implement reversing a number
  implement reversing a string
  implement reversing an array
  return reversed value

3. Don't be afraid to do as much reserch as you have to when you are finding difficulty implementing, waste no more time.
Go to google, stack overflow, MDN web docs.
- How to check if a value is a number in javascript
-How to check if a value is an array in javascript
-How to check if a value is a string in javascript
-How to reverse a number in javascript
-How to reverse a string in javascript
-How to reverse an array in javascript

4. For bigger problems, write pseudocode before writing actual code
function reverse(value)
if value type !string && !number && !array
return value
if value type == string
reverse string
if value type == number
reverse number
if value type == array
reverse array
return reversed array
*/
/*

USING GOOGLE, STACKOVERFLOW AND MDN
PROBLEM
We work for a company building a smart home thermometer. Our most recent task is this. " Given an array
of temperatures of one day, calculate the temperature amplitude. Keep in mind there might be a sensore error?"

const temperature = [3,-2,-6,-1,"error",9,13,17,15,14,9,5]

SOLUTIONS
//1. Understand the problem
- what is temperature amplitude?
Answer: Difference between highest and lowest temp.
How to compute max and min temperature
What is a sensor error? and what to do?

2. Breaking up into smaller problems
 How to ignore errors
 Find max value in temp array
 Find min value in temp array
 subtract min from max(amplitude) and return it

 How do  you code for the maximum value in an array
 */
/*
const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
let max = temps[0];
let min = temps[0];

const calcTempAmplitude = function (temps) {
  //go to google
  //type "javascript get max value in an array"
  for (let i = 0; i < temps.length; i++) {
    const ourTemp = temps[i];
    if (typeof ourTemp !== "number") continue;
    if (ourTemp > max) max = ourTemp;
    if (ourTemp < min) min = ourTemp;
  }
  const amplitudeResults = max - min;
  console.log(amplitudeResults);
  console.log(max, min);
};

calcTempAmplitude(temps);
*/
/*
DEBUGGING (FIXING ERRORS)
A Software bug is a defect or a problem in a computer program. Basically, any unexpected or unintended behaviour
of a computer is a software bug.

The word "bug" was coined in 1940s when a real bug(living thing) was causing an error in Harvard's computer.
Bugs are completely normal in software development. Every complex application contains bugs which
sometimes go undiscovered for year and can cause security holes problems.

ASSIGNMENT 
Research the type of programming errors.
Runtime errors.
Logic errors.
Compilation errors.
Syntax errors.
Interface errors.
Resource errors.
Arithmetic errors.

Example: Project Manager " We need a function that reverses whatever we pass into it"
asssuming - reverse ([1,2,3,4]) - ([2,1,4,3])
Unexpected result: the array is scrampled. Not reversed. so there is a bug in the reverse function.

To fix it, we use the process called debugging. Which is the process of finding, fixing and preventing bugs.

A) IDENTIFY (Becoming aware that there is a bug). Bugs can be identified through the following ways
1. During development
2. Testing software
3. User reports during productions (These are worst type of bugs)
4. Context: Browsers, users, etc

B) FIND (Isolating where exactly the bug is happening in the code). This can be done using 
1. Developer console (simple code)
2. Debugger (complex code)

C) Fix (correct the bug)
- Replace wrong solution with new correct solution
D) PREVENT (Preventing it from hapenning again)
-Searching for same bug in a similar code
- Writing tests using test software

NB : Prompt always returns a string
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    //value: Number(prompt("Degrees Celsius")),
    value: 10,
  };
  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);
  //console.log(measurement);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  //let max = 0;
  //let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const ourTemp = temps[i];
    debugger;
    if (typeof ourTemp !== "number") continue;
    if (ourTemp > max) max = ourTemp;
    if (ourTemp < min) min = ourTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let display = "";
  for (let i = 0; i < arr.length; i++) {
    display += `${arr[i]}°C in ${i + 1} days...`;
  }
  console.log("..." + display);
};
printForecast(data1);
printForecast(data2);

/*
CODE REFACTORING

Whenever we have duplicate codes and we want to change some functionality,
 we have to change at all the places it has been duplicated. In a small example it's not a 
 big problem but in a larger code base, it becomes a nightmare.

 Refactoring means restructurig a code but without changing how it works. Refactoring is done to improve
the codes and eliminate duplicates. The first step of refactoring is to identify duplicate codes.

Let's identify duplicate codes
*/
