/*
You have given the array of integers which represent the strength .

You have to find whether any other element of array which has double strength than any element in array .

if yes return true else return false



Example 1:

Input: arr = [10,2,5,3]

Output: true

Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]



Example 2:

Input: arr = [3,1,7,11]

Output: false

Explanation: There is no i and j that satisfy the conditions.

 

Constraints:

2 <= arr.length <= 500 
-10^3 <= arr[i] <= 10^3
*/

//from the constraints we can see that we can apply 0(n^3) solution approach

function isDoubleStrengthElement(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k=j+1;j<arr.length;k++){
                if(arr[i]==arr[j]*arr[k]){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    }

}

console.log(isDoubleStrengthElement([10,2,5,3]))


