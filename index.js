/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS INSIDE OF A FUNCTION ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/

//Declare and initialize votingAge
const votingAge = 18;
//If voting age is >= 18
if (votingAge >= 18)
{
  //Print true
  console.log("true");
}

//Otherwise
else
{
  //Print false
  console.log("false")
}



/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/

//Declare, initialize, and print first variable
let firstVariable = 45;
console.log("The first variable is: " + firstVariable);

//Declare, initialize, and print second variable
let secondVariable = 99;
console.log("The second variable is: " + secondVariable);

//Compare the values and change
if (firstVariable < secondVariable)
{
  //Print the outcome of the comparison
  console.log("The first variable is way too small. Let's change it!")

  //Reassign the variables
  let firstVariable = secondVariable;

  //Print the outcome of the reassignment
  console.log("The first variable now equals: " + firstVariable);
}

//Otherwise 
else
{
  //Print this
  console.log("These values are all right.");
}


/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/

//Declare, initialize, and print a string
let someString = "1999";
console.log("The string's value is: " + someString);


//Declare the variable to hold the int. 
//Use parsInt() to convert the string into an int and assign it to this variable
let someInteger = parseInt(someString);

//Print the converted integer
console.log("The integer's value is: " + someInteger);

/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

//Define the function and parameters
function multiply(a, b)
{
  //Do the math and print the result
  console.log("The result = " + a * b); 
}

//Call the function, pass in two integers as arguments.
multiply(3,4);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

/* Ask about this during office hours. Why is it failing? */
//Define the function and parameter
function dogYears(humanYears)
{
  //Define dogYears as constant value for math operation
  const dogYears = 7;

  //Do the math and display the result
  return "Your age in dog years = " + humanYears * dogYears;  
}

//Call the function and pass in an integer
dogYears(45);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

//Pass in weight and age
function hungryDog(weight, age)
{
  //Check first condition
  if (age >= 1 && weight <= 5)
  {
    return weight * 0.05;
  }

  //Check next condition
  else if (age >= 1 && weight >= 6 && weight <= 10)
  {
    return weight * 0.04;
  }
  
  //Check next condition
  else if (age >= 1 && weight >= 11 && weight <= 15)
  {
    return weight * 0.03;
  }

  //Check next condition
  else if (age >= 1 && weight > 15 )
  {
    return weight * 0.02;
  }

  //Check next condition
  else if (age < 1 && age >= 0.583)
  {
    return weight * 0.1;
  }

  //Check next condition
  else if (age < 0.583 && age >= 0.333)
  {
    return weight * 0.05;
  }

  //Check next condition
  else if (age < 0.333 )
  {
    return weight * 0.1;
  }

  //Check next condition
  else
  {
    return console.log("Please try again");
  }
}


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

//Define the function
function game(userChoice, computersChoice)
{
  //Compare the choices
  //Tie scenario
  if (userChoice == 1 && computersChoice == 1 || userChoice == 2 && computersChoice == 2 || userChoice == 3 && computersChoice == 3)
  {
    //Print results
    return "It's a tie. Let's go again!";
  }

  //User = rock, computer = scissors
  else if ( userChoice == 1 && computersChoice == 2)
  {
    //Print results
    return "You chose rock. I chose scissors. Rock beats scissors: You win!" ;
  }

  //User = rock, computer = paper
  else if ( userChoice == 1 && computersChoice == 3)
  {
    //Print results
    return "You chose rock. I chose paper. Paper beats rock: You lose!";
  }

  //User = paper, computer rock
  else if ( userChoice == 2 && computersChoice == 1)
  {
    //Print results
    return "You chose paper. I chose rock. Paper beats rock: You win!";
  }

  else if(userChoice == 2 && computersChoice == 3)
  {
    //Print results
    "You chose paper. I chose rock. Paper beats rock: You win!";
  }

  else if ( userChoice == 3 && computersChoice == 1)
  {
    //Print results
    return "You chose scissors. I chose rock. Rock beats scissors: You lose!";
  }

  else if ( userChoice == 3 && computersChoice == 2)
  {
    //Print results
    return "You chose scissors. I chose paper. Scissors beats paper: You win!";
  }
}
  
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kilometers received to miles
  3. Return the number of miles
*/

//Declare and initialize variable to hold the number of km per mile
const convertToMiles = 0.621371;

//Define the function, pass in numKilos
function miles(numKilos)
{
  //Print the number of kilos passed in
  console.log("Number of kilometers: " + numKilos);
  return "Number of miles = " + numKilos * convert ;
}

//Call the function
miles(7);


//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

//Declare and initialize variable to hold the number of km per mile
const convertToInches = 0.621371;

//Define the function, pass in centimeters
function feet(centimeters)
{
  //Print the number of cms passed in
  console.log("Number of centimeters is: " + centimeters);
  return "Number of inches = " + centimeters * convertToInches ;
}

feet(52);


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(/*add your code here*/){
        /*add your code here*/
  }


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 should return 'you got an A' 
   80-89 should return 'you got a B'
   70-79 should return 'you got a C'
   60-69 should return 'you got a D'
   below should return 'you got an F'
*/
  
function grade(/*Your Code here */){
  /*Your Code here */
  }
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    //console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
