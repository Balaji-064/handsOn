var Inputarray: number = 7;
let count = 0;
for (let i = 0; i <= Inputarray; i++) {
    if (i % 3 == 0 || i % 7 == 0 || i % 5 == 0) {
        count = count + i;
    }
}
console.log(count)
