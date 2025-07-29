//Merge SOrt 
//THey give two different sorted arrays  arrays we need to combine and sort them.



let arr1 = [2,5,6,8,10,12,14,16,18,20];
let arr2 = [1,3,4,8];
// let merge = new Array(arr1.length + arr2.length);
// console.log(merge)
// let i=0;j=0;k=0;
// while(i<arr1.length && j<arr2.length){
//   if(arr1[i] < arr2[j]){
//     merge[k++] = arr1[i++]
//   }else{
//     merge[k++] = arr2[j++]
//   }
// }
// while(i<arr1.length){
//   merge[k++] = arr1[i++];
// }
// while(j<arr2.length){
//   merge[k++] = arr2[j++];
// }

// console.log(merge)


// let merge = new Array (arr1.length + arr2.length);
// let i=0;j=0;k=0;
// while(i<arr1.length && j<arr2.length){
//   if(arr1[i] <arr2[j]){
//     merge[k++] = arr1[i++];
//   }else{
//     merge[k++] = arr2[j++];
//   }
// }

// while(i<arr1.length){
//   merge[k++] = arr1[i++];
// }
// while(j<arr2.length){
//   merge[k++] = arr2[j++];
// }

// console.log(merge);


//Sort the color

// let arr = [0,1,1,2,1,2,0,0,0,2,1,0,1,2,2,1,1,1,1,0,0,0];
// let i=0;j=0;k=arr.length-1;
// while(j<=k){
//   if(arr[i]===0 ){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j++;
//   }else if(arr[k]===2){
//     let temp = arr[k];
//     arr[k] =arr[j];
//     arr[j] = temp;
//     k--;
//   }else if(arr[j]===1){
//     j++;
//   }
// }
// console.log(arr);


// var sortColors = function(nums) {
//     let i = 0;
//     let j = 0;
//     let k = nums.length - 1;

//     while(i <= k)
//     {
//         if(nums[i] == 2)
//         {
//             let temp = nums[i];
//             nums[i] = nums[k];
//             nums[k] = temp;
//             k--;
//         }
//         else if(nums[i] == 1)
//         {
//             i++;
//         }
//         else if(nums[i] == 0 )
//         {
//             let temp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = temp;
//             i++;
//             j++
//         }
//     }
//     return nums;
// };

// let arr = [0,1,1,2,1,2,0,0,0,2,1,0,1,2,2,1,1,1,1,0,0,0];
// function sort(arr){
//   let low=0;mid=0;high=arr.length-1;
//   while(mid<=high){
//     if(arr[mid] === 0){
//       [arr[low],arr[mid]] = [arr[mid],arr[low]];

//       low++;
//       mid++;
//     }else if(arr[mid] === 1){
//       mid++;
//     }else if(arr[mid] === 2){
//       [arr[high],arr[mid]] = [arr[mid],arr[high]];
//       high--;
//     }
//   }
//   return arr;
// }
// console.log(sort(arr));
// console.log(sortCalars(arr));


//Voting Element Moore's Algorithm 
//let us consider 1st elem as ans
//1st check if count ====0 new elem as ans
//count === ans count++
//count != ans count --
// let arr = [2,2,2,1,1,2,1,1,1];
// function countValues(arr){
//   let ans = arr[0];
//   let count = 1;
//   for(let i=1;i<arr.length;i++){
//     if(count === 0){
//       ans = arr[i];
//     }else if(count === ans){
//       ans = arr[i];
//       count++;
//     }else if(count != ans){
//       ans = arr[i]
//       count--;
//     }
//   }
//   return ans;
// }
// console.log(countValues(arr));
