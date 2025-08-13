// let arr = new Array(5);

// arr[0]= Number(("Enter the number"));
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//   arr[i] = Number(prompt("Enter the values"));
// }
// console.log(arr);


//Array sum of numbers
//In arrays it will starts from 0 so while using for loop we need to use  as 0 for i
//you cant initilize a value inside the for loop coz u need to store a value u need to initilize the value outside the forloop
//or else it will be empty when array itterates it will fill the values when it exits it will erase the value 
//so its mandatory to initilize new variable outside the for loop to stores the values


// let arr = [10,20,30,40,50];
// let sum=0;
// for(let i=0;i<arr.length;i++ ){
//   sum += arr[i];
// }
// console.log(sum);


//Max
// let us consider 0th elem is biggest
// let arr = [10,5,63,98,45,25,98,74,5,23,26,5,6,106];
// let max= arr[0];
// for(let i=1;i<arr.length;i++){
//   if(arr[i]>max){
//     max = arr[i]
//   }
// }
// console.log(max);


//reverse an array 

// let arr = [10,20,30,40,50,60];
// let i= 0; 
// let j =arr.length-1;
// while(i<j){
//   let temp = arr[i]
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

//zeros and ones 
// let arr = [1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0, 0,1,0,1,0,1,1,1,0,1,0,1,0,1];
// let i=0;
// let j=0;
// while(i<=arr.length){
//   if(arr[i]==0){
//     let temp = arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     j++;
//   }
//   i++;

// }
// console.log(arr);

//move negative on left and pos on right
// let arr= [-1,1,3,4,5,6,-7,9,-5,1,12,52,-6,-9,-4,52];
// let i =0;
// let j=0;
// while(i<arr.length){
//   if(arr[i]<0){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;

//   }
//   i++;
// }
// console.log(arr);




