var getInput = require('prompt-sync');
var InputString = "011101";
var count = 0;
var max = 0;
for (var i = 1; i < InputString.length; i++) {
    var leftSide = '';
    var rightSide = '';
    var rightcount = 0;
    var leftcount = 0;
    if (0 < i) {
        leftSide = InputString.slice(0, i);
        console.log(leftSide);
        rightSide = InputString.slice(i, InputString.length);
        console.log(rightSide);
        for (var i_1 = 0; i_1 < rightSide.length; i_1++) {
            if (rightSide[i_1] == "1") {
                rightcount = rightcount + 1;
            }
        }
        for (var i_2 = 0; i_2 < leftSide.length; i_2++) {
            if (leftSide[i_2] == "0") {
                leftcount = leftcount + 1;
            }
        }
        var maxcount = leftcount + rightcount;
        if (max < maxcount) {
            max = maxcount;
        }
    }
}
console.log(max);
