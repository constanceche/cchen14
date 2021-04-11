// Team Confusion - Alivin Wu and Constance Chen
// SoftDev
// K21: A RESTful Journey Skyward / Introduction to JS using factorials and fib sequence
// 2021-04-05

// Notable Notes
// - no print statements in JS, use console log + node to run in terminal quickly
// - notation, loops and recursion work very similarly to java ("JS is Scheme with Java syntax.”)
// - unlike java, code runs even without semicolon
// - use var x = y to initally define a variable

// returns factorial of n, computed iteratively
function factI (n) {
    for (x = n - 1; x > 0; x--){
        n = n * x;
    }
    return n;
}

// returns factorial of n, computed recursively
function factR (n) {
    if (n == 0){
        return 1;
    }
    else{
        return n * factR(n - 1);
    }
} 

// returns the nth Fibonacci number, computed iteratively
function fibI (n) {
    var first = 0; 
    var second = 1;
    var temp;
    while (n >= 0){
        temp = first;
        first += second;
        second = temp;
        n --;
    }
    return second; 
}

// returns the nth Fibonacci number, computed recursively
function fibR (n) {
    if (n == 0){
        return 0;
    }
    if (n <= 1){
        return 1;
    } 
    return (fibR(n - 1) + fibR(n - 2));
} 

// var n = 3;
// console.log(factI (n));
// console.log (factR (n));
// console.log (fibI (n));
// console.log (fibR (n));