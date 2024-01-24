/*
here you have to find the longest substring where have k unique charcheter
whatever substring you have , there you have to find k unique char and you have to return the longest 
substring

*/
/*
general format of variable size sliding window will be ,
while(j<size){
    have to calculation
    if(condition<k){
        j++;
    }
    else if(condtion === k){
        get ans from condiion
        j++
    }
    else if(condition>k){
        while(condition>k){
          reverse the calculation for i where we have to exclude arr[i]
          i++;
        }
    }
}

in this type of question , we have to firstly clearly understand the condition and then have to 
represent 

here is the condition,


*/
function longestSubstringWithUnique(str, k) {
    let i = 0;
    let j = 0;
    let ans = -1;//store the maxium length of substring which contain k unique char
    let countMap = new Map()// store the total occurence of each char
    let condition = countMap.size // as total size of the map = total unique char of str

    while (j < str.length) {
        //have to do calculation
        if (countMap.has(str[j])) {
            countMap.set(str[j], (countMap.get(str[j]) + 1))
        }
        else {
            countMap.set(str[j], 1)
        }
        if (condition < k) {
            j++;
        }
        if (condition == k) {
            //we have get ans from the calculation
            ans = Math.max(ans, j - i + 1)
            j++
        }
        if (condition > k) {
            while (condition > k) {
                if (countMap.has(str[i])) {
                    countMap.set(str[i], (countMap.get(str[i]) - 1))
                }
                if(countMap.get(str[i])==0){
                    countMap.delete(str[i])
                }
                i++
            }
            j++
        }
    }
    return ans;
}
console.log(longestSubstringWithUnique("aabacbebebe", 3))

//above one gives wrong output