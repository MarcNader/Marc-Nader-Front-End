// Class

var mything = function (Name, Address){

    this.Name=Name;
    this.Address= Address;
    this.GetAddress= function(){
        console.log(`The name is ${this.Name} and the Address is ${this.Address}`);
    }
}

        var User1= new mything("Marc", "58 Street Bokharist");
        User1.GetAddress();
             
// Cannot do the following:

// User1.SetName("Samer");
        // User1.GetAddress();   
// because prototype is not hoist, it must first be define and then used !!

// mything.prototype.SetName= function (Name){
//         this.Name=Name;
// }

// User1.SetName("Karim");
// User1.GetAddress();

// Prototype own functions, very important
// This one: hasOwnProperty checks if the object has this specified property
// if (User1.hasOwnProperty("Age")){

//     console.log("it has the age property");
// }


// Objects

// var temp = {
//     Name:"",
//     Age:"", 

// };

// console.log(temp);
// var hitesh= Object.create(temp);
// console.log(hitesh);

// temp.Name="Marc";

// var marc = Object.getPrototypeOf(temp);
// console.log(marc);