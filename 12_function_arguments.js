//Function Arguments

//Arguments

//We can write a funciton in a way that akes it dynamic. We can give the funciton a value to use when we call it.
// The funciton will then use this value when it runs its code.

function printValue(someValue) {
  console.log('The item I was given is: ' + someValue)
}

printValue('abc') // The item I was given is: abc

// We have a function named printValue.
// Inside the parentheses on line 1, we put a word: someValue.
// This word symbolizes a future value.
// It's variable that we can use inside the function.

// someValue is a placeholder variable.  It will be different every time the function is called, depending on how we call it.

// This variable gets a value when we called funciton.  When we call it, we pass in the value we wish someValue to be equal to.
// In this case we give it 'abc'.

// So, when the function is called, the variable someValue inside the function is equal to 'abc'.

function printValue(someValue) {
  console.log('The item I was given is: ' + someValue)
}

printValue('abc') // The item I was given is: abc
printValue('Hello!') // The item I was given is: Hello!
printValue(6) // The item I was given is: 6
printValue(false) //The item I was given is: false

// When we call a funciton by passing in an argument, the argument variable inside the funciton gets asssigned whatever was passed in.
// It's as if we used an equals sign.
// The item we passed in gets copied to the variable in the function.

// We can pass in variables as arguments as well.

function printValue(someValue) {
  console.log('The item I was given is: ' + someValue)
}

let variable = 17
printValue(variable) // The item I was given is: 17

// We can name the argument variable in the function anything we want.  This means the following funcitons are equivalent.

function print1(someValue) {
  console.log('The item I was give is: ' + someValue)
}

function print2(arg) {
  console.log('The item I was given is: ' + arg)
}

function print3(xxx) {
  console.log('The item I was given is: ' + xxx)
}

let variable2 = 20

print1(variable) // The item I was given is: 20
print2(variable2) // The item I was given is: 20
print3(variable2) // The item I was given is: 20

//==============================================================================================================================================

// Multiple Arguments

function printValues(value1, value2) {
  console.log(value1 + ', ' + value2)
}

printValues('abc', 123) // abc, 123

//function can take in as many arguments as we wish to provide.  We can pass in as many as we like when we invoke them.

//==============================================================================================================================================

// undefined arguments

function printValue(value) {
  console.log(value)
}

printValue(10) // 10
printValue() // undefined

// If we don't pass in an argument to a function, it recevies the value of undefined when the funciton runs.
// undefined is meant to symbolize something missing.  In this case, it shows a missing argument.

// If there is a funciton that takes in multiple arguments and we provide only one, all argument variables in the funciton expcept the first one will become undefined.
// The first argument variable will receive the value we pass in.

function printValues(value1, value2, value3) {
  console.log(value1 + ', ' + value2 + ', ' + value3)
}

printValues('abc', 123, true) // abc, 123, true
printValues('abc', 123) // abc, 123, undefined
printValues('abc') // abc, undefined, undefined
printValues() // undefined, undefined, undefined

//==============================================================================================================================================

// Local Variables

// Any variable created inside a funciton is local to that funciton.  This includes all variables crated with let and arguemnt variables.

// if we declare a variable inside afunciton and try to use it outside the function, we will get an error.

function printValue(value) {
  let stringToPrint = 'The value I was given is: ' + value
  console.log(stringToPrint)
}

printValue(10) // The value I was given is: 10
console.log(stringToPrint) // error

// A funciton can, however, use variables that were declared outside the funciton.

function printValue(value) {
  console.log(startString + value)
}

let startString = 'The value I was given is: '
printValue(10) // The value I was given is: 10

// Note that we write the funciton above startSTring, but we can still use it in the function.  Because we call printValue after we declare the variable startString, it can use that variable.

// it doesn't matter that we wrote the function above hwere we wrote the variable.  It only matters that we invoe the funciton after writing the variables that it needs.

//==============================================================================================================================================

// console.log()

// Every time we run console.log(), we invoke a funciton and the item we provide is its argument.

// console.log() can actually accept multiple argument.  It can take in as many as we provide.

console.log(1, 2, true, 'abc', 17) // 1, 2, true, abc, 17
