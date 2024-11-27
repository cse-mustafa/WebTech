function main(task) {
    return task()
}

let a = main(function(){
    return "I am CBF1"    
})
console.log(a);

let b = main(function(){
    return "I am CBF2"    
})

console.log(b);

function main1(task){
    return task(10,20  )
}

let add = main1(function(a,b){
    return a+b;
})

let sub = main1(function(a,b){
    return a-b;
})

console.log(add);
console.log(sub);



