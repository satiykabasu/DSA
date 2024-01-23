
// Row wise sum print => top to bottom and bottom to top print
//like [[3,4,11],[2,12,1],[7,8,7]] => will be [[3,2,7],[4,12,8],[11,1,7]]

// here we have to traverse through the array and examine the col , if the col was odd then we have to print the row form bottom to top



function printLikeWave(arr,rows,cols){

let ansArray=[];

for(let col=0;col<cols;col++){
    if(col&1)// means the col is the odd 
    {
        // then print the row from bottom to top

        for(let row=rows-1;row >= 0;row--){
            ansArray.push(arr[row][col])
        }
    }
    else{
        for(let row=0;row<rows;row++){
            ansArray.push(arr[row][col])
        }
    }
   // return ansArray
   console.log(ansArray)
}




}

console.log(printLikeWave([[1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20]]))