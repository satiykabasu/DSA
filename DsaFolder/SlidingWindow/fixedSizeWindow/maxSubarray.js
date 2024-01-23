/*
you have to get max element from k size window of subarray and have to return an array which contain 
max element of each subarray
*/

function maxSubarray(arr,size,k){
let i=0;
let j=0;
let ansArray=[];
let calculatedArray=[]
let max=Number.MIN_SAFE_INTEGER
while(j<size){
    //here , we are doing 
 max=Math.max(max,arr[j])
 if((j-i+1)<k){
    j++;
 }
 else if((j-i+1)==k){
   ansArray.push(Math.max(...calculatedArray));
   // here we need to pop the first element of aray, now in this sitution 
   calculatedArray.shift()
   i++;
   j++
 }
}



return ansArray;
}

console.log(maxSubarray([1,3,-1,-3,5,4,6,7],8,3))

//output will be like: [3,3,5,5,6,7]