
class Admin {

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    login(){
        return "you are logged in!"
    }

    getInfo(){
       
        
            return [this.name, this.email];
        }
    
        Enroll(name){
            this.#courseList.push(name);
    
        }
        getCourseList(){
            return this.#courseList;
        }

}

class Sub extends Admin {
    getAdminInfo(){
        return "i am subadmin"
    }
}

