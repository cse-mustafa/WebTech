//A function inside another function is known as nested function


function outer(){
    console.log("Outerrrrrr");

    function inner() {
        console.log("Innnneeeeerrrrrr   chapraaaaaaa");           
    }
    inner();
    
}

outer();  