//What is the 10001st prime number?

var index = 0;

for (let i = 2; i < i+1; i++) {
    var prime = true;

    for (let j = 1; j <= i; j++) {
        if (j !== 1 && i !== j) {
            if (i % j === 0) {
                prime = false;
            }
        }
    }

    if (prime) {
        index++;

        if (index === 10001) {
            console.log(i);
            break;
        }
    }
}