/*

time limit : 2s, memory limit: 128000

problem statesment:
jerry is having yet another existential crisis. in order to keep him occupied rick gives him a task  

F(N,K) = the person (1 imdexed) of k when numbers from 1 to N ate laxicographically sorted order will be :
1,10,11,2,3,4,5,6,7,8,9 . so F(11,2)=4 , as 2 is in the 4 th position.

given , Kand M , find the smallest N such that F(N,K) =M

input:
input contains two integersK and M.


output:
return smallest N such that F(N,K) =M and uf no such N exists return 0

example:
input:
2 4
output:
11
explanation:
when number from 1 to 11 are sortec laxicographically , the sequence becomes:
1,10,11,2,3,4,5,6,7,8,9
here 2 is the 4th position , hence N=11.

input:
2 1
output:
0
explanation:
for no N can  2 be at the 1st position where numbers from 1 to N are sorted laxicographically . hence the output is 0

*/

// here we can not apply binary serch first of all array is not sorted and also if we will apply binary serch after sorted then the index will be difference which did not match with desire output

function F(N,K){
  let s=[];
  for(let i=1;i<=N;i++){
    s.push(i.toString());

  }
  s.sort();

  let ansArray=[];
  for(let i=0;i<N;i++){
    ansArray.push(parseInt(s[i]))
  }
  for(let i=0;i<ansArray.length;i++){
    if(ansArray[i]===K){
   return i;
    }
  }
}
console.log(F(11,2))