/*
An integer Arrays nums is provided and a target is provided. Return True if any element has occurred more than Target times else return False.



Solve it in 0(n) Time Complexity 



Example 1:-

Input:-

Arr - [9,5,3, 2,1,5,1,4,3,5,4,6,5]

Target - 3



Output:-

True



Explanation:- 

5 has occurred 4 times (4>Target ) therefore output is true.



Example 2:-

Input:-

Arr - [9,5,3, 2,1,5,1,4,3,5,4,6,5]

Target - 5



Output:-

False



Explanation:- 

5 has occurred 4 times (4<Target) therefore output is False.



Example 3:-

Input:-

Arr- [10,8,10,4,10,1]

Target - 2

Output:-

True



Explanation:- 

10 has occurred 3 times (3>Target) therefore output is true.





Constraints:

1 <= nums.length <= 10^6
0 < nums[i], target < 10^6
*/

// from the constrian we have to solve above question in 0(n) time complexicity;


function howManyTimeElementOccure(arr,target){
    let countMap=new Map();
    let flag=true;
    for(let i=0;i<arr.length;i++){
        if(countMap.has(arr[i])){
            countMap.set(arr[i],(countMap.get(arr[i]))+1)
        }
        else{
            countMap.set(arr[i],1)
        }
    }
    for(let i=0;i<arr.length;i++){
        if((countMap.get(arr[i]))>target){
            return true;
        }
        else{
            return false;
        }
    }
  
    
 }
 console.log(howManyTimeElementOccure([10,8,10,4,10,1],2))