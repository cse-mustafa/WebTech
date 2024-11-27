function click(){
    console.log("button is pressed");
}

function dblclick(){
    console.log("button is pressed 2 times");
}

function over(){
    let img1=document.querySelector("img");
    img1.src="http://ts1.mm.bing.net/th?id=OIP.t2_DLhueoWJ90yyEl9JJlgHaEK&pid=15.1"
}
function out(){
    let img1=document.querySelector("img");
    img1.src="https://th.bing.com/th/id/OIP.unX6AN0gCqlM9kTB0io2hQHaEo?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
}

function down(){
    let para1=document.querySelector("p");
    para1.style.backgroundColor="green";
}
function up(){
    let para1=document.querySelector("p");
    para1.style.backgroundColor="white";
}

function keydown(){
    console.log("key is pressed");
    
}

function keyup(){
    console.log("key is released");
    
}

function onbtclick(){
       let myimg=document.querySelectorAll("img")
       myimg[1].src="https://th.bing.com/th?id=OIP.5YKQ6z9vVL5Vgc-4XGFa6wHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
}
