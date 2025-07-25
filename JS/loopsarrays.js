let a=10;
console.log(a);

if(a%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}

for(let i=0;i<5;i++){
    console.log(i);
} 

let arr=[1,2,3,4,"b"];
console.log(arr);
for(let val of arr){
    console.log(val);
}
arr.push(5);
console.log(arr);
arr.pop();
console.log(arr);