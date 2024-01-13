/*
An Array of Elements sorted in descending Order is given and an integer Target.

If target exists, then return its index. Otherwise, return -1



Example 1:-

Input:-

Arr - [9,5,3, 2,1]

Target - 5



Output:-

1



Explanation:- 

Target 5 is present at index 1.



Example 2:-

Input:-

Arr- [10,8,6,4,2,1]

Target - 6



Output:-

2



Explanation:- 

Target 6 is present at index 2.



Example 3:-

Input:-

Arr- [10,8,6,4,2,1]

Target - 11



Output:-

-1



Explanation:- 

Target 11 is not present therefore we have to return -1.





Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in descending order.

*/

//approach : as array is sorted in decreasing order then we can apply binary serch


function findTargetElement(arr,target){
    let start=0;
    let end=arr.length-1;
    let mid=start+parseInt((end-start)/2);
    while(start<=end){
        if(arr[mid]==target){
            return mid;
        }
        else if(target>arr[mid]){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
        mid=start+parseInt((end-start)/2);
    }
    return -1;
}
console.log(findTargetElement([10,8,6,4,2,1],4))