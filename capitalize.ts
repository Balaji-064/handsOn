let a="TypeScript is typed JavaScript. TypeScript adds types to JavaScript to help you speed up the development by catching errors before you even run the JavaScript code."
let b=a.split(' ');
for(var i=0;i<b.length;i++){
    b[i]=b[i].toUpperCase().charAt(0)+b[i].slice(1,b.length)
    
}
console.log(b.join(" "));
