// if-statemtns

//They're meant to run a peiece of code if a certain condition is true.  If it's false, it'll skip the code and move on.

//An if-statement is weritten in this format:
if(/*condition*/) {
    //cconditional code 
}

//Example:

let trueFlag = true;
let falseFlag = false;

if (trueFlag) {
    console.log('This will print!');
}

if (falseFlag) {
    console.log('This won\'t pring :(');
}

//==============================================================================================================================================

//else-block
//We can add an else-blck directly after an if-statemnt.  This is meant to run code if a condition is false.  The sytax is this:

if(/*condition*/) {
    //run this if condition is true
} else {
    //run this if condition is false
}

let falseFlag1 = false;

if (falseFlag1) {
    console.log("This won't print :(");
} else {
    console.log("Were in the else-block! This iwll print!")
}