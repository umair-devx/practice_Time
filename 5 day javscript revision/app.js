// // 🔹 Problem 1: Shopping Bill Calculator 🛒

// // Ek shop mein 3 items hain:

// // Item1 = 250
// // Item2 = 400
// // Item3 = 150


// // let item1 = 250;
// // let item2 = 400;
// // let item3 = 150;

// // let totalBill = item1+item2+item3
// // let discount = totalBill > 700 ? totalBill*10/100: 0;
// // let finalPrice = totalBill-discount

// // console.log(" Total Price =" , finalPrice);


// // // 🧾 Problem: Shopping Cart Discount + Tax System

// // let item1 = 120;
// // let item2 = 250;
// // let item3 = 330;

// // let total = item1+item2+item3
// // let discount = total>600 ? (total*15) / 100 : 0;
// // let finalPrice = total-discount
// // let tax =  (finalPrice * 5)/ 100


// // console.log("Total" , total)
// // console.log("Dicount =", discount);
// // console.log("Final price =" , finalPrice);



// // console.log("Final Price With Tax=" , tax + finalPrice);

// // 🛒 Problem: Dynamic Shopping Cart (Array + Functions)

// let cart = [120, 250, 330, 90, 150];

// function  calculateTotal(caritem){
//     let total = 0
//     for(let i = 0 ; i < caritem.length;i++){
//         total += caritem[i];
//     }
//     return total;


// }


// function removeItem(item){
//     let index = cart.indexOf(item)
//     if(index !== -1){
//         cart.splice(index,1)
//     }
// }

// removeItem(250);

// let total = calculateTotal(cart)


// let discount = 0
// if(total > 1000 ){
//     discount = total * 20 / 100;
// }else if ( total > 500 ){
//    discount=  total * 10 / 100;
// }

// let afterdiscount = total - discount;

// let tax = afterdiscount * 8 / 100

// let afterTax = tax + afterdiscount;


// console.log("toal Amount=", total);
// console.log(" Dicount=", discount);
// console.log("afterdiscount =", afterdiscount);
// console.log("total tax=", tax);
// console.log("final price after Tax= " , afterTax);



// 🛒 Problem: Smart Cart System

let cart = [300, 120, 500, 200, 80];

function removeItem( price){
    let index = cart.indexOf(500)
    if(index !== -1){
        cart.splice(index , 1)
    }
}

removeItem(500)

let totalBill = cart.reduce((cur, cval) => cur + cval ,0);



let discount = 0;
if( totalBill > 1000){
    discount = totalBill * 20 / 100;
}else if ( totalBill > 600){
    discount = totalBill * 10 / 100;
}

let extradiscount = 0;
if(cart.some(item => item < 100)){
    extradiscount = totalBill* 5/100
}

discount = discount + extradiscount

let afterdiscount = totalBill - discount

let tax = afterdiscount * 8 / 100

let finalPrice = tax + afterdiscount

let billummary ={
    totalBill: totalBill,
    DiscountPrice : discount,
    TotalAmont : afterdiscount,
    TotalTax: tax,
    Totalfinal: finalPrice
}


console.log(billummary);


