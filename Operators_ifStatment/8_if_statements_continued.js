//"Truthy" and "Falsy"

// If-statements don't work only with booleans.  We can use any variable type inside the if-statment parentheses.
// If we don't use tre or false variables, JavaScript will forcibly coerce whatever we put inside the parentheses to true or false.  It'll then decide whether to run the code or not.

//A value that coerces to true is referred to as "truthy".  ON that coerces to false is "falsey".

//The following values are 'falsey' and will coerce to false, meaning the code in the if-statemtn won't run.

// false
// 0
// '' or ""(empty, 0-length string)
// null
// undefined
// NaN

//All other values are truth.  This means that all numbers expect 0 and NaN and all strings that are not empty are truthy.

let itemToTest = true

if (itemToTest) {
  console.log(itemToTest + ' is truthy!')
} else {
  console.log(itemToTest + ' is falsey.')
}

//==============================================================================================================================================

//No brackets

//We canwrite an if-statment without the curly brackets {}. Let's say we want to run a single line of code if some conditon is true.

let trueFlag = true
if (trueFlag) console.log('This will print!')

//We can do the same ting with the else-black.

let flaseFlag = false

if (falseFlag) console.log('This will not print. ')
else console.log('This will print!')

//This happens because the if-statemtn technically only runs the next time it sees.  If we write code in a black using {}, that entire block is the item.

// if we write code without brackets, the statmetn will run only the next line of code it sees.

//==============================================================================================================================================

//Chaining else-blacks

//The else-balck only runs the next item it sees after the condition, the following three code blacks are equivalent.  All we're doing as we go down is remvoing brackets.

let flag1 = false
let flag2 = false
let flag3 = true

if (flag1) {
  console.log('This will not print. ')
} else {
  if (flag2) {
    console.log('This will not print either. ')
  } else {
    if (flag3) {
      console.log('This will print!')
    }
  }
}

let flag4 = false
let flag5 = false
let flag6 = true

if (flag4) {
  console.log('This iwll not print. ')
} else if (flag5) {
  console.log('This will not print either. ')
} else if (flag3) {
  console.log('This will print!')
}

let flag7 = false
let flag8 = false
let flag9 = true

if (flag7) console.log('This will not print. ')
else if (flag8) console.log('This will not print either. ')
else if (flag9) console.log('This will print!')

//  '', 0, null, and NaN are all falsey.  Everything else is truthy.

if ('') console.log('A')
else if (null) console.log('B')
console.log('C')

if (5 - 100) console.log('D')
else console.log('E')
console.log('F')
