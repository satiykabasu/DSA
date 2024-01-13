/*
You are given an array and a target. 
you have to make the whole array prime by adding numbers from [1 to k]. 
If a number can't become prime set it to -1.



Test Case 1:

Input:

5

10 12 15 20 22

3

Output:

11 13 17 23 23

Explanation:

The first element, 10, is not prime so we add 3 to it to get 13 which is a prime number. The second element, 12 we add 1, so it is marked as 13. The third element, 15, is not a prime number so we add 2 to it to get 17 which is a prime number and so on.



Test Case 2:

Input:

4

8 11 13 24

4

Output:

11 13 17 -1

Explanation:

The first 3 elements can be made  prime by adding number from 1 to 4.

the number 24 cannot be made prime by adding numbers from 0 to 4 as all number from 24 to 28 are non prime.



Test Case 3:

Input:

5

10 12 15 20 22

1

Output:

11 13 -1 -1 23

15 and 20 cannot be made prime by adding 1 to it.
*/
function checkPrime(n){
    let flag=true;

    for(let i=2;i<n;i++){
        if(n%i===0){
            flag=false;
            break;
        }
    }
    if(flag===true){
        return true;
    }
    else{
        return false;
    }
}

function makeArrayPrime(arr,k){
let ansArray=[];
for(let i=0;i<arr.length;i++){
    if(checkPrime(arr[i])){
        ansArray.push(arr[i]);
    }
    else{
        for(let j=1;j<=k;j++){
            let value=arr[i]+j
            if(checkPrime(value)){
                ansArray.push(value)
            }
            else{
                ansArray.push(-1)
            }
        }
    }
}
return ansArray;
}

console.log(makeArrayPrime([10,12,15,20,22],1))

// above logic is only applicable for check odd or even and push that element into array accordingly

