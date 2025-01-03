let FirstInputArray = [1, 3, 4, 9, 5]
let secondInputArray= [2, 10, 9, 6]
FirstInputArray = secondInputArray.reduce((acc, ele) => {
    if (acc.indexOf(ele) === -1) {
        acc.push(ele);
    }
    return acc;
}, [...FirstInputArray]);
let result=FirstInputArray.sort((a,b)=>a-b)

console.log(result)


