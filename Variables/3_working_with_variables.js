//Printing

//To print something out, we use something called console.log().

let bool = true
let string = 'abc'

console.log('Hello!') //Hello!
console.log(false) // false
console.log(bool) // true
console.log(string) // abc

//Reassigning Variables
//We can give a variable a new value if we like
let variable = 'abc'
console.log(variable) // abc

variable = 25
console.log(variable) // 25

variable = false
console.log(variable) // false

//Note that we don't use the let keyword again.  We use it once to declare a varaible and then to reassign vales without it.
// If we use let again, we'll get an error.

// Assigning Using Variables

// We can copy the value of a variable into another variable using =

let variable1 = 'abc'
let variableCopy = variable1
console.log(variableCopy) // abc

//Once we copy a variable, the new variable is distinct form the old one.  They have no relation to each other.  If we change one, the other remains unchanged.

let variable2 = 'abc'
let variableCopy1 = variable2
variable2 = 'def'

console.log(variable2) // def
console.log(variableCopy) // abc
