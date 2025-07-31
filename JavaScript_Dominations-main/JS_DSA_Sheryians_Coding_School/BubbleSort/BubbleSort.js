// let arr = [10,5,1,12,3];
// let n = arr.length;
// for(let i=0;i<n-1;i++){
//   for(let j=0;j<n-1-i;j++){ //i=0 j=0,1,2,3  j-n-1-i
//     if(arr[j]>arr[j+1]){
//       let temp = arr[j];
//       arr[j] = arr[j+1];
//       arr[j+1] = temp;
//     }
    
//   }
  
// }
// console.log(arr);
// i=0;
//j=0,1,2,3 (j<n-1-i)(0<4-1)=3
//i=1;
//j=0,1,2 (j<n-1-i)(1<3-1)=2
//i=2;
//j=0,1 (j<n-1-i)(2<2-1)=1
//i=3
//j=0 (j<n-1-1)(3<1-1)=0
//i=4
//j=0 (j<n-1-2)(4<0-1)=0
//So the outer loop will run n-1 times and inner loop will run n-1-i times
//So the time complexity is O(n^2) and space complexity is O(1) as we are not using any extra space.

//SELECTION SORT 
let arr = [10,5,1,12,3];
let n = arr.length;
for(let i=0;i<n-1;i++){
  let minIndex = i;
  for(let j=i+1;j<n;j++){
    if(arr[minIndex]>arr[j]) minIndex=j;
  }
  if(minIndex !== i){
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
console.log(arr);;
// The selection sort algorithm works by repeatedly finding the minimum element from the unsorted part of the array and swapping it with the first unsorted element.
// The outer loop iterates through each element of the array, treating it as the current position to fill with the minimum value.
// The inner loop finds the minimum value in the unsorted portion of the array.
// If the minimum value found is not already in the current position, it swaps the two values.
// The time complexity of selection sort is O(n^2) in the worst case, as it requires two nested loops to iterate through the array.
// The space complexity is O(1) since it sorts the array in place without using any additional data structures.
