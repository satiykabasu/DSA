/*
given an array A of N integers , Array is 1 indexed. for each i (1<=i<=N) your task is to find the value of x+y

where x is the largest number less then i such that A[x]>A[i] and ( A[x ] is the element present at position x)

y is the smallest number greter then i such that A[y]>A[i]

if there is no x<i such that A[x] >A[i] , then take x=-1 , similierly , if there is no y>i such that A[y] >A[i] , then take y=-1 ,

 
input 
first line consists of a single integers denoting N. second line consists of N space seperated integers denoting the array A. 
array is 1 indexed means that indexed start from 1

output
return an array of integers , denoting x+y for each elements i (1<=i<=N)

example 
input
5
5 4 1 3 2

output 
-2 0 6 1 3

explanation:
for element 5:- x=-1(no element exist greter then 5 in left), y=-1(no element exist greter then 5 in right)
for element 4:- x=1, y=-1
for element 1:- x=2, y=4
for element 3:- x=2, y=-1
for element 2:- x=4, y=-1

in function you have to pass only array as a parameter and also have to return that array which you have pass as parameter
*/