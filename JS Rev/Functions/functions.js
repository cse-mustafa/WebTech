function demo(){
    document.write("Demo function is executed");
    
}

demo();

function add(){
    console.log(10+20);
}

add();

function add1(a,b){
   console.log(a+b);
}

add1(10,60);

function add2(a=0,b=0){
    console.log(a+b);
    
}

add2();
add2(20,30);

function add3(c,d){
    let sum=c+d;
    return sum;
}

y=add3(40,180);
console.log(y);

////////////////////////////////////////////////////////////
function printname(name){
    for(let i=1;i<=10;i++){
        console.log(name);
        
    }

}

printname("Mustafa");

/////////////////////////////////////////////////////////
function evennum(a,b)
{

    for(let i=a;i<=b;i++){
        if(i%2==0){
            console.log(i);
            
        }
    }
}

evennum(100,150);


/////////////////////////////////////////////////////////////
function typof(argument){
    console.log(typeof(argument));
    
}

typof("name")

///////////////////////////////////////////////////////////

function deci(a,b) {
    if (typeof(a)=="number" && typeof(b)=="number") {

        console.log(a+b);
        
        
    } else {
        console.log("pass me a number only");
        
        
    }
    
}

deci(10,20000);

///////////////////////////////////////////////////////////