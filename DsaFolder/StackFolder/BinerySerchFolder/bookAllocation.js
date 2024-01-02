function isPossible(arr,m,mid){
    let student=1;
    let pageSum=0;
    
    for(let i=0;i<arr.length;i++){
        if(pageSum+arr[i]<=mid){
            pageSum += arr[i]
        } 
        else{
            student ++
            if(student > m || arr[i]>mid){
                return false;
            }
            pageSum=0;
            pageSum += arr[i]
        }
        if(student > m){
            return false;
        }
    }
    return true;
}





function bookAllocation(arr,m){
let start=0;
let sum=0;
let ans=-1;
for(let i=0;i<=arr.length-1;i++){
    sum += arr[i]
}
let end=sum;
let mid=start+parseInt((end-start)/2)

while(start<=end){
    if(isPossible(arr,m,mid)){
      ans=mid;
      end=mid-1;
    }
    else{
        start=mid+1;
    }
    mid=start+parseInt((end-start)/2)
}
return ans;
}

console.log(bookAllocation([10,20,30,40],2))