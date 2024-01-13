/*
you are given an array of arrays where marks[i][j] is the amount of marks the i​​​​​​​​​​​'th​​ student has got in the j'​​​​​​​​​​​th​​​​ exam. Return the marks that the topper student has.





A student's total marks is the amount of marks they have in all their exams. The topper student is the student that has the maximum marks.



Example 1:



Input: marks = [[1,2,3],[3,2,1]]

Output: 6

Explanation:

1st student has marks = 1 + 2 + 3 = 6

2nd student has marks = 3 + 2 + 1 = 6

Both student are considered the topper with marks of 6 each, so return 6.



Input: marks= [[1,5],[7,3],[3,5]]

Output: 10

Explanation: 

1st student has marks= 6

2nd student has marks= 10 

3rd student has marks = 8

The 2nd student is the topper with marks of 10.
*/

function maxSum(arr){
let maxSum=0;

for(let i=0;i<arr.length;i++){
    let sum=0;
    for(let j=0;j<arr.length;j++){
        let value=arr[[i][j]];
        sum += value
    }
    if(sum>maxSum){
        maxSum=sum;
    }
}
return maxSum;
}

console.log(maxSum([[1,5],[7,3],[3,5]]))