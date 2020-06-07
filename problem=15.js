//How many such routes are there through a 20×20 grid.
//Only being able to move to the right and down

for (var i = 1, j = 1; i <= 20; i++)
    j = j * (20 + i) / i;

console.log(j);