let prompt = require('prompt-sync')();
let n = (Number(prompt("Enter the number")));
// for(let  i =1 ; i<=n ; i++){
//   for(let j=1;j<=n;j++){

//     process.stdout.write('*  ');
//   }
//   console.log();
  
//}

// *
// **
// ***
// ****
// *****

// for(let i =1;i<=n;i++){
//   for(let j=1;j<=i;j++){
//     process.stdout.write('* ');
//   }
//   console.log();
  
// }

// for(let i=1;i<=n;i++){
//   for(let j=1;j<=i;j++){
//     process.stdout.write( j + ' ')
//   }
//   console.log();
  
// }

// for(let i=1;i<=n;i++){
//   let ascii = 65;
//   for(let j=1;j<=i;j++)
  
//     {
//     process.stdout.write(String.fromCharCode(ascii + ' '));
//     (ascii)++
//   }
//   console.log();
  
// }

// *****
// ****
// ***
// **
// *
for(let i=1;i<=n;i++){
  for(let j=1;j<=n-i+1;j++){
    process.stdout.write(  '* ');
  }
  console.log();
  
}