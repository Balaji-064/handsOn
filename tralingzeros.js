var a = "3134411";
var b = a.split('');
console.log(a);
for (var i = b.length - 1; i >= 0; i--) {
    if (b[i] === '1') {
        b.pop();
    }
    else {
        break;
    }
}
console.log(b.join(''));
