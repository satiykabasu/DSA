/*
you have to find next smaller element for each element of the stack
 
given array is that => [2,1,4,3] and output array will be => [1,-1,3,-1]

*/

//brute force approach which will take 0(n^2) time complexcity


function nextSmallerElementBrute(arr){
    let ansArray=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                ansArray.push(arr[j])
            }
            else{
                ansArray.push(-1)
            }
        }
    }
    return ansArray;
}

console.log("hi" + nextSmallerElementBrute([2,1,4,3]))

function nextSmallerElementOptimal(arr){
    let stack=[];
    stack.push(-1);
    let ansArray=[];
    for(let i=arr.length-1;i>=0;i--){
       while(stack[stack.length-1] >= arr[i]){
        stack.pop()
       }
       ansArray[i]=stack[stack.length-1];
       stack.push(arr[i])
    }
    return ansArray;
}
console.log("hello" + nextSmallerElementOptimal([2,1,4,3]))

// in above function , for stack we will push the actuall value of array