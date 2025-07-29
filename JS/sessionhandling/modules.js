const pi=3.14;
const add=(a,b)=>(a+b);
const oddeven=(num)=>{
    if(num%2===0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

module.exports={pi,add,oddeven};
module.exports.add=add;
module.exports.oddeven=oddeven;
