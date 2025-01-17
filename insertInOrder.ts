let arrLenght=[3,5,7,9]
let target=10
for(let i=0;i<arrLenght.length;i++){
    if(arrLenght[i]==target){
        console.log(i)
    }else if(target<arrLenght[i]){
        console.log(i)
        
    }
   
    
}
if(target>arrLenght[arrLenght.length-1]){
    console.log(arrLenght.length)
}
