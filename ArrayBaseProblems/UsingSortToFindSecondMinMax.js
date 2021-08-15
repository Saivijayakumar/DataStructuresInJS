//Finding Second largest and second smallest number in an array with sorting 
var arrayWithNumbers = [];
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 899) + 100;
    arrayWithNumbers[i] = randomNumber;
}
console.log("Values in array are : \n-------------------------------");
arrayWithNumbers.forEach(value => {
    process.stdout.write(`${value},`);
});
arrayWithNumbers.sort(function(a,b){return a-b});
console.log(`\n------------------------------\nThe second Highest : ${arrayWithNumbers[8]}\nThe second smallest : ${arrayWithNumbers[1]}\n`);