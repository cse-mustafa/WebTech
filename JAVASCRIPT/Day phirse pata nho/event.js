function demo() {
    console.log("hello world")
    
}

let demo1 = document.getElementById("demo1")
console.log(demo1);

demo1.onclick = () => {
    console.log("Hello Chicha")

}

let demo2 = document.getElementById("demo2")
console.log(demo2);
demo2.onclick = () => {
   let res = Math.round(Math.random()*10000).toString(16)
   console.log(res);
   document.body.style.backgroundColor = `#${res}`
}


let demo3 = document.getElementById("demo3")
console.log(demo3);
demo3.onkeypress = (e) => {
    console.log(e);
    console.log(e.keyCode);
   let res = Math.round(Math.random()*10000).toString(16)
   console.log(res);
   document.body.style.backgroundColor = `#${res}`
}


let demo4 = document.getElementById("demo4")
console.log(demo4);
demo4.onclick= () => {
    let img = document.getElementsByTagName("img")
    console.log(img[0]);
    let res = img[0].classList.toggle("demo")
    if (res) {
         img[0].style.visibility = "visible"
    } else {
        img[0].style.visibility = "hidden"
        
    }
}
