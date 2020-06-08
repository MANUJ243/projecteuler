//Evaluate the sum of all the amicable numbers under 10000
var sum = 0;

for (let i = 1; i < 10000; i++) {
    var di = 0;
    var dj = 0;

    for (let j = 1; j <= i / 2; j++) {
        if (i % j === 0) {
            di += j;
        }
    }

    if (i !== di) {
        for (let j = 1; j <= di / 2; j++) {
            if (di % j === 0) {
                dj += j;
            }
        }

        if (i === dj) {
            sum += i;
        }
    }
}

console.log(sum);