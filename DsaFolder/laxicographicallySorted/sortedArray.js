/*
below, problem said that you have to sorted the array's element in laxicographically sorted
means to in dictionary order => so have to convert all array element into string that's why it will make easy

*/

function laxisortedArray(n){
let convertStringOfElement=[];
for(let i=0;i<n;i++){
    convertStringOfElement.push(i.toString());
}
convertStringOfElement.sort();//sort the string , which the array is contain
let convertedStingToArrayForAns=[];
for(let i=0;i<n;i++){
convertedStingToArrayForAns.push(parseInt(i))
}
return convertedStingToArrayForAns;
}

console.log(laxisortedArray(15))

//above code will give the below output:

//[
//     0,  1,  2, 3,  4,  5,
//     6,  7,  8, 9, 10, 11,
//    12, 13, 14
//  ]

// now if you want to exclude the first 0 of the array then you have to follow the below solution

function laxisortedArrayExclude0(n){
    let convertStringOfElement=[];
    for(let i=1;i<=n;i++){
        convertStringOfElement.push(i.toString());
    }
    convertStringOfElement.sort();//sort the string , which the array is contain
    let convertedStingToArrayForAns=[];
    for(let i=0;i<n;i++){
    convertedStingToArrayForAns.push(parseInt(convertStringOfElement[i]))
    }
    return convertedStingToArrayForAns;
    }
    
    console.log(laxisortedArrayExclude0(15));