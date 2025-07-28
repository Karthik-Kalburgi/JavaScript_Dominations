//Topic 1 is conditionals
//Vote 

// let age = (Number(prompt("Enter your age")));
// if(isNaN(age)){
//   console.log("Invalid Input");
  
// }
// else if(age>=18){
//   console.log("You can vote");
  
// }else{
//   console.log("You cant Daaaa");
  
// }


//Discount price
// Amount          price
// 0-5000            0%
// 5001-7000         5%
// 7001-9000         10%
// more than 9000    20%


// let amount = (Number(prompt("WHat is ypur final price?")));

// if(amount >0 && amount <=5000){
//   console.log(amount);
  
// }else if(amount >5000 && amount <=7000){
//   console.log(amount - Math.floor((5*amount)/100));
  
// }else if(amount >7000 && amount <=9000){
//   console.log(amount - Math.floor((10*amount)/100));
  
// }else if(amount >9000){
//   console.log(amount - Math.floor((20*amount)/100));
  
// }else{
//   console.log('Card Declained');
  
// }

//Optimized Code

// let amount = (Number(prompt('THe final payable amount is||')));
// let dis = 0;
//  if(amount >0 && amount <5000){
//   dis = 0;
// }else if(amount >5000 && amount <7000){
//   dis=5;
// }else if(amount >7000 && amount <9000){
//   dis=10
// } else if(amount >9000){
//   dis=20;
// }else{
//   console.log("Your Card Declined!!!");
  
// }

// console.log(amount - Math.floor((amount*dis)/100));


//Electrity Bill

// Unit            Price
// upto 100      rs 4.2/Unit
// 101-200       rs 6/Unit
// 201-400       rs 8/Unit
// more than 400 rs 13/unit
//go from botttom-top Approach 
//ex 2620  2620/500 

// let unit = Number(prompt("Enter the toal cosumption unit")); //800
// let amount = 0;
// if(unit >400 ){
//   amount = (unit-400)*13; //5200
//   unit=400;
// }
// if(unit>200&&unit<=400){
//   amount += (unit-200)*8; //1600
//   unit=200;
// }
// if(unit>100 && unit<=200){
//   amount += (unit-100)*6; //600
//   unit=100
// }
// if(unit>=100){
//   amount += unit*4; //400

// }

// console.log("The total unit used is", amount);


//INR Demonimations
// let amount =54421;
// if(amount>=500){
//   console.log("500 note : " +(Math.floor(amount/500)));
//   amount = amount%500;
// }
// if(amount >=200){
//   console.log("200 notes : " + (Math.floor(amount/200)));
//   amount = amount%200;
// }
// if(amount >=100){
//   console.log("100 notes : "+ (Math.floor(amount/100) ));
//   amount = amount%100;
// }
// if(amount>=50){
//   console.log("50 Notes : " + (Math.floor(amount/50)));
//   amount = amount%50;
// }
// if(amount >=20){
//   console.log("20 Notes : " + (Math.floor(amount/20) ));
//   amount = amount % 20;
// }
// if(amount>=10){
//   console.log("10 Notes" + (Math.floor(amount/10)));
//   amount = amount%10;
// }
// console.log(" 1 Notes : " + (amount));

//Ternary Operator
// let num =-6;
// console.log(num>0 ? `This number is positive ${num}` : num<0 ? `This number is negative ${num}` : `This number is null ${num}`)