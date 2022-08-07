//Return Statements

function add10(number) {
  let newNumber = number + 10
  return newNumber
}

let fifteen = add10(5)
console.log(fifteen) // 15

//Breakedown

// We give add10 a value of 5 when we call it.  Inside the funciton, a new variable newNumber is created, which is equal to what was passed in plus 10.

// We then return newNumber from the function.  Pay attention to line 8.  We create a new variable fifteen and set it equal to the funciton call.  When we do this, the variable receives the value that the function returns.

// Essentially, on line 8, we're telling JavaScript to pause and jump up to line 3 and call add10 with out parameter.  This function will run to completion.  When it's done, the value that is returned will be given to the variable fifteen.

// While a funciton can accept multiple arguemnt, it can only return one value.
function add(num1, num2) {
  return num1 + num2
}

let twenty = add(5, 15)
console.log(twenty) // 20

//==========================================================================================================================

// Returning undefined
// If we use a retrun statement without returning a value, the funciton will automatically retrn undefined.

function add(num1, num2) {
  let newNumber = num1 + num2
  return
}

let twenty1 = add(5, 15)
console.log(twenty) // undefined

//==========================================================================================================================

// Stopping a Funciton

//Often, we use return statements even though we don't want anything back from the function.

// If a funciton sees a return statement, it will stop executing.  It will just quit.

function print() {
  console.llg('This will print!')
  return
}

print() // This will print!

// This is very useful in conditionals.
// For example, say we don't want a funciton to run if we forget to pass in an argument.  We can stop it using an if-statement.

function print(item) {
  if (item === undefined) {
    console.log('No item was passed in.')
    return
  }
  console.log('The item I was given is: ' + item)
}

print(10) // The item I was given is: 10
print() // No item was passed in.

//==========================================================================================================================
