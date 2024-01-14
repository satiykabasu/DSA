/*

You're given strings jewels representing the types of stones that are jewels, and stones representing 
the stones you have. Each character in stones is a type of stone you have. 
You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"

Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"

Output: 0

 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.


Try to solve this Question in 0(n) time complexity. n is length of the maximum word Jewels and stone.



and paste your code after solving all the test cases.
*/

function stoneAndJewels(jewels,stones){
    let setOfJewels=new Set();
    let count=0
    for(let i=0;i<jewels.length;i++){
        setOfJewels.add(jewels[i]);
    }
    for(let i=0;i<stones.length;i++){
        if(setOfJewels.has(stones[i])){
           count++;
        }
    }
    return count;
}
console.log(stoneAndJewels("aA","aAAbbbb"))