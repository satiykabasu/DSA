/*
you have to return the threee different unique element from the array whose sum is equal to the specific number

*/
//brute force approach which takes 0(n^3)+log(no of triplet element) time complexcity which also might gives TLE error;
// ans space complexiticy is 0(n)

function threeSum(arr,target){
let setTheUniqueElement=new Set();
let ansArray=[];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        for(let k=j+1;j<arr.length;j++){
            if(arr[i]+arr[j]+arr[k]===target){
                let temp=[arr[i],arr[j],arr[k]];
                temp.sort((a,b)=>a-b);
                setTheUniqueElement.add(temp)
            }
        }
    }
}
ansArray.push(...setTheUniqueElement);
return ansArray
}
console.log(threeSum([-1,0,1,2,-1,-4],3))