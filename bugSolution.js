function foo(a,b){
if(typeof a !== 'number' || typeof b !== 'number'){
throw new Error("Both operands must be numbers");
}
return a+b;}
console.log(foo(1,2));//Expected Output:3
console.log(foo(1,"2"));//Throws an error
console.log(foo("1",2));//Throws an error
console.log(foo("1","2"));//Throws an error