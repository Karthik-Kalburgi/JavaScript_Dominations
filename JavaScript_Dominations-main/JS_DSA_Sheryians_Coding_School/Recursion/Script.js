// greet();
// function greet(){
//   console.log('Hello, welcome to the JavaScript DSA Sheryians Coding School!');
//   work();
  
// }
// function work(){
//   console.log('Let\'s start working on some recursion problems!');
//   kuchKaro();
  

// }
// function kuchKaro(){
//   console.log('Time to do some coding! Kuch toh ho raha hai !!!!!');
  
// }

// function temp(n){
//   if(n===0) return
//     console.log("Hello");
//     temp(n-1);

  
// }
// temp(5);

// function temp(n){
//   if(n===0) return;
//   console.log('Hellow world');
//   temp(n-1);
// }
// temp(6)

//This is n se 0 number tak print karne wala function 10-1
// function num(n){
//  if(n==0) return;
//  console.log('The number is ' , n);
//  num(n-1);
 
// }
// num(10);


//now this is 0 se n number tak print karne wala function 1-10 also known as backtracking
//callstack when you run an fuction it will be executing till 0 and rest will be hold it will execute in reverse order 12345

// function num(n){
//   if(n==0) return;
//   num(n-1);
//   console.log('The number is', n);
  
// }
// num(10);

// function sum(n){
//   if(n==1) return 1;
//   return n+(sum(n-1));
// }
// console.log(sum(5));

function fact(n){
  if(n==0 || n==1) return 1;
  return n* fact(n-1) 
}
console.log(fact(5));
