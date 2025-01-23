

var  givenarray =[3,4,5,6]
var target=8
for(let i=0;i<givenarray.length;i++){
    for(let j=i+1;j<givenarray.length;j++){

    
    let c = givenarray[i]+givenarray[j]
    if(c===target){
        console.log(i,j)
        
    }
}
   
    
}