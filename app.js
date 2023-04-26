// let obj ={
//     name:"Abdulloh",
//     family:'Olimov',
//     age:21,
//     job:'student',
// }
// console.log(obj);

// enteries

// const obj = { foo: "bar", baz: 42 };
// console.log(Object.entries(obj)); 
// // Array-like object
// const obj1 = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.entries(obj)); 
// // Array-like object with random key ordering
// const anObj = { 100: "a", 2: "b", 7: "c" };
// console.log(Object.entries(anObj)); 

// keys

// const arr = ["a", "b", "c"];
// console.log(Object.keys(arr)); // ['0', '1', '2']

// // Array-like object
// const obj = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.keys(obj)); // ['0', '1', '2']

// // Array-like object with random key ordering
// const anObj = { 100: "a", 2: "b", 7: "c" };
// console.log(Object.keys(anObj)); // ['2', '7', '100']

// values()
// const obj = { foo: "bar", baz: 42 };
// console.log(Object.values(obj)); // ['bar', 42]

// // Array-like object
// const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// // Array-like object with random key ordering
// // When using numeric keys, the values are returned in the keys' numerical order
// const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
// console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']
// destruction
// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(a,b);

// spread
// let obj ={
//     name:"Abdulloh",
//     family:'Olimov',
//     age:21,
//     job:'student',
// }
// let neObj = {...obj}
// neObj.age = 23;
// console.log(neObj,obj);

// this

// let obj ={
//     name:"Abdulloh",
//     family:'Olimov',
//     age:21,
//     job:'student',
//     fn:function(){
//         return this.age+' ' +this.name+' '+this.job
//     }
// }

// console.log(obj.fn());

// newDate
let date = new Date("2023-04-25")
console.log(date);