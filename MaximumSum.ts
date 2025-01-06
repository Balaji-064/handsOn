var InputArray= [1, 2, 3, 4]
var keyValue= 3
var count=0;
var SortedValue = InputArray.sort((x, y) => y - x)
let countvariable = SortedValue[0]
for (let i = 0; i < keyValue; i++) {
    count = count + SortedValue[0]
    SortedValue[0] = SortedValue[0] + 1
   
    
}
console.log(count)

