// Functional Programming 

    // Introduction

    // var first = function(){console.log("HEY THERE");};

    // first();
    // first = function(){console.log("Oh dear, I CHANGED!");}
    // first();

    
    // 2.0 Self executing Anonymous Function (IIFE)

    // Now we remember the arrow function: () => {}
    // What's cool about it is that it calls itself, executes immediately 

    // Now this is how we define functions normally, but we need to call it first

    // function dosmth(){
    //     console.log("Hello");
    // }

    // dosmth();

    // Now, we can make it self executing by the following syntax

    // (function dosmth(){
    //     console.log("Hello");
    // }) ();

    // result: it prints hello immediately

     
    // 3.0 Functions closure

    // function Addition (x){

    //     console.log("HEYYYY");

        // Here we return a reference to the function, 
        // so downward Momen holds the reference to this function
        // so Momen(5) is the value of y. 

    //     return function (y){

    //         return y + 5;
    //     };

    // };

    // var Momen = Addition(5);
    //  console.log(Momen(5));  

//    Also you can do that: 

// Notice double brackets, first holds value x and the second the y
        // console.log(Addition(5)(5));