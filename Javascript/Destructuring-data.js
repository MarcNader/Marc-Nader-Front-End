
var course= ["English", "Arabic", "Lolita"];

var [eng,arab,lol]=course;


console.log(arab);     // Simply prints Arabic

const User={

    Name: "Marc",
    Coursecount:5,
    role:"admin",
};

// Notice in order for deferencing objects to work, the names inside the {} must match the ones inside User 
// Ex: if we attempt to write name instead of Name, it will give an error "undefined"
// Unlike the case above with arrays

var {Name,Coursecount,role}=User;

console.log(Name);
