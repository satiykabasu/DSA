/*you have to find max sum of of all subarray and the size of the subarray will be equl to k
 you have to return a single value which will be the maxium sum of all subarray
*/


function maxSumOfAllSubarray(arr,n,k){
let i=0;
let j=0;
let max=Number.MIN_SAFE_INTEGER;
let sum=0
while(j<n){
  sum+=arr[j];
  if((j-i+1)<k){
    j++;
  }  
  else if((j-i+1)==k){
    // now we will perform our operation, whatever calculation we are done with till now we have to return the answer

    max=Math.max(max,sum);

    //now as we has been get our window size so have to maintain it that's why have to exclude the arr[i]

    sum -= arr[i];

    // have to maintain the window size

    i++;
    j++;
  }
}
return max;
}

console.log(maxSumOfAllSubarray([2,5,1,8,2,9,1],7,3))