var demo=10;
console.log(demo);
demo='Hello';
console.log(demo);
demo=true;
console.log(demo);

//var keyword
var a;                               //declaration
a=10;                               // Initialization
console.log("The value of a is"+a); //Utilization
var a;                              // Re Declaration
a=100;                              // Re Initialization
console.log(a);

var a=10000;                         //RE Declaration and Re Initialization is Possible

//let Keyword  ->  ES-6

let b;                                  //declaration
b=10;                                   // Initialization
console.log("The value of b is"+b);     //Utilization
//let b;                                 // Re Declaration not possible
b=200;                                  // Re Initialization
console.log(b);
//let b=1000;                              //RE Declaration and Re Initialization is not Possible



//const   ->  ES-6

const c=30;                                 //Only Declaration and Initialization is possible in same line
console.log("The value of c is"+c); 

//const c;                                  //Re Declaration is not possible
//c=300;                                    //Re Initialization is not possible
//const c=3000;                             //RE Declaration and Re Initialization is not Possible

console.log(c);



