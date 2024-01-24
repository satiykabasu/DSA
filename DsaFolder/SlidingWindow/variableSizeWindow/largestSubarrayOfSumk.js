/*
you have to find those subarray whose sum of element will be equl to the given sum and which will be 
largest size of subarray

there might be more then one subarray whose sum == target but we have to return those subarray whose 
length will be maxium

*/

/*
approach:
1. start iand j=0;
2. while move j then when we will get target that will be our window size
3. previously we will get our answer when we hits our window size and here when we will get our target 
value then start to find our ans
4. previously , when hit our window size then for the maintain we have to increase the value of i and j
and when we move we will easily get our answer but here we also move i but we can not maintain our 
window size because here do not dependens upon window size , depends upon target => window can be anysize
 || it can be firstly incrase again decrase and incrase and whatever it can be, dependes upon condition

*/
function largestSubarrayOfSumK(arr,size,target){
let i=0;
let j=0;
let sum=0;
let maxValue=0
while(j<size){
    sum += arr[j];

    if(sum < target){
        j++
    }
    else if(sum==target){
      maxValue=Math.max(maxValue,(j-i+1));
      j++;//each we have incrase j for get another windowSize with the help of condition
    }
    else if(sum>target){
        /* when the sum > target then have to get our desire sum to exclude the left value of array 
        from the sum*/

        while(sum>target){
            sum -= arr[j];
            i++;
        }
        //after that if we again get sum = target then have to do below thing,
        if(sum==target){
            maxValue=Math.max(maxValue,(j-i+1))
        }
        j++;
    }
}
return maxValue;
}
console.log(largestSubarrayOfSumK([4,1,1,1,2,3,5]),7,5)
//above approach will not applicable for negative number