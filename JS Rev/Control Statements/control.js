// Positive or not

let a=12;
if(a>0)
    {
        console.log("Positive number "+a);
        
    }
    else{
        console.log("Negative Number "+a);
        
    }


//even or odd

let b=10;
if(a%2==0)
{
    console.log("Even number "+b);
    
}
else{
    console.log("Odd Number "+b);
    
}

//divisible by 7 and 8

let c=64
 
if((c%8==0)&&(c%7==0))
    {
        console.log("Divisible "+c);
        
    }
    else{
        console.log("Not Divisible "+c);
        
    }

//Eligible for Army

let h=5,w=61,age=20;

if(h>=6)
{
    if (w>=60)
    {
        if (age>=18) {
            console.log("Eligible For Army");    
        }
        else{
            console.log("Not Eligible:Age does neet meet criteria");
            
        }
        
    }
    else{
        console.log("Not Eligible:Weight does neet meet criteria");
        
    }
}
else{
    console.log("Not Eligible:Height does neet meet criteria");
    
}
