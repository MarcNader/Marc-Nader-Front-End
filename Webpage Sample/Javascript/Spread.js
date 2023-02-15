
// Spread Operator
// Takes a group, like for example an array and tries to spread
// The values of this array on something like a function parameters

// Example 

function SumOne(a,b){
    return a+b;
}

var sum=[4,5];

console.log(SumOne(4,5));      //works fine and prints 9

console.log(SumOne(sum));      // Doesn't work of course

console.log(SumOne(...sum));   //now the spread operator will spread the values of the array on the parameters
                                // so the func will get 4 and 5 as parameter and thus prints 9 !

console.log("------------------------------------------------------------------");

//-----------------------------------------------------------------------------------------------


// REST operator 


// Now notice, when we are not sure how many arguments the function would takes
// we simply use:  ...args      which is here the REST operator


// function SumTwo (...args){

//     console.log(args);

//    var sum=0;

//     for (const arg of args){
//         sum+=arg;
//     }

//     return sum;
 
// };

// console.log(SumTwo(5,5,5,5,5,5,5));


// Intersting CASE

// What if i want the first two or three values to be treated differently ?

// We then use this syntax  (a,b,c, ...args)

function SumTwo (a,b,c,...args){
    console.log(`values of array of args are ${args}`);

    var product=1;
    product= a*b*c;
   var sum=0;

    for (const arg of args){
        sum+=arg;
    }

    return [sum,product];
 
};

console.log(SumTwo(5,5,5,5,5,5,5));