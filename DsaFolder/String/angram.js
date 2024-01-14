/*
if the charcter of two string and also the length of two string is same then the string but order of 
charter of two string can be different
*/

function isAnagram(str1,str2){
    let map=new Map()
    if(str1.length !== str2.length){
        return false;
    }
    else{
     for(let i=0;i<str1.length;i++){
         if(map.has(str1[i])){
            map.set(str1[i],map.get(str1)+1)
         }
         else{
            map.set(str1[i],0)
         }
     }
     for(let )
    }
}