// // // 🔹 Problem 1: Shopping Bill Calculator 🛒

// // // Ek shop mein 3 items hain:

// // // Item1 = 250
// // // Item2 = 400
// // // Item3 = 150


// // // let item1 = 250;
// // // let item2 = 400;
// // // let item3 = 150;

// // // let totalBill = item1+item2+item3
// // // let discount = totalBill > 700 ? totalBill*10/100: 0;
// // // let finalPrice = totalBill-discount

// // // console.log(" Total Price =" , finalPrice);


// // // // 🧾 Problem: Shopping Cart Discount + Tax System

// // // let item1 = 120;
// // // let item2 = 250;
// // // let item3 = 330;

// // // let total = item1+item2+item3
// // // let discount = total>600 ? (total*15) / 100 : 0;
// // // let finalPrice = total-discount
// // // let tax =  (finalPrice * 5)/ 100


// // // console.log("Total" , total)
// // // console.log("Dicount =", discount);
// // // console.log("Final price =" , finalPrice);



// // // console.log("Final Price With Tax=" , tax + finalPrice);

// // // 🛒 Problem: Dynamic Shopping Cart (Array + Functions)

// // let cart = [120, 250, 330, 90, 150];

// // function  calculateTotal(caritem){
// //     let total = 0
// //     for(let i = 0 ; i < caritem.length;i++){
// //         total += caritem[i];
// //     }
// //     return total;


// // }


// // function removeItem(item){
// //     let index = cart.indexOf(item)
// //     if(index !== -1){
// //         cart.splice(index,1)
// //     }
// // }

// // removeItem(250);

// // let total = calculateTotal(cart)


// // let discount = 0
// // if(total > 1000 ){
// //     discount = total * 20 / 100;
// // }else if ( total > 500 ){
// //    discount=  total * 10 / 100;
// // }

// // let afterdiscount = total - discount;

// // let tax = afterdiscount * 8 / 100

// // let afterTax = tax + afterdiscount;


// // console.log("toal Amount=", total);
// // console.log(" Dicount=", discount);
// // console.log("afterdiscount =", afterdiscount);
// // console.log("total tax=", tax);
// // console.log("final price after Tax= " , afterTax);



// // 🛒 Problem: Smart Cart System

// let cart = [300, 120, 500, 200, 80];

// function removeItem( price){
//     let index = cart.indexOf(500)
//     if(index !== -1){
//         cart.splice(index , 1)
//     }
// }

// removeItem(500)

// let totalBill = cart.reduce((cur, cval) => cur + cval ,0);



// let discount = 0;
// if( totalBill > 1000){
//     discount = totalBill * 20 / 100;
// }else if ( totalBill > 600){
//     discount = totalBill * 10 / 100;
// }

// let extradiscount = 0;
// if(cart.some(item => item < 100)){
//     extradiscount = totalBill* 5/100
// }

// discount = discount + extradiscount

// let afterdiscount = totalBill - discount

// let tax = afterdiscount * 8 / 100

// let finalPrice = tax + afterdiscount

// let billummary ={
//     totalBill: totalBill,
//     DiscountPrice : discount,
//     TotalAmont : afterdiscount,
//     TotalTax: tax,
//     Totalfinal: finalPrice
// }


// console.log(billummary);




// ATM Withdrawal System
// let balance = 10000;
// let withdrawAmount = 33000;

// if(withdrawAmount <= balance){
//     console.log("withdraw succesful");
    
// }else if(
//     withdrawAmount < 500
// ){
//     console.log("Minimum withdarw is 500");
    
// }else if ()




// else{
//     console.log("Isuficient balance");
    
// }   


// 🟢 Problem 1: Even / Odd Checker


// let num = 8
// if(num % 2 === 0){
//     console.log("Even number ");
    
// }else{
//     console.log("Odd Number");
    
// }

// // 🟢 Problem 2: Positive / Negative / Zero

// let num = -7;

// if(num > 0){
//     console.log("poitive Number");
    
// }else{
//     console.log("Negative number");
    
// }

// // 🟢 Problem 3: Grade System (if/else)

//     let marks = 49;
//     if(marks > 100){
//         console.log(" inavalid Marks");
        
//     }else if(marks > 90){
//         console.log("You got A+ grade");   
//     }
//     else if( marks > 80){
//         console.log("You got  A grade");
        
//     }else if (marks > 70){
//         console.log("You got  B grade");
        
//     }else if(marks > 60){
//         console.log("You got  C grade");
        
//     }else if(marks > 50){
//         console.log("You got  D grade");
        
//     }else{
//         console.log("Your marks did'nt match Our requirments please try Again");
        
//     }


// 🟢 Problem 5: 1 to 30 Counting (for loop)

// for( i = 1 ; i <=30; i++){
//     console.log(i);
    
// }

// 🟢 Problem 6: Even Numbers 1–50

// 👉 Print only even numbers from 1 to 50

// for(let i = 1; i < 50; i++){
//     if(i % 2 === 0){
//         console.log(i);
        
//     }
// }


// 🟢 Problem 7: Sum of 1 to 100

// 👉 Output:

// 5050

// // (use loop)

// let sum = 0

// for ( let i=1; i<=100; i++){
//     sum = sum + i

// }
// console.log(sum);
// 🟢 Problem 8: Reverse Counting

// for( i = 10; i>0; i--){
//     console.log(i);
    
// // }

// // 🟢 Problem 9: Table Generator (Dynamic)
// let num = 6;
// for ( i = 1; i<=10; i++){
//     console.log(num +"X" + i + "="+ (num * i));
    
// }

// 🟢 Problem 10: FizzBuzz (Interview Favorite 🔥)

// 1 to 20:

// Rules:

// 3 → "Fizz"
// 5 → "Buzz"
// both → "FizzBuzz"

// for(let i = 1; i < 20 ; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("fizzBuzz");
        
//     } else if (i % 3 === 0){
//         console.log("Fizz");
        
//     } else if(i % 5 === 0){
//         console.log("Buzz");
        
//     }else{
//         console.log(i);
        
//     }
// }

// // 🟠 Problem 11: Largest Number
// let a = 10;
// let b = 25;
// let c = 15;
// if( a > b && a > c){
//     console.log("a is greator");
    
// }else if(b > a && b > c){
//     console.log("b is greator");
    
// }else{
//     console.log(" c is greator");
    
// }


// 🟠 Problem 12: Count Even Numbers in Array

// 👉 Count even numbers
// let arr = [10, 15, 22, 33, 40, 55];

// let count = 0;

// for(let i=0; i<arr.length; i++){
//     if (i % 2 === 0){
//         count = i
        
        
//     }
// }
// console.log(count);

// 🟠 Problem 13: Array Sum

// 👉 Total sum nikalna hai
// let arr = [5, 10, 15, 20];
// let sum = 0;
// for (let i = 0; i<arr.length; i++){
//     sum = sum + arr[i]

// }

// console.log(sum);
//  🟠 Problem 14: Simple Login System

// Rules:

// dono match → login success
// warna fai

// let username = "admin";
// let password = "1234";

// if(username === "admin" && password === "1234"){
//     console.log("login success");
    
// }else{
//     console.log("Login failed");
    
// }

// 🔥 FINAL MINI PROJECT (Today’s Mission)
// 🎯 Number Guessing Game (PRO Level Start)
// let secret = 7;
// let guess = 9;

// if(guess === 7){
//     console.log(" You Win");
// }else if(guess > 7){
//     console.log(" Too high");
    
// }else{
//     console.log("too Low");
    
// }


// 🔥 LEVEL 2 – INTERVIEW CHALLENGE SET
// 🟠 Problem 1: Bug Fix (VERY IMPORTANT)
// let num = 10;

// if (num === 5) {
//   console.log("Five");
// } else {
//   console.log("Not Five");
// }


// 🟠 Problem 2: Trick Loop Output
// for (let i = 1; i <= 5; i++) {
//   if (i == 3) continue;
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   if (i == 3) continue;
//   console.log(i);
// }
// 1
// 2
// 4
// 5

// // 🟠 Problem 3: Break Logic
// for (let i = 1; i <= 10; i++) {
//   if (i == 6) break;
//   console.log(i);
// }
// 1
// 2
// 3
// 4
// 5

// // 🟠 Problem 4: Array Logic (VERY IMPORTANT)
// let arr = [2, 5, 8, 11, 14];

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     count++;
//   }
// }

// console.log(count);

// 3

// // 🟠 Problem 5: Sum Logic Trick
// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }

// console.log(sum);
// 6


// let arr = [10, 20, 30, 40];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }