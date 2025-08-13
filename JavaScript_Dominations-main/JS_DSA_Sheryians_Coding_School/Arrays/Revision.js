// let arr = new Array(5);
// for(let i=0;i<arr.length;i++){
//   arr[i] = Number(prompt("Enterg the number"));
// }
// console.log(arr);


// let arr = [10,20,30,40,50];
// let sum =0;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i];
// }

// console.log(sum);

//FINDING THE MAX ELEMENT OF THE ARRAY
// let arr = [10,56,9,6,1,5,15,0,9,8,6,6,1,62,36,909,6,6,9,7,4,1,51,58,4,2,61,89,9,];
// let max = arr[0];
// for(let i=1;i<arr.length;i++){
//   if(max<arr[i]){
//     max = arr[i];
//   }
// }

// console.log(max);

let arr = [10,3,4,12,95,85,36];
let maxOne = arr[0];
let maxTwo = arr[1];
for(let i=2;i<arr.length;i++){
  if(maxOne > maxTwo){
    return maxOne;
  }
}
