/* Which starting number, under one million, produces the longest chain
n → n/2 (n is even)
n → 3n + 1 (n is odd) */

var result = 0;
var chainSize = 0;

for (var i = 2; i < 1000000; i++) {
    var cont = 1;
    var j = i;

    while (j !== 1) {
        if (j % 2 === 0) {
            j /= 2;
        } else {
            j = j * 3 + 1;
        }

        cont++;
    }

    if (cont > chainSize) {
        chainSize = cont;
        result = i;
    }
}

console.log(result);