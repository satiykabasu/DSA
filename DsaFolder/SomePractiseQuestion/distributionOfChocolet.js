/*

a store is giving out free chocolets
they have N chocolets available and their store has P people in it all with different names. whenever a person taken a chocolets , his names is noted on the list., then he or she is not allowed to take another chocolet,find the number oc possible different valid lists that can be formed.a list is valid if it contains N names, and follwes all the above rules.
as the number can be huge find the answer module 1000000007.
note: the name is always appends at the end of the list, and the list is initially empty.

input:
input contains three integers N,P,K 
output:
return a dingle integer which is the number of valid list possible module
  1000000007.

example:
input:
3 2 1
output:
2
explanation:
possible lists are (p1,p2,p3) and (p2,p1,p2)

input 2:
3 3 1
output:
6 
explanation:
possible lists is:
(p1,p2,p3) ,(p1,p3,p2),(p2,p1,p3), (p2,p3,p1),(p3,p1,p2), and (p3,p2,p1)

*/

/*
function isPossible(arr,mid,totalPeople){
    let numberOfPeople=1;
    let peopleSum=0;

    for(let i=0;i<arr.length;i++){
        if(peopleSum+arr[i]<=mid){
         peopleSum += arr[i]
        }
        else{
            numberOfPeople ++;
            if(numberOfPeople > totalPeople || arr[i] > mid){
                return false;
            }
            peopleSum=0;
            peopleSum += arr[i];
        }
        if(peopleSum > totalPeople){
            return false;
        }
    }
    return true;
}




function distributionOfChocolets(totalNumberOfChocolets,totalNumberOfPeople){
let arrayOfPeople=[];
let ans=-1;
for(let i=1;i<=totalNumberOfChocolets;i++){
    arrayOfPeople.push(i);
}
let start=0;
let sum=0;
for(let i=0;i<arrayOfPeople;i++){
    sum+=arrayOfPeople[i];
}
let end=sum;
let mid=start+parseInt((end-start)/2);
while(start<=end){
    if(isPossible(arrayOfPeople,mid,totalNumberOfPeople)){
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
console.log(distributionOfChocolets(3,2))
*/




