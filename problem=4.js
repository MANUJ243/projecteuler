//Find the largest palindrome made from the product of two 3-digit numbers
var result = 0;
var product = 0;

for (var i = 100; i < 1000; i++) {
    for (var j = 100; j < 1000; j++) {
        product = i * j;
        var productAux = product.toString();
        var palindrome = true;

        for (var k = 0; k < productAux.length; k++) {
            if (productAux[k] !== productAux[productAux.length - (k + 1)]) {
                palindrome = false;
            }
        }

        if (palindrome && product > result) {
            result = product;
        }
    }
}

console.log(result);