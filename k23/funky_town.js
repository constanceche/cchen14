// Team SOCC :: Stella Oh + Constance Chen
//  SoftDev pd0
//  K23 -- Basic functions in JavaScript
//  2021-04-15r

//CARRY OVER YOUR BEST JS fxns here

// factI(n) returns factorial of n, computed iteratively
var factI = function (n) {
    var total = 1; // set default total to 1
    for (var i = 2; i <= n; i++) { // loop from 2 to n inclusive, no loop if n <= 1
        total *= i;
     } // multiply total by each value of i
    return total;
}

console.log("-- Iterative Factorial Test --");
console.log(factI(-1) + " should be 1");
console.log(factI(0) + " should be 1");
console.log(factI(1) + " should be 1");
console.log(factI(2) + " should be 2");
console.log(factI(3) + " should be 6");
console.log(factI(7) + " should be 5040");
console.log("\n");

// returns factorial of n, computed recursively
var factR = function(n) {
    if (n < 2) {
        return 1;
    }
    else {
        return n * factR(n - 1);
    }
}

console.log("-- Recursive Factorial Test --");
console.log(factR(-1) + " should be 1");
console.log(factR(0) + " should be 1");
console.log(factR(1) + " should be 1");
console.log(factR(2) + " should be 2");
console.log(factR(3) + " should be 6");
console.log(factR(7) + " should be 5040");
console.log("\n");

// returns the nth Fibonacci number, computed iteratively
var fibI = function(n) {
    var first = 0;
    var second = 1;
    var temp;
    while (n >= 0) {
        temp = first;
        first += second;
        second = temp;
        n--;
    }
    return second;
}

console.log("-- Iterative Fibonacci Sequence Test --");
console.log(fibI(0) + " should be 0");
console.log(fibI(1) + " should be 1");
console.log(fibI(2) + " should be 1");
console.log(fibI(3) + " should be 2");
console.log(fibI(4) + " should be 3");
console.log("\n");

// returns the nth Fibonacci number, computed recursively
var fibR = function(n) {
    if (n == 0) {
        return 0;
    }
    if (n <= 1) {
        return 1;
    }
    return (fibR(n - 1) + fibR(n - 2));
}

console.log("-- Recursive Fibonacci Sequence Test --");
console.log(fibR(0) + " should be 0");
console.log(fibR(1) + " should be 1");
console.log(fibR(2) + " should be 1");
console.log(fibR(3) + " should be 2");
console.log(fibR(4) + " should be 3");
console.log("\n");

//Develop, then implement gcd(a,b), which returns the greatest common divisor of a and b.

var gcd = function(a, b) {
    if (a >= b) { // finds the smaller integer between a and b
        n = b;
    }
    else {
        n = a;
    }
    var divisor = n
    if (divisor < 1){ // if divisor is 0, the gcd will be 0
        return 0
    }
    for (x = n; x > 0; x--) { // starts at divisor and subtracts one until a GCD is found or the number reaches one
        if (a % x == 0 && b % x == 0) {
            divisor = x;
            return divisor; // if both a and b are divisible by the divisor, the divisor is returned
        }
    }
}

console.log("-- Greatest Common Divisor Test --");
console.log(gcd(32, 24) + " should be 8");
console.log(gcd(3, 13) + " should be 1");
console.log(gcd(0, 5) + " should be 0");
console.log(gcd(3, 15) + " should be 3");
console.log(gcd(4, 4) + " should be 4");
console.log("\n");

//Develop, then implement randomStudent(), which returns a randomly selected name from a list.

var names = ["sam","max","alex"] // creates list of students
var randomStudent = function(){
    x = Math.floor(Math.random() * names.length); // multiplies a random number from 0 to 1 by the length of the list
    return names[x]; // returns xth name in list
}

console.log("-- Random Student Test --");
console.log(randomStudent()); 
console.log("\n");

