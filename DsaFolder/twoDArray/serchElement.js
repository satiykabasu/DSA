// Brute force approach applicable for all type of array , whether it is sorted or not


function serchElementLiner(arr,target){
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i][j]===target){
            return [i,j]
        }
    }
}
return [-1,-1]
}
console.log(serchElementLiner([[1,2,3,4,5],[22,44,58,20,2],[3,2,7,89,2]],44))

// time complexiticy will be 0(row*col)

// better approach => sorted array from row to col

/*
Better approach: now this is sorted matrix, so that's why instand of looking each element , we want to try to find out that each element is present 
between each row's or not if yes then we can do binary serch on that specific row and also this is sorted 1d array

Time => O(n + logm) -> n for traverse row wise matrix and one logm for binary serch and another one is half of col matrix

*/

function binarySearchOnOneDArray(arr,target){
    console.log(arr)
    let start=0;
    let end=arr.length -1;
    let mid=start+parseInt((end-start)/2);

    while(start<=end){
        if(arr[mid]===target){
            return mid;
        }
        else if(target > arr[mid]){
            start = mid +1;
        }
        else{
            end= mid -1;
        }
        mid=start+parseInt((end-start)/2)
    }
    return false;
}
function serchElementSortedPurly(arr,rows,cols,target){
    for(let row=0;row<rows;row++){
        let value1= arr[row][0];
        let value2=arr[row][cols-1]
        if(value1 <= target && target >= value2){
            return binarySearchOnOneDArray(arr[row],target)
        }
    }
    return false;

}
console.log(serchElementSortedPurly([[3,4,7,9],[12,13,16,18],[20,21,23,29]] , 3 , 4, 23))


//optimize approach

/*
if we think that twoDmatrix into oneDarray then we can easily find it using binarySerch | but technically 
we did not convert like that as it will take 0(n) for flatten the array;

for convert into 2d array's index from 1d array's index we can apply below formula:

let , 5 is the index of 1d array and we have to convert into [1,1] for 2d array's index
 so row = index of one d array / total number of col  and col = index of one d array % total number of col

 the behind idea of above approach is that first col's index is the multiple of 4 which is the total cols number
  because each row has cols number = 4 , we use the below example

if we had take the oneDarray then the start=0;end=(n*m)-1
*/

function serchElementSortedPurlyOptimally(arr,target){
let totalRow=arr.length;
let totalCol=arr[0].length; 
let start = 0;
let end = (totalRow * totalCol) - 1;
let mid = start + parseInt((end-start)/2);

while(start<=end){
    let row=Math.floor(mid/totalCol);
    let col=mid %totalCol;
    let value=arr[row][col]

    if(value===target){
        return [row,col];
    }
    else if(target > value){
        start = mid + 1;
    }
    else{
        end= mid -1;
    }
    mid = start + parseInt((end-start)/2);
 
}
return [-1,-1];
}

console.log(serchElementSortedPurlyOptimally([[3,4,7,9],[12,13,16,18],[20,21,23,29]],23))

// above consept will be applicable for the question of flatten 2d array into 1d array

