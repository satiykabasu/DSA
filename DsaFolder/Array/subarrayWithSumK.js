//brute force solution which take 0(n^3) time complexicity


function subarryBrute(arr,target){
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            sum=0;
            for(let k=i;k<=j;k++){
             sum=sum+arr[k];
            }
            if(sum===target){
                count++
            }
        }
    }
    return count;
}

console.log(subarryBrute([1,1,1],2))


//for below approach, we will do within 0(n^2) T.C => as , for when j will move we will only add one element with j


function subarrySomeBetter(arr,target){
    let count=0;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=0;j<arr.length;j++){
           
         
             sum=sum+arr[j];
        }
            if(sum===target){
                count++
            }
        
    }
    return count;
}

console.log(subarrySomeBetter([1,1,1],2))



//now , below is the optimal approach => for details look to copy

// basically make a map where key as prefixSum and value as count => in prefix sum or (s-k) we will look from map 

// firstly store prefix sum=0 and count=1 , it is very importnant to store like that way;

// solution from the leet code 

//this is 0(n) for both time and space complexity



