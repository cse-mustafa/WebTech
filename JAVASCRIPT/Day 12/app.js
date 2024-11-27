window.fetch("data.json")
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
    //console.log(data[0]);
    //console.log(data[1]);
    data.map((x)=>{
        console.log(x);
        console.log(x.name);
        console.log(x.id);
        
        
        
        
    })
    
})