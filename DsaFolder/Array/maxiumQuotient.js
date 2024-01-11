/*
given an array A of N integers . your teacher has asked you to find maxium quotient of the array. quotient of array is calculated in below way:
1. let sum of N element of array A is X
2.Let pre[] be another array size of N in which for every index i(1<=i<=N) pre[i] given as sum of a1+a2+...+an
3.quotient of array A will be equl to the sum of floor value of X/pre[i] over every value form 1 to n;

you can swap ansy two element of array A.find maxium quotient of array A;

INPUT:

first line of the input contains a single integer n. second line contains n space seperated integers ai;

output:
print the maxium possible quotient of array A;

example:
input 1:
3
1 1 3
output 1:
8

explanation:
array pre=[]=[1,2,5];
sum X of array A is 5;
quotient of array A is =5/1+5/2+5/5=8;

proved that there is no such greter quotient possible
*/

function maxiumQuotient(arr){
for(let i=0;i<arr.length-1;){}
}
console.log(maxiumQuotient([1,1,3]))