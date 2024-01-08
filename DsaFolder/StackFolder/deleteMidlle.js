/*
problem said that : you have to given a stack =[4,5,6,3,2] , you have to delete the middle element 
from the stack and return the stack without middle element;
*/

function deleteMiddle(arr,count){

  //  let count=0;
   //base case

   if(count == arr.length/2){
    arr.pop();
    return;
   }

   let num=arr[arr.length-1];
   arr.pop();

   deleteMiddle(arr,count+1);

   arr.push(num);


    
}
console.log(deleteMiddle([2,5,6,1,23]),0)