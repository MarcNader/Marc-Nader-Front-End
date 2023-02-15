
//  To make a dictionary that holds num of occurences of each num
// In an array

var arr=[1,1,1,3,4,4,4,5,3];
var dict ={}
        
for (var x of arr){
    if(x in dict){
        dict[x]+=1;
    }

    else{
        dict[x]=1;
    }

}

//  TO GET THE KEYS OF THE DICTIONARY AND PUT IN ARRARY

// var keys = Object.keys(dict);

 
//  LOOP OVER THE ELEMENTS OF THE DICTIONARY

// var parsed=0;
// var num=0;
// for ( let i=0; i<keys.length;i++){
           
    //        num=key[i];     Holds the key
    //        parsed=parseInt(dict[num]);  holds the value corresponding to the key, 
                                        // HERE I ALSO PARSED IT TO BE INTEGER

    //         if(parsed > max){
    //             max_return= num;
    //             max=parsed;
               
    //             console.log("max is:" + max);
    //         }

    //     }