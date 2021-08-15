//Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,etc and store them in an array
var array=new Array();
for(var i=0;i<100;i++)
{
    //Split the number
    var splittedval=i.toString().split("");
    //Check whether both characters are same
    if(splittedval[0]==splittedval[1])
    {
        array.push(i);
    }
}
process.stdout.write(`The Digit that are repeted twice : [ `)
array.forEach(value => {
    process.stdout.write(`${value},`);
});
process.stdout.write(`]`)