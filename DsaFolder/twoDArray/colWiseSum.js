function colWiseSum(arr,row,col){

    for(let i=0;i<row;i++){
        let sum=0;
        for(let j=0;j<col;j++){
            sum += arr[j][i]
        }
        console.log(sum)
    }
    }
    colWiseSum([[3,4,11],[2,12,1],[7,8,7]],3,3);


    // above code will give output as 12 24 19



    //--------------------------------------------------------------------------------------------------------//


    function colWiseSuminDiffWay(arr,row,col){
        let sum=0;
          for(let i=0;i<row;i++){
             
              for(let j=0;j<col;j++){
                  sum += arr[j][i]
              }
             
          }
          return sum;
          }
          console.log(colWiseSuminDiffWay([[3,4,11],[2,12,1],[7,8,7]],3,3))
      
          // above this way we will get 55 as a output