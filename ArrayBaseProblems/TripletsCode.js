//Write a Program to show Sum of three Integer adds to ZERO
var prompt = require("prompt-sync")();
console.log("Enter the size of array : ");
var num=parseInt(prompt());
var array=new Array();
console.log("Enter the values : ")
for(var i=0;i<num;i++)
{
    array[i]=parseInt(prompt());
}
let flag=1;
for (let i = 0; i <array.length-2 ; i++) 
{
    for (let j = i+1; j <array.length-1 ; j++) 
    {
        for (let l = j+1; l <array.length ; l++) 
        {
            if(array[i]+array[j]+array[l]==0){
                console.log("Found 3 elements whose sum is 0");
                console.log("Elements are: " + array[i] + " " + array[j]+ " " + array[l]);
                flag=0;
            }
        }
    }
}
if(flag==1)
console.log("Did not find 3 elements whose sum is 0");