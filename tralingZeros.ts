var Input= "3134411"
var SplitedArray = Input.split('')
console.log(Input)
for (let i = SplitedArray.length - 1; i >= 0; i--) {
    if (SplitedArray[i] === '1') {
        SplitedArray.pop()
    }
    else {
        break
    }
}
console.log(SplitedArray.join(''))