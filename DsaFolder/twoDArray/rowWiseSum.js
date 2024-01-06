function rowWiseSum(arr,row,col){

for(let i=0;i<row;i++){
    let sum=0;
    for(let j=0;j<col;j++){
        sum += arr[i][j]
    }
    console.log(sum)
}
}
rowWiseSum([[3,4,11],[2,12,1],[7,8,7]],3,3);

// Above this way we will get 18,15,22 as a output



// --------------------------------------------------------------------------------------------------//



function rowWiseSuminDiffWay(arr,row,col){
  let sum=0;
    for(let i=0;i<row;i++){
       
        for(let j=0;j<col;j++){
            sum += arr[i][j]
        }
       
    }
    return sum;
    }
    console.log(rowWiseSuminDiffWay([[3,4,11],[2,12,1],[7,8,7]],3,3))

    // above this way we will get 55 as a output