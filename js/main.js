let a=parseInt(prompt("Enter a number"));
let b,c=0;
for(i=1;a!=0;i++){
    b=a%10;
    c=c+b;
    a=(a-b)/10;
}
console.log(c);