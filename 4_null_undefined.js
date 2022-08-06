//undefined

//Undefined is meant to represent the idea that something doesn't exist.  When we try to use a variable that has no value, we get undefined.
//Example:

let variable
console.log(variable) //undefined

// When we declare a variable useing let but don't give it a value, it receives the default value of undefined.  This is JavaScript telling us that we're trying to use something that isn't there.

// undfined is a special varable type used ot indicate that something is missing.

let variable1 = 'abc'
console.log(variable1) // abc

variable = undfined
console.log(variable) // undefined

// We never want to assing a variable a value of undefined.  It meant to sow that something has gone wrong and some value is missing.

// If we wantt o specify that something has no value, we should use null.

//==============================================================================================================================================

//Null

//null is another variable type.  It represents something that's empty.  The difference between null and undfined lies in they're implmented by JavaScript and used by developers.

//null is something that is safe to use and to assign to variables.

let variable3 = null
console.log(variable3) // null

//Preferring null over undefined is one of those best practices.  Setting a variable to null is clear and communicates that we want to essentially delete the variable.  We're done with it.
//Setting it to undefined will make people look twice.  They'll see it, be confused, and might look down upon the failure to follow common practice.

//==============================================================================================================================================

// What will this code print out?
let variable4
let variableCopy4 = variable4
variable4 = 'abc'
console.log(variable)

//What is the best synonym for null?

//What is the best synonym for undefined?
