
// Row wise sum print => top to bottom and bottom to top print
//like [[3,4,11],[2,12,1],[7,8,7]] => will be [[3,2,7],[4,12,8],[11,1,7]]

// here we have to traverse through the array and examine the col , if the col was odd then we have to print the row form bottom to top



function printLikeWave(arr, rows, cols) {

    let ansArray = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // for even index print like forward direction of column
            if (j % 2 == 0) {
                for (let i = 0; i < cols; j++) {
                    ansArray.push(arr[i][j])
                  
                }
            }
            else {
                //if the current col is odd index then print col in backward direction
                for (let i = cols - 1; i >= 0; i--) {
                    ansArray.push(arr[i][j])
            
                }
            }
        }
    }


    //return ansArray

}

console.log(printLikeWave([[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16],
[17, 18, 19, 20]]))


// Output will be :