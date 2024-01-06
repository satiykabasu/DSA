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

