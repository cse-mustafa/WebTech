//Destructuring.....Unpacking values and storing in different variables
// 2 types 1.Array DEstructuring   2.Object Destructuring 
let nums=[10,20,30];

//to access array elements we usually use index positions
console.log(nums[0]);

//using destructuring

let [ten,twenty,thirty] = nums;
console.log(ten);
console.log(twenty);


//2.Object Destructuring

let person = {
    name: "m",
    age: 23,
    id : "Hkl"
}

console.log(person.name);//old way

let {name,age,id} = person;//ES-6 way

console.log(age);
console.log(id);


let fruits=["mango","grapes","apple"]

let [m,g,a] = fruits;
console.log(m);
console.log(a);
console.log(g);

let students=["ganesh","ramesh","Suresh"]

let [s1,s2,s3] = students;
console.log(s1);
console.log(s2);
console.log(s3);





