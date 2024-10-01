var a = "balaji asfdee";
var count = 0;
for (var i = 0; i < a.length; i++) {
    switch (a[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            count = count + 1;
    }
}
console.log(count);
