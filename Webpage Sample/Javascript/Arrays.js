
var mynum= [23,24,55,66,77,87,98];

// const result= mynum.filter((number) => number!=55 );  //creates a new array based on a condition in the function


// mynum.filter 
// console.log(result);

// array.slice takes a value out
// Array.splice replaces value(s) with other value(s)
//  Notice: Array.splice(1,2)  1 here is the index of the number and two is the counter !! 
//  so it will take the ones with index 1 anddd 2. 

// mynum.splice(1,1, 5,6,7,8);
// console.log(mynum);



// FOR EACH


// const user = {

//     listofbooks:[],
    // listofbooks.array.forEach(element => {
                                                            // FOR EACH !! to do something for each element 
                                                            // AUTOMATICALLY !!
    // });
//     Buybooks: function (book) {

//         this.listofbooks.push(book);
//     }

// }

// user.name="Marc";

// console.log('Username is ' + user.name);
// user.Buybooks("Harry potter");
// console.log("User is enrolled in the following courses => " + user.listofbooks );

// user.Buybooks("Harry potter");
// console.log("User is enrolled in the following courses => " + user.listofbooks );

// user.Buybooks("Harry potter");
// console.log("User is enrolled in the following courses => " + user.listofbooks );





// FOR OF VS FOR IN 

// FOR OF: for arrays
// FOR IN: for objects

// Example:  FOR OF

var list=["Marc", "Nader", "Maher"];

for (const name of list){
    console.log(name);
}

// Example: FOR IN

const user = {

    Name:"Marc",
    Age: 21,
    height: "175 cm"

}

for (const e in user){
    console.log(user[e]);
}





    

    
    





  
