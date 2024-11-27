//self invoking function is invoked by itself
//used to avoid global namespace pollution
//it executes only once
//synrax : ()()

document.write("self invoking function ");


let a= ((a)=>{
    console.log("Self invoking function executed");
    return a; 
})(10);
console.log(a);

(function demo(){
    console.log("demo function executed");
    
})();


(function(){

console.log("any function executed");

})();



