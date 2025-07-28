//Array que 1 left rotation

// let arr = [1,2,3,4,5];
// console.log(arr);


// let copy = arr[0];
// for(let i=0;i<arr.length-1;i++){
//   arr[i] = arr[i+1];
// }
// arr[arr.length-1] =copy;

// console.log(arr);

//Array que right roation
// let arr = [1,2,3,4,5];
// let copy = arr[arr.length-1];
// for(let i=arr.length-1;i>0;i--){
//     arr[i] = arr[i-1];
// }
// arr[0] = copy
// console.log(arr);


// let arr = [10,20,30,40,50];
// let copy = arr[arr.length-1];
// for(let i=arr.length-1;i>0;i--){
//   arr[i] = arr[i-1];
// }
// arr[0] = copy;  // the lost elem im keeping
// console.log(arr);

//Nested Loopiing
// for(let j=1;j<=4;j++){
//   console.log(j + "Execution");;
//       for(let i=0;i<3;i++){
//         console.log(("Hello"));
        
//       }
// }
//Left shift looping
// let arr = [10,20,30,40,50];
// let copy = arr[0];
// for(i=0;i<arr.length;i++){
//   arr[i] = arr[i+1];
// }

// arr[arr.length-1] = copy;
// console.log(arr);

// let arr= [10,20,30,40,50];
// console.log("Original Array: ", arr);
// let k=(Number(prompt("Enter the nth roations"))) 
// k = k%arr.length// To handle cases where k is greater than the length of the array

 
// for(j=0;j<k;j++){
// let copy = arr[0];
// for(let i=0;i<arr.length-1;i++){
//   arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy;
// }


// console.log(arr);


let arr = [0,0,1,1,1,2,3,4,4,4,5];
// let j =1;

// for(let i=0;i<arr.length-1;i++){
//   if(arr[i]!=arr[i+1]){
//     arr[j] = arr[i+1];
//     j++; 
  
//   }
  
// }
// arr.length=j; // This will not change the length of the array in JavaScript, but it will effectively ignore the rest of the elements.
// console.log(arr);



// function removeDub(arr){
//   j=1;
//   for(let i=0;i<arr.length-1;i++){
//     if(arr[i]!= arr[i+1]){
//       arr[j]= arr[i+1];
//       j++;
//     }
//   }
//   arr.length = j;

// }
// removeDub(arr);
// console.log(arr);

