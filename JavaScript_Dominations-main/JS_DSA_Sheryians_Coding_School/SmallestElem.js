let arr = [52,63,10020,78,4,2,2,3,4,5,1,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function findMin(arr){
  if(arr.length=== 0 ) return null;
  let min = arr[0];
  for(let i =1; i<arr.length;i++){
    if(arr[i]> min){
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin(arr));
