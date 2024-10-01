var c = ("To make it more concise, we can define function with the return type never and").split(" ");
for (var i = 0; i < c.length; i++) {
    c.sort((a, b) => b.length - a.length)

}
console.log(c[c.length - 1].length)
for (var j = 0; j < c.length; j++) {
    if (c[j].length == c[c.length - 1].length) {
        console.log(c[j] + " ")
    }
}