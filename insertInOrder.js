var a = [3, 5, 7, 9];
var target = 10;
for (var i = 0; i < a.length; i++) {
    if (a[i] == target) {
        console.log(i);
    }
    else if (target < a[i]) {
        console.log(i);
    }
}
if (target > a[a.length - 1]) {
    console.log(a.length);
}
