      // BORROWING METHODS !!

        // USING Bind 

        // Notice: the keyword "this" referes to the Marc object !

        var Marc = {

            FirstName:"Marc",
            LastName: "Nader",
            Age: 15,
            GetInfo: function(){

                console.log(`
                First name is ${this.FirstName}
                and last name is ${this.LastName} and his age is 
                ${this.Age}
                `);
            }

        }

        
        var Nader = {

            FirstName:"Nader",
            LastName: "Maher",
            Age: 21,
        }

          // Now GetInfo func doesn't exist in Nader object but i want to use it.

        //   So I want the "This" keyword to reference the Nader object. 
        // I can do so using bind.

        // Now notice one thing, bind gives me a reference and then I have to call that reference ()

        // But another way is to directly use Call

        // First using Bind

        // Two Ways to implement it

        // First way:

        Marc.GetInfo.bind(Nader)();

        // Second way:

        var NaderInfo = Marc.GetInfo.bind(Nader);
        NaderInfo();


        // Now using Call notice the syntax

        Marc.GetInfo.call(Nader);

        // we didn't need to add () adter (Nader) because 
        // call obviously already calls the function

        // So we can conclude that bind is helpful when we want a reference to something.