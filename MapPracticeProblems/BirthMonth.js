//
let count = 1;
var birthMap=new Map();
while(count != 51)
{
    let month=Math.floor(Math.random()* 12) +1;
    console.log("Individual :"+count+"\tMonth is: "+month);
    individualsArray=new Array();
    if(birthMap.has(month))
    {
        individualsArray=birthMap.get(month);
    }
    individualsArray.push(count);
    birthMap.set(month,individualsArray);
    count++;
}
//These are individual having same birdthday month
console.log("\nThese are individual having same birdthday month");
for(let [key,value] of birthMap.entries())
{
    console.log(`Month : ${key}\tIndividual : [${value}]`);
}