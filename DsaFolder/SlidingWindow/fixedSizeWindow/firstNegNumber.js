/*
you have to find the first negative number in each window size 

return the array whose size will be equal to the (n-k+1)

*/

function firstNegNumberInK(arr,size,k){
let i=0;
let j=0;
let calculateArray=[];
let ansArray=[];
while(j<size){
    //whether we move the arr[j] , we will check at that time arr[j]<0 or not if yes then store in into arr
  if(arr[j]<0){
    calculateArray.push(arr[j])
  }
  if((j-i+1)<k){
    j++;
  }
  else if((j-i+1)==k){
    /*now, here we have the value within the calculateArray and we have to get the first negative value from that
   array, so the first element of the calculated array will be our answer for the given window size ; again if there is no such
   neg value exist then have to return 0
    */

   if(calculateArray.length==0){
  ansArray.push(0)
   }
   else{
 let num=calculateArray[0];
 ansArray.push(num);

 // now we have to exclude the front element from the calculatedArray
   
 /*
 now when we are loop through the array and if arr[i]!= calculatedArray[i] then increase the counter of arr[i]
 else elemenate the front element of the calculatedArray

 */
if(arr[i]==calculateArray[0]){
    calculateArray.shift()
}
   
   }
   i++;
   j++
  }

}
return ansArray;
}
console.log(firstNegNumberInK([12,-1,-7,8,-15,30],8,3))

//output will be the => [-1,-1,-7,-15,0]