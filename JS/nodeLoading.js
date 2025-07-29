console.log("hello");
console.log(__dirname);
console.log(__filename);
let timer=0;
let stoptime=setInterval(function(){
    timer+=3;
    console.log("loading...");
    if(timer>14){
        clearInterval(stoptime);    
    }
}, 3000);
console.log("Hi");