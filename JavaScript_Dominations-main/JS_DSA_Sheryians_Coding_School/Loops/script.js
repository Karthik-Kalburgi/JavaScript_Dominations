// 1-22
// for(let i=1;i<23;i++){
//   console.log(i);
  
// }

//200-100

// for(let i=200;i>99;i--){
//   console.log(i);
  
// }

//print sum of natural numbers
// let n  = (Number(prompt("Enter the sum of natural numers of your choice")));
// if(isNaN(n)){
//   console.log("Invalid Input");
// }
// else{
//   if(n>0){
//     let sum =0;
//     for(let i=1;i<=n;i++){
//       sum = sum+i;
//     }
//     console.log(sum);
//   }else{
//     if(n<=0){
//       console.log("The number should be positive number");
//     }
//   }
// }

//Factorial of a number

// let factorial = (Number(prompt("Enter the factorial number")));
// if(isNaN(factorial)){
//   console.log("invalid Input");
  
// }else{
//   if(factorial>0){
//     let fact = 1;
//     for(let i=1;i<=factorial;i++){
//       fact = fact*i
//     }
//     console.log(fact);
//   }else {
//     console.log("Enter the positive number");
//   }
// }

//Factors of numbers stated that the number which divides one and itself without leaving 0 remainder
// let n = (Number(prompt("Enter the factors of Numbers")));
// if(isNaN(n)){
//   console.log("Invalid Input");
  
// }else if(n>0){
//   for(let i=1;i<=Math.floor(n/2);i++){
//      if(n%i===0){

//        console.log(i);
//      }
//   }
//   console.log(n);
// }else{
//   console.log("Enter the positive number");
// }

//prime number
// let n = (Number(prompt("Enter the prime numbers")));
// if(isNaN(n)){
//   console.log("Invalid Input");
// }else if(n>0){
//   let isPrime = true;
//   for(let i=2;i<=Math.floor(n/2);i++){
//     if(n%i===0){
//       isPrime =false
//       break
//     }
//   }
//   console.log(isPrime);

// }else{
//   console.log("Enter the positive number ");
// }

//Break and continue

// for(let i=1;i<=23;i++){
//   if(i===11) continue;
//   else console.log(i);
  
// }

//Important when we know the itterations use for loop search the 10th standard name karthik
//when we dont know when the ans comes use while search all the classes till we get karthik -> tell me when to stop

// var name = (prompt("Enther the name (kk for close)"));
// while(name !== 'kk'){
//  name = prompt("Enter the name (kk to close) ");
// }

//Sum of numbers using while
//sol

// n=1234
// 1234%10 -> 4 
// To get the number smaller divide by 10  1234/10 -> 123%10 ->3
// 123/10 -> 12%10 ->2
// 12/10 -> 1%10 -> 1
// 1/10 -> 0  continue till we get 0

// n=12345
// 12345%10 -> 5
// 12345/10 -> 1234%10 -> 4
// 1234/10 -> 123%->3
// 123/10 -> 12% ->2
// 12/10 -> 1%10 ->1
// 1/10 ->0

//using while loop
// let n = (Number(prompt("Enter the sum of numbers to be sum")));
// if(isNaN(n)){
//   console.log("Invalid Input");
  
// }else if(n>0){
//   let sum = 0;
//   while(n>0){
//     let rem = n%10;
//     sum += rem; 
//     n = Math.floor(n/10)
//   }
//   console.log(sum);
  
// }else{
//   console.log("Enter the positive number");
  
//}

//Reverse the number rev equ -> rev = rev*10 + rem
// n=123
// 123%10 
// 3*10 = 32*10= 320 +1
// let n = 1234
// if(isNaN(n)){
//   console.log("Invalid input");
  
// }else if(n>0){
//   let rev =0 ;
//   while(n>0){
//     let rem = n%10;
//     rev = rev*10 + rem;
//     n = Math.floor(n/10);
//   }
//   console.log(rev);
  
// }else{
//   console.log("Enter the positive number");
  
// }

//Random number generator
// let random = (Math.floor(Math.random()*100)+1);
// var guess =-1;
// while(guess !== random){
//   guess = (Number(prompt("Guess the number")));
//     if(guess<0||guess>100||isNaN(guess)){
//       console.log("Tey again btwn 1-100");
//       continue;
//     } if(guess>random){
//           console.log("To High ");
          
//     }else if(guess<random){
//       console.log('To low');
      
//     }else{
//       console.log('COngratz');
      
//     }
// }