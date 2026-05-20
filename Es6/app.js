// // const car = {
// //    brand: "Toyota",
// //    model: "Corolla",
// //    engine: {
// //       cc: 1800
// //    }
// // };

// // let {model , engine:{cc}} = car

// // console.log(cc , model);


// // 👉 result ma "Pass" ya "Fail" store karo
// // condition:
// // 60+ = Pass
// // const marks = 50;

// // let result = marks > 60? "pass": "fail"
// // console.log(result);


// // const car = {
// //    brand: "Toyota",
// //    model: "Corolla",
// //    engine: {
// //       cc: 1800
// //    }
// // };


// // console.log(car?.engine?.cc);


// // (function(){
// //     console.log("React started");
    
// // })()

// // function greet(name = "guest") {
// //    console.log(`Hello ${name}`);
// // }

// // greet("Umair");
// // greet()

// // function multiply(a, b=5) {
// //    console.log( a * b);
// // }

// // multiply(2)


// //  let num = [1,2,3,4,5,6,7,8,8]

// //  function sum(...num){
// //     return num.reduce((acc,cval)=>{
// //          return acc + cval

// //     },0)
    
// //  }

// //  console.log(sum(1,3,4,5));
 
// //  const user = {
// //    name: "Ali"
// // };

// // const updatedUser = {
// //    👉 age: 20 add karo using spread
// // // }
// // const updated = {
// //     ...user,
// //     age:20
// // }

// // console.log(updated);

// // const users = [
// //    {
// //       id: 1,
// //       name: "Ali",
// //       age: 20
// //    },
// //    {
// //       id: 2,
// //       name: "Sara",
// //       age: 17
// //    },
// //    {
// //       id: 3,
// //       name: "Ahmed",
// //       age: 25
// //    }
// // ];


// // let names = users.map(nam => nam.name)
// // console.log(names);

// // let filterDate = users.filter(adult => adult.age >=18)
// // console.log(filterDate);

// // let updateUser = users.map(user =>{
// //     return{
// //         ...users,
// //         Status: user.age > 18? "Adult" : "Minor"
// //     }
// // })

// // console.log(updateUser);
// const students = [
//   { name: "Ali", marks: [80, 75, 90] },
//   { name: "Sara", marks: [60, 70, 65] },
//   { name: "Ahmed", marks: [95, 92, 88] },
//   { name: "Zain", marks: [40, 50, 45] }
// ];

// function analyzeResult(student){
// let toper = ""
// let higestAvg = 0;
// let totalAverage = 0;

// const paseStudent = []
// const failStudents = []

// students.foreach(student =>{
//     const sum = student.marks((cur,cval)=> cur + cval ,0)

//     const avg = sum / student.marks.length

//     totalAverage += avg

//     if(avg > 50){
//         paseStudent.push(student.name)
//     }else {
//         failStudents.push(student.name)
//     }

//     if(avg > higestAvg){
//         higestAvg = avg;
//         toper = student.name;
//     }
// });

// const averageMarks = totalAverage / students.length

// }

// console.log(analyzeResult(students));


// const nums = [3, 8, 11, 20, 7, 14];

//  let even = nums.filter((n) => n % 2 === 0).map((n) => n*2)


// console.log(even);

// const products = [
//   { name: "Mouse", price: 1200 },
//   { name: "Keyboard", price: 2500 },
//   { name: "Monitor", price: 18000 },
// ];

// let names = products.map((nam) => nam.name)
// console.log(names);

// // const users = [
//   { name: "Ali", active: true },
//   { name: "Ahmed", active: false },
//   { name: "Sara", active: true },
// ];

// let active = users.filter((act) => act.active === true)
// let data = active
// console.log(data);

// const cart = [
//   { item: "Shoes", price: 4000 },
//   { item: "Shirt", price: 2000 },
//   { item: "Cap", price: 1000 },
// ];

// let total = cart.reduce((acc,cval)=> acc + cval.price,0)
// console.log(total);

// const students = [
//   {
//     name: "Umair",
//     marks: [80, 90, 70],
//   },
//   {
//     name: "Ali",
//     marks: [60, 50, 40],
//   },
// ];

// const result = students.map((student)=>{
//     const total = student.marks.reduce((cur,cval)=> cur + cval,0)
//     const average = total / student.marks.length;
//     return {
//         name: student.name,
//         average : average
//     }

    
// })

// console.log(result);


// const user = {
//   name: "Umair",
//   address: {
//     city: "Karachi",
//     area: "Nazimabad",
//   },
// };


// let city = user.address.area
// console.log(city);

// const company = {
//   departments: {
//     developer: {
//       employees: ["Ali", "Ahmed", "Sara"],
//     },
//   },
// };


// // let name = company.departments.developer.employees[2]

// // console.log(name);
// const data = {
//   users: [
//     {
//       name: "Ali",
//       skills: {
//         frontend: ["HTML", "CSS", "React"],
//       },
//     },
//   ],
// };


// let react = data.users[0].skills.frontend[2]
// console.log(react);
// var a = 10;

// {
//   let a = 20;
//   console.log(a);
// }

// console.log(a);

// const multiply = (a,b)=> a*b;
  
// const arr = [1, 2, 3];

// const result = arr.map((num) => {
//   if (num > 1) return num * 2;
// });

// console.log(result);

// const users = [
//   { name: "Ali", age: 17 },
//   { name: "Ahmed", age: 22 },
//   { name: "Sara", age: 19 },
//   { name: "Zara", age: 15 },
// ];


// let adults = users.filter((adul) => adul.age > 16 )
// let names = adults

// console.log(names);
