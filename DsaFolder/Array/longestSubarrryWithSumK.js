//problem is that find the longest subarry whose sum will be equl to target

//below is the 0(n^3) time and without any extra space


function subarryBrute(arr,target){
    let length=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            sum=0;
            for(let k=i;k<=j;k++){
             sum=sum+arr[k];
            }
            if(sum===target){
                length=Math.max(length,(j-i+1))
            }
        }
    }
    return length;
}

console.log(subarryBrute([1,2,3,1,1,1,1,4,2,3],3))


//below is the 0(n^2) time and without any extra space

function subarryBetter(arr,target){
    let length=0;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=0;j<arr.length;j++){
            
            
             sum=sum+arr[j];
        }
        
            if(sum===target){
                length=Math.max(length,(j-i+1))
            }
        
    }
    return length;
}

console.log(subarryBetter([1,2,3,1,1,1,1,4,2,3],3))




// below is the using hashmap => here as we want to find the (sum - k ) as we can not find the middle sum of the arry but only can find the sum from the start

