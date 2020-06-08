//Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued

var result = 0;
var a = 1, b = 1, c = 0;

while (b < 4000000) {
    if (b % 2 === 0) {
        result += b;
    }

    c = b;
    b = a + b;
    a = c;
}

console.log(result);