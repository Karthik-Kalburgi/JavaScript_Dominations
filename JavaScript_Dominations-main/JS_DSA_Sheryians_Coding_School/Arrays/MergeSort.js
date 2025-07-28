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


let merge = new Array (arr1.length + arr2.length);
let i=0;j=0;k=0;
while(i<arr1.length && j<arr2.length){
  if(arr1[i] <arr2[j]){
    merge[k++] = arr1[i++];
  }else{
    merge[k++] = arr2[j++];
  }
}

while(i<arr1.length){
  merge[k++] = arr1[i++];
}
while(j<arr2.length){
  merge[k++] = arr2[j++];
}

console.log(merge);
