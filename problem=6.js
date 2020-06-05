/* Find the difference between the sum of the squares of the first one hundred
natural numbers and the square of the sum */

var sumOfTheSquares = 0;
var squareOfTheSum = 0;

for (let i = 1; i <= 100; i++) {
    sumOfTheSquares += Math.pow(i, 2);
    squareOfTheSum += i;
}

squareOfTheSum = Math.pow(squareOfTheSum, 2);

console.log(squareOfTheSum - sumOfTheSquares);