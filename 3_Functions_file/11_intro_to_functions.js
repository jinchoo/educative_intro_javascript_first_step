//Introduction to Functions

const { getOwnPropertyDescriptors } = require("immer/dist/internal");

function myFirstFunction() {
    console.log('Just ran my first function!')
}

myFristFunction();

// output: Just ran my first function!

//==============================================================================================================================================

// Creating a Function 

// To write a function, we start with the funciton keyword.  We write the name we want to give the function after it.  We write a pair of parentheses after that.  

function functionName() 

// Function naming rules are the same as variable naming rules.  Once we create a funciton, the function name can be reated like a normal variable.  

// We than write a pair of curly bracket {}.  Inside these curly brackets, we put some code.  The code inside those brakets is called the function body.  

function functionName() {
    //function body
    //sonme code here
}

//When the engine is running our code, nothing inside the function body rns until we do someting special.  
//If all we have in a file is the funciton myFirstFunction1(), the engine will not run it.  We need to call the function to run it.

function myFirstFunction1() {
    console.log('Just ran my first function!')
}

// The code insdie the funciton doesn't run until we call the function.

// to amek the code in the funciton body run, we have to call the funciton.  Invoke is another word for call.  This is done by writing the funciton name with a pair of parenthees after it.  

function functionName() { 
    //some code here
};

functionName();

//==============================================================================================================================================

//Why they're useful

// The value of functions is that they reduce the total amunt of code that we have to write and copy.  This is because we can call a function as many times as we like.  

// If  there's some code that needs to be run multiple times, instead of copying the code over and over, we can put the code in a funciton.  We can then simply call the function as many times as we want.

// If we were copying our code and some piece of it needed to be chaanged, we'd have to change it in every place that we copied the code.  

// If the code is in a function, we just have to change it in that one location.  

// Example:

function greet() {
    console.log('Hello! My name is Grett!')

}

greet(); // Hello! My name is Grett!
greet(); // Hello! My name is Grett!
greet(); // Hello! My name is Grett!



