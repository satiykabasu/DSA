// problem : which will be largest row sum and in which index it exist

function largestRowSumInIndex(arr,row,col){
let rowIndex=-1;
let largestSum=Number.MIN_VALUE;
for(let i=0;i<row;i++){
    let sum=0;
    for(let j=0;j<col;j++){
     sum += arr[i][j]
    
    }
    if(sum > largestSum){
        largestSum = sum;
        rowIndex=i;
    }
    console.log(largestSum)
    return rowIndex
}
}
console.log(largestRowSumInIndex([[3,4,11],[2,12,1],[7,8,7]],3,3))