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


