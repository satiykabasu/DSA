/*  
 1.

serch target 23 in completely sorted matrix like below matrix

[
    3 4 7 9
    12 13 14 18
    20 21 23 29
]

length of matix is n*m => n is row=3 and m is col=4 total length is 12 





solution : 1 : brute force approach: => time = O(n*m) & space = O(1)

traverse through each element of array and try to find out element === target or not 


*/
function serchElement(arr,n,m,target){
    for(let i=0;i<n; i++){
        for(let j=0;j<m;j++){
            if(arr[i][j]===target){
                return true
            }
        }
    }
    return false;
}

console.log(serchElement([3,4,7,9,12,13,14,18,20,21,23,29],3,4,23))


/*
Better approach: now this is sorted matrix, so that's why instand of looking each element , we want to try to find out that each element is present 
between each row's or not if yes then we can do binary serch on that specific row and also this is sorted 1d array

Time => O(n + log2m) -> n for traverse row wise matrix and one logm for binary serch and another one is half of col matrix

*/

function binarySearch(matrix,target){

}

function serchElement(matrix,n,m,target){
    for(let i=0;i<n;i++){
        if(matrix[i][0] <= target && target <= matrix[i][m-1]){
            return binarySerch(matrix[i],target)
        }
    }
    return false;
}

console.log(serchElement([3,4,7,9,12,13,14,18,20,21,23,29],3,4,23))




// if somewhere given that output will least/minium of maxium => then see the capacity program of binary serch