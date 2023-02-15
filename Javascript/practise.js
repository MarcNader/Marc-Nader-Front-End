



// Steps to add element

// 1- Create element: createElement("element")
// 2- Create TextNode: createTextNode("Whatever you want here")
// 3- append TextNode to element
// 4- Don't forget you need to also append the element to the <body> 
// or whatever element you want, let it be: <p>, <li>, div or whatever.

// Creating an element

// Method create element does something like this:  <> </>
// and whatever i write inside it is what will be here: ex: <li> </>

// var body= document.querySelector(".hamada");

// var ref= document.createElement("p");

// var names=document.createTextNode("HELLOOOO");

// to add a class we use Classlist
// Classlist heya kol classes ely ana medeeha le element mo3ayan
// a2dar a add or remove we hagat keteer ba2a

// ref.classList.add("m-5");

// ref.appendChild(names);
// body.appendChild(ref);



// Hitesh example

const courses= [

    {
        Name:"React course",
        Price:"20",
    },


    {
        Name:"Complete Js course",
        Price: "10",
    },


    {
        Name:"React course",
        Price:"30",
    },

];

var ul= document.querySelector(".hamada");

function generateList (){
        
   var mybutton= ul.lastChild;
   ul.innerHTML="";
    //  IMPORTANT: this line resets the contents of ul, so when I do sorting 
                    // it doesn't duplicate the content
               
    courses.forEach((course) => {

        var li= document.createElement("li");
        var text= document.createTextNode(`${course.Name} Price: ${course.Price} $`);
        li.appendChild(text);
        ul.appendChild(li);
    })

    ul.appendChild(mybutton);
};

// generateList();

// Now a more effective way 

// HOW TO MAKE A FUNCTION RUN AUTOMOTAICALLY WHEN A PAGE LOADS !!!!!!!!!!!!!!!

window.addEventListener('load',generateList);

// NOW adding a SORTING BUTTON

const buttonMarc= document.createElement("button");
const buttontxt= document.createTextNode("Sort");
buttonMarc.appendChild(buttontxt);
ul.appendChild(buttonMarc);

buttonMarc.addEventListener("click", ()=> {

    courses.sort( (a,b)=> a.Price- b.Price);
    generateList();

});

// NOTE: now that in line 61 we reset the ul, so it also deletes the button I created..
// but if button was hard coded the above code would work perfectly :) 