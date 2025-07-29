// let s = 'Sheryians';
// console.log(s[1]);
// console.log(s.length);


// let s = 'Sheryians';
// console.log(s.concat(" ", " Coding", " " , "School"));

// let s = 'Sheryians';
// for(let i=0;i<s.length;i++){
//   console.log(s[i]);
  
// }
// let s = 'Sheryians';
// for (let i=s.length-1;i>=0;i--){
//   console.log(s[i]);
//   console.log(s.charAt(i));
  
// }

//Reverse the strings
// let s = 'Karthik Kalburgi';
// function reverse(s){
//   let rev =' ';
//   for(let i=s.length-1;i>=0;i--){
//     rev += s[i];
//   }
// return rev;
// }
// console.log(reverse(s));

// Check if a string is a palindrome
// A palindrome is a string that reads the same backward as forward.

// let str = 'abba';
// function palindrome(str){
//   let rev = '';
//   for(let i=str.length-1;i>=0;i--){
//     rev += str[i];
//   }
//   return rev;
// }
// console.log(palindrome(str));

// let reversedpalindrome = palindrome(str);
// if(reversedpalindrome == str){
//   console.log('Its an Palindrome');
// }else{
//   console.log('Not a Palindrome');
// }

//Optimizing the palindrome check using two pointers

// let str = 'abba';
// let i=0;
// let j=str.length-1;

// for(let i=0;i<str.length;i++){
//   for(let j=0;j<i;j--){
//     while(i<j){
//       if(i===j){
//         console.log("Its an palindrome")
//       }else{
//         console.log("Not a palindrome")
//       }
//     }
    
//   }
// }