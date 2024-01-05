// Question: calculate the time it takes between setTimeout() calling and inner actual function running in js
function greet()
{  
    
    console.log("hello everyone");
    

}
let startTime=performance.now();

setTimeout(()=>{
    let endTime=performance.now();
    let t=endTime-startTime;
    console.log(t)
    greet()},2*1000);
