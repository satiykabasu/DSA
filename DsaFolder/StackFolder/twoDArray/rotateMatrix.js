function roateMatrix(matrix){
let ans=[50][50];
for(let i=0;i<matrix.length-1;i++){
    for(let j=0;j<matrix.length-1;j++){
        ans[j][matrix.length-1-i]=matrix[i][j]
    }
    return ans;
}

}
console.log(roateMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))
//ans will be => [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]]


