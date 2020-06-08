//There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc

for (var a = 1; a < 1000; a++) {
    for (var b = 1; b < 1000; b++) {
        var c = 1000 - a - b;

        if (((Math.pow(a, 2)) + (Math.pow(b, 2)) === (Math.pow(c, 2))) &&
            (a + b + c === 1000)) {
            console.log(a * b * c);
            break;
        }
    }
}