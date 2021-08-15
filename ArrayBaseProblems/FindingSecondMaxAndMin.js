//Finding Second largest and second smallest number in an array without sorting 
const arrayWithNumbers = [];
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 899) + 100;
    arrayWithNumbers[i] = randomNumber;
}
console.log("Values in array are : \n-------------------------------");
arrayWithNumbers.forEach(value => {
    process.stdout.write(`${value},`);
});

let max1 = max2 = 99;
let min1 = min2 = 1000;

for (let i = 0; i < arrayWithNumbers.length; i++) {
    if (arrayWithNumbers[i] > max1) {
        //if we get a new max then send new max to max1 and old max1 to max2
        max2 = max1;
        max1 = arrayWithNumbers[i];
    }
    else if (arrayWithNumbers[i] > max2 && arrayWithNumbers[i] < max1) {
        //if we not get new max then checking for max2
        max2 = arrayWithNumbers[i];
    }
    if (arrayWithNumbers[i] < min1) {
        min2 = min1;
        min1 = arrayWithNumbers[i];
    }
    else if (arrayWithNumbers[i] < min2 && arrayWithNumbers[i] > min1) {
        min2 = arrayWithNumbers[i];
    }
}
console.log(`\n------------------------------\nThe second Highest : ${max2}\nThe second smallest : ${min2}\n`);