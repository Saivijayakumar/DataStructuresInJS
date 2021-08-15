//Roll a die and store the result in map untill any option reach to 10
let count = max = 1;
let min = 11;
let finalMax = finalMin = endPoint = 0;
let diemap = new Map();
while (endPoint < 10) {
    let randomNumber = RollADie();
    if (diemap.has(randomNumber)) {
        //increment the value in that particular key
        count = diemap.get(randomNumber) + 1;
    }
    //When the key same get here it will update that key
    diemap.set(randomNumber, count);
    //If we get a new count then we update the endpoint
    if (count > endPoint)
        endPoint = count;
}

for ([key, value] of diemap.entries()) {
    if (value > max) {
        max = value;
        finalMax = key;
    }
    if (value < min) {
        min = value;
        finalMin = key;
    }
}

let result = diemap;
console.log(`\nThe map contains These values`);
console.log(result);
console.log(`This Number is Rolled Minimum times : ${finalMin} \nThis Number is Rolled Maximum times : ${finalMax}`);

function RollADie() {
    let randomvalue = Math.floor(Math.random() * 6) + 1;
    console.log("The Die Result is : " + randomvalue);
    return randomvalue;
}