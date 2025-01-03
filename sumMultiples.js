var a = 7;
var count = 0;
for (var i = 0; i <= a; i++) {
    if (i % 3 == 0 || i % 7 == 0 || i % 5 == 0) {
        count = count + i;
    }
}
console.log(count);
