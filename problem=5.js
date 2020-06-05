//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20

for (let i = 20; i < i + 1; i += 20) {
    var divisible = true;

    for (let j = 20; j > 0; j--) {
        if (i % j !== 0) {
            divisible = false;
            break;
        }
    }

    if (divisible) {
        console.log(i);
        break;
    }
}