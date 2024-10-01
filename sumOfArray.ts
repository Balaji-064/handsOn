let a: number[] = [1, 2, 3]
let b: number[] = [3, 4, 5, 8]
let sum: number[] = []
for (var i = 0; i < (a.length > b.length ? a.length : b.length); i++) {
    sum[i] = (a[i] || 0) + (b[i] || 0)

}
console.log(sum);