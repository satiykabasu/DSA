/*
A Teacher wants to revamp the roll numbers of students of his class . The previous roll numbers has a problem that some duplicate roll numbers are present .

You have given an array of integers which represent roll numbers of students . You have to revamp such that no duplicate roll numbers should be there .

You can increase the roll number by one at a time . you have to find minimum operation for revamping the array.



HINT :- Sort the Array and find a pattern.



Example 1:

Input:

N = 3

arr[] = {1, 2, 2}

Output: 1

Explanation: If we increase arr[2] by 1 then the resulting array becomes {1, 2, 3} and has all unique values. Hence, the answer is 1 in this case.



Example 2:

Input: 

N = 4

arr[] = {1, 1, 2, 3}

Output: 3

Explanation:  If we increase arr[0] by 3, then all array elements will be unique. Hence, the answer is 3 in this case.







Constraints:

1 ≤ N ≤ 10^5

1 ≤ arr[i] ≤ 10^9

*/

//approach :

// as the constrain of array's maxValue is 10^5 so we have to try to solve within 0(n) or have to use map

function revamap(arr){
    let count=0;
    
    return count;
}
console.log(revamap([1,1,2,3]))


