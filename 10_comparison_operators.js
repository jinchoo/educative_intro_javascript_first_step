// < | >

// These two operators are used to compare the value of numbers.  They result i true or false and are often used in if-statements.  > means greater than and < means less than.

if (10 > 5) {
  console.log('Condition is true!')
} else {
  console.log('Condition is false.')
}

// output: Condition is true!

if (10 < 5) {
  console.log('Condition is true!')
} else {
  console.log('Condition is false.')
}

// output: Condition is false.

//==============================================================================================================================================

// <= | >=

// These mean 'less than or equal to' and greater than or equal to. respectively.

if (10 >= 5) {
  console.log('Condition is true!')
} else {
  console.log('Condition is false.')
}

if (5 >= 5) {
  console.log('Condition is true!')
} else {
  console.log('Condition is false.')
}

// output: Condition is true!
// output: Condition is true!

if (5 <= 10) {
  console.log('condition is true!')
} else {
  console.log('condition is false.')
}

if (5 <= 5) {
  console.log('Condition is true!')
} else {
  console.log('Condition is false.')
}

// output: Condition is true!
// output: Condition is true!

//==============================================================================================================================================

// == | ===

// These two are used to check if items are equal to each other.

// ===

// This operator checks if two items are the same.  It results in true if the items are identical and false if they are not.

// for example,
console.log(4 === 4) // true
console.log('abc' === 'abc') // true
console.log(false === false) // true
console.log(17 === '17') // false

// ==

// the double-equla is similar.  It iwll do the same thing as the tripe equal, but has an extra 'feature'.

// If we try to compare ttwo vales of different types (for exaample, a number and a string), the double-equal will attempt to coerce the values to be the same type.  One or both values may be coerced.

// After if attempts coercion, it will return true or false.

console.log(4 == '4') // true
console.log(true == 1) // true
console.log(false == 0) // true
console.log('' == false) // true

// The double-equal sign is symmetric.  That is, if a == b is true, then b == a is also true, for all values a and b.

//=============================================================================================================================================

// Always Use ===

// We rarely ever want to check if two values can be coerced to the same thing.  Situations like that don't appear often.  We almost always want to make sure two values are exactly equal.

// This is whay it's a common best practice to always use the triple-equal.

//==============================================================================================================================================

// !== | !==

// These two operators are similar to == and ===.  they do the same thing, except they return the opposite value.

// 1. Where == returns true, != returns false
// 2. Where == returns false, != returns true
// 3. Where === returns true, !== returns false
// 4. Where === returns flase, !== returns true

// We should always use !== over !=.  These are used in if-statments frequently.
