
function isPossible(arr,n,k,mid){
    let heightCount=1;
    let positionOfHeight=arr[0];
    
    for(let i=0;i<n;i++){
        if(arr[i]-positionOfHeight >= mid){
            heightCount++;
            if(heightCount==k){
                return true;
            }
            positionOfHeight=arr[i];
        }
    }
    return false;
}

function getMinDiff(arr, n, k) {
    //your code here
    arr.sort((a,b)=>a-b);
    let start=0;
    let maxiumValue=-1;
    let ans=-1;
    for(let i=0;i<n;i++){
        maxiumValue=Math.max(maxiumValue,arr[i]);
    }
    let end=maxiumValue;
    let mid=start+parseInt((end-start)/2);
    while(start<=end){
        if(isPossible(arr,n,k,mid)){
            ans=mid;
            end=mid-1;
        }
        else{
            start=mid+1;
        }
        mid=start+parseInt((end-start)/2);
    }
    return ans;
}

console.log(getMinDiff([1,5,8,10],4,2))