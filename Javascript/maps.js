
var myMap= new Map();

myMap.set(0,"uno");
myMap.set(1,"dos");
myMap.set(2,"tres");
myMap.set(3,"quatro");

console.log(myMap);

// looping through keys

for (let key of myMap.keys())
{
     
    console.log(`Key is ${key}`);
    
}

// looping through values

for (let value of myMap.values())
{
     
    console.log(`Value is ${value}`);
    
}

// Looping through both !!! IMPORTANT 

for (let [key,value] of myMap)
{
     
    console.log(`Key is ${key} and Value is ${value} `);
    
}


// NOW FOCUS !! 

// Now we concluded that when using for of, map gives first the Key and then the Value

// Notice what happens when we use FOREACH !!!!!! 


myMap.forEach((key)=> {
    console.log(key);
// It prints the values!!, because it thinks that what we want !! 
})

myMap.forEach((value, key)=>{

    console.log(`The value is ${value} and its key is ${key}`);
})


