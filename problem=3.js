//What is the largest prime factor of the numresulter 600851475143

var a = 600851475143;
var result = 0;

while (a !== 1) {
    for (var i = 2; i <= a; i++) {
        if (a % i === 0) {
            a /= i;
            if (i > result) {
                result = i;
            }
        }
    }
}

console.log(result);