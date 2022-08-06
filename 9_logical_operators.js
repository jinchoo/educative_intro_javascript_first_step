// !

// the ! operator is called the 'not'-operator.  It does two things to a value: it coerces it to either true or false, and then give the oppoiste value.  Falsey values become true and truthy values become false.

// for example, !true will become false.  !0 will bcome true.  !'' will become true.  Think of this operator as saying 'This item is NOT true' or 'This item is NOT false'.

// Falsey vales become true
console.log(!false) // true
console.log(!'') // true
console.log(!0) // true
console.log(!null) // true
console.log(!undefined) // true
console.log(!NaN) // true

// Truthy vales become false
console.log(!true) // false
console.log(!1) // false
console.log(!'abc') // false
console.log(!99999) // false
console.log(!'ha*UIHJ') // false

// ! in if-statements
//We can use this if-statements.  If we want some code to run when something is falsey.

let falseyValue = false

if (!falseyValue) {
  console.log('This will run!')
} else {
  console.log('This will not run :(')
}

//==============================================================================================================================================

// ||

// The || operator is called the 'or'-operator.
// To use ||, we put an item on the left of it and another on the right.  It follows these rules:
// 1.  If both items are truthy, the whole thing will be truthy.
// 2.  If one is truthy and the other is falsey, the whole thing will be truthy.
// 3.  If both are falsey, the whole thing will be falsey.

// for example,
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false
console.log(true || true) // true

// a common use cse is if-statements.  We can use it in an if-statemtn when we want to code black to run if either one of the statements is 'truthy'.

let firstItem = true
let secondItem = false

if (firstItem || secondItem) {
  console.log('One or both of the items is truthy!')
} else {
  console.log('Neither of the items is truthy.')
}

// output: One or both of the items is truthy!

//==============================================================================================================================================

// &&

// The && operator is called the 'and'-operator.  To use it, we put an item on the left of it and another on the right.  It follows these rules:
// 1.  If both items are truthy, the whole thing will be truthy.
// 2.  If one is trughty and other is falsey, the whole thing will be falsey.
// 3.  If both are falsey, the whole thing will be falsey.

// for example,
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false
console.log(true && true) // true

// We use it in an if-statemnt when we want the code black to run only if both items are truthy.

let firstItem1 = true
let secondItem1 = false

if (firstItem1 && secondItem1) {
  console.log('Both items are truthy!')
} else {
  console.log('One or both of the items is falsey.')
}

// output: One or both of the items is falsey.

//==============================================================================================================================================

// combining operators

let firstItem2 = true
let secondItem2 = false

if (!firstItem2 && !secondItem2) {
  console.log('Both of the items are falsey.')
} else {
  console.log('One or both of these items is truthy.')
}

// output: one or both of these items is truthy.

//These operators aren't read form left to right.  There's an order to how the engine reads them.

//==============================================================================================================================================

// order of operators
// 1.  Not: !
// 2.  Logical AND: &&
// 3.  Logical OR: ||

// This means that
// !a || b && c

// is the same as
// !a || (b && c)

// Note that we can put pretty much any code inside parentheses.  The parenthese take precedence over all operator, meaning anything we group in parentheses will be evaluated first, just like in math.
