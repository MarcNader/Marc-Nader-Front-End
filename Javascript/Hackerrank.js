
// var stringList = ["aba", "baba", "aba", "xzxb"];
// var queries=["aba", "xzxb","ab"];


// function matchingStrings(stringList, queries) {
//     // Write your code here

//     var count = new Array(queries.length).fill(0);
//     var Quer= queries;
//     console.log("HIII");
    
//     for (let x in Quer){
            
//             stringList.forEach(element => {
//                 if(element === Quer[x]){
//                     count[x]++;
//                 }
//             })
        
//     }
//     return count;
// }

// console.log(matchingStrings(stringList,queries));


// var a= [[5, 3, 4], [1, 5, 8], [6, 4, 2]];
// var temp= []
// var sum=0;

// Sum horizontal
// a.forEach(element => {
    
    // sum=element[0]+ element[1]+ element[2];
    // console.log(sum);
    // temp.push(sum);

// })

// Vertical
// sum=0;
// for (let i=0; i<a.length; i++){

//     for (let j=0; j<a.length; j++){

//         sum+=a[j][i]
//     }
//     temp.push(sum);
//     sum=0;

// }

// console.log(`After Vertical Sum ${temp}`);

// //diagonal 

//     sum=a[0][0]+a[1][1]+a[2][2];
//     temp.push(sum);

//     sum=a[0][2]+a[2][0];
//     temp.push(sum);

//     console.log(`this is the final array ${temp}`);

//     console.log(temp);
    
//     var dict ={
//     }

//     for (var x of temp){
//         if(x in dict){
//             dict[x]+=1;
//         }
//         else{
//             dict[x]=1;
//         }
//     }

    

//     console.log(dict);
//     var cont= Object.values(dict);
//     var max= Math.max(...cont);
//     console.log("Max is: " + max);
//     console.log("Number of occurences is " + max + " its key is => " + cont.indexOf(5));


// function breakingRecords(scores) {
//         var [mincount, maxcount]=[0,0];
//         var min=0;
//         var max=0;

//         var counters=[];
//         // console.log(min);
//     scores.forEach(element => {
//         // console.log(element);
//         if (mincount ==0 && maxcount ==0){
//             min=element;
//             max=element;
//             mincount++;
//             maxcount++;
//             console.log("Current min and max number respectively: "+ min + max +"\n" );

//         }
//         if (element < min){
//             min=element;
//             mincount++;
//             console.log("Current min number"+min + "\n");
//         }
//         if (element > max){
//             max=element;
//             maxcount++;
//             console.log("Current max number"+max +"\n");

//         }
//         console.log(`Max count is: ${maxcount} and Min count is: ${mincount}` + "\n");
//         console.log(`Max element is: ${max} and Min element is: ${min} \n`);


//     });

//     counters[0]=maxcount-1;
//     counters[1]=mincount-1;

//     return counters;


// }

// var sc=[10,9,20,15,51];

// var suit= breakingRecords(sc);

// console.log(suit);



// function birthday(sooo, d, m) {

//     var s=[1,2,1,3,2];
//     var sum=0;
//     var filtered= s.filter((num)=>{

//         return num<d;

//     })

    

//         for(let j=0;j<s.length;j++){

//             while(j<m){
//                 sum=s[i]+ s[j+1];
//                 j++;
//             }

//             if(sum===d){
//                 temp.push(sum);
//                 sum=0;
//                 i++;
//             }
//             else{
//                 sum=0;
//                 i++;
//             }


           
//         }

//     }



    // var s=[1,2,1,3,2];
    // var sum=0;
    // var d=3;
    // var m=2;
    // var divid=0;
    // var counter=0;
    
    //     for(let i=0; i<s.length;i++){


    //         for(let j=0;j<m;j++){
                
    //             sum=s[j]+ s[j+1];
    //             counter++;

    //             console.log("Current Sum: " + sum + "\n");

    //             if (counter==m){
    //                 if(sum===d){
    //                     divid++;
    //                     sum=0;
    //                     counter=0;
    //                 }
    //                 else{
    //                     sum=0;
    //                     counter=0;
    //                 }
    //             }
                
                
    //         }
                
                
    //         }

    //         for (let i=0; i<s.length;i++){

    //             for ( let j=0; j<s.length;j++){

    //                     sum+=s[i];
                        
                        
    //             }
    //             if(sum===d){
    //                 divid++;
    //                 sum=0;

    //             }

    //             else{ sum=0;}

    //         }
            
            

    // console.log("number of ways to divid: " + divid);


    // var arr = [1,3,2,6,1,2];
    // var n=6;
    // var k=3; 
    // var counter=0;

    // for(let i=0; i<n;i++){

    //     for (let j=i;j<n;j++){
    //         if (j<n){
    //         sum=arr[i] + arr[j+1]

    //         if((sum % k) == 0 ){
    //             counter++;
    //         }

    //         else {
    //             sum=0;
    //         }
    //     }

    //     }
    
    // }

    // console.log(counter);

    // var [s_House,t_house,apple_tree,orange_tree]=[7,11,5,15];
    // var apples=[-2, 2,1];
    // var oranges=[5,-6];

    // var [app_count,org_count]=[0,0];
    // var d=0;



    // function countApplesAndOranges(s, t, a, b, apples, oranges) {
       
    //     apples.forEach(element => {
    //         d=a+element;
    //         if (d >= s && d <= t){
    //             app_count++;
    //         }
    //     });

    //     oranges.forEach(element => {
    //         d= b+ element;
    //         if(d >= s && d<= t){
    //             org_count++;
    //         }
    //     });

    //     console.log(app_count);
    //     console.log(org_count);
    // }
    
    // countApplesAndOranges(s_House,t_house,apple_tree,orange_tree,apples,oranges);

    // var arr=[1,1,1,3,4,4,4,5,3];

    // function migratoryBirds(arr) {
    //     // Write your code here
    
    // }

    // var dict ={}
        
    //         for (var x of arr){
    //             if(x in dict){
    //                 dict[x]+=1;
    //             }

    //             else{
    //                 dict[x]=1;
    //             }

    //         }

            // var keys = Object.keys(dict);
            // console.log(typeof keys[0]); 
            // console.log(typeof arr); 

        //     var max=0;
        //     var key = []
        //     keys.forEach(element => {

        //         key.push(parseInt(element));

        //     });

        //     console.log(key);
        //         var parsed=0;
        //     console.log(dict);
        //   var num=0;
        //     for ( let i=0; i<key.length;i++){
           
        //        num=key[i];
        //        parsed=parseInt(dict[num]);

        //         if(parsed > max){
        //             max_return= num;
        //             max=parsed;
                   
        //             console.log("max is:" + max);
        //         }

        //     }

        //     console.log(max_return);


        // var arr=[1,5,8,4,2,2,6,10,15,6];
        // var arr= [4,5,4,5,97,97,97];
        // var arr=[66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66 ,66]
// var dict ={}
        // console.log(arr);
// for (var x of arr){
//     if(x in dict){
//         dict[x]+=1;
//     }

//     else{
//         dict[x]=1;
//     }

// }

// var keys = Object.keys(dict);
// var temp=[];
// console.log(keys);

// console.log("Key length => "+ keys.length);

// for (let i=0; i<keys.length; i++){
    
//     if(keys.length !=1){
//         for(let j=i; j<keys.length; j++){

//             if( Math.abs(keys[i] - keys[j+1]) <= 1){
//                 temp.push([keys[i],keys[j+1]]);

//             }

//         }
//         console.log("Printed temp before else => "+ temp);
//     }
//     else{   
//         if(keys[0][0]){
//             temp.push(keys[0][0]);
//             console.log("current temp value => " + temp);


//         }
//         else{
//             temp.push(keys[0]);
//             console.log("current temp value => " + temp);
//         }
       
//     }
   
//  }
 

//  console.log(temp);
// var [sum,max]=[0,0];

// for (let i=0; i<temp.length;i++){
    
//     if(temp[0][0]){
//     if (temp.length != 1 ){
//             temp[i].forEach(element => {
//                     sum+= dict[element];
//                     // console.log("current element count => " + element);
//                     // console.log(`Current sum => ${sum}`);
//                     if(sum > max){
//                         max=sum;
                  
//                     }      
//             });

//             sum=0;
            

//         }
//     }
//         else {
//             max=dict[temp];
//             console.log("current max => " + max);
//             sum=0;
//         }
//     }
    

//  console.log(max);



// var Dict = {
//     "1": 31,
//     "2": 28,
//     "3": 30,
//     "4": 31,
//     "5": 30,
//     "6": 31,
//     "7": 31,
//     "8": 31,
//     "9": 30,
//     "10": 31,
//     "11": 30,
//     "12": 31,
// }
//  var range=256;
//  var sum=0;
//  var [month,count,day,year]=[0,0,0,1918];
 
//     for (let days in Dict){

//         if ( year >=1700 && year <=1917){
//             if(year%4==0){
//                 Dict[2]= 29;
//             }
//         }
      
//         if (year%400==0 || (year%4==0 && year%100!=0 )){
//             Dict[2]= 29;
//         }
//         if (sum + Dict[days] < range){
//         sum+=Dict[days];
//         count++;
//         }
//         else {
//             if(year === 1918){
//                 month= count + 1; 
//                 day=range-sum;
//                 day+=13;
//             }
//             else{ month= count + 1; 
            
//                 day=range-sum;}
           
//         }
        
//     }   

    

//     var ret = `${day}.0${month}.${year}`;
//     console.log(ret);
//     if(month < 10){
//     console.log(`${day}.0${month}.${year}`);
     
//     }
//     else{ console.log(`${day}.${month}.${year}`);}
   
    
//     //  console.log("Month is => " + month + " Day: " + day);

           
//           console.log(1800%100);

          

    
// var ranked = [100,100,90,90,80,75,60];
// var sorted_rank=ranked.sort(function(a, b){return a - b});
// sorted_rank=sorted_rank.reverse();
// console.log(sorted_rank);
// var player = [50,65,77,90,102];

// var filtered= ranked.filter((item,index)=> {

//      return   ranked.indexOf(item)===index;

// })
// console.log("Filtered Array:" + filtered);
// console.log("Player Array:" + player);


// console.log("Filtered array " + filtered);

// var rank=[];

// console.log(player[4]);

// console.log("Array length " + ranked.length);

// for (let j=0; j<player.length;j++){
    
//     for(let i=(filtered.length-1); i>=0;i--){
        
//         if(!(player[j] > filtered[i])){
            
          

//             if(player[j] == filtered[i]){
//                 rank.push(i+1);
//             // console.log("They are equal and Current rank => " + filtered[i] + " Current Player => " + player[j]);
//                 break;
//             }
//             rank.push(i+2);

//             // console.log("Current rank => " + filtered[i] + " Current Player => " + player[j]);
//             break;
//         }
//             else if (player[j] > filtered[0]){
//                 rank.push(1);
                
//                 // console.log("Current rank => " + filtered[i] + " Current Player => " + player[j]);
//                 break;
//             }

     
//     }
    

// }




// -------------------------------------------------------------------------------------------------//

// var bill = [3,10,2,9];
// var sum=0;
// var index=1;

// function bonAppetit(bill, k, b) {
    
//     bill.forEach(element => {
//         if (element != bill[k]){
//             sum+=element;
//     console.log("Current Sum => " + sum);

//         }
//         else {
//             bill[k]=0;
//         }
//     });


//     var temp = sum/2
//     paid= b-temp;

//     if (paid <=0) {
//         console.log("Bon Appetit");
//     }   

//     else{
//         console.log(paid);
//     }

// }

// bonAppetit(bill,1,6);


// -------------------------------------------------------------------------------------------------//


var grid = [".......", "...O..." ,"....O..", ".......", " OO.....","OO....."];


var counter=5;
var text=[];
var indices=[];
var word = "";

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
};




// Every two seconds: FILL




// Every three seconds: BOOM


var n=2;

// if(grid[1][8]==undefined){
//     console.log("fuck");
// }

for(var i=1; i<=counter;i++){
    

    if(i%2==0){

        console.log("Current Fill text and index at =>" + i);
        for (let i=0; i<grid.length;i++){
    
            for (let j=0; j<grid.length; j++){
                word=grid[i][j];
                
                if(word=== "O"){
                    
                    indices.push([i,j]);
                    
                }
                
            }
            text[i]= grid[i].replace(/./g,"O");
            
        }
        console.log(text);

    }
    
    if(i==3|| i==5 || ((i-2)%3==0)){

        if(i-2 != 0){

            console.log("Current Boom Grid and index at => " + i);
        for (let i=0; i<indices.length;i++){
            
            var [first,second]=indices[i];
            
            if(text[first][second]=="O"){
                text[first]= setCharAt(text[first],second,".");
            
                if(text[first-1] != undefined){
                    text[first-1]= setCharAt(text[first-1],second,".");
                    
                }

                
                if(text[first+1] != undefined){
                    text[first+1]= setCharAt(text[first+1],second,".");
                    
                }

                
                if(text[first][second-1] != undefined){
                    text[first]= setCharAt(text[first],second-1,".");
                    
                }

                if(text[first][second+1] != undefined){
                    text[first]= setCharAt(text[first],second+1,".");
                    
                }

            }

            
        }
        grid=text;
        console.log(grid);
        
       

    }
   

    }

}
    
// function bomberMan(n, grid) {
//     // Write your code here

// }

var hamada =10;

// function marc (){

//     var hamada=20;
//     console.log(hamada);
// }

// marc();

// addEventListener
for(let t=0; i<=0;i++){
   let hamada=20;
   console.log( hamada);
}
    
for(){

    element[3]
}


console.log(t);
console.log(hamada);