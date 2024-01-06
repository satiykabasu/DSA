let twoDarray=[["akash",2,"asansol"],["avi",5,"bankura"]]
twoDarray.push(["satiyka",4,"kulti"]);
twoDarray.unshift(["sayan",1,"january"])
console.log(twoDarray.pop())
console.log(twoDarray.shift())
console.log(twoDarray)



let numeric2dArray=[[1,2,3],[4,2,54]]
for(let i=0;i<=numeric2dArray.length;i++){
    for(let j=0;j<=numeric2dArray.length;j++){
        console.log(numeric2dArray[i][j])
    }
}

numeric2dArray.forEach((num)=>{
    console.log(num)
})