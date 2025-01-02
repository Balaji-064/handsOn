let getInput = require('prompt-sync')
var InputString: string = "011101"
var count = 0;


var max=0
for (let i = 1; i < InputString.length; i++) {
    let leftSide = '';
    let rightSide = '';
    var rightcount=0
    var leftcount=0;
    if (0 < i) {
        leftSide = InputString.slice(0, i);
        console.log(leftSide)
        rightSide = InputString.slice(i, InputString.length)
        console.log(rightSide)
        for (let i = 0; i < rightSide.length; i++) {
            if (rightSide[i]== "1") {
                rightcount = rightcount + 1
            }
        }
    
        for (let i = 0; i < leftSide.length; i++) {
            if (leftSide[i] == "0") {
                leftcount = leftcount + 1
            }
        }
        var maxcount=leftcount+rightcount
        if(max<maxcount){
            max = maxcount
        }
        
    }
    
}
console.log(max)