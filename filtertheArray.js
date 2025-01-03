var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a = [1, 3, 4, 9, 5];
var b = [2, 10, 9, 6];
a = b.reduce(function (acc, ele) {
    if (acc.indexOf(ele) === -1) {
        acc.push(ele);
    }
    return acc;
}, __spreadArray([], a, true));
var c = a.sort(function (a, b) { return a - b; });
// let d=b.sort((a,b)=>a-b)
// console.log(c)
// let e=c.concat(d)
// let f=e.sort((x,y)=>x-y)
// console.log(f)
// let arr=f.filter((item, index) => arr.indexOf(item) !== index)
console.log(c);
