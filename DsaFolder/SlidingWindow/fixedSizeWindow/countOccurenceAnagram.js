/*
in input there will be two string :
str1:foaxxorfxaofr => which will be compartablity large in size
str2:fox => which will be compartablity small in size

we have to find occurrence of str2's anagram from str1 => whatever pattern you will find return as count
and also increase count value when you will find the same pattern in str1 contiguous way



let below example:
str1="aabaabaa"
str2="aaba"

anagram of str2 will be the permutation of the str2 , in each permutaion of str2 have to equal no of leter and 
also equl length;

so you have to find the 3 times a and 1 times b which will be in contiguous manner from the str1


now how did you know here sliding window's consept will be applicable  or not
1. it is question of array or string
2. here we have to find pattern of str2 in str1 which will be contiguous manner => so part of substring
3. here , whatever length of the str2 we have to find that particular length size of string from str1=> 
so that particular length will be window size 

now we have to find the occurrence of each leter in str1 for each window size which will be equl to the str2.length
and have to match total occurence of letter from str1 => if occurence match then increase the count


*/


/*
Approch:
1. store the occurrence of each letter of str2 into map
2. while traverse str1 (j) , if arr[j] exist in map then decrease the value of that char in map
2. now, within the window size , if within map , the occurence of letter will become 0 then we have to match pattern
3. when window size gets hits, we have to visit the map => want to remove that thing we will do the below step,
that's why , accoring to map we will store the total number of distinct char into count variable now , when the
value of one char in map become 0 then decrease the value of count => size of count will be equl to the 
size of map
4. when we gets our window size then we will check the value of count, if is 0 then pattern match
5. when we do i++ then , if str1[j] present in map then have to increase the value and also increase the count value

*/


function countOccurrence(str1,str2){
let countChar=new Map();
for(let i=0;i<str2.length;i++){
    if(countChar.has(str2[i])){
        countChar.set(str2[i],(countChar.get(str2[i])+1))
    }
    else{
        countChar.set(str2[i],1)
    }
}
let count=countChar.size;
let i=0;
let j=0;
let k=str2.length;
let countOccurenceOfChar=0;
while(j<str1.length){
    if(countChar.has(str1[j])){
        countChar.set(str1[j],(countChar.get(str1[j])-1))  
    }
    if((countChar.get(str1[j]))==0){
        count = count -1 ;
    }

    if((j-i+1)<k){
        j++;
    }
    else if((j-i+1)==k){
    if(count ==0){
        countOccurenceOfChar++;
    }
    //below step for exclude the str1[i]

    if(countChar.has(str1[i])){
        countChar.set(str1[i],(countChar.get(str1[i])+1))
    }
    if((countChar.get(str1[i]))==1){
        count = count + 1 ;
    }
    i++;
    j++;
    

    }
    return countOccurenceOfChar

}
return countChar
}

console.log(countOccurrence("aabaabaa","aaba"))