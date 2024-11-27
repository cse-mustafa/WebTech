

// let car=["mercedese","bmw","lambo","bugatti","Lexus","Toyota"]

// console.log(car.length);
// console.log(car);


// car[6]="ferrari";


// let x =car.push("maruti");
// console.log(x);

// let y =car.pop()
// console.log(y);

// let z = car.unshift("hi","bye")
// console.log(z);

// console.log(car);

// let z1 = car.shift()
// console.log(z1);

// console.log(car);


let nums=[10,20,30,40,50,10]

let x=nums.indexOf(30)
console.log(x);              
let y=nums.indexOf(100) //  when an element isnot there -1 is output
let z=nums.indexOf(10)    //since there are two 10 it will return index of first occurence


//lastindexof()

x= nums.lastIndexOf(10);
console.log(x);
y=nums.lastIndexOf(100)   //  when an element isnot there -1 is output
console.log(y);

//slice(starting Index,Ending Index)

let sl=nums.slice(0,3);
console.log(sl);    //wont affect the orignal array
console.log(nums);

//splice(starting Index,No of elements to be deleted,Adding new elements)

nums.splice(0,2,45)  //deleted the first 2 elements from position 0 and replaced them with 45
console.log(nums);

nums.splice(2,0,20,30)  //can add any number of elemetns
console.log(nums);

nums.splice(1,1)//deleted 1 element at index 1
console.log(nums);

//concat()


let arr1=[10,20,30]
let arr2=[40,50,60]

let arr3=[]

for(let i=0;i<arr1.length;i++)
   {
    arr3.push(arr1[i])
   }
for(let i=0;i<arr1.length;i++)
    {
        arr3.push(arr2[i])
    }
console.log(arr3);

x=arr1.concat(arr2) ////using concat easily joining

console.log(x);

x=arr1.concat(arr2,arr3)  //can join any number of arrays
console.log(x);


//sort

nums=[3,6,8,1,2]

console.log(nums);


x=nums.sort()

console.log(x);

nums=[1,2,4,32,6]
nums.sort()
console.log(nums);   // [1, 2, 32, 4, 6]  because it will sort using first digit only i.e. 3<4

let names=["m","s","a","d"]
names.sort()
console.log(names);// sorted using first character0

//map  
nums=[10,20,30,40];
x=nums.map((element)=>{
    console.log(element);
        return element+5;
})

console.log(x);
console.log(nums);

//foreach

x=nums.forEach((element)=>{
    console.log(element+5);
    return element*2;
})
console.log(x);   ///undefined.......drwaback of foreach whenevr we print it shows undefined

//filter

x=nums.filter((element)=>{
    return element>15
})
console.log(x);
console.log(nums);

//to find sum

nums=[10,20,30,40]
let sum=0;
for(let i=0;i<nums.length;i++){
    sum+=nums[i]
}
console.log(sum);

//Reduce

x=nums.reduce((prev,next)=>{
    return prev+next;
})

console.log(x);

//using map on objects

let students=[
    {
    id:101,
    name:"abc",
    marks:100
    },

    {
        id:102,
        name:"def",
        marks:80
    },
    {
        id:103,
        name:"ghi",
        marks:0
    },
     ]
//to print name
let rec=students.map((element)=>{
                       console.log(element);
                       return element.name;
                       
})

console.log(rec);

//to print student name whoscored more than 35

rec=students.map((element)=>{
            if( element.marks>35){
                return element.name;
            }
            
})

console.log(rec);

//printstudent name with marks

rec=students.map((element)=>{
        return element.name;
    
    
})

console.log(rec);

//sort()  sort the elements

console.log(["chicha","sabirchicha","Qadir bhai","CAt"].sort());
console.log([0,6,3,232,1].sort());
console.log([0,6,3,232,1].sort((a,b)=>{
    return a+b;
}));

console.log([0,6,3,232,1].sort((a,b)=>{
    return b-a;
}));

//every()  acts like AND operator will check every element if it satisfies the given condition  if everyone satisfies it will give TRUE

nums= [10,21,30,40]
x=nums.every((element)=>{
    return element%2==0;
})

console.log(x);

//some()  acts like OR operator will check every element if it satisfies the given condition and if only one satisfies it will give true

y=nums.some((element)=>{
   return element%2==0;
})

console.log(y);

//Includes()  will check if the element is present or not     ////will return true or false 

arr1=[3,89,7,5,8]
console.log(arr1.includes(8));
console.log(arr1.includes(80));

//reverse()  will reverse the array permanently

console.log(arr1.reverse());
console.log(arr1);

//flat() will concatenate inner array temporarily

arr2=[1,2,3,[4,5]]
console.log(arr2.flat());
console.log(arr2);

arr3=[1,2,3,[4,5,[6,7]]]
console.log(arr3.flat(2));   ///here we are passing depth value...meaning how many sub arrays to be concatenated////
//In the example arr3 contains 2 nested arrays


let arr4=[[1,2,3,],[4,5,6]]
console.log(arr4.flat());   ///by default it will take value 1 ......i.e. concatenates

arr4=[[1,2,3,],[4,5,6]]
console.log(arr4.flat());

let arr5=[1,2,3,[4,5,[6,7,[8,9]]]]
console.log(arr5.flat(3));

let arr6


































