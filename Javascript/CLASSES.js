
 class User{

    constructor(name,email){
        this.name=name;
        this.email=email;
    }
     #courseList=[]; // # symbol makes the parameter Private.

    getInfo (){
        
        return [this.name, this.email];
    }

    Enroll(name){
        this.#courseList.push(name);

    }
    getCourseList(){
        return this.#courseList;
    }
};

module.exports=User;

const rock = new User("rock","rock@gmail.com");
rock.Enroll("angular");
console.log(rock.getCourseList());

// This one gives undefined because i cannot access courseList directly because it is private
console.log(rock.courseList);


    