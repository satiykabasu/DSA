/*
A Bad Number is defined by a number which is divisible by sum of its digit.

Example1 :- 12 -> Sum of digit (1+2) = 3. 12 is divisible by 3 therefore its a bad number

Example2 :- 45 -> Sum of digit (4+5) = 9. 45 is divisible by 9 therefore its a bad number

11 is not a Bad (1+1 ) =2 Since 11 is not divisible by 2.



Question :-



Write a program to store first n Bad Numbers in an array . After storing return the array.﻿



Note :- 0-9 are not Bad Numbers so you can start counting from 10.



Input:-

n=5

Output:- Return the output in the form of an array.

10

12

18

20

21


*/

function storeBadNumber(n){
    let numberArray=[];
    for(let i=10;i<=10+n;i++){
     numberArray.push(i)
    }
    let badArray=numberArray.find((no)=>{
        let digit=no%10;
        digit
    })
    return numberArray
}
console.log(storeBadNumber(5))