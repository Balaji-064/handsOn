var InputArray = [1, 2, 3, 4];
var keyValue = 3;
var count = 0;
var SortedValue = InputArray.sort(function (x, y) { return y - x; });
var countvariable = SortedValue[0];
for (var i = 0; i < keyValue; i++) {
    count = count + SortedValue[0];
    SortedValue[0] = SortedValue[0] + 1;
}
console.log(count);
