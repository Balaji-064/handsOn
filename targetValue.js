var a = [3, 4, 5, 6];
var target = 8;
for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
        var c = a[i] + a[j];
        if (c === target) {
            console.log(i, j);
        }
    }
}
