/*
algoritm is that :
1. look at the entire array then select the minium element of the array 
2. swap minium element with the first element of the unsorted array
3. in each step we will get the minium element at the left side of the array


Time complexity in each case will be 0(n^2)

*/

function selectionSort(arr){
 for(let i=0;i<=arr.length-2;i++)// as we did not swap with last element of the array
 {
    let mini=i;
    for(let j=i;j<=arr.length-1;j++){
    if(arr[j]<arr[mini]){
        mini=j;
    }
    }
    let temp=arr[mini];
    arr[mini]=arr[i];
    arr[i]=temp;
 }
 return arr;
}
function printArray(arr){
    for(let i=0;i<=arr.length-1;i++){
        console.log(arr[i])
    }
}

console.log(selectionSort([13,46,24,52,20,9]))
printArray()