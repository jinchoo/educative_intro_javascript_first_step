//Different Variable Types

let string1 = 'Hello '
let string2 = 'World!'
console.log(string1 + string2) // Hello World!

//String addition just joins the string together into a new, larger string.

//NaN
let string3 = 'Hello '
let string4 = 'World!'

console.log(string3 - string4) // NaN
console.log(string3 * string4) // NaN
console.log(string3 / string4) // NaN
console.log(string3 % string4) // NaN

// NaN is technically a number type variable, but it stands for Not-a-Number.
// It's meant to show us that we messed up our math and attempted to perform some nonsensical operaton.

//==============================================================================================================================================

//Type Coercion

console.log(undefined - null) // NaN
console.log('abc' * undefined) // NaN
console.log(9 % null) // NaN
console.log(null + 4) // 4

//Notice that the last line above logged 4.  We're adding null, something that is not a number type, to a number.  We get 4 back.

//When we to use different types in an opertiion, JavaScirpt willd i ts best to get us a real value.  It will try to get us soemthing that is not NaN.
//If it thinks it can safely convert something to anohter type and then perform its operaiton, it'll do so.  This is called type coercion.

//In this case, it convers null to 0.  Then it adds 0 to 4.

//More Exampel:

console.log(ull - 7) // -7
console.log('abc' + null) // abcnull
console.log(20 + 'abc') // 20abc
console.log(9 + true) // 10

// Here are the conversions in each of the lines above.

// 1.  null -> 0 (null -> number)
// 2. null -> 'null' (null -> string)
// 3. 20 -> '20' (number -> string)
// 4. true -> (boolean -> number)
