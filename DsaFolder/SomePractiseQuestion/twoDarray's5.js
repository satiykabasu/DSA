/*
Given a (m x n) 2d array count the number of 5's in it.



Input: accounts = [[1,2,5],[3,5,5]]

Output: 3

Explanation:

Number of 5's in 1st row =1

Number of 5's in 2nd row =2

total =3 (Ans)



Input: accounts = [[1,2,5],[3,5,5,5],[5,1],[6,7,5,4] ]

Output: 6

Explanation:

Number of 5's in 1st row =1

Number of 5's in 2nd row =3

Number of 5's in 3rd row =1

Number of 5's in 4th row =1

total =6 (Ans)



Constraints:

m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100

*/

function twoDArray(arr){
    //arr.sort((a,b)=>a-b)
    let totalRow=arr.length;
    let totalCol=totalRow[i].length;
    // let start=0;
    // let end=(totalRow*totalCol)-1;
    // let col=mid%col;
    // let row=Math.floor(mid/totalCol);
    // let value=arr[row][col];

    // while(start<=end){
    //     if(value===)
    // }
   // console.log(arr);
   for(let i=0;i<totalRow;i++){
    for(let j=0;j<totalCol;j++){
        
        if(arr[i][j]===5){
            return [i,j]
        }
    }
   }
   return [-1,-1]

}
twoDArray([[1,2,5],[3,5,5,5],[5,1],[6,7,5,4] ])